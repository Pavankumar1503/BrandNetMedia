package com.brandnetmedia.controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.brandnetmedia.repository.*;
import com.brandnetmedia.model.*;
import java.util.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin
public class AdminController {
  @Autowired LeadRepository leadRepo;
  @Autowired ServiceRepository serviceRepo;
  @Autowired PriceRepository priceRepo;
  @Autowired PortfolioRepository portfolioRepo;

  // NOTE: This project uses a simplified admin auth. See SecurityConfig for credentials.
  @PostMapping("/login")
  public Map<String,String> login(@RequestBody Map<String,String> cred){
    String u = cred.get("username"), p = cred.get("password");
    // For demo: username=admin password=admin123
    if("admin".equals(u) && "admin123".equals(p)){
      return Collections.singletonMap("token","demo-admin-token-please-change");
    }
    return Collections.singletonMap("error","invalid");
  }

  // Leads CRUD
  @GetMapping("/leads") public List<Lead> leads(){ return leadRepo.findAll(); }
  @GetMapping("/leads/duplicates") public Map<String,Object> duplicates(){
    List<Lead> all = leadRepo.findAll();
    Map<String,List<Lead>> byEmail = new HashMap<>();
    Map<String,List<Lead>> byPhone = new HashMap<>();
    for(Lead l: all){
      byEmail.computeIfAbsent(l.getEmail(),k->new ArrayList<>()).add(l);
      byPhone.computeIfAbsent(l.getPhone(),k->new ArrayList<>()).add(l);
    }
    Map<String,Object> res = new HashMap<>();
    res.put("duplicateEmails", filterDuplicates(byEmail));
    res.put("duplicatePhones", filterDuplicates(byPhone));
    return res;
  }
  private List<List<Lead>> filterDuplicates(Map<String,List<Lead>> m){
    List<List<Lead>> out = new ArrayList<>();
    for(List<Lead> v: m.values()) if(v.size()>1) out.add(v);
    return out;
  }

  // Services CRUD
  @GetMapping("/services") public List<ServiceEntity> adminServices(){ return serviceRepo.findAll(); }
  @PostMapping("/services") public ServiceEntity addService(@RequestBody ServiceEntity s){ return serviceRepo.save(s); }
  @PutMapping("/services/{id}") public ResponseEntity<ServiceEntity> updateService(@PathVariable Long id, @RequestBody ServiceEntity s){
    return serviceRepo.findById(id).map(existing->{ existing.setTitle(s.getTitle()); existing.setDescription(s.getDescription()); serviceRepo.save(existing); return ResponseEntity.ok(existing); }).orElse(ResponseEntity.notFound().build());
  }
  @DeleteMapping("/services/{id}") public void deleteService(@PathVariable Long id){ serviceRepo.deleteById(id); }

  // Prices CRUD
  @GetMapping("/prices") public List<PriceItem> adminPrices(){ return priceRepo.findAll(); }
  @PostMapping("/prices") public PriceItem addPrice(@RequestBody PriceItem p){ return priceRepo.save(p); }
  @PutMapping("/prices/{id}") public ResponseEntity<PriceItem> updatePrice(@PathVariable Long id,@RequestBody PriceItem p){
    return priceRepo.findById(id).map(existing->{ existing.setName(p.getName()); existing.setAmount(p.getAmount()); existing.setNote(p.getNote()); priceRepo.save(existing); return ResponseEntity.ok(existing); }).orElse(ResponseEntity.notFound().build());
  }

  // Portfolio - simple CRUD (for uploads you'd typically handle multipart)
  @GetMapping("/portfolio") public List<PortfolioItem> adminPortfolio(){ return portfolioRepo.findAll(); }
  @PostMapping("/portfolio") public PortfolioItem addPortfolio(@RequestBody PortfolioItem p){ return portfolioRepo.save(p); }
  @DeleteMapping("/portfolio/{id}") public void deletePortfolio(@PathVariable Long id){ portfolioRepo.deleteById(id); }
}

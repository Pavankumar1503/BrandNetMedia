package com.brandnetmedia.controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.brandnetmedia.repository.*;
import com.brandnetmedia.model.*;
import java.util.List;

@RestController
@RequestMapping("/api/public")
@CrossOrigin
public class PublicController {
  @Autowired LeadRepository leadRepo;
  @Autowired ServiceRepository serviceRepo;
  @Autowired PriceRepository priceRepo;
  @Autowired PortfolioRepository portfolioRepo;

  @PostMapping("/leads")
  public Lead createLead(@RequestBody Lead lead){ return leadRepo.save(lead); }
  @GetMapping("/services") public List<ServiceEntity> services(){ return serviceRepo.findAll(); }
  @GetMapping("/prices") public List<PriceItem> prices(){ return priceRepo.findAll(); }
  @GetMapping("/portfolio") public List<PortfolioItem> portfolio(){ return portfolioRepo.findAll(); }
}

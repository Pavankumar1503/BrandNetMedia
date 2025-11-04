package com.brandnetmedia.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.brandnetmedia.model.Lead;
import java.util.List;

public interface LeadRepository extends JpaRepository<Lead, Long>{
  List<Lead> findByEmail(String email);
  List<Lead> findByPhone(String phone);
}

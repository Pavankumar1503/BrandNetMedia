package com.brandnetmedia.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.brandnetmedia.model.ServiceEntity;

public interface ServiceRepository extends JpaRepository<ServiceEntity, Long>{}

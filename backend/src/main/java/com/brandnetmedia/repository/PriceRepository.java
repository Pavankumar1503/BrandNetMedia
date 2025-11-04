package com.brandnetmedia.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.brandnetmedia.model.PriceItem;

public interface PriceRepository extends JpaRepository<PriceItem, Long>{}

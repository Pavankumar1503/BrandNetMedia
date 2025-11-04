package com.brandnetmedia.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.brandnetmedia.model.PortfolioItem;

public interface PortfolioRepository extends JpaRepository<PortfolioItem, Long>{}

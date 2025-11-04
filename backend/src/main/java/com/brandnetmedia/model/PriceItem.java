package com.brandnetmedia.model;
import jakarta.persistence.*;

@Entity
public class PriceItem {
  @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Long id;
  private String name;
  private Double amount;
  private String note;
  // getters/setters
  public Long getId(){return id;} public void setId(Long id){this.id=id;}
  public String getName(){return name;} public void setName(String n){this.name=n;}
  public Double getAmount(){return amount;} public void setAmount(Double a){this.amount=a;}
  public String getNote(){return note;} public void setNote(String n){this.note=n;}
}

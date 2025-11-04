package com.brandnetmedia.model;
import jakarta.persistence.*;

@Entity
public class ServiceEntity {
  @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Long id;
  private String title;
  @Column(length=2000)
  private String description;
  // getters/setters
  public Long getId(){return id;} public void setId(Long id){this.id=id;}
  public String getTitle(){return title;} public void setTitle(String t){this.title=t;}
  public String getDescription(){return description;} public void setDescription(String d){this.description=d;}
}

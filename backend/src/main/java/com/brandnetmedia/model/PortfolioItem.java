package com.brandnetmedia.model;
import jakarta.persistence.*;

@Entity
public class PortfolioItem {
  @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Long id;
  private String title;
  private String url;
  private String type; // IMAGE or VIDEO
  // getters/setters
  public Long getId(){return id;} public void setId(Long id){this.id=id;}
  public String getTitle(){return title;} public void setTitle(String t){this.title=t;}
  public String getUrl(){return url;} public void setUrl(String u){this.url=u;}
  public String getType(){return type;} public void setType(String t){this.type=t;}
}

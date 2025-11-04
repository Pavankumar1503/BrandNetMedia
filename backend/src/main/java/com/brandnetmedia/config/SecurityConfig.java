package com.brandnetmedia.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.core.userdetails.UserDetails;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.csrf().disable()
      .authorizeHttpRequests(auth -> auth
        .requestMatchers("/api/admin/login", "/api/public/**", "/api/admin/leads/duplicates").permitAll()
        .requestMatchers("/api/admin/**").authenticated()
        .anyRequest().permitAll()
      )
      .httpBasic(Customizer.withDefaults());
    return http.build();
  }

  @Bean
  public InMemoryUserDetailsManager users() {
    UserDetails admin = User.withDefaultPasswordEncoder()
      .username("admin")
      .password("admin123")
      .roles("ADMIN")
      .build();
    return new InMemoryUserDetailsManager(admin);
  }
}

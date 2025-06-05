package com.fferdous.influencer_spring.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fferdous.influencer_spring.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
}

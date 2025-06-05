package com.fferdous.influencer_spring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fferdous.influencer_spring.components.JwtUtil;
import com.fferdous.influencer_spring.dto.AuthResponse;
import com.fferdous.influencer_spring.dto.LoginRequest;
import com.fferdous.influencer_spring.dto.SignupRequest;
import com.fferdous.influencer_spring.entities.User;
import com.fferdous.influencer_spring.repositories.UserRepository;

@Service
public class AuthService {
    @Autowired private UserRepository userRepo;
    @Autowired private PasswordEncoder passwordEncoder;
    @Autowired private JwtUtil jwtUtil;

    public AuthResponse signup(SignupRequest req) {
        if (userRepo.existsByEmail(req.getEmail())) {
            throw new RuntimeException("Email already in use");
        }
        User user = new User();
        user.setName(req.getName());
        user.setEmail(req.getEmail());
        user.setPassword(passwordEncoder.encode(req.getPassword()));
        userRepo.save(user);
        String token = jwtUtil.generateToken(req.getEmail());
        return new AuthResponse(token, user.getName(), user.getEmail());
    }

    public AuthResponse login(LoginRequest req) {
        System.out.println("Login attempt: " + req.getEmail());

        User user = userRepo.findByEmail(req.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));

        System.out.println("User found: " + user.getEmail());
        System.out.println("Stored hash: " + user.getPassword());
        System.out.println("Password matches? " + passwordEncoder.matches(req.getPassword(), user.getPassword()));

        if (!passwordEncoder.matches(req.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }
        String token = jwtUtil.generateToken(req.getEmail());
        return new AuthResponse(token, user.getName(), user.getEmail());
    }
}

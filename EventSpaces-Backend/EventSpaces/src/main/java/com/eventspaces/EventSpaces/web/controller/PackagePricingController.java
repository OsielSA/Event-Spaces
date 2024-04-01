package com.eventspaces.EventSpaces.web.controller;

import com.eventspaces.EventSpaces.domain.service.PackagePricingService;
import com.eventspaces.EventSpaces.persistence.entity.PackagePricing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/package_pricing")
public class PackagePricingController {
    @Autowired
    private PackagePricingService packagePricingService;

    @GetMapping("/{id}")
    public ResponseEntity<List<PackagePricing>> getAllByIdHall(@PathVariable("id") int idHall){
        return new ResponseEntity<>(packagePricingService.getAllByIdHall(idHall), HttpStatus.OK);
    }
}

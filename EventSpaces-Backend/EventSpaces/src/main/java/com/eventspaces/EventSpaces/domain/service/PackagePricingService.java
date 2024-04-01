package com.eventspaces.EventSpaces.domain.service;

import com.eventspaces.EventSpaces.domain.repository.PackagePricingRepository;
import com.eventspaces.EventSpaces.persistence.entity.PackagePricing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PackagePricingService {
    @Autowired
    private PackagePricingRepository packagePricingRepository;

    public List<PackagePricing> getAllByIdHall(int idHall){
        return packagePricingRepository.getAllByIdHall(idHall);
    }
}

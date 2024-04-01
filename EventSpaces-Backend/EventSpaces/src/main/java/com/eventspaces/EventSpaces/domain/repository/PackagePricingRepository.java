package com.eventspaces.EventSpaces.domain.repository;

import com.eventspaces.EventSpaces.persistence.crud.PackagePricingCrudRepository;
import com.eventspaces.EventSpaces.persistence.entity.PackagePricing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PackagePricingRepository {
    @Autowired
    private PackagePricingCrudRepository packagePricingCrudRepository;

    public List<PackagePricing> getAllByIdHall(int idHall){
        int statusCancelled = 3;
        return packagePricingCrudRepository.findByIdHall(idHall);
    }

}

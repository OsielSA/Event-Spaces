package com.eventspaces.EventSpaces.persistence.crud;

import com.eventspaces.EventSpaces.persistence.entity.PackagePricing;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PackagePricingCrudRepository extends CrudRepository<PackagePricing, Integer> {
    List<PackagePricing> findByIdHall(int idHall);
}

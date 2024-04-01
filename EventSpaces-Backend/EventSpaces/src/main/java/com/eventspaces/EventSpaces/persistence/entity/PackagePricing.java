package com.eventspaces.EventSpaces.persistence.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Packages_Pricing")
public class PackagePricing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_package")
    private Integer idPackage;

    @Column(name = "id_hall")
    private Integer idHall;

    @Column(name = "package_name")
    private String packageName;

    @Column(name = "package_description")
    private String packageDescription;

    @Column(name = "price")
    private Float price;

    @Column(name = "max_capacity")
    private Integer maxCapacity;

    public Integer getIdPackage() {
        return idPackage;
    }

    public void setIdPackage(Integer idPackage) {
        this.idPackage = idPackage;
    }

    public Integer getIdHall() {
        return idHall;
    }

    public void setIdHall(Integer idHall) {
        this.idHall = idHall;
    }

    public String getPackageName() {
        return packageName;
    }

    public void setPackageName(String packageName) {
        this.packageName = packageName;
    }

    public String getPackageDescription() {
        return packageDescription;
    }

    public void setPackageDescription(String packageDescription) {
        this.packageDescription = packageDescription;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public Integer getMaxCapacity() {
        return maxCapacity;
    }

    public void setMaxCapacity(Integer maxCapacity) {
        this.maxCapacity = maxCapacity;
    }
}

package com.eventspaces.EventSpaces.persistence.crud;

import com.eventspaces.EventSpaces.persistence.entity.EventHall;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface EventHallCrudRepository extends CrudRepository<EventHall, Integer> {
    Optional<EventHall> findByIdHall(int idHall);

}

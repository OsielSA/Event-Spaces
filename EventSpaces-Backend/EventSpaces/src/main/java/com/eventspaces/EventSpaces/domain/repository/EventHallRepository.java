package com.eventspaces.EventSpaces.domain.repository;

import com.eventspaces.EventSpaces.persistence.crud.EventHallCrudRepository;
import com.eventspaces.EventSpaces.persistence.entity.EventHall;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class EventHallRepository {
    @Autowired
    private EventHallCrudRepository eventHallCrudRepository;

    public Optional<EventHall> getByHall(int idHall){
        return eventHallCrudRepository.findByIdHall(idHall);
    }
}

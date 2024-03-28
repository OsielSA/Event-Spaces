package com.eventspaces.EventSpaces.domain.service;

import com.eventspaces.EventSpaces.domain.repository.EventHallRepository;
import com.eventspaces.EventSpaces.persistence.entity.EventHall;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EventHallService {
    @Autowired
    private EventHallRepository eventHallRepository;

    public Optional<EventHall> getByIdHall(int idHall){
        return eventHallRepository.getByHall(idHall);
    }
}

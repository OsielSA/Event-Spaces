package com.eventspaces.EventSpaces.web.controller;

import com.eventspaces.EventSpaces.domain.service.EventHallService;
import com.eventspaces.EventSpaces.persistence.entity.EventHall;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/event_hall")
public class EventHallController {
    @Autowired
    private EventHallService eventHallService;

    @GetMapping("/{id}")
    public ResponseEntity<EventHall> getEventHall(@PathVariable("id") int idHall){
        return eventHallService.getByIdHall(idHall)
                .map(eventHall -> new ResponseEntity<>(eventHall, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}

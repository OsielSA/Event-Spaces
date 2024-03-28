package com.eventspaces.EventSpaces.web.controller;

import com.eventspaces.EventSpaces.domain.service.ReservationService;
import com.eventspaces.EventSpaces.persistence.entity.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservation")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;

    @GetMapping("/{id}")
    public ResponseEntity<List<Reservation>> getAllByIdHall(@PathVariable("id") int idHall){
        return new ResponseEntity<>(reservationService.getAllByIdHall(idHall), HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<Reservation> saveReservation(@RequestBody Reservation reservation) {
        Reservation savedReservation = reservationService.saveReservation(reservation);
        if (savedReservation != null) {
            return new ResponseEntity<>(savedReservation, HttpStatus.CREATED);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}

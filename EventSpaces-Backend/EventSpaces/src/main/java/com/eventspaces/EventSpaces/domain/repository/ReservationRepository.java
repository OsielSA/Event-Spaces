package com.eventspaces.EventSpaces.domain.repository;

import com.eventspaces.EventSpaces.persistence.crud.ReservationsCrudRepository;
import com.eventspaces.EventSpaces.persistence.entity.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public class ReservationRepository {
    @Autowired
    private ReservationsCrudRepository reservationsCrudRepository;

    public List<Reservation> getAllByIdHall(int idHall){
        int statusCancelled = 3;
        return reservationsCrudRepository.findByIdHallAndReservationStatusNot(idHall, statusCancelled);
    }

    public boolean isCodeReservationExists(int idHall, String codeReservation){
        Optional<Reservation> reservation = reservationsCrudRepository.findByCodeReservationAndIdHall(codeReservation, idHall);
        return reservation.isPresent();
    }

    public boolean isReservationDateExists(int idHall, LocalDate reservationDate){
        int statusCancelled = 3;
        Optional<Reservation> reservation = reservationsCrudRepository.findByIdHallAndReservationDateAndReservationStatusNot(idHall, reservationDate, statusCancelled);
        return reservation.isPresent();
    }

    public Reservation saveReservation(Reservation reservation){
        return reservationsCrudRepository.save(reservation);
    }


    public void updateReservationStatus(){
        reservationsCrudRepository.updateReservationStatus();
    }
}

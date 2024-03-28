package com.eventspaces.EventSpaces.persistence.crud;

import com.eventspaces.EventSpaces.persistence.entity.Reservation;
import org.springframework.data.repository.CrudRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface ReservationsCrudRepository extends CrudRepository<Reservation, Integer> {
    List<Reservation> findByIdHall(int idHall);

    List<Reservation> findByIdHallAndReservationStatusNot(int idHall, int reservationStatus);

    Optional<Reservation> findByCodeReservationAndIdHall(String codeReservation, int idHall);

    Optional<Reservation> findByIdHallAndReservationDateAndReservationStatusNot(int idHall, LocalDate reservationDate, int reservationStatus);

}

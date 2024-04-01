package com.eventspaces.EventSpaces.domain.service;

import com.eventspaces.EventSpaces.domain.repository.ReservationRepository;
import com.eventspaces.EventSpaces.persistence.entity.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private EmailSender emailSender;

    public List<Reservation> getAllByIdHall(int idHall){
        return reservationRepository.getAllByIdHall(idHall);
    }

    public Reservation saveReservation(Reservation reservation){
        //Validate Date
        if(reservationRepository.isReservationDateExists(reservation.getIdHall(), reservation.getReservationDate()))
            return null;

        //Validate Reservation Code
        String codeReservation = generateReservationCode();
        boolean codeReservationExists = true;
        while(codeReservationExists){
            codeReservationExists = reservationRepository.isCodeReservationExists(reservation.getIdHall(), codeReservation);
            if (codeReservationExists)
                codeReservation = generateReservationCode();
        }
        reservation.setCodeReservation(codeReservation);

        //emailSender.sendTestEmail(codeReservation);

        return reservationRepository.saveReservation(reservation);
    }


    @Scheduled(cron = "0 18 * * * *") // Ejecutar todos los días a las 6:00 PM
    //@Scheduled(cron = "0 * * * * *") // Ejecutar cada minuto
    private void ejecutarFuncionCadaMinuto() {
        System.out.println("Ejecutando función updateReservationStatus...");
        reservationRepository.updateReservationStatus();
    }

    //ToDo
    public boolean updateStatus(Reservation reservation){
        reservation.setReservationStatus(ReservationStatus.CONFIRMED.getCode());
        return true;
    }

    private static String generateReservationCode() {
        String letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        String numbers = "0123456789";

        int codeLength = 5;

        StringBuilder codeBuilder = new StringBuilder();

        Random random = new Random();

        int firstPosition = random.nextInt(codeLength);


        for (int i = 0; i < codeLength; i++) {
            if (i == firstPosition || i == firstPosition + 2) {
                char number = numbers.charAt(random.nextInt(numbers.length()));
                codeBuilder.append(number);
            } else {
                char letter = letters.charAt(random.nextInt(letters.length()));
                codeBuilder.append(letter);
            }
        }

        return codeBuilder.toString();
    }

    private enum ReservationStatus {
        PENDING(1),
        CONFIRMED(2),
        CANCELLED(3);

        private final Integer code;

        ReservationStatus(Integer code) {
            this.code = code;
        }

        public Integer getCode() {
            return code;
        }
    }
}


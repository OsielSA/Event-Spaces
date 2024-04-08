package com.eventspaces.EventSpaces.domain.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class EmailSender {
    @Autowired
    private JavaMailSender javaMailSender;

    private static final Logger logger = LoggerFactory.getLogger(EmailSender.class);

    @Async
    public void sendReservationEmail(String to, String reservationCode) {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = null;
        try {
            logger.info("Start send mail");
            helper = new MimeMessageHelper(message, true);
            helper.setTo(to);
            helper.setSubject("Reservación Hacienda las Palmas");

            // Cargar contenido HTML del archivo
            String htmlBody = loadHtmlTemplate();

            // Reemplazar el marcador de posición con el código de reserva
            htmlBody = htmlBody.replace("[RESERVATION_CODE]", reservationCode);
            htmlBody = htmlBody.replace("[LIMIT_DATE]", getNextDayDate());

            // Establecer el contenido HTML en el correo
            helper.setText(htmlBody, true);

            // Envía el correo electrónico
            javaMailSender.send(message);
            logger.info("Mail sended, CR: " + reservationCode + ", mail: " + to);
        } catch (MessagingException e) {
            e.printStackTrace();
            logger.info("Mail error, CR: " + reservationCode + ", mail: " + to);
        }
    }

    private String loadHtmlTemplate() {
        try {
            // Lee el contenido del archivo HTML
            ClassPathResource resource = new ClassPathResource("templates/email/EmailTemplate.html");
            byte[] fileData = resource.getInputStream().readAllBytes();
            return new String(fileData, StandardCharsets.UTF_8);
        } catch (IOException e) {
            e.printStackTrace();
            // Manejar errores de carga del archivo
            return "";
        }
    }
    private String getNextDayDate() {
        LocalDate currentDate = LocalDate.now();
        ZoneId pacificZone = ZoneId.of("America/Mazatlan");
        ZonedDateTime currentDateTime = ZonedDateTime.of(currentDate.atStartOfDay(), pacificZone);

        LocalDate nextDayDate = currentDate.plusDays(1);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd 'de' MMMM");
        String formattedDate = nextDayDate.format(formatter);
        return formattedDate;
    }
}

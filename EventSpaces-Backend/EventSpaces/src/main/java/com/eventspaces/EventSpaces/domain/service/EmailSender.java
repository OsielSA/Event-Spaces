package com.eventspaces.EventSpaces.domain.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSender {
    @Autowired
    private JavaMailSender javaMailSender;

    public void sendTestEmail(String codeReservation) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("osiel.sa99@gmail.com");
        message.setSubject("Correo de prueba");
        message.setText("Este es un correo de prueba enviado desde mi aplicación Spring Boot: "+codeReservation);

        try {
            javaMailSender.send(message);
            return; // El correo electrónico se envió correctamente
        } catch (MailException e) {
            e.printStackTrace(); // Maneja la excepción de manera adecuada
            return; // Hubo un error al enviar el correo electrónico
        }
    }
}

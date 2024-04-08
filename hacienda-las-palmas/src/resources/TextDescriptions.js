
function formatPhoneNumber(phoneNumber) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        // return match[1] + ' ' + match[2] + ' ' + match[3];
        return `(${match[1]}) ${match[2]} ${match[3]}`;
    }
    return null;
}

const TEXT_DESCRIPTIONS = {
    HALL_NAME: 'Hacienda las Palmas',
    WELCOME_TEXT: 'En nuestro salón de eventos, nos enorgullece convertir tus ocasiones especiales en momentos inolvidables. Con una ubicación encantadora y nuestro espacio versátil y elegante, está diseñado para adaptarse a tus necesidades y superar tus expectativas.',
    ADDRESS: 'La Tenería, 80327 Navolato, Sin.',
    ADDRESS_DESCRIPTION: 'Nos encontramos por el Bulevar Leonismo Internacional S/N Colonia la Teneria, Navolato, Sinaloa. ¡Listos para dar la bienvenida a tu evento!',
    BOOKING_COST: '$12,000',
    EMAIL: 'haciendalaspalmas1@gmail.com',
    PHONE: '6721116338',
    PHONE_FORMAT: formatPhoneNumber('6721116338'),
    FACEBOOK: 'https://www.facebook.com/share/9TPfu8oUiEibK1Uq/',
    WHATSAPP_LINK: 'https://wa.me/6721116338',
    GOOGLE_MAPS_LINK: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.2701645885417!2d-107.7066946!3d24.7646481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86b8e85842b1a6a7%3A0x7f8f7a9bfa18487f!2sInstituto%20Tecnol%C3%B3gico%20de%20Culiac%C3%A1n!5e0!3m2!1ses!2smx!4v1647831366783!5m2!1ses!2smx'
}

export { TEXT_DESCRIPTIONS };
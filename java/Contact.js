// ═══════════════════════════════════════════
//  contact.js — vertalingen voor contact.html
// ═══════════════════════════════════════════

const T = {
    nl: {
        badge: 'Amsterdam',
        hero_title: 'Contact',
        hero_sub: 'Anoniem. Gratis. In jouw taal.',
        safe_contact: 'Je kunt veilig en gratis contact opnemen. Je werkgever krijgt dit niet te zien.',
        contact_why_title: 'Praat met iemand',
        c1: 'Hulp in meerdere talen',
        c2: 'Anoniem mogelijk',
        c3: 'Gratis hulp',
        c4: 'Snelle reactie via WhatsApp',
        contact_details_title: 'Contactgegevens',
        hours_title: '🕐 Bereikbaarheid',
        hours_weekdays: 'Maandag t/m vrijdag',
        hours_weekend: 'Weekend',
        hours_closed: 'Gesloten',
        hours_note: 'Buiten openingstijden kun je altijd een bericht sturen. We reageren de volgende werkdag.',
        open_whatsapp_btn: 'Open WhatsApp',
        call_direct: 'Bel direct',
        send_email: 'Stuur e-mail',
        back_home: '← Terug naar de homepage',
        footer: 'Gemeente Amsterdam · Gratis hulp voor arbeidsmigranten · 2026',
    },
    en: {
        badge: 'Amsterdam',
        hero_title: 'Contact',
        hero_sub: 'Anonymous. Free. In your language.',
        safe_contact: 'You can contact us safely and for free. Your employer will not see this.',
        contact_why_title: 'Talk to someone',
        c1: 'Help in multiple languages',
        c2: 'Anonymous if you wish',
        c3: 'Free help',
        c4: 'Fast response via WhatsApp',
        contact_details_title: 'Contact details',
        hours_title: '🕐 Availability',
        hours_weekdays: 'Monday to Friday',
        hours_weekend: 'Weekend',
        hours_closed: 'Closed',
        hours_note: 'Outside opening hours you can always send a message. We respond the next working day.',
        open_whatsapp_btn: 'Open WhatsApp',
        call_direct: 'Call directly',
        send_email: 'Send email',
        back_home: '← Back to homepage',
        footer: 'Municipality of Amsterdam · Free help for labour migrants · 2026',
    },
    pl: {
        badge: 'Amsterdam',
        hero_title: 'Kontakt',
        hero_sub: 'Anonimowo. Bezpłatnie. W Twoim języku.',
        safe_contact: 'Możesz skontaktować się z nami bezpiecznie i bezpłatnie.',
        contact_why_title: 'Porozmawiaj z kimś',
        c1: 'Pomoc w wielu językach',
        c2: 'Możliwość anonimowości',
        c3: 'Bezpłatna pomoc',
        c4: 'Szybka odpowiedź przez WhatsApp',
        contact_details_title: 'Dane kontaktowe',
        hours_title: '🕐 Dostępność',
        hours_weekdays: 'Poniedziałek – piątek',
        hours_weekend: 'Weekend',
        hours_closed: 'Zamknięte',
        hours_note: 'Poza godzinami otwarcia zawsze możesz wysłać wiadomość. Odpiszemy następnego dnia roboczego.',
        open_whatsapp_btn: 'Otwórz WhatsApp',
        call_direct: 'Zadzwoń bezpośrednio',
        send_email: 'Wyślij e-mail',
        back_home: '← Powrót do strony głównej',
        footer: 'Gmina Amsterdam · Bezpłatna pomoc dla pracowników migrujących · 2026',
    },
    ro: {
        badge: 'Amsterdam',
        hero_title: 'Contact',
        hero_sub: 'Anonim. Gratuit. În limba ta.',
        safe_contact: 'Poți lua legătura cu noi în siguranță și gratuit.',
        contact_why_title: 'Vorbește cu cineva',
        c1: 'Ajutor în mai multe limbi',
        c2: 'Posibilitate de anonimat',
        c3: 'Ajutor gratuit',
        c4: 'Răspuns rapid prin WhatsApp',
        contact_details_title: 'Date de contact',
        hours_title: '🕐 Disponibilitate',
        hours_weekdays: 'Luni – vineri',
        hours_weekend: 'Weekend',
        hours_closed: 'Închis',
        hours_note: 'În afara orelor de program poți trimite oricând un mesaj. Răspundem în următoarea zi lucrătoare.',
        open_whatsapp_btn: 'Deschide WhatsApp',
        call_direct: 'Sună direct',
        send_email: 'Trimite e-mail',
        back_home: '← Înapoi la pagina principală',
        footer: 'Municipiul Amsterdam · Ajutor gratuit pentru migranții de muncă · 2026',
    }
};

let lang = 'nl';

function setLang(l) {
    lang = l;
    document.getElementById('langLabel').textContent = l.toUpperCase();
    document.getElementById('langMenu').classList.remove('open');
    ['nl', 'en', 'pl', 'ro'].forEach(x => {
        document.getElementById('btn-' + x).classList.toggle('active', x === l);
    });
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (T[l] && T[l][key]) el.textContent = T[l][key];
    });
    document.documentElement.lang = l;
}

document.getElementById('langToggle').addEventListener('click', e => {
    e.stopPropagation();
    document.getElementById('langMenu').classList.toggle('open');
});
document.addEventListener('click', () => {
    document.getElementById('langMenu').classList.remove('open');
});
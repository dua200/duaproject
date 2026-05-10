// ═══════════════════════════════════════════
//  translations.js — alle vertalingen + logica
// ═══════════════════════════════════════════

const T = {
    nl: {
        badge: '🏙️ Amsterdam',
        hero_title: 'Waar heb je hulp bij nodig?',
        hero_sub: 'Hulp vragen is veilig. Je werkgever ziet dit niet. Het is gratis.',
        trust1: '✅ Gratis hulp', trust2: '🔒 Anoniem',
        trust3: '📱 Mobielvriendelijk', trust4: '🌍 Meerdere talen',
        choose_topic: 'Kies je onderwerp',
        cat_geld: 'Geld & salaris', cat_werk: 'Werk', cat_wonen: 'Wonen',
        cat_zorg: 'Zorg', cat_digid: 'DigiD & papieren', cat_veilig: 'Veilig hulp zoeken',
        wizard_section_title: 'Of: laat ons helpen zoeken',
        wizard_title: '🔍 Keuzehulp',
        wizard_sub: 'Beantwoord 3 korte vragen. Wij zoeken de juiste hulp voor jou.',
        q1: 'Heb je geen salaris of te weinig salaris gekregen?',
        q2: 'Heb je problemen met je woning of ben je bang je huis kwijt te raken?',
        q3: 'Ben je bang om je werk of woning kwijt te raken als je hulp vraagt?',
        yes: '✅ Ja', no: '❌ Nee',
        whatsapp_chat: 'WhatsApp hulp', call_help: 'Bel hulp',
        restart: '↩ Opnieuw beginnen',
        contact_title: 'Praat met iemand', contact_sub: 'In jouw taal. Anoniem. Gratis.',
        open_whatsapp: 'Open WhatsApp ›',
        footer: 'Gemeente Amsterdam · Gratis hulp voor arbeidsmigranten · 2024',
        situations: 'Herken jij dit?', what_todo: 'Wat kun je doen?',
        safe_geld: 'Hulp vragen kost geen geld. Je werkgever krijgt dit niet te zien.',
        safe_werk: 'Je hoeft niet meteen officiële stappen te nemen. Praat eerst anoniem.',
        safe_wonen: 'Je kunt anoniem praten. Je werkgever krijgt dit niet te horen.',
        safe_zorg: 'Hulp vragen bij zorg is altijd gratis en veilig.',
        safe_digid: 'Nederlandse systemen zijn soms moeilijk. Wij helpen je stap voor stap.',
        safe_veilig: 'Veel mensen zijn bang om hulp te vragen. Je staat niet alleen.',
        veilig_title: 'Dit is belangrijk om te weten:',
        whatsapp_safe: 'Praat veilig via WhatsApp', call_anon: 'Bel anoniem',
        res_salary_afraid: '💰 Je hebt een salarismin en je bent bang voor de gevolgen. We helpen je anoniem en veilig.',
        res_housing_afraid: '🏠 Je hebt woonproblemen en bent bang. Je kunt anoniem praten. We helpen je.',
        res_general: '✅ We kunnen je helpen. Praat met ons via WhatsApp of bel ons.',
    },
    en: {
        badge: '🏙️ Amsterdam',
        hero_title: 'What do you need help with?',
        hero_sub: 'Asking for help is safe. Your employer will not see this. It is free.',
        trust1: '✅ Free help', trust2: '🔒 Anonymous',
        trust3: '📱 Mobile-friendly', trust4: '🌍 Multiple languages',
        choose_topic: 'Choose your topic',
        cat_geld: 'Money & salary', cat_werk: 'Work', cat_wonen: 'Housing',
        cat_zorg: 'Healthcare', cat_digid: 'DigiD & documents', cat_veilig: 'Safe help',
        wizard_section_title: 'Or: let us help you find support',
        wizard_title: '🔍 Quick guide',
        wizard_sub: 'Answer 3 short questions. We will find the right help for you.',
        q1: 'Did you not receive your salary or receive too little?',
        q2: 'Do you have housing problems or are you afraid of losing your home?',
        q3: 'Are you afraid of losing your job or home if you ask for help?',
        yes: '✅ Yes', no: '❌ No',
        whatsapp_chat: 'WhatsApp help', call_help: 'Call for help',
        restart: '↩ Start again',
        contact_title: 'Talk to someone', contact_sub: 'In your language. Anonymous. Free.',
        open_whatsapp: 'Open WhatsApp ›',
        footer: 'Municipality of Amsterdam · Free help for labour migrants · 2024',
        situations: 'Do you recognise this?', what_todo: 'What can you do?',
        safe_geld: 'Asking for help is free. Your employer will not see this.',
        safe_werk: 'You do not need to take official steps right away. Talk anonymously first.',
        safe_wonen: 'You can talk anonymously. Your employer will not be informed.',
        safe_zorg: 'Asking for healthcare help is always free and safe.',
        safe_digid: 'Dutch systems can be difficult. We will help you step by step.',
        safe_veilig: 'Many people are afraid to ask for help. You are not alone.',
        veilig_title: 'Important to know:',
        whatsapp_safe: 'Chat safely via WhatsApp', call_anon: 'Call anonymously',
        res_salary_afraid: '💰 You have a salary problem and are afraid. We will help you anonymously and safely.',
        res_housing_afraid: '🏠 You have housing problems and are afraid. You can talk anonymously.',
        res_general: '✅ We can help you. Talk to us via WhatsApp or call us.',
    },
    pl: {
        badge: '🏙️ Amsterdam',
        hero_title: 'W czym potrzebujesz pomocy?',
        hero_sub: 'Prośba o pomoc jest bezpieczna. Twój pracodawca tego nie zobaczy. To jest bezpłatne.',
        trust1: '✅ Bezpłatna pomoc', trust2: '🔒 Anonimowo',
        trust3: '📱 Na telefon', trust4: '🌍 Wiele języków',
        choose_topic: 'Wybierz temat',
        cat_geld: 'Pieniądze i wynagrodzenie', cat_werk: 'Praca', cat_wonen: 'Mieszkanie',
        cat_zorg: 'Opieka zdrowotna', cat_digid: 'DigiD i dokumenty', cat_veilig: 'Bezpieczna pomoc',
        wizard_section_title: 'Lub: pozwól nam znaleźć pomoc',
        wizard_title: '🔍 Przewodnik',
        wizard_sub: 'Odpowiedz na 3 krótkie pytania. Znajdziemy właściwą pomoc dla Ciebie.',
        q1: 'Czy nie otrzymałeś wynagrodzenia lub otrzymałeś za mało?',
        q2: 'Czy masz problemy z mieszkaniem lub boisz się, że stracisz dom?',
        q3: 'Czy boisz się stracić pracę lub mieszkanie, jeśli poprosisz o pomoc?',
        yes: '✅ Tak', no: '❌ Nie',
        whatsapp_chat: 'Pomoc przez WhatsApp', call_help: 'Zadzwoń po pomoc',
        restart: '↩ Zacznij od nowa',
        contact_title: 'Porozmawiaj z kimś', contact_sub: 'W Twoim języku. Anonimowo. Bezpłatnie.',
        open_whatsapp: 'Otwórz WhatsApp ›',
        footer: 'Gmina Amsterdam · Bezpłatna pomoc dla pracowników migrujących · 2024',
        situations: 'Czy rozpoznajesz to?', what_todo: 'Co możesz zrobić?',
        safe_geld: 'Prośba o pomoc jest bezpłatna. Twój pracodawca tego nie zobaczy.',
        safe_werk: 'Nie musisz od razu podejmować oficjalnych kroków.',
        safe_wonen: 'Możesz rozmawiać anonimowo. Pracodawca nie zostanie poinformowany.',
        safe_zorg: 'Prośba o pomoc medyczną jest zawsze bezpłatna i bezpieczna.',
        safe_digid: 'Holenderskie systemy mogą być trudne. Pomożemy Ci krok po kroku.',
        safe_veilig: 'Wiele osób boi się prosić o pomoc. Nie jesteś sam.',
        veilig_title: 'Ważne informacje:',
        whatsapp_safe: 'Bezpieczna rozmowa przez WhatsApp', call_anon: 'Zadzwoń anonimowo',
        res_salary_afraid: '💰 Masz problem z wynagrodzeniem i się boisz. Pomożemy Ci anonimowo.',
        res_housing_afraid: '🏠 Masz problemy z mieszkaniem i się boisz. Możesz rozmawiać anonimowo.',
        res_general: '✅ Możemy Ci pomóc. Porozmawiaj z nami przez WhatsApp lub zadzwoń.',
    },
    ro: {
        badge: '🏙️ Amsterdam',
        hero_title: 'Cu ce ai nevoie de ajutor?',
        hero_sub: 'A cere ajutor este sigur. Angajatorul tău nu va vedea. Este gratuit.',
        trust1: '✅ Ajutor gratuit', trust2: '🔒 Anonim',
        trust3: '📱 Pe telefon', trust4: '🌍 Mai multe limbi',
        choose_topic: 'Alege subiectul',
        cat_geld: 'Bani și salariu', cat_werk: 'Muncă', cat_wonen: 'Locuință',
        cat_zorg: 'Sănătate', cat_digid: 'DigiD și documente', cat_veilig: 'Ajutor sigur',
        wizard_section_title: 'Sau: lasă-ne să găsim ajutorul potrivit',
        wizard_title: '🔍 Ghid rapid',
        wizard_sub: 'Răspunde la 3 întrebări scurte. Găsim ajutorul potrivit pentru tine.',
        q1: 'Nu ai primit salariul sau ai primit prea puțin?',
        q2: 'Ai probleme cu locuința sau ți-e teamă că o vei pierde?',
        q3: 'Ți-e teamă că vei pierde locul de muncă dacă ceri ajutor?',
        yes: '✅ Da', no: '❌ Nu',
        whatsapp_chat: 'Ajutor pe WhatsApp', call_help: 'Sună pentru ajutor',
        restart: '↩ Începe din nou',
        contact_title: 'Vorbește cu cineva', contact_sub: 'În limba ta. Anonim. Gratuit.',
        open_whatsapp: 'Deschide WhatsApp ›',
        footer: 'Municipiul Amsterdam · Ajutor gratuit pentru migranții de muncă · 2024',
        situations: 'Recunoști asta?', what_todo: 'Ce poți face?',
        safe_geld: 'Cererea de ajutor este gratuită. Angajatorul tău nu va vedea.',
        safe_werk: 'Nu trebuie să iei măsuri oficiale imediat.',
        safe_wonen: 'Poți vorbi anonim. Angajatorul nu va fi informat.',
        safe_zorg: 'Cererea de ajutor medical este întotdeauna gratuită și sigură.',
        safe_digid: 'Sistemele olandeze pot fi dificile. Te ajutăm pas cu pas.',
        safe_veilig: 'Mulți oameni le este frică să ceară ajutor. Nu ești singur.',
        veilig_title: 'Important de știut:',
        whatsapp_safe: 'Vorbește sigur pe WhatsApp', call_anon: 'Sună anonim',
        res_salary_afraid: '💰 Ai o problemă cu salariul și ți-e teamă. Te ajutăm anonim și în siguranță.',
        res_housing_afraid: '🏠 Ai probleme cu locuința și ți-e teamă. Poți vorbi anonim.',
        res_general: '✅ Te putem ajuta. Vorbește cu noi pe WhatsApp sau sună-ne.',
    }
};

// ─── Huidige taal ───
let lang = 'nl';

// ─── Verander taal ───
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

// ─── Taal dropdown ───
document.getElementById('langToggle').addEventListener('click', e => {
    e.stopPropagation();
    document.getElementById('langMenu').classList.toggle('open');
});
document.addEventListener('click', () => {
    document.getElementById('langMenu').classList.remove('open');
});

// ─── Pagina openen / sluiten ───
function openPage(id) {
    document.getElementById(id).classList.add('open');
    window.scrollTo(0, 0);
}
function closePage(id) {
    document.getElementById(id).classList.remove('open');
}

// ─── Wizard / Keuzehulp ───
let answers = {};

function wStep(step, answer) {
    answers['step' + (step - 1)] = answer;
    document.getElementById('wizard-step-' + (step - 1)).style.display = 'none';
    if (step <= 3) {
        document.getElementById('wizard-step-' + step).style.display = 'block';
    }
}

function wResult(answer) {
    answers['step3'] = answer;
    document.getElementById('wizard-step-3').style.display = 'none';

    const res = document.getElementById('wizard-result');
    const txt = document.getElementById('wizard-result-text');
    res.classList.add('show');

    const t = T[lang];
    if (answers.step1 === 'salary' && answer === 'afraid') {
        txt.textContent = t.res_salary_afraid;
    } else if (answers.step2 === 'housing' && answer === 'afraid') {
        txt.textContent = t.res_housing_afraid;
    } else {
        txt.textContent = t.res_general;
    }
}

function wRestart() {
    answers = {};
    document.getElementById('wizard-result').classList.remove('show');
    document.getElementById('wizard-step-2').style.display = 'none';
    document.getElementById('wizard-step-3').style.display = 'none';
    document.getElementById('wizard-step-1').style.display = 'block';
}
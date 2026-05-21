// ═══════════════════════════════════════════════════════
// translations.js — MigrantWijzer
// Centrale vertalingen voor ALLE pagina's
// Gebruik: <element data-i18n="sleutel">standaard</element>
// ═══════════════════════════════════════════════════════

const TRANSLATIONS = {

    // ─── ALGEMEEN (gedeeld door alle pagina's) ───────────
    nl: {
        logo: 'MigrantWijzer',
        badge: 'Amsterdam',
        back_home: '← Terug naar homepage',
        whatsapp: ' WhatsApp hulp',
        bel: ' Bel hulp',
        safe_hulp: 'Hulp zoeken is gratis en veilig. Je werkgever krijgt dit niet te zien.',
        footer: 'MigrantWijzer · Gratis hulp voor arbeidsmigranten · 2026',
        juridisch_btn: '⚖️ Juridische informatie →',
        hulp_btn: '🤝 Waar krijg je hulp? →',

        // ─── GELD — juridisch ───
        geld_jur_title: '⚖️ Juridische informatie — Geld & salaris',
        geld_jur_sub: 'Jouw rechten over salaris en betalingen in Nederland',
        geld_jur_safe: 'Je hebt recht op eerlijk salaris en duidelijke afspraken.',
        geld_h1: ' Loon & betaling',
        geld_l1: 'Je hebt recht op het minimale van het wettelijke loon',
        geld_l2: 'Je salaris moet altijd op tijd en volledig worden uitbetaald',
        geld_l3: 'Een werkgever mag niet zomaar geld inhouden',
        geld_h2: ' Contract & loonstrook',
        geld_l4: 'Je hebt recht op duidelijke afspraken over jouw salaris',
        geld_l5: 'Via een uitzendbureau heb je ook arbeidsrechten',
        geld_l6: 'Je hebt recht om hulp te krijgen bij geldproblemen',
        geld_h3: ' Schulden & inhoudingen',
        geld_l7: 'Je hebt recht om hulp te krijgen bij geldproblemen',
        geld_l8: 'Je werkgever moet uitleg geven over inhoudingen',
        geld_l9: 'Je hebt recht om hulp te vragen bij geldproblemen',
        geld_h4: ' Belangrijke rechten',
        geld_l10: 'Je mag hulp zoeken zonder problemen op je werk',
        geld_l11: 'Je werkgever mag je niet bedreigen',
        geld_l12: 'Je paspoort of bankpas mag niet worden afgepakt',

        // ─── GELD — hulp ───
        hulp_geld_title: '🤝 Waar krijg je hulp? — Geld & salaris',
        hulp_geld_sub: 'Organisaties die jou kunnen helpen bij salaris en geldproblemen',
        hulp_geld_h1: '⚖️ Het Juridisch Loket',
        hulp_geld_l1: 'Gratis juridisch advies over je salaris en werk',
        hulp_geld_l2: 'Hulp bij loonproblemen en conflicten',
        hulp_geld_l3: 'Website: juridischloket.nl',
        hulp_geld_h2: ' FairWork',
        hulp_geld_l4: 'Hulp bij uitbuiting en arbeidsproblemen',
        hulp_geld_l5: 'Speciaal ontwikkeld voor arbeidsmigranten',
        hulp_geld_l6: 'Website: fairwork.nu',
        hulp_geld_h3: ' FNV',
        hulp_geld_l7: 'Hulp bij loon, contract en rechten',
        hulp_geld_l8: 'Vakbond voor werknemers',
        hulp_geld_l9: 'Website: fnv.nl',
        hulp_geld_h4: ' Nederlandse Arbeidsinspectie',
        hulp_geld_l10: 'Meldpunt voor misstanden op het werk',
        hulp_geld_l11: 'Je kunt anoniem een melding doen',
        hulp_geld_l12: 'Website: nlarbeidsinspectie.nl',
        hulp_geld_h5: ' Gemeente Amsterdam',
        hulp_geld_l13: 'Hulp bij schulden en geldproblemen',
        hulp_geld_l14: 'Sociaal loket en buurtteams',
        hulp_geld_l15: 'Website: amsterdam.nl',

        // ─── WERK — juridisch ───
        werk_jur_title: '⚖️ Juridische informatie — Werk',
        werk_jur_sub: 'Jouw rechten als werknemer in Nederland',
        werk_jur_safe: 'Je hebt in Nederland altijd rechten als werknemer — ook via een uitzendbureau.',
        werk_h1: ' Loon & betaling',
        werk_l1: 'Je hebt recht op minimaal het wettelijk minimumloon',
        werk_l2: 'Je salaris moet op tijd en volledig worden betaald',
        werk_l3: 'Een werkgever mag niet zomaar geld inhouden zonder duidelijke afspraak',
        werk_h2: ' Contract & afspraken',
        werk_l4: 'Ook zonder schriftelijk contract heb je arbeidsrechten',
        werk_l5: 'Je hebt recht op duidelijke informatie over je werk, uren en loon',
        werk_l6: 'Een uitzendbureau moet zich ook aan dezelfde arbeidswetten houden',
        werk_h3: ' Werk & bescherming',
        werk_l7: 'Je mag niet slecht behandeld of onder druk gezet worden',
        werk_l8: 'Dreiging met ontslag mag niet zomaar, er moet een geldige reden zijn',
        werk_l9: 'Je hebt recht op een veilige werkomgeving',
        werk_h4: ' Belangrijke rechten',
        werk_l10: 'Je paspoort of ID mag nooit worden ingenomen',
        werk_l11: 'Je mag altijd hulp vragen zonder gevolgen voor je werk',
        werk_l12: 'Je hebt recht op bescherming, ook zonder contract',

        // ─── WERK — hulp ───
        hulp_werk_title: '🤝 Waar krijg je hulp? — Werk',
        hulp_werk_sub: 'Organisaties die jou kunnen helpen bij werkproblemen',
        hulp_werk_safe: 'Hulp zoeken is gratis en anoniem. Je werkgever krijgt dit niet te zien.',

        // ─── WONEN — juridisch ───
        wonen_jur_title: '⚖️ Juridische informatie — Wonen',
        wonen_jur_sub: 'Jouw rechten als huurder in Nederland',
        wonen_jur_safe: 'Je hebt huurrechten in Nederland — ook als je via je werkgever woont.',
        wonen_h1: ' Huur & woning',
        wonen_l1: 'Je hebt huurrechten, ook als je via je werkgever woont',
        wonen_l2: 'Je huur moet duidelijk en vooraf afgesproken zijn',
        wonen_l3: 'Je mag niet zomaar uit je woning worden gezet zonder juiste procedure',
        wonen_h2: ' Woonomstandigheden',
        wonen_l4: 'Een woning moet veilig en bewoonbaar zijn',
        wonen_l5: 'Te veel mensen in één huis kan niet zomaar en kan onveilig zijn',
        wonen_l6: 'Je hebt recht op basisvoorzieningen zoals water, elektriciteit en veiligheid',
        wonen_h3: ' Misbruik & druk',
        wonen_l7: 'Een werkgever mag je niet dwingen om in een bepaalde woning te verblijven',
        wonen_l8: 'Je mag niet worden bedreigd met "huis kwijt als je stopt met werken"',
        wonen_l9: 'Huur en werk moeten juridisch apart worden behandeld',

        // ─── WONEN — hulp ───
        hulp_wonen_title: '🤝 Waar krijg je hulp? — Wonen',
        hulp_wonen_sub: 'Organisaties die jou kunnen helpen bij woonproblemen',
        hulp_wonen_safe: 'Hulp zoeken is gratis en anoniem. Je verhuurder krijgt dit niet te horen.',

        // ─── ZORG — juridisch ───
        zorg_jur_title: '⚖️ Juridische informatie — Zorg',
        zorg_jur_sub: 'Jouw rechten bij zorg en verzekering in Nederland',
        zorg_jur_safe: 'Je hebt altijd recht op medische basiszorg in Nederland.',
        zorg_h1: ' Zorgverzekering',
        zorg_l1: 'In Nederland is een zorgverzekering verplicht voor iedereen die werkt of woont in Nederland',
        zorg_l2: 'Zonder verzekering kun je hoge kosten krijgen',
        zorg_l3: 'Je kunt hulp krijgen bij het afsluiten of betalen van je verzekering',
        zorg_h2: '‍ Toegang tot zorg',
        zorg_l4: 'Je hebt altijd recht op medische basiszorg',
        zorg_l5: 'Je mag je inschrijven bij een huisarts in jouw woonplaats',
        zorg_l6: 'Een huisarts mag je niet weigeren zonder geldige reden',
        zorg_h3: ' Zorgkosten',
        zorg_l7: 'Je betaalt eigen risico voor zorg',
        zorg_l8: 'Niet betaalde zorgkosten kunnen worden doorgestuurd naar incasso',
        zorg_l9: 'Je kunt vaak een betalingsregeling aanvragen',

        // ─── ZORG — hulp ───
        hulp_zorg_title: '🤝 Waar krijg je hulp? — Zorg',
        hulp_zorg_sub: 'Organisaties die jou kunnen helpen bij zorgproblemen',
        hulp_zorg_safe: 'Hulp vragen bij zorg is altijd gratis en veilig.',

        // ─── DIGI — juridisch ───
        digi_jur_title: '⚖️ Juridische informatie — DigiD & Papieren',
        digi_jur_sub: 'Jouw rechten bij documenten en registratie in Nederland',
        digi_jur_safe: 'Je hebt recht op hulp bij inschrijving en documenten.',
        digi_h1: ' DigiD',
        digi_l1: 'Problemen bij het inloggen van je DigiD',
        digi_l2: 'Brieven van de gemeente zijn moeilijk te begrijpen',
        digi_l3: 'Problemen met je BSN-nummer',
        digi_h2: ' BSN & registratie',
        digi_l4: 'Je BSN is nodig om te werken en zorg te krijgen',
        digi_l5: 'Zonder correcte registratie kun je problemen krijgen',
        digi_l6: 'Je hebt recht op hulp bij inschrijving en documenten',
        digi_h3: ' Overheidsbrieven',
        digi_l7: 'Brieven van de gemeente of overheid zijn belangrijk',
        digi_l8: 'Je hebt recht op uitleg als je ze niet begrijpt',
        digi_l9: 'Je mag hulp vragen bij het invullen van formulieren',

        // ─── DIGI — hulp ───
        hulp_digi_title: '🤝 Waar krijg je hulp? — DigiD & Papieren',
        hulp_digi_sub: 'Organisaties die jou kunnen helpen bij DigiD en documenten',
        hulp_digi_safe: 'Nederlandse systemen kunnen ingewikkeld zijn. Wij helpen jou stap voor stap.',

        // ─── GEDEELDE HULP-ORGANISATIES ───
        org_jl_h: '⚖️ Het Juridisch Loket',
        org_jl_l1: 'Gratis juridisch advies',
        org_jl_l2: 'Je kunt bellen, langskomen of online vragen stellen',
        org_jl_web: 'Website: juridischloket.nl',
        org_fw_h: ' FairWork',
        org_fw_l1: 'Hulp bij uitbuiting en werkproblemen',
        org_fw_l2: 'Speciaal voor arbeidsmigranten',
        org_fw_web: 'Website: fairwork.nu',
        org_fnv_h: ' FNV',
        org_fnv_l1: 'Hulp bij loon, contract en ontslag',
        org_fnv_l2: 'Vakbond die opkomt voor werknemers',
        org_fnv_web:'Website: fnv.nl',
        org_arb_h: ' Nederlandse Arbeidsinspectie',
        org_arb_l1: 'Meldpunt voor misstanden op het werk',
        org_arb_l2: 'Je kunt anoniem een melding doen',
        org_arb_web:'Website: nlarbeidsinspectie.nl',
        org_gem_h: ' Gemeente Amsterdam',
        org_gem_l1: 'Sociale hulp en ondersteuning',
        org_gem_l2: 'Buurtteams en sociaal loket',
        org_gem_web:'Website: amsterdam.nl',
        org_hc_h: ' Huurcommissie',
        org_hc_l1: 'Hulp bij huurgeschillen en te hoge huur',
        org_hc_l2: 'Onafhankelijke organisatie',
        org_hc_web: 'Website: huurcommissie.nl',
        org_zvl_h: ' Zorgverzekeringslijn',
        org_zvl_l1: 'Hulp bij zorgverzekering en schulden',
        org_zvl_l2: 'Telefoon: 0800 6426',
        org_ggd_h: ' GGD Amsterdam',
        org_ggd_l1: 'Informatie over gezondheid en toegang tot zorg',
        org_ggd_web:'Website: ggd.amsterdam.nl',
        org_did_h: ' DigiD helpdesk',
        org_did_l1: 'Hulp bij aanvragen en inloggen',
        org_did_l2: 'Telefoon: 088 123 65 55',
        org_did_web:'Website: digid.nl',
    },

    en: {
        logo: 'MigrantWijzer', badge: 'Amsterdam',
        back_home: '← Back to homepage',
        whatsapp: ' WhatsApp help', bel: ' Call for help',
        safe_hulp: 'Asking for help is free and safe. Your employer will not see this.',
        footer: 'MigrantWijzer · Free help for labour migrants · 2026',
        juridisch_btn: '⚖️ Legal information →',
        hulp_btn: '🤝 Where to get help? →',

        geld_jur_title: '⚖️ Legal information — Money & salary',
        geld_jur_sub: 'Your rights regarding salary and payments in the Netherlands',
        geld_jur_safe: 'You have the right to fair pay and clear agreements.',
        geld_h1: ' Wages & payment', geld_l1: 'You are entitled to at least the legal minimum wage', geld_l2: 'Your salary must be paid on time and in full', geld_l3: 'An employer may not withhold money without a clear agreement',
        geld_h2: ' Contract & payslip', geld_l4: 'You have the right to a payslip', geld_l5: 'You have the right to clear agreements about your salary', geld_l6: 'Even through a temp agency you have labour rights',
        geld_h3: ' Debts & deductions', geld_l7: 'Not everything may be deducted from your salary', geld_l8: 'Your employer must explain deductions', geld_l9: 'You have the right to ask for help with money problems',
        geld_h4: ' Important rights', geld_l10: 'You may seek help without problems at work', geld_l11: 'Your employer may not threaten you', geld_l12: 'Your passport or bank card may not be taken away',

        hulp_geld_title: '🤝 Where to get help? — Money & salary',
        hulp_geld_sub: 'Organisations that can help you with salary and money problems',
        hulp_geld_h1: '⚖️ Legal Desk', hulp_geld_l1: 'Free legal advice about salary and work', hulp_geld_l2: 'Help with pay problems and disputes', hulp_geld_l3: 'Website: juridischloket.nl',
        hulp_geld_h2: ' FairWork', hulp_geld_l4: 'Help with exploitation and labour problems', hulp_geld_l5: 'Specifically for labour migrants', hulp_geld_l6: 'Website: fairwork.nu',
        hulp_geld_h3: ' FNV', hulp_geld_l7: 'Help with pay, contract and rights', hulp_geld_l8: 'Union for workers', hulp_geld_l9: 'Website: fnv.nl',
        hulp_geld_h4: ' Labour Inspectorate', hulp_geld_l10: 'Report workplace violations', hulp_geld_l11: 'You can report anonymously', hulp_geld_l12: 'Website: nlarbeidsinspectie.nl',
        hulp_geld_h5: ' Municipality Amsterdam', hulp_geld_l13: 'Help with debts and money problems', hulp_geld_l14: 'Social desk and neighbourhood teams', hulp_geld_l15: 'Website: amsterdam.nl',

        werk_jur_title: '⚖️ Legal information — Work', werk_jur_sub: 'Your rights as an employee in the Netherlands', werk_jur_safe: 'You always have rights as an employee in the Netherlands — even through a temp agency.',
        werk_h1: ' Wages & payment', werk_l1: 'You are entitled to at least the legal minimum wage', werk_l2: 'Your salary must be paid on time and in full', werk_l3: 'An employer may not withhold money without a clear agreement',
        werk_h2: ' Contract & agreements', werk_l4: 'Even without a written contract you have labour rights', werk_l5: 'You have the right to clear information about your work, hours and pay', werk_l6: 'A temp agency must follow the same labour laws',
        werk_h3: ' Work & protection', werk_l7: 'You may not be treated badly or put under pressure', werk_l8: 'Threats of dismissal are not allowed without a valid reason', werk_l9: 'You have the right to a safe working environment',
        werk_h4: ' Important rights', werk_l10: 'Your passport or ID may never be taken', werk_l11: 'You may always ask for help without consequences', werk_l12: 'You have the right to protection, even without a contract',
        hulp_werk_title: '🤝 Where to get help? — Work', hulp_werk_sub: 'Organisations that can help you with work problems', hulp_werk_safe: 'Asking for help is free and anonymous.',

        wonen_jur_title: '⚖️ Legal information — Housing', wonen_jur_sub: 'Your rights as a tenant in the Netherlands', wonen_jur_safe: 'You have tenant rights in the Netherlands — even if you live through your employer.',
        wonen_h1: ' Rent & housing', wonen_l1: 'You have tenant rights, even if you live through your employer', wonen_l2: 'Your rent must be clearly agreed upon in advance', wonen_l3: 'You cannot be evicted without proper procedure',
        wonen_h2: ' Living conditions', wonen_l4: 'A home must be safe and habitable', wonen_l5: 'Too many people in one house is not allowed and can be unsafe', wonen_l6: 'You have the right to basic facilities like water, electricity and safety',
        wonen_h3: ' Abuse & pressure', wonen_l7: 'An employer cannot force you to stay in a particular home', wonen_l8: 'You may not be threatened with losing your home if you stop working', wonen_l9: 'Rent and work must be treated separately by law',
        hulp_wonen_title: '🤝 Where to get help? — Housing', hulp_wonen_sub: 'Organisations that can help you with housing problems', hulp_wonen_safe: 'Asking for help is free and anonymous.',

        zorg_jur_title: '⚖️ Legal information — Healthcare', zorg_jur_sub: 'Your rights regarding healthcare and insurance in the Netherlands', zorg_jur_safe: 'You always have the right to basic medical care in the Netherlands.',
        zorg_h1: ' Health insurance', zorg_l1: 'Health insurance is mandatory for everyone who works or lives in the Netherlands', zorg_l2: 'Without insurance you can face high costs', zorg_l3: 'You can sometimes get help with taking out or paying for insurance',
        zorg_h2: '‍ Access to care', zorg_l4: 'You always have the right to basic medical care', zorg_l5: 'You may register with a GP in your place of residence', zorg_l6: 'A GP may not refuse you without a valid reason',
        zorg_h3: ' Healthcare costs', zorg_l7: 'You sometimes pay an excess for care', zorg_l8: 'Unpaid healthcare costs can be sent to debt collection', zorg_l9: 'You can often arrange a payment plan',
        hulp_zorg_title: '🤝 Where to get help? — Healthcare', hulp_zorg_sub: 'Organisations that can help you with healthcare problems', hulp_zorg_safe: 'Asking for healthcare help is always free and safe.',

        digi_jur_title: '⚖️ Legal information — DigiD & Documents', digi_jur_sub: 'Your rights regarding documents and registration in the Netherlands', digi_jur_safe: 'You have the right to help with registration and documents.',
        digi_h1: ' DigiD', digi_l1: 'DigiD is a personal login for the government', digi_l2: 'You need it for healthcare, taxes, UWV and municipality', digi_l3: 'You may never share your DigiD with others',
        digi_h2: ' BSN & registration', digi_l4: 'Your BSN is needed to work and receive healthcare', digi_l5: 'Without correct registration you can have problems', digi_l6: 'You have the right to help with registration and documents',
        digi_h3: ' Government letters', digi_l7: 'Letters from the municipality or government are important', digi_l8: 'You have the right to an explanation if you do not understand them', digi_l9: 'You may ask for help filling in forms',
        hulp_digi_title: '🤝 Where to get help? — DigiD & Documents', hulp_digi_sub: 'Organisations that can help you with DigiD and documents', hulp_digi_safe: 'Dutch systems can be complicated. We will help you step by step.',

        org_jl_h: '⚖️ Legal Desk', org_jl_l1: 'Free legal advice', org_jl_l2: 'You can call, visit or ask online', org_jl_web: 'Website: juridischloket.nl',
        org_fw_h: ' FairWork', org_fw_l1: 'Help with exploitation and work problems', org_fw_l2: 'Specifically for labour migrants', org_fw_web: 'Website: fairwork.nu',
        org_fnv_h: ' FNV', org_fnv_l1: 'Help with pay, contract and dismissal', org_fnv_l2: 'Union standing up for workers', org_fnv_web: 'Website: fnv.nl',
        org_arb_h: ' Labour Inspectorate', org_arb_l1: 'Report workplace violations', org_arb_l2: 'You can report anonymously', org_arb_web: 'Website: nlarbeidsinspectie.nl',
        org_gem_h: ' Municipality Amsterdam', org_gem_l1: 'Social help and support', org_gem_l2: 'Neighbourhood teams and social desk', org_gem_web: 'Website: amsterdam.nl',
        org_hc_h: ' Rent Tribunal', org_hc_l1: 'Helps with rent disputes and excessive rent', org_hc_l2: 'Independent organisation', org_hc_web: 'Website: huurcommissie.nl',
        org_zvl_h: ' Healthcare Insurance Line', org_zvl_l1: 'Help with health insurance and debts', org_zvl_l2: 'Phone: 0800 6426',
        org_ggd_h: ' GGD Amsterdam', org_ggd_l1: 'Information about health and access to care', org_ggd_web: 'Website: ggd.amsterdam.nl',
        org_did_h: ' DigiD helpdesk', org_did_l1: 'Help with applying and logging in', org_did_l2: 'Phone: 088 123 65 55', org_did_web: 'Website: digid.nl',
    },

    pl: {
        logo: 'MigrantWijzer', badge: 'Amsterdam',
        back_home: '← Powrót do strony głównej',
        whatsapp: ' Pomoc przez WhatsApp', bel: ' Zadzwoń po pomoc',
        safe_hulp: 'Szukanie pomocy jest bezpłatne i bezpieczne. Twój pracodawca tego nie zobaczy.',
        footer: 'MigrantWijzer · Bezpłatna pomoc dla pracowników migrujących · 2026',
        juridisch_btn: '⚖️ Informacje prawne →', hulp_btn: '🤝 Gdzie uzyskać pomoc? →',

        geld_jur_title: '⚖️ Informacje prawne — Pieniądze i wynagrodzenie', geld_jur_sub: 'Twoje prawa dotyczące wynagrodzenia i płatności w Holandii', geld_jur_safe: 'Masz prawo do uczciwego wynagrodzenia.',
        geld_h1: ' Wynagrodzenie i płatności', geld_l1: 'Masz prawo do co najmniej ustawowego wynagrodzenia minimalnego', geld_l2: 'Twoje wynagrodzenie musi być wypłacane na czas i w całości', geld_l3: 'Pracodawca nie może zatrzymywać pieniędzy bez wyraźnej umowy',
        geld_h2: ' Umowa i odcinek wypłaty', geld_l4: 'Masz prawo do odcinka wypłaty', geld_l5: 'Masz prawo do jasnych ustaleń dotyczących wynagrodzenia', geld_l6: 'Nawet przez agencję pracy masz prawa pracownicze',
        geld_h3: ' Długi i potrącenia', geld_l7: 'Nie wszystko może być potrącane z wynagrodzenia', geld_l8: 'Pracodawca musi wyjaśniać potrącenia', geld_l9: 'Masz prawo prosić o pomoc w problemach finansowych',
        geld_h4: ' Ważne prawa', geld_l10: 'Możesz szukać pomocy bez problemów w pracy', geld_l11: 'Pracodawca nie może Ci grozić', geld_l12: 'Nie można zabrać Ci paszportu ani karty bankowej',
        hulp_geld_title: '🤝 Gdzie uzyskać pomoc? — Pieniądze i wynagrodzenie', hulp_geld_sub: 'Organizacje które mogą Ci pomóc',
        hulp_geld_h1: '⚖️ Punkt Prawny', hulp_geld_l1: 'Bezpłatne porady prawne', hulp_geld_l2: 'Pomoc przy problemach z wynagrodzeniem', hulp_geld_l3: 'Strona: juridischloket.nl',
        hulp_geld_h2: ' FairWork', hulp_geld_l4: 'Pomoc przy wyzysku i problemach pracowniczych', hulp_geld_l5: 'Specjalnie dla pracowników migrujących', hulp_geld_l6: 'Strona: fairwork.nu',
        hulp_geld_h3: ' FNV', hulp_geld_l7: 'Pomoc przy wynagrodzeniu i prawach', hulp_geld_l8: 'Związek zawodowy', hulp_geld_l9: 'Strona: fnv.nl',
        hulp_geld_h4: ' Inspekcja Pracy', hulp_geld_l10: 'Zgłoszenia naruszeń w miejscu pracy', hulp_geld_l11: 'Możesz zgłosić anonimowo', hulp_geld_l12: 'Strona: nlarbeidsinspectie.nl',
        hulp_geld_h5: ' Gmina Amsterdam', hulp_geld_l13: 'Pomoc przy długach i problemach finansowych', hulp_geld_l14: 'Punkt socjalny', hulp_geld_l15: 'Strona: amsterdam.nl',

        werk_jur_title: '⚖️ Informacje prawne — Praca', werk_jur_sub: 'Twoje prawa jako pracownik w Holandii', werk_jur_safe: 'Masz prawa pracownicze w Holandii — nawet przez agencję pracy.',
        werk_h1: ' Wynagrodzenie', werk_l1: 'Masz prawo do ustawowego wynagrodzenia minimalnego', werk_l2: 'Wynagrodzenie musi być płacone na czas', werk_l3: 'Pracodawca nie może zatrzymywać pieniędzy',
        werk_h2: ' Umowa', werk_l4: 'Nawet bez pisemnej umowy masz prawa', werk_l5: 'Masz prawo do jasnych informacji o pracy', werk_l6: 'Agencja pracy musi przestrzegać tych samych przepisów',
        werk_h3: ' Ochrona', werk_l7: 'Nie możesz być źle traktowany ani zastraszany', werk_l8: 'Groźba zwolnienia musi mieć ważną przyczynę', werk_l9: 'Masz prawo do bezpiecznego środowiska pracy',
        werk_h4: ' Ważne prawa', werk_l10: 'Paszport nigdy nie może być zabrany', werk_l11: 'Możesz zawsze prosić o pomoc', werk_l12: 'Masz prawo do ochrony nawet bez umowy',
        hulp_werk_title: '🤝 Gdzie uzyskać pomoc? — Praca', hulp_werk_sub: 'Organizacje które mogą Ci pomóc', hulp_werk_safe: 'Szukanie pomocy jest bezpłatne i anonimowe.',

        wonen_jur_title: '⚖️ Informacje prawne — Mieszkanie', wonen_jur_sub: 'Twoje prawa jako najemca w Holandii', wonen_jur_safe: 'Masz prawa najemcy w Holandii — nawet jeśli mieszkasz przez pracodawcę.',
        wonen_h1: ' Czynsz i mieszkanie', wonen_l1: 'Masz prawa najemcy, nawet przez pracodawcę', wonen_l2: 'Czynsz musi być jasno ustalony z góry', wonen_l3: 'Nie możesz być wyeksmitowany bez odpowiedniej procedury',
        wonen_h2: ' Warunki mieszkaniowe', wonen_l4: 'Mieszkanie musi być bezpieczne i nadające się do zamieszkania', wonen_l5: 'Zbyt wiele osób w jednym domu jest niedozwolone', wonen_l6: 'Masz prawo do podstawowych udogodnień',
        wonen_h3: ' Nadużycia', wonen_l7: 'Pracodawca nie może zmuszać Cię do pozostania w określonym miejscu', wonen_l8: 'Nie możesz być grożony utratą domu', wonen_l9: 'Czynsz i praca muszą być traktowane oddzielnie',
        hulp_wonen_title: '🤝 Gdzie uzyskać pomoc? — Mieszkanie', hulp_wonen_sub: 'Organizacje które mogą Ci pomóc', hulp_wonen_safe: 'Szukanie pomocy jest bezpłatne i anonimowe.',

        zorg_jur_title: '⚖️ Informacje prawne — Opieka zdrowotna', zorg_jur_sub: 'Twoje prawa dotyczące opieki zdrowotnej w Holandii', zorg_jur_safe: 'Masz zawsze prawo do podstawowej opieki medycznej w Holandii.',
        zorg_h1: ' Ubezpieczenie zdrowotne', zorg_l1: 'Ubezpieczenie zdrowotne jest obowiązkowe', zorg_l2: 'Bez ubezpieczenia możesz mieć wysokie koszty', zorg_l3: 'Możesz uzyskać pomoc przy wykupieniu ubezpieczenia',
        zorg_h2: '‍ Dostęp do opieki', zorg_l4: 'Masz prawo do podstawowej opieki medycznej', zorg_l5: 'Możesz zapisać się do lekarza pierwszego kontaktu', zorg_l6: 'Lekarz nie może Ci odmówić bez ważnego powodu',
        zorg_h3: ' Koszty opieki', zorg_l7: 'Czasami płacisz udział własny', zorg_l8: 'Nieopłacone koszty mogą trafić do windykacji', zorg_l9: 'Często możesz umówić plan spłat',
        hulp_zorg_title: '🤝 Gdzie uzyskać pomoc? — Opieka zdrowotna', hulp_zorg_sub: 'Organizacje które mogą Ci pomóc', hulp_zorg_safe: 'Prośba o pomoc medyczną jest zawsze bezpłatna i bezpieczna.',

        digi_jur_title: '⚖️ Informacje prawne — DigiD i dokumenty', digi_jur_sub: 'Twoje prawa dotyczące dokumentów w Holandii', digi_jur_safe: 'Masz prawo do pomocy przy rejestracji i dokumentach.',
        digi_h1: ' DigiD', digi_l1: 'DigiD to osobiste logowanie do rządu', digi_l2: 'Potrzebujesz go do opieki zdrowotnej, podatków i gminy', digi_l3: 'Nigdy nie możesz udostępniać swojego DigiD',
        digi_h2: ' BSN i rejestracja', digi_l4: 'BSN jest potrzebny do pracy i opieki zdrowotnej', digi_l5: 'Bez poprawnej rejestracji możesz mieć problemy', digi_l6: 'Masz prawo do pomocy przy rejestracji',
        digi_h3: ' Pisma urzędowe', digi_l7: 'Pisma od gminy lub rządu są ważne', digi_l8: 'Masz prawo do wyjaśnienia jeśli ich nie rozumiesz', digi_l9: 'Możesz prosić o pomoc przy wypełnianiu formularzy',
        hulp_digi_title: '🤝 Gdzie uzyskać pomoc? — DigiD i dokumenty', hulp_digi_sub: 'Organizacje które mogą Ci pomóc', hulp_digi_safe: 'Holenderskie systemy mogą być skomplikowane. Pomożemy Ci krok po kroku.',

        org_jl_h: '⚖️ Punkt Prawny', org_jl_l1: 'Bezpłatne porady prawne', org_jl_l2: 'Możesz zadzwonić, przyjść lub zapytać online', org_jl_web: 'Strona: juridischloket.nl',
        org_fw_h: ' FairWork', org_fw_l1: 'Pomoc przy wyzysku i problemach w pracy', org_fw_l2: 'Specjalnie dla pracowników migrujących', org_fw_web: 'Strona: fairwork.nu',
        org_fnv_h: ' FNV', org_fnv_l1: 'Pomoc przy wynagrodzeniu i zwolnieniu', org_fnv_l2: 'Związek zawodowy', org_fnv_web: 'Strona: fnv.nl',
        org_arb_h: ' Inspekcja Pracy', org_arb_l1: 'Zgłoszenia naruszeń', org_arb_l2: 'Możesz zgłosić anonimowo', org_arb_web: 'Strona: nlarbeidsinspectie.nl',
        org_gem_h: ' Gmina Amsterdam', org_gem_l1: 'Pomoc socjalna', org_gem_l2: 'Punkt socjalny', org_gem_web: 'Strona: amsterdam.nl',
        org_hc_h: ' Komisja Czynszowa', org_hc_l1: 'Pomoc przy sporach czynszowych', org_hc_l2: 'Niezależna organizacja', org_hc_web: 'Strona: huurcommissie.nl',
        org_zvl_h: ' Linia Ubezpieczeń Zdrowotnych', org_zvl_l1: 'Pomoc przy ubezpieczeniu i długach', org_zvl_l2: 'Telefon: 0800 6426',
        org_ggd_h: ' GGD Amsterdam', org_ggd_l1: 'Informacje o zdrowiu i dostępie do opieki', org_ggd_web: 'Strona: ggd.amsterdam.nl',
        org_did_h: ' Pomoc DigiD', org_did_l1: 'Pomoc przy składaniu wniosku i logowaniu', org_did_l2: 'Telefon: 088 123 65 55', org_did_web: 'Strona: digid.nl',
    },

    ro: {
        logo: 'MigrantWijzer', badge: 'Amsterdam',
        back_home: '← Înapoi la pagina principală',
        whatsapp: ' Ajutor pe WhatsApp', bel: ' Sună pentru ajutor',
        safe_hulp: 'A cere ajutor este gratuit și sigur. Angajatorul tău nu va ști.',
        footer: 'MigrantWijzer · Ajutor gratuit pentru migranții de muncă · 2026',
        juridisch_btn: '⚖️ Informații juridice →', hulp_btn: '🤝 Unde primești ajutor? →',

        geld_jur_title: '⚖️ Informații juridice — Bani și salariu', geld_jur_sub: 'Drepturile tale privind salariul în Olanda', geld_jur_safe: 'Ai dreptul la salariu corect și acorduri clare.',
        geld_h1: ' Salariu și plăți', geld_l1: 'Ai dreptul la cel puțin salariul minim legal', geld_l2: 'Salariul trebuie plătit la timp și integral', geld_l3: 'Angajatorul nu poate reține bani fără un acord clar',
        geld_h2: ' Contract și fluturaș', geld_l4: 'Ai dreptul la un fluturaș de salariu', geld_l5: 'Ai dreptul la acorduri clare despre salariu', geld_l6: 'Chiar și prin agenție ai drepturi de muncă',
        geld_h3: ' Datorii și rețineri', geld_l7: 'Nu orice sumă poate fi reținută din salariu', geld_l8: 'Angajatorul trebuie să explice reținerile', geld_l9: 'Ai dreptul să ceri ajutor pentru probleme financiare',
        geld_h4: ' Drepturi importante', geld_l10: 'Poți căuta ajutor fără probleme la serviciu', geld_l11: 'Angajatorul nu te poate amenința', geld_l12: 'Pașaportul sau cardul bancar nu pot fi luate',
        hulp_geld_title: '🤝 Unde primești ajutor? — Bani și salariu', hulp_geld_sub: 'Organizații care te pot ajuta',
        hulp_geld_h1: '⚖️ Biroul Juridic', hulp_geld_l1: 'Consiliere juridică gratuită', hulp_geld_l2: 'Ajutor la probleme salariale', hulp_geld_l3: 'Site: juridischloket.nl',
        hulp_geld_h2: ' FairWork', hulp_geld_l4: 'Ajutor la exploatare și probleme de muncă', hulp_geld_l5: 'Special pentru migranții de muncă', hulp_geld_l6: 'Site: fairwork.nu',
        hulp_geld_h3: ' FNV', hulp_geld_l7: 'Ajutor cu salariu și drepturi', hulp_geld_l8: 'Sindicat pentru angajați', hulp_geld_l9: 'Site: fnv.nl',
        hulp_geld_h4: ' Inspecția Muncii', hulp_geld_l10: 'Raportare încălcări', hulp_geld_l11: 'Poți raporta anonim', hulp_geld_l12: 'Site: nlarbeidsinspectie.nl',
        hulp_geld_h5: ' Municipiul Amsterdam', hulp_geld_l13: 'Ajutor cu datorii', hulp_geld_l14: 'Birou social', hulp_geld_l15: 'Site: amsterdam.nl',

        werk_jur_title: '⚖️ Informații juridice — Muncă', werk_jur_sub: 'Drepturile tale ca angajat în Olanda', werk_jur_safe: 'Ai întotdeauna drepturi ca angajat în Olanda.',
        werk_h1: ' Salariu', werk_l1: 'Ai dreptul la salariul minim legal', werk_l2: 'Salariul trebuie plătit la timp', werk_l3: 'Angajatorul nu poate reține bani',
        werk_h2: ' Contract', werk_l4: 'Chiar fără contract scris ai drepturi', werk_l5: 'Ai dreptul la informații clare despre muncă', werk_l6: 'Agenția de muncă trebuie să respecte aceleași legi',
        werk_h3: ' Protecție', werk_l7: 'Nu poți fi tratat rău sau presat', werk_l8: 'Amenințarea cu concedierea trebuie să aibă o cauză validă', werk_l9: 'Ai dreptul la un mediu de lucru sigur',
        werk_h4: ' Drepturi importante', werk_l10: 'Pașaportul nu poate fi luat niciodată', werk_l11: 'Poți cere oricând ajutor', werk_l12: 'Ai dreptul la protecție chiar fără contract',
        hulp_werk_title: '🤝 Unde primești ajutor? — Muncă', hulp_werk_sub: 'Organizații care te pot ajuta', hulp_werk_safe: 'A cere ajutor este gratuit și anonim.',

        wonen_jur_title: '⚖️ Informații juridice — Locuință', wonen_jur_sub: 'Drepturile tale ca chiriaș în Olanda', wonen_jur_safe: 'Ai drepturi de chiriaș în Olanda.',
        wonen_h1: ' Chirie și locuință', wonen_l1: 'Ai drepturi de chiriaș chiar prin angajator', wonen_l2: 'Chiria trebuie stabilită clar în prealabil', wonen_l3: 'Nu poți fi evacuat fără procedura corectă',
        wonen_h2: ' Condiții de locuit', wonen_l4: 'Locuința trebuie să fie sigură și locuibilă', wonen_l5: 'Prea multe persoane într-o casă nu este permis', wonen_l6: 'Ai dreptul la utilități de bază',
        wonen_h3: ' Abuzuri', wonen_l7: 'Angajatorul nu te poate forța să rămâi', wonen_l8: 'Nu poți fi amenințat cu pierderea casei', wonen_l9: 'Chiria și munca trebuie tratate separat',
        hulp_wonen_title: '🤝 Unde primești ajutor? — Locuință', hulp_wonen_sub: 'Organizații care te pot ajuta', hulp_wonen_safe: 'A cere ajutor este gratuit și anonim.',

        zorg_jur_title: '⚖️ Informații juridice — Sănătate', zorg_jur_sub: 'Drepturile tale privind sănătatea în Olanda', zorg_jur_safe: 'Ai întotdeauna dreptul la îngrijire medicală de bază.',
        zorg_h1: ' Asigurare de sănătate', zorg_l1: 'Asigurarea de sănătate este obligatorie', zorg_l2: 'Fără asigurare poți avea costuri mari', zorg_l3: 'Poți primi ajutor pentru asigurare',
        zorg_h2: '‍ Acces la îngrijire', zorg_l4: 'Ai dreptul la îngrijire medicală de bază', zorg_l5: 'Poți te înscrie la un medic de familie', zorg_l6: 'Medicul nu te poate refuza fără motiv valid',
        zorg_h3: ' Costuri medicale', zorg_l7: 'Uneori plătești o franciză', zorg_l8: 'Costurile neplătite pot ajunge la recuperatori', zorg_l9: 'Poți solicita un plan de plată',
        hulp_zorg_title: '🤝 Unde primești ajutor? — Sănătate', hulp_zorg_sub: 'Organizații care te pot ajuta', hulp_zorg_safe: 'A cere ajutor medical este întotdeauna gratuit și sigur.',

        digi_jur_title: '⚖️ Informații juridice — DigiD și documente', digi_jur_sub: 'Drepturile tale privind documentele în Olanda', digi_jur_safe: 'Ai dreptul la ajutor cu înregistrarea și documentele.',
        digi_h1: ' DigiD', digi_l1: 'DigiD este autentificarea personală pentru guvern', digi_l2: 'Ai nevoie de el pentru sănătate, taxe și primărie', digi_l3: 'Nu poți niciodată partaja DigiD-ul tău',
        digi_h2: ' BSN și înregistrare', digi_l4: 'BSN este necesar pentru muncă și sănătate', digi_l5: 'Fără înregistrare corectă poți avea probleme', digi_l6: 'Ai dreptul la ajutor cu înregistrarea',
        digi_h3: ' Scrisori oficiale', digi_l7: 'Scrisorile de la primărie sunt importante', digi_l8: 'Ai dreptul la explicații dacă nu le înțelegi', digi_l9: 'Poți cere ajutor la completarea formularelor',
        hulp_digi_title: '🤝 Unde primești ajutor? — DigiD și documente', hulp_digi_sub: 'Organizații care te pot ajuta', hulp_digi_safe: 'Sistemele olandeze pot fi complicate. Te ajutăm pas cu pas.',

        org_jl_h: '⚖️ Biroul Juridic', org_jl_l1: 'Consiliere juridică gratuită', org_jl_l2: 'Poți suna, veni sau întreba online', org_jl_web: 'Site: juridischloket.nl',
        org_fw_h: ' FairWork', org_fw_l1: 'Ajutor la exploatare', org_fw_l2: 'Special pentru migranți', org_fw_web: 'Site: fairwork.nu',
        org_fnv_h: ' FNV', org_fnv_l1: 'Ajutor cu salariu și concediere', org_fnv_l2: 'Sindicat', org_fnv_web: 'Site: fnv.nl',
        org_arb_h: ' Inspecția Muncii', org_arb_l1: 'Raportare încălcări', org_arb_l2: 'Poți raporta anonim', org_arb_web: 'Site: nlarbeidsinspectie.nl',
        org_gem_h: ' Municipiul Amsterdam', org_gem_l1: 'Ajutor social', org_gem_l2: 'Birou social', org_gem_web: 'Site: amsterdam.nl',
        org_hc_h: ' Comisia pentru chirie', org_hc_l1: 'Ajutor la dispute de chirie', org_hc_l2: 'Organizație independentă', org_hc_web: 'Site: huurcommissie.nl',
        org_zvl_h: ' Linia de asigurări', org_zvl_l1: 'Ajutor cu asigurarea și datoriile', org_zvl_l2: 'Telefon: 0800 6426',
        org_ggd_h: ' GGD Amsterdam', org_ggd_l1: 'Informații despre sănătate', org_ggd_web: 'Site: ggd.amsterdam.nl',
        org_did_h: ' Asistență DigiD', org_did_l1: 'Ajutor cu solicitarea și autentificarea', org_did_l2: 'Telefon: 088 123 65 55', org_did_web: 'Site: digid.nl',
    },

    tr: {
        logo: 'MigrantWijzer', badge: 'Amsterdam',
        back_home: '← Ana sayfaya dön',
        whatsapp: ' WhatsApp yardımı', bel: ' Ara',
        safe_hulp: 'Yardım istemek ücretsiz ve güvenlidir. İşveren bunu görmez.',
        footer: 'MigrantWijzer · Göçmen işçiler için ücretsiz yardım · 2026',
        juridisch_btn: '⚖️ Hukuki bilgi →', hulp_btn: '🤝 Nerede yardım alırsın? →',

        geld_jur_title: '⚖️ Hukuki bilgi — Para ve maaş', geld_jur_sub: 'Hollanda\'da maaş ve ödemeler konusundaki haklarınız', geld_jur_safe: 'Adil maaş ve net anlaşmalara hakkın var.',
        geld_h1: ' Maaş ve ödeme', geld_l1: 'En az yasal asgari ücrete hak kazanıyorsun', geld_l2: 'Maaşın zamanında ve tam olarak ödenmeli', geld_l3: 'İşveren net bir anlaşma olmadan para tutamaz',
        geld_h2: ' Sözleşme ve maaş bordrosu', geld_l4: 'Maaş bordrosuna hakkın var', geld_l5: 'Maaş hakkında net anlaşmalara hakkın var', geld_l6: 'Ajans aracılığıyla da işçi haklarına sahipsin',
        geld_h3: ' Borçlar ve kesintiler', geld_l7: 'Her şey maaştan kesilemez', geld_l8: 'İşveren kesintileri açıklamak zorundadır', geld_l9: 'Para sorunlarında yardım isteme hakkın var',
        geld_h4: ' Önemli haklar', geld_l10: 'İşte sorun yaşamadan yardım arayabilirsin', geld_l11: 'İşveren seni tehdit edemez', geld_l12: 'Pasaportun veya banka kartın alınamaz',
        hulp_geld_title: '🤝 Nerede yardım alırsın? — Para ve maaş', hulp_geld_sub: 'Sana yardım edebilecek kuruluşlar',
        hulp_geld_h1: '⚖️ Hukuk Bürosu', hulp_geld_l1: 'Ücretsiz hukuki danışmanlık', hulp_geld_l2: 'Maaş sorunlarında yardım', hulp_geld_l3: 'Site: juridischloket.nl',
        hulp_geld_h2: ' FairWork', hulp_geld_l4: 'Sömürü ve işçi sorunlarında yardım', hulp_geld_l5: 'Göçmen işçiler için özel', hulp_geld_l6: 'Site: fairwork.nu',
        hulp_geld_h3: ' FNV', hulp_geld_l7: 'Maaş, sözleşme ve haklarda yardım', hulp_geld_l8: 'İşçi sendikası', hulp_geld_l9: 'Site: fnv.nl',
        hulp_geld_h4: ' İş Müfettişliği', hulp_geld_l10: 'İşyeri ihlallerini bildirme', hulp_geld_l11: 'Anonim bildirim yapabilirsin', hulp_geld_l12: 'Site: nlarbeidsinspectie.nl',
        hulp_geld_h5: ' Amsterdam Belediyesi', hulp_geld_l13: 'Borç ve para sorunlarında yardım', hulp_geld_l14: 'Sosyal büro', hulp_geld_l15: 'Site: amsterdam.nl',

        werk_jur_title: '⚖️ Hukuki bilgi — İş', werk_jur_sub: 'Hollanda\'da çalışan olarak haklarınız', werk_jur_safe: 'Hollanda\'da her zaman çalışan haklarına sahipsin.',
        werk_h1: ' Maaş', werk_l1: 'Asgari ücrete hak kazanıyorsun', werk_l2: 'Maaş zamanında ödenmeli', werk_l3: 'İşveren para tutamaz',
        werk_h2: ' Sözleşme', werk_l4: 'Yazılı sözleşme olmadan da hakların var', werk_l5: 'İş, saat ve maaş hakkında bilgi hakkın var', werk_l6: 'Ajans aynı iş yasalarına uymak zorunda',
        werk_h3: ' Koruma', werk_l7: 'Kötü muamele göremezsin', werk_l8: 'İşten çıkarma tehdidi geçerli bir sebep gerektirir', werk_l9: 'Güvenli çalışma ortamına hakkın var',
        werk_h4: ' Önemli haklar', werk_l10: 'Pasaport asla alınamaz', werk_l11: 'Her zaman yardım isteyebilirsin', werk_l12: 'Sözleşme olmadan da koruma hakkın var',
        hulp_werk_title: '🤝 Nerede yardım alırsın? — İş', hulp_werk_sub: 'Sana yardım edebilecek kuruluşlar', hulp_werk_safe: 'Yardım istemek ücretsiz ve anonimdir.',

        wonen_jur_title: '⚖️ Hukuki bilgi — Konut', wonen_jur_sub: 'Hollanda\'da kiracı olarak haklarınız', wonen_jur_safe: 'Hollanda\'da kiracı haklarına sahipsin.',
        wonen_h1: ' Kira ve konut', wonen_l1: 'İşveren üzerinden de kiracı haklarına sahipsin', wonen_l2: 'Kira önceden net olarak kararlaştırılmalı', wonen_l3: 'Doğru prosedür olmadan tahliye edilemezsin',
        wonen_h2: ' Yaşam koşulları', wonen_l4: 'Konut güvenli ve yaşanabilir olmalı', wonen_l5: 'Bir evde çok fazla kişi olamaz', wonen_l6: 'Temel olanaklara hakkın var',
        wonen_h3: ' İstismar', wonen_l7: 'İşveren seni belirli bir evde kalmaya zorlayamaz', wonen_l8: 'Evini kaybetmekle tehdit edilemezsin', wonen_l9: 'Kira ve iş hukuki olarak ayrı tutulmalı',
        hulp_wonen_title: '🤝 Nerede yardım alırsın? — Konut', hulp_wonen_sub: 'Sana yardım edebilecek kuruluşlar', hulp_wonen_safe: 'Yardım istemek ücretsiz ve anonimdir.',

        zorg_jur_title: '⚖️ Hukuki bilgi — Sağlık', zorg_jur_sub: 'Hollanda\'da sağlık haklarınız', zorg_jur_safe: 'Hollanda\'da her zaman temel sağlık bakımı hakkın var.',
        zorg_h1: ' Sağlık sigortası', zorg_l1: 'Sağlık sigortası zorunludur', zorg_l2: 'Sigortasız yüksek maliyetler olabilir', zorg_l3: 'Sigorta için yardım alabilirsin',
        zorg_h2: '‍ Sağlık erişimi', zorg_l4: 'Temel sağlık bakımı hakkın var', zorg_l5: 'Bulunduğun yerde aile hekimine kaydolabilirsin', zorg_l6: 'Hekim geçerli sebep olmadan reddedamaz',
        zorg_h3: ' Sağlık maliyetleri', zorg_l7: 'Bazen muafiyet ödersin', zorg_l8: 'Ödenmemiş masraflar tahsilata gidebilir', zorg_l9: 'Genellikle taksit planı yapabilirsin',
        hulp_zorg_title: '🤝 Nerede yardım alırsın? — Sağlık', hulp_zorg_sub: 'Sana yardım edebilecek kuruluşlar', hulp_zorg_safe: 'Sağlık yardımı istemek her zaman ücretsiz ve güvenlidir.',

        digi_jur_title: '⚖️ Hukuki bilgi — DigiD ve belgeler', digi_jur_sub: 'Hollanda\'da belgeler konusundaki haklarınız', digi_jur_safe: 'Kayıt ve belgeler konusunda yardım alma hakkın var.',
        digi_h1: ' DigiD', digi_l1: 'DigiD devlet için kişisel girişindir', digi_l2: 'Sağlık, vergi ve belediye için gerekli', digi_l3: 'DigiD\'ini asla başkalarıyla paylaşma',
        digi_h2: ' BSN ve kayıt', digi_l4: 'BSN çalışmak ve sağlık için gerekli', digi_l5: 'Kayıt olmadan sorun yaşayabilirsin', digi_l6: 'Kayıt ve belgeler için yardım hakkın var',
        digi_h3: ' Resmi mektuplar', digi_l7: 'Belediyeden gelen mektuplar önemlidir', digi_l8: 'Anlamadıysan açıklama isteme hakkın var', digi_l9: 'Form doldurmada yardım isteyebilirsin',
        hulp_digi_title: '🤝 Nerede yardım alırsın? — DigiD ve belgeler', hulp_digi_sub: 'Sana yardım edebilecek kuruluşlar', hulp_digi_safe: 'Hollanda sistemleri karmaşık olabilir. Adım adım yardım ederiz.',

        org_jl_h: '⚖️ Hukuk Bürosu', org_jl_l1: 'Ücretsiz hukuki danışmanlık', org_jl_l2: 'Arayabilir, gidebilir veya online sorabilirsin', org_jl_web: 'Site: juridischloket.nl',
        org_fw_h: ' FairWork', org_fw_l1: 'Sömürü ve iş sorunlarında yardım', org_fw_l2: 'Göçmen işçiler için özel', org_fw_web: 'Site: fairwork.nu',
        org_fnv_h: ' FNV', org_fnv_l1: 'Maaş ve işten çıkarmada yardım', org_fnv_l2: 'İşçi sendikası', org_fnv_web: 'Site: fnv.nl',
        org_arb_h: ' İş Müfettişliği', org_arb_l1: 'İhlal bildirme', org_arb_l2: 'Anonim bildirim yapabilirsin', org_arb_web: 'Site: nlarbeidsinspectie.nl',
        org_gem_h: ' Amsterdam Belediyesi', org_gem_l1: 'Sosyal yardım', org_gem_l2: 'Sosyal büro', org_gem_web: 'Site: amsterdam.nl',
        org_hc_h: ' Kira Komisyonu', org_hc_l1: 'Kira anlaşmazlıklarında yardım', org_hc_l2: 'Bağımsız kuruluş', org_hc_web: 'Site: huurcommissie.nl',
        org_zvl_h: ' Sağlık Sigortası Hattı', org_zvl_l1: 'Sigorta ve borç yardımı', org_zvl_l2: 'Telefon: 0800 6426',
        org_ggd_h: ' GGD Amsterdam', org_ggd_l1: 'Sağlık ve bakım erişimi', org_ggd_web: 'Site: ggd.amsterdam.nl',
        org_did_h: ' DigiD yardım', org_did_l1: 'Başvuru ve giriş yardımı', org_did_l2: 'Telefon: 088 123 65 55', org_did_web: 'Site: digid.nl',
    },

    ar: {
        logo: 'MigrantWijzer', badge: 'أمستردام',
        back_home: 'العودة إلى الصفحة الرئيسية →',
        whatsapp: ' مساعدة عبر واتساب', bel: ' اتصل للمساعدة',
        safe_hulp: 'طلب المساعدة مجاني وآمن. صاحب العمل لن يعرف.',
        footer: 'MigrantWijzer · مساعدة مجانية للعمال المهاجرين · 2026',
        juridisch_btn: '⚖️ معلومات قانونية →', hulp_btn: '🤝 أين تحصل على المساعدة؟ →',

        geld_jur_title: '⚖️ معلومات قانونية — المال والراتب', geld_jur_sub: 'حقوقك المتعلقة بالراتب في هولندا', geld_jur_safe: 'لديك الحق في راتب عادل واتفاقيات واضحة.',
        geld_h1: ' الأجور والمدفوعات', geld_l1: 'لديك الحق في الحد الأدنى القانوني للأجور', geld_l2: 'يجب أن يُدفع راتبك في الوقت المحدد وبالكامل', geld_l3: 'لا يمكن لصاحب العمل حجب المال دون اتفاق واضح',
        geld_h2: ' العقد وكشف الراتب', geld_l4: 'لديك الحق في كشف الراتب', geld_l5: 'لديك الحق في اتفاقيات واضحة بشأن الراتب', geld_l6: 'حتى عبر وكالة العمل لديك حقوق عمالية',
        geld_h3: ' الديون والخصومات', geld_l7: 'لا يمكن خصم كل شيء من راتبك', geld_l8: 'يجب أن يشرح صاحب العمل الخصومات', geld_l9: 'لديك الحق في طلب المساعدة للمشاكل المالية',
        geld_h4: ' حقوق مهمة', geld_l10: 'يمكنك طلب المساعدة دون مشاكل في العمل', geld_l11: 'لا يمكن لصاحب العمل تهديدك', geld_l12: 'لا يمكن أخذ جواز سفرك أو بطاقتك المصرفية',
        hulp_geld_title: '🤝 أين تحصل على المساعدة؟ — المال والراتب', hulp_geld_sub: 'منظمات يمكنها مساعدتك',
        hulp_geld_h1: '⚖️ المكتب القانوني', hulp_geld_l1: 'استشارات قانونية مجانية', hulp_geld_l2: 'مساعدة في مشاكل الراتب', hulp_geld_l3: 'الموقع: juridischloket.nl',
        hulp_geld_h2: ' FairWork', hulp_geld_l4: 'مساعدة في الاستغلال ومشاكل العمل', hulp_geld_l5: 'خصيصاً للعمال المهاجرين', hulp_geld_l6: 'الموقع: fairwork.nu',
        hulp_geld_h3: ' FNV', hulp_geld_l7: 'مساعدة في الراتب والحقوق', hulp_geld_l8: 'نقابة العمال', hulp_geld_l9: 'الموقع: fnv.nl',
        hulp_geld_h4: ' تفتيش العمل', hulp_geld_l10: 'الإبلاغ عن انتهاكات مكان العمل', hulp_geld_l11: 'يمكنك الإبلاغ بشكل مجهول', hulp_geld_l12: 'الموقع: nlarbeidsinspectie.nl',
        hulp_geld_h5: ' بلدية أمستردام', hulp_geld_l13: 'مساعدة في الديون والمشاكل المالية', hulp_geld_l14: 'المكتب الاجتماعي', hulp_geld_l15: 'الموقع: amsterdam.nl',

        werk_jur_title: '⚖️ معلومات قانونية — العمل', werk_jur_sub: 'حقوقك كموظف في هولندا', werk_jur_safe: 'لديك دائماً حقوق كموظف في هولندا.',
        werk_h1: ' الراتب', werk_l1: 'لديك الحق في الحد الأدنى للأجور', werk_l2: 'يجب أن يُدفع الراتب في الوقت المحدد', werk_l3: 'لا يمكن حجب المال',
        werk_h2: ' العقد', werk_l4: 'حتى بدون عقد مكتوب لديك حقوق', werk_l5: 'لديك الحق في معلومات واضحة عن العمل', werk_l6: 'الوكالة يجب أن تتبع نفس قوانين العمل',
        werk_h3: ' الحماية', werk_l7: 'لا يمكن معاملتك بشكل سيئ أو الضغط عليك', werk_l8: 'التهديد بالفصل يتطلب سبباً وجيهاً', werk_l9: 'لديك الحق في بيئة عمل آمنة',
        werk_h4: ' حقوق مهمة', werk_l10: 'لا يمكن أخذ جواز السفر أبداً', werk_l11: 'يمكنك طلب المساعدة دائماً', werk_l12: 'لديك الحق في الحماية حتى بدون عقد',
        hulp_werk_title: '🤝 أين تحصل على المساعدة؟ — العمل', hulp_werk_sub: 'منظمات يمكنها مساعدتك', hulp_werk_safe: 'طلب المساعدة مجاني ومجهول.',

        wonen_jur_title: '⚖️ معلومات قانونية — السكن', wonen_jur_sub: 'حقوقك كمستأجر في هولندا', wonen_jur_safe: 'لديك حقوق مستأجر في هولندا.',
        wonen_h1: ' الإيجار والسكن', wonen_l1: 'لديك حقوق مستأجر حتى عبر صاحب العمل', wonen_l2: 'يجب الاتفاق على الإيجار مسبقاً بوضوح', wonen_l3: 'لا يمكن إخلاؤك دون الإجراء الصحيح',
        wonen_h2: ' ظروف السكن', wonen_l4: 'يجب أن يكون السكن آمناً وصالحاً للسكن', wonen_l5: 'لا يُسمح بوجود أشخاص كثيرين في منزل واحد', wonen_l6: 'لديك الحق في المرافق الأساسية',
        wonen_h3: ' الإساءة', wonen_l7: 'لا يمكن لصاحب العمل إجبارك على البقاء', wonen_l8: 'لا يمكن تهديدك بفقدان المنزل', wonen_l9: 'الإيجار والعمل يجب معالجتهما بشكل منفصل',
        hulp_wonen_title: '🤝 أين تحصل على المساعدة؟ — السكن', hulp_wonen_sub: 'منظمات يمكنها مساعدتك', hulp_wonen_safe: 'طلب المساعدة مجاني ومجهول.',

        zorg_jur_title: '⚖️ معلومات قانونية — الرعاية الصحية', zorg_jur_sub: 'حقوقك المتعلقة بالرعاية الصحية في هولندا', zorg_jur_safe: 'لديك دائماً الحق في الرعاية الطبية الأساسية.',
        zorg_h1: ' التأمين الصحي', zorg_l1: 'التأمين الصحي إلزامي للجميع', zorg_l2: 'بدون تأمين قد تواجه تكاليف عالية', zorg_l3: 'يمكنك الحصول على مساعدة للتأمين',
        zorg_h2: '‍ الوصول للرعاية', zorg_l4: 'لديك الحق في الرعاية الطبية الأساسية', zorg_l5: 'يمكنك التسجيل لدى طبيب في مكان إقامتك', zorg_l6: 'لا يمكن للطبيب رفضك دون سبب وجيه',
        zorg_h3: ' تكاليف الرعاية', zorg_l7: 'أحياناً تدفع جزءاً من التكلفة', zorg_l8: 'التكاليف غير المدفوعة قد تذهب لتحصيل الديون', zorg_l9: 'غالباً يمكنك ترتيب خطة سداد',
        hulp_zorg_title: '🤝 أين تحصل على المساعدة؟ — الرعاية الصحية', hulp_zorg_sub: 'منظمات يمكنها مساعدتك', hulp_zorg_safe: 'طلب المساعدة الصحية مجاني وآمن دائماً.',

        digi_jur_title: '⚖️ معلومات قانونية — DigiD والوثائق', digi_jur_sub: 'حقوقك المتعلقة بالوثائق في هولندا', digi_jur_safe: 'لديك الحق في المساعدة بالتسجيل والوثائق.',
        digi_h1: ' DigiD', digi_l1: 'DigiD هو تسجيل دخول شخصي للحكومة', digi_l2: 'تحتاجه للرعاية الصحية والضرائب والبلدية', digi_l3: 'لا تشارك DigiD مع أحد أبداً',
        digi_h2: ' BSN والتسجيل', digi_l4: 'BSN ضروري للعمل والرعاية الصحية', digi_l5: 'بدون تسجيل صحيح قد تواجه مشاكل', digi_l6: 'لديك الحق في مساعدة التسجيل',
        digi_h3: ' الرسائل الرسمية', digi_l7: 'رسائل البلدية أو الحكومة مهمة', digi_l8: 'لديك الحق في شرح إذا لم تفهم', digi_l9: 'يمكنك طلب المساعدة في ملء النماذج',
        hulp_digi_title: '🤝 أين تحصل على المساعدة؟ — DigiD والوثائق', hulp_digi_sub: 'منظمات يمكنها مساعدتك', hulp_digi_safe: 'الأنظمة الهولندية قد تكون معقدة. سنساعدك خطوة بخطوة.',

        org_jl_h: '⚖️ المكتب القانوني', org_jl_l1: 'استشارات قانونية مجانية', org_jl_l2: 'يمكنك الاتصال أو الزيارة أو السؤال عبر الإنترنت', org_jl_web: 'الموقع: juridischloket.nl',
        org_fw_h: ' FairWork', org_fw_l1: 'مساعدة في الاستغلال ومشاكل العمل', org_fw_l2: 'خصيصاً للعمال المهاجرين', org_fw_web: 'الموقع: fairwork.nu',
        org_fnv_h: ' FNV', org_fnv_l1: 'مساعدة في الراتب والفصل', org_fnv_l2: 'نقابة العمال', org_fnv_web: 'الموقع: fnv.nl',
        org_arb_h: ' تفتيش العمل', org_arb_l1: 'الإبلاغ عن الانتهاكات', org_arb_l2: 'يمكنك الإبلاغ بشكل مجهول', org_arb_web: 'الموقع: nlarbeidsinspectie.nl',
        org_gem_h: ' بلدية أمستردام', org_gem_l1: 'المساعدة الاجتماعية', org_gem_l2: 'المكتب الاجتماعي', org_gem_web: 'الموقع: amsterdam.nl',
        org_hc_h: ' لجنة الإيجار', org_hc_l1: 'مساعدة في نزاعات الإيجار', org_hc_l2: 'منظمة مستقلة', org_hc_web: 'الموقع: huurcommissie.nl',
        org_zvl_h: ' خط التأمين الصحي', org_zvl_l1: 'مساعدة في التأمين والديون', org_zvl_l2: 'هاتف: 0800 6426',
        org_ggd_h: ' GGD Amsterdam', org_ggd_l1: 'معلومات عن الصحة والرعاية', org_ggd_web: 'الموقع: ggd.amsterdam.nl',
        org_did_h: ' مساعدة DigiD', org_did_l1: 'مساعدة في التقديم وتسجيل الدخول', org_did_l2: 'هاتف: 088 123 65 55', org_did_web: 'الموقع: digid.nl',
    }
};

// ─── Taalwissel functie (werkt op alle pagina's) ───
let lang = localStorage.getItem('mw_lang') || 'nl';

function setLang(l) {
    lang = l;
    localStorage.setItem('mw_lang', l);
    const t = TRANSLATIONS[l] || TRANSLATIONS['nl'];
    const label = document.getElementById('langLabel');
    if (label) label.textContent = l.toUpperCase();
    const menu = document.getElementById('langMenu');
    if (menu) menu.classList.remove('open');
    ['nl','en','pl','ro','tr','ar'].forEach(x => {
        const btn = document.getElementById('btn-' + x);
        if (btn) btn.classList.toggle('active', x === l);
    });
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });
    document.documentElement.lang = l;
    document.documentElement.dir = (l === 'ar') ? 'rtl' : 'ltr';
}

// ─── Dropdown gedrag ───
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('langToggle');
    if (toggle) {
        toggle.addEventListener('click', e => {
            e.stopPropagation();
            document.getElementById('langMenu').classList.toggle('open');
        });
    }
    document.addEventListener('click', () => {
        const menu = document.getElementById('langMenu');
        if (menu) menu.classList.remove('open');
    });

    // Herstel opgeslagen taal bij laden
    const saved = localStorage.getItem('mw_lang');
    if (saved) setLang(saved);
});
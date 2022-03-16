export default {
    home: {
        head: {
            lead: 'Creative and Dev from austria',
            marking:
                'Das ist ein Beispiel Text, um zu zeigen, was hier stehen könnte. Das hier könnte eine Produktbeschreibung oder eine Projektbeschreibung sein.',
        },
        'section-1': {
            intro: 'Ich arbeite mit Unternehmen und Agenturen unterschiedlichster Form und Größe zusammen, um <b>Webdesigns & Filmarbeiten</b> zu erstellen, die einen bleibenden Eindruck hinterlassen. Ich bin immer auf der Suche nach neuen und spannenden Projekten, also <b>lassen Sie uns zusammenarbeiten.</b>',
        },
        'section-3': {
            headline: 'Welche Leistungen <br>ich anbiete',
            services: {
                1: {
                    title: 'Web Entwicklung',
                    text: 'Binden Sie Nutzer mit einzigartigen digitalen Erlebnissen',
                },
                2: {
                    title: 'Filmproduktion',
                    text: 'Erzählen Sie mit hochwertigem Film große Geschichten',
                },
                3: {
                    title: 'Branding',
                    text: 'Erstellen Sie einzigartige digitale und analoge Auftritte',
                },
            },
        },
        'section-4': {
            headline: 'Ready for take-off?',
        },
    },
    profile: {
        head: {
            lead: 'Über mich',
            paragraph:
                'I work with brands, businesses, and agencies of all different shapes and sizes from all around the world to create web designs that leave a lasting impression. I’m always looking to get my teeth stuck into new and exciting projects, so let’s collaborate﻿.',
            marking:
                'Das ist ein Beispiel Text, um zu zeigen, was hier stehen könnte. Das hier könnte eine Produktbeschreibung oder eine Projektbeschreibung sein.',
        },
        'section-1': {
            headline: 'Woher ich komme',
            paragraph:
                'Ich wohne im Herzen der Alpen, Österreich. Das Land mit den betrunkenen Niederländern im Winter und den jodelnden Deutschen im Sommer. Zusätzlich gibt es bei uns so etwas wie Kultur oder so.',
        },
        'section-2': {
            paragraph:
                'In meiner Freizeit gehe ich gerne Skifahren, schaue Basketballspiele oder produziere Videos für mich und meine Freunde.',
        },
    },
    contact: {
        leading: 'Ich freue mich von Ihnen zu hören',
        form: {
            headline: 'Kontakt',
            send: 'Absenden',
            name: {
                title: 'Name',
                placeholder: 'Dein Name',
            },
            email: {
                title: 'E-Mail',
                placeholder: 'Deine E-Mail',
            },
            phone: {
                title: 'Telefonnummer',
                placeholder: 'Deine Telefonnummer',
            },
            message: {
                title: 'Nachricht',
                placeholder: 'Schreib mir eine Nachricht',
            },
        },
        mailSent: 'Die mail wurde versendet!',
    },
    footer: {
        leading: 'In Verbindung bleiben',
        imprint: 'Impressum',
        privacy: 'Datenschutzerklärung',
        agb: 'Allgemeine Geschäftsbedingungen',
    },
    error: {
        404: 'Seite nicht gefunden',
        500: 'Ein Fehler ist aufgetreten',
    },
    cookieconsent: {
        consent_modal: {
            title: 'Es werden Cookies verwendet!',
            description:
                'Hallo, diese Website verwendet notwendige Cookies um den ordnungsgemäßen Betrieb der Website zu gewährleisten, und Tracking-Cookies, um zu verstehen, wie Sie mit der Website interagieren. Letztere werden nur nach Zustimmung gesetzt. <button type="button" data-cc="c-settings" class="cc-link">Lass mich entscheiden</button>',
            primary_btn: {
                text: 'Alles akzeptieren',
                role: 'accept_all', // 'accept_selected' or 'accept_all'
            },
            secondary_btn: {
                text: 'Alle ablehnen',
                role: 'accept_necessary', // 'settings' or 'accept_necessary'
            },
        },
        settings_modal: {
            title: 'Cookie Einstellungen',
            save_settings_btn: 'Speichern',
            accept_all_btn: 'Alle akzeptieren',
            reject_all_btn: 'Alle ablehnen',
            close_btn_label: 'Schließen',
            cookie_table_headers: [
                { col1: 'Name' },
                { col2: 'Domain' },
                { col3: 'Ablauf' },
                { col4: 'Beschreibung' },
            ],
            blocks: [
                {
                    title: 'Verwendung von Cookies 📢',
                    description:
                        'Es werden Cookies verwendet, um die grundlegenden Funktionen der Website zu gewährleisten und um Ihr Online-Erlebnis zu verbessern. Sie können für jede Kategorie wählen, ob Sie sich annehmen oder ablehnen möchten. Für weitere Einzelheiten zu Cookies und anderen sensiblen Daten lesen Sie bitte die vollständige <a href="https://raphaelbernhart.at/imprint" class="cc-link">Datenschutzerklärung</a>.',
                },
                {
                    title: 'Notwendige Cookies',
                    description:
                        'Diese Cookies sind für das ordnungsgemäße Funktionieren meiner Website unerlässlich. Ohne diese Cookies würde die Website nicht richtig funktionieren',
                    toggle: {
                        value: 'necessary',
                        enabled: true,
                        readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
                    },
                },
                {
                    title: 'Performance and Analytics Cookies',
                    description:
                        'Diese Cookies ermöglichen es der Website, sich an die von Ihnen in der Vergangenheit getroffenen Auswahlen zu erinnern',
                    toggle: {
                        value: 'analytics', // your cookie category
                        enabled: false,
                        readonly: false,
                    },
                    cookie_table: [
                        // list of all expected cookies
                        {
                            col1: '^_ga', // match all cookies starting with "_ga"
                            col2: 'google.com',
                            col3: '2 years',
                            col4: 'description ...',
                            is_regex: true,
                        },
                        {
                            col1: '_gid',
                            col2: 'google.com',
                            col3: '1 day',
                            col4: 'description ...',
                        },
                    ],
                },
                {
                    title: 'Advertisement and Targeting cookies',
                    description:
                        'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                    toggle: {
                        value: 'targeting',
                        enabled: false,
                        readonly: false,
                    },
                },
                {
                    title: 'More information',
                    description:
                        'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourcontactpage">contact us</a>.',
                },
            ],
        },
    },
};

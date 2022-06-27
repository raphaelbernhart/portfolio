export default {
    home: {
        meta: {
            description:
                'Professionelle Webentwicklung und Videoproduktion. Aquirieren Sie neue Kunden mit einem Werbevideo oder einer kreativen Landingpage.',
        },
        head: {
            lead: 'Creative and Dev from austria',
            marking:
                'Hi, das ist die Portfolio Seite von mir...Raphael. Ich bin Web-Entwickler (Front- und Backend), Videoproduzent und Grafikdesigner. Scrollen Sie nach unten und erfahren Sie mehr :)',
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
    works: {
        meta: {
            description:
                'Meine bisherigen Arbeiten aus Ausbildung und Freelance Arbeit. Hier werden meine Projekte aufgelistet.',
        },
    },
    profile: {
        meta: {
            description:
                'Erfahre mehr und lerne mich als Person kennen. Mach dir ein Bild von mir zu machen und zu schaue dir meine Firmenphilosophie an. Auch meine bisherigen Ausbildungen und Arbeitsstellen werden hier aufgelistet.',
        },
        head: {
            lead: 'Über mich',
            paragraph: `Hier erfährst du woher ich komme, welche Ausbildung ich genossen habe, was ich in meiner Freizeit so mache und wo ich schon gearbeitet habe. Solltest du noch weitere Fragen haben oder willst dich einfach mit mir in Verbindung setzten, schreibe mir gerne <nuxt-link class="font-bold text-primary cursor-pointer underline" :to="{ path: '/contact' }">hier.</nuxt-link>`,
            marking:
                'Das bin ich :) Weiter unten erfährst du mehr über mich und was ich bis jetzt so gemacht habe!',
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
        'section-3': {
            headline: 'Meine bisherige Laufbahn',
        },
    },
    contact: {
        meta: {
            description:
                'Kontaktiere mich um eine Zusammenarbeit realisieren zu können. Solltest du Fragen noch Fragen haben kannst du dich gerne melden.',
        },
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
    applications: {
        uncoverLetter: {
            whoIAm: 'Wer ich bin',
            thingsILove: 'Dinge die ich liebe',
            education: 'Ausbildung',
            skills: 'Skills',
            workExperiences: 'Arbeits<br/>erfahrung',
            futureGoals: 'Ziele',
        },
        links: {
            works: {
                title: 'Meine Arbeiten',
                subTitle: 'Finde meine Arbeiten hier',
            },
            contact: {
                title: 'Kontakt',
                subTitle: 'Bleiben wir in Kontakt',
            },
        },
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
                'Hi, diese Website verwendet nur notwendige Cookies um den ordnungsgemäßen Betrieb der Website zu gewährleisten. Bei mir wird Privatsphäre großgeschrieben, deshalb werden weder Performance and Analytics, noch Advertisement and Targeting Cookies verwendet. <button type="button" data-cc="c-settings" class="cc-link">Mehr Information</button>',
            primary_btn: {
                text: 'Super!',
                role: 'accept_all', // 'accept_selected' or 'accept_all'
            },
            // secondary_btn: {
            //     text: 'Alle ablehnen',
            //     role: 'accept_necessary', // 'settings' or 'accept_necessary'
            // },
        },
        settings_modal: {
            title: 'Cookie Einstellungen',
            save_settings_btn: 'Speichern',
            accept_all_btn: 'Akzeptieren',
            // reject_all_btn: 'Alle ablehnen',
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
                        'Es werden Cookies verwendet, um die grundlegenden Funktionen der Website zu gewährleisten und nicht mehr. Für weitere Einzelheiten zu Cookies und anderen sensiblen Daten lesen Sie bitte die vollständige <a href="https://raphaelbernhart.at/imprint" class="cc-link">Datenschutzerklärung</a>.',
                },
                {
                    title: 'Notwendige Cookies',
                    description:
                        'Diese Cookies sind für das ordnungsgemäße Funktionieren dieser Website unerlässlich. Ohne diese Cookies würde die Website nicht richtig funktionieren',
                    toggle: {
                        value: 'necessary',
                        enabled: true,
                        readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
                    },
                    cookie_table: [
                        // list of all expected cookies
                        {
                            col1: 'cc_cookie', // name
                            col2: '.raphaelbernhart.at', // domain
                            col3: '6 Monate', // ablauf
                            col4: 'Dieser Cookie wird verwendet um das Cookie Bestätigungsfeld nur jedes halbe Jahr akzeptieren zu müssen. Wenn Sie auf Alles akzeptieren klicken, werden Sie beim nächsten Besuch nicht wieder gefragt.', // description
                        },
                        {
                            col1: 'i18n_redirected', // name
                            col2: 'raphaelbernhart.at', // domain
                            col3: '1 Jahr', // ablauf
                            col4: 'Mit diesem cookie wird gespeichert welche Sprache Sie verwenden, um es nicht jedes mal beim wechseln einer Seite auswählen zu müssen.', // description
                        },
                    ],
                },
                {
                    title: 'Mehr Information',
                    description:
                        'Bei Fragen zu unseren Cookies, wie damit umgegangen wird oder Ihre Auswahl bitte <a class="cc-link" href="https://raphaelbernhart.at/contact">kontaktieren Sie mich</a>.',
                },
            ],
        },
    },
};

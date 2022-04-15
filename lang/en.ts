export default {
    home: {
        meta: {
            description:
                'Professional web development and video production. Acquire new customers with a promotional video or creative landing page.',
        },
        head: {
            lead: 'Creative and Dev from Austria',
            marking:
                'This is a sample text to show what could be here. This could be a product description or a project description.',
        },
        'section-1': {
            intro: "I work with brands and agencies of all different shapes and sizes to create web designs and films that leave a lasting impression. I'm always looking to get my teeth stuck into new and exciting projects, so let's collaborate!.",
        },
        'section-3': {
            headline: 'What services <br>I offer',
            services: {
                1: {
                    title: 'Web Development',
                    text: 'Engage users with unique Digital Experiences',
                },
                2: {
                    title: 'Production',
                    text: 'Tell great stories with high-quality film',
                },
                3: {
                    title: 'Branding',
                    text: 'Create unique digital and analog Appearances',
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
                'My previous work from education and freelance work. Here are listed my projects.',
        },
    },
    profile: {
        meta: {
            description:
                'Learn more and get to know me as a person. Get a picture of me and have a look at my company philosophy. Also my previous apprenticeships and jobs are listed here.',
        },
        head: {
            lead: 'About me',
            paragraph:
                'I work with brands, businesses, and agencies of all different shapes and sizes from all around the world to create web designs that leave a lasting impression. I’m always looking to get my teeth stuck into new and exciting projects, so let’s collaborate﻿.',
            marking:
                'This is a sample text to show what could be here. This could be a product description or a project description.',
        },
        'section-1': {
            headline: "Where I'm located",
            paragraph:
                'I live in the heart of the Alps, Austria. The country with the drunken Dutchman in winter and the yodeling Germans in summer. Furthermore, we have something like culture or so',
        },
        'section-2': {
            paragraph:
                'On my free time I am going backcountry skiing, watching basketball games or producing videos for me and my friends.',
        },
        'section-3': {
            headline: 'My career',
        },
    },
    contact: {
        meta: {
            description:
                'Contact me to be able to realize a collaboration. If you have any questions, please feel free to contact me.',
        },
        leading: "I'd love to hear from you",
        form: {
            headline: 'Contact',
            send: 'Submit',
            name: {
                title: 'Name',
                placeholder: 'Your Name',
            },
            email: {
                title: 'Email',
                placeholder: 'Your Email',
            },
            phone: {
                title: 'Phone Number',
                placeholder: 'Your Phone Number',
            },
            message: {
                title: 'Message',
                placeholder: 'Enter your message',
            },
        },
        mailSent: 'The mail was sent!',
    },
    footer: {
        leading: "Let's stay <br>in touch",
        imprint: 'Imprint',
        privacy: 'Privacy Policy',
        agb: 'Terms and Conditions',
    },
    error: {
        404: 'Page not found',
        500: 'An error occured',
    },
    cookieconsent: {
        consent_modal: {
            title: 'We use cookies!',
            description:
                'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
            primary_btn: {
                text: 'Accept all',
                role: 'accept_all', // 'accept_selected' or 'accept_all'
            },
            secondary_btn: {
                text: 'Reject all',
                role: 'accept_necessary', // 'settings' or 'accept_necessary'
            },
        },
        settings_modal: {
            title: 'Cookie preferences',
            save_settings_btn: 'Save settings',
            accept_all_btn: 'Accept all',
            reject_all_btn: 'Reject all',
            close_btn_label: 'Close',
            cookie_table_headers: [
                { col1: 'Name' },
                { col2: 'Domain' },
                { col3: 'Expiration' },
                { col4: 'Description' },
            ],
            blocks: [
                {
                    title: 'Cookie usage 📢',
                    description:
                        'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.',
                },
                {
                    title: 'Strictly necessary cookies',
                    description:
                        'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                    toggle: {
                        value: 'necessary',
                        enabled: true,
                        readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
                    },
                },
                {
                    title: 'Performance and Analytics cookies',
                    description:
                        'These cookies allow the website to remember the choices you have made in the past',
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

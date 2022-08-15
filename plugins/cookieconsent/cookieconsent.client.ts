import { Plugin } from '@nuxt/types';
import './cookieconsent.css';
import 'vanilla-cookieconsent/dist/cookieconsent.js';
import de from '../../lang/de';
import en from '../../lang/en';

const cookieConsentPlugin: Plugin = () => {
    document.body.classList.toggle('c_darkmode');

    // @ts-ignore
    const cookieConsent = window.initCookieConsent();
    cookieConsent.run({
        current_lang: 'de',
        autoclear_cookies: false, // default: false
        page_scripts: false, // default: false
        autolanguage: 'browser',
        languages: {
            de: de.cookieconsent,
            en: en.cookieconsent,
        },
        gui_options: {
            consent_modal: {
                layout: 'cloud', // box/cloud/bar
                position: 'bottom left', // bottom/middle/top + left/right/center
                transition: 'slide', // zoom/slide
                swap_buttons: false, // enable to invert buttons
            },
            settings_modal: {
                layout: 'box', // box/bar
                // position: 'left',           // left/right
                transition: 'slide', // zoom/slide
            },
        },
    });

    return cookieConsent;
};

export default cookieConsentPlugin;

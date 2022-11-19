import de from '../lang/de';
import en from '../lang/en';

export default {
    current_lang: 'de',
    autoclear_cookies: false,
    page_scripts: false,
    autolanguage: 'browser',
    languages: {
        de: de.cookieconsent,
        en: en.cookieconsent,
    },
    gui_options: {
        consent_modal: {
            layout: 'cloud',
            position: 'bottom left',
            transition: 'slide',
            swap_buttons: false,
        },
        settings_modal: {
            layout: 'box',
            transition: 'slide',
        },
    },
    styles: {
        dark: {
            enabledByDefault: true,
            bg: '#181b1d',
            text: '#f5f1e6',
            btnPrimaryBg: '#f5f1e6',
            btnPrimaryText: '#000',
            btnPrimaryHover: '#dbd6c5',
            btnSecondaryBg: '#33383c',
            btnSecondaryHover: '#3e454a',
            toggleBgOff: '#f5f1e6',
            toggleBgReadonly: '#454c54',
            blockText: '#b3bfc5',
            cookieCategoryBlockBg: '#23272a',
            cookieCategoryBlockBgHover: '#2b3035',
            sectionBorder: '#292d31',
            cookieTableBorder: '#2b3035',
        },
    },
};

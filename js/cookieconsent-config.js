import '/js/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "middle center",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: "en",
        autoDetect: "browser",
        translations: {
            en: {
                consentModal: {
                    title: "Внимание!",
                    description: "Этот сайт использует файлы cookie.",
                    closeIconLabel: "",
                    acceptAllBtn: "Принять",
                    acceptNecessaryBtn: "Отклонить",
                    showPreferencesBtn: "",
                    footer: "<a href=\"/policy/\">Политика Cookie</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    closeIconLabel: "Close modal",
                    acceptAllBtn: "Принять",
                    acceptNecessaryBtn: "Отклонить",
                    savePreferencesBtn: "Save preferences",
                    serviceCounterLabel: "Service|Services",
                    sections: []
                }
            }
        }
    }
});

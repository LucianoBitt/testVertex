import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        options: {
            customProperties: true,
            variations: false,
            themeCache: {
                get: (key) => localStorage.getItem(key),
                set: (key, value) => localStorage.setItem(key, value),
            },
        },
        themes: {
            light: {
                "primary": "#002198",
                "secondary": "#f2cc0b",
                "accent": "#6ec70b",
                "emphasis": "#fe000d",
                "grey": "#808080",
                "timblack-primary": "#0C3D57",
            },
        },
    },
});
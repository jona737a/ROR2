import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes:{
            blue: {
                primary: '#0D1333',
                secondary: '#0E3A83',
                tertiary: '#2578BE',
                text: '#ADD0E4',
                accent: '#4B74AC',
            },
            red: {
                primary: '#400106',
                secondary: '#59022B',
                tertiary: '#A6032F',
                text: '#F2D479',
                accent: '#D93E30',
            },
            yellow: {
                primary: '#2E2A38',
                secondary: '#59121F',
                tertiary: '#D9765F',
                text: '#F7D5AA',
                accent: '#F29E6D',
            }
        },
    }
});

import Vue from 'vue'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import ExampleComponent from './components/ExampleComponent.vue'

Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    components: { ExampleComponent },
    vuetify: new Vuetify()
});

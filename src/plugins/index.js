import Icons from './fontAwesome';
import loader from '@directive/loader';
import Vuelidate from 'vuelidate';
import InputMask from 'vue-input-mask';
import preloader from '@c/preloader';
import emptyBox from '@c/emptyBox';
import moneyFilter from '@/filters/money';
import mixinCollection from '@/mixins';

export default {
    install(Vue){
        // PLUGINS
        Vue.use(Icons);
        Vue.use(Vuelidate);
        // DIRECTIVES
        Vue.directive('loader',loader);
        // COMPONENTS
        Vue.component('input-mask', InputMask);
        Vue.component('preloader',preloader);
        Vue.component('emptyBox',emptyBox);
        // FILTERS
        Vue.filter('formatMoney',moneyFilter);
        // MIXINS
        Vue.mixin(mixinCollection);
    }
}

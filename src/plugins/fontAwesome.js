import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { dom } from '@fortawesome/fontawesome-svg-core';
// dom.watch();

import {
    faHeart as farHeart, faEnvelope
} from '@fortawesome/free-regular-svg-icons';
import {
    faHeart,
    faAngleUp,
    faAngleDown,
    faAngleLeft,
    faAngleRight,
    faStar,
    faFilter,
    faSort,
    faAngleDoubleDown,
    faAngleDoubleUp,
    faCheck
} from '@fortawesome/free-solid-svg-icons';
 
library.add(
    farHeart,
    faHeart,
    faAngleUp,
    faAngleDown,
    faAngleLeft,
    faAngleRight,
    faStar,
    faFilter,
    faSort,
    faAngleDoubleDown,
    faAngleDoubleUp,
    faCheck,
    faEnvelope
);

export default {
    install(Vue){
        Vue.component('icon', FontAwesomeIcon)
    }
}
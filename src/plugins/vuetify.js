import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import DatetimePicker from 'vuetify-datetime-picker'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);
Vue.use(DatetimePicker);


export default new Vuetify({
    theme: {
        dark: false,
      },
});

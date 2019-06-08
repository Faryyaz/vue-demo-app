import { Component, Vue } from 'vue-property-decorator';
import Form from './form/index.vue';
import Loader from '../../components/loader/index.vue';
import Error from './error/index.vue';
import { EventBus } from '@/event-bus';

@Component({
  components: {
    Form,
    Loader,
    Error
  }
})
export default class Login extends Vue {
  view: any = Form;
  loginErrorMsg: string = "";

  mounted() {
    EventBus.$on('submitted', (view: string)=> {
      this.changeView(view);
    });

    EventBus.$on('loginError', (error: string)=> {
      this.loginErrorMsg = error;
    });

  }

  changeView(view: string) {
    this.view = view;
  }

}
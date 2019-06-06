import { Component, Vue } from 'vue-property-decorator';
import Form from './form/index.vue';
import Loader from './loader/index.vue';
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

  mounted() {

    EventBus.$on('submitted', (param: string)=> {
      this.changeView(param);
    });

  }

  changeView(view: string) {
    this.view = view;
  }

}
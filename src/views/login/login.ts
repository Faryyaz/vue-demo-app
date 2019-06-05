import { Component, Vue } from 'vue-property-decorator';
import Form from './form/index.vue';
import Loader from './loader/index.vue';
import Error from './error/index.vue';

@Component({
  components: {
    Form,
    Loader,
    Error
  }
})
export default class Login extends Vue {
  view: any = Form;

}
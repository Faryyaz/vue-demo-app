import { Component, Vue } from 'vue-property-decorator';
import UserService from '@/_services/user.service';
import router from '@/router';
import { EventBus } from '@/event-bus';

@Component({
  props: ['loginError'],
})
export default class Form extends Vue {
  userService: any;
  returnUrl: any;
  merchantID: string = "";
  password: string = "";
  submitted: boolean = false;
  errMsg: string = 'test';
  err: boolean = false;
  
  mounted () {
    this.userService = new UserService();
    this.merchantID = '';
    this.password = '';

    // reset login status
    this.userService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.$route.query.returnUrl == "/logout" ? "/" : this.$route.query.returnUrl || "/";
  }


  handleSubmit() {
    const { merchantID, password } = this;

    // stop here if form is invalid
    if (!(merchantID && password)) {
      return;
    }

    this.submitted = true;

    // show loading screen on submission
    EventBus.$emit('submitted', 'Loader');

    // this.loading = true;
    this.userService.login(merchantID, password).then(
      (user: any) => router.push(this.returnUrl),
      (error: string) => {
        EventBus.$emit('loginError', error);
        EventBus.$emit('submitted', 'Form');
      }
    );
  }

}
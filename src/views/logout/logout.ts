import { Component, Vue } from 'vue-property-decorator';
import UserService from '@/_services/user.service';

@Component({
})
export default class Logout extends Vue {
  userService: any;

  mounted () {
    this.userService = new UserService();

    // reset login status
    this.userService.logout();
  }

}
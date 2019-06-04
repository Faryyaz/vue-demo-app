import { Component, Vue } from 'vue-property-decorator';
import Header from '../header/index.vue';
import Sidebar from '../sidebar/index.vue';

@Component({
  components: {
    Header,
    Sidebar
  },
})
export default class Layout extends Vue {
  drawerValue = false;

  sidebarToggler() {
    this.drawerValue = !this.drawerValue;
  }

}
import { Component, Vue } from 'vue-property-decorator';
import Header from '../Header/index.vue';
import Sidebar from '../Sidebar/index.vue';

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
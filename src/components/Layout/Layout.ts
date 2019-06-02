import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    
  },
})
export default class Layout extends Vue {
  drawer = false;
  links = [
    {icon: 'dashboard', text: 'Dashboard', route: '/dashboard'},
    {icon: 'euro_symbol', text: 'Best Sellers', route: '/sellers'},
    {icon: 'build', text: 'About', route: '/about'},
    {icon: 'exit_to_app', text: 'Sign Out', route: '/signout'}
  ];

  sidebarToggler() {
    this.drawer = !this.drawer;
  }

}
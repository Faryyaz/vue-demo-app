import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: ['mini'],
  components: {
    
  },
})
export default class Sidebar extends Vue {
  drawer: boolean = true;

  links = [
    {icon: 'dashboard', text: 'Dashboard', route: '/dashboard'},
    {icon: 'euro_symbol', text: 'Best Sellers', route: '/sellers'},
    {icon: 'build', text: 'About', route: '/about'},
    {icon: 'exit_to_app', text: 'Logout', route: '/logout'}
  ];

}
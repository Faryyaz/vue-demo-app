import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: ['drawer'],
  components: {
    
  },
})
export default class Sidebar extends Vue {
  
  links = [
    {icon: 'dashboard', text: 'Dashboard', route: '/dashboard'},
    {icon: 'euro_symbol', text: 'Best Sellers', route: '/sellers'},
    {icon: 'build', text: 'About', route: '/about'},
    {icon: 'exit_to_app', text: 'Logout', route: '/logout'}
  ];

}
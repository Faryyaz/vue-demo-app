import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {

  },
})
export default class Login extends Vue {
  headers = [
    {
      text: 'Thumbnail',
      align: 'left',
      sortable: false,
      value: 'thumbnail'
    },
    { text: 'Title', value: 'title' },
    { text: 'SKU', value: 'sku' },
    { text: 'Min price', value: 'min' },
    { text: 'Max price', value: 'max' },
    { text: 'Repricing', sortable: false, value: 'repricing' }
  ];

  products = [
    {
      thumbnail: 'Frozen Yogurt',
      title: 159,
      sku: 6.0,
      min: 4.0,
      max: 24,
      repricing: false
    },
    {
      thumbnail: 'Product',
      title: 160,
      sku: 6.0,
      min: 4.0,
      max: 24,
      repricing: false
    },
  ];

}
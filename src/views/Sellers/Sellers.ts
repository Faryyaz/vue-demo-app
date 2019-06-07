import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {

  },
})
export default class Login extends Vue {
  headers = [
    {
      text: 'Thumbnail',
      align: 'center',
      sortable: false,
      value: 'thumbnail'
    },
    { text: 'Title', value: 'title' },
    { text: 'SKU', value: 'sku' },
    { text: 'Min price', value: 'min' },
    { text: 'Max price', value: 'max' },
    { text: 'Repricing', sortable: false, value: 'repricing' }
  ];

  products: 
    {
      thumbnail: string,
      title: string,
      sku: string,
      min: number,
      max: number,
      repricing: boolean
    }[] = [];

  mounted() {
    this.get();
  }


  get() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          this.products = [
            {
              thumbnail: 'https://via.placeholder.com/150/DDDDDD/555555?text=Product+A',
              title: 'Product A',
              sku: 'PAFR0001',
              min: 4.0,
              max: 24,
              repricing: false
            },
            {
              thumbnail: 'https://via.placeholder.com/150/DDDDDD/555555?text=Product+B',
              title: 'Product B',
              sku: 'PBFR0002',
              min: 4.0,
              max: 24,
              repricing: false
            }
          ]
        );
      }, 3000);
    });
  }



}
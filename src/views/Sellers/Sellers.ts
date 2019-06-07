import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
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
    { text: 'Min price', value: 'min', width: "200px" },
    { text: 'Max price', value: 'max', width: "200px" },
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

    validations = {
      min: [
        (v: number) => !!v || 'Min price is required',
        (v: number) => v >= 0.01 || 'Min price cannot be less than € 0.01'
      ],
      max: [
        (v: number) => !!v || 'Max price is required',
        (v: number) => v >= 0.01 || 'Max price cannot be less than € 0.01'
      ]
    };

    

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
              min: 7,
              max: 56,
              repricing: false
            }
          ]
        );
      }, 1000);
    });
  }

}
import { Component, Vue } from 'vue-property-decorator';

@Component({
})
export default class Sellers extends Vue {
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
      [key:string]: any
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

    valid: boolean = true;
    submitted: boolean = false;
    view: string = "Loader";
    

  mounted() {
    this.get();
  }


  get() {
    this.view = "Loader";
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          this.products = [
            {
              thumbnail: 'https://via.placeholder.com/100/DDDDDD/555555?text=Product+A',
              title: 'Product A',
              sku: 'PAFR0001',
              min: this.formatPrice(5),
              max: this.formatPrice(25),
              repricing: false
            },
            {
              thumbnail: 'https://via.placeholder.com/100/DDDDDD/555555?text=Product+B',
              title: 'Product B',
              sku: 'PBFR0002',
              min: this.formatPrice(2),
              max: this.formatPrice(5),
              repricing: false
            }
          ]
        );
      }, 10000);
    }).then(()=>{
        this.view = "Table";
      }
    );
  }

  handleSubmit() {
    // form is valid therefore we can submit
    if (this.valid) {
      this.view = "Success";
      // send the pricing list here
    }
  }

  formatPriceOnBlur(key: string, index: number) {
    let productPrice = this.products[index][key];
    this.products[index][key] = this.formatPrice(productPrice);
  }

  formatPrice(value: number) {
    return (Math.round(value * 100) / 100).toFixed(2);
  }

}
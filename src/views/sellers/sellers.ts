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
              min: this.formatPrice(5.3),
              max: this.formatPrice(25.5),
              repricing: false
            },
            {
              thumbnail: 'https://via.placeholder.com/100/DDDDDD/555555?text=Product+B',
              title: 'Product B',
              sku: 'PBFR0002',
              min: this.formatPrice(2.3),
              max: this.formatPrice(5.34),
              repricing: false
            },
            {
              thumbnail: 'https://via.placeholder.com/100/DDDDDD/555555?text=Product+C',
              title: 'Product C',
              sku: 'PCFR0003',
              min: this.formatPrice(5.87),
              max: this.formatPrice(8.7),
              repricing: false
            },
            {
              thumbnail: 'https://via.placeholder.com/100/DDDDDD/555555?text=Product+D',
              title: 'Product D',
              sku: 'PDFR0004',
              min: this.formatPrice(1.23),
              max: this.formatPrice(29.98),
              repricing: false
            },
            {
              thumbnail: 'https://via.placeholder.com/100/DDDDDD/555555?text=Product+E',
              title: 'Product E',
              sku: 'PEFR0005',
              min: this.formatPrice(7.67),
              max: this.formatPrice(7.89),
              repricing: false
            },
            {
              thumbnail: 'https://via.placeholder.com/100/DDDDDD/555555?text=Product+F',
              title: 'Product F',
              sku: 'PFFR0006',
              min: this.formatPrice(2.45),
              max: this.formatPrice(5.89),
              repricing: false
            },
            {
              thumbnail: 'https://via.placeholder.com/100/DDDDDD/555555?text=Product+G',
              title: 'Product G',
              sku: 'PGFR0007',
              min: this.formatPrice(2.77),
              max: this.formatPrice(4.67),
              repricing: false
            },
            {
              thumbnail: 'https://via.placeholder.com/100/DDDDDD/555555?text=Product+H',
              title: 'Product H',
              sku: 'PHFR0008',
              min: this.formatPrice(1.67),
              max: this.formatPrice(7.78),
              repricing: false
            },
            {
              thumbnail: 'https://via.placeholder.com/100/DDDDDD/555555?text=Product+I',
              title: 'Product I',
              sku: 'PBFR0009',
              min: this.formatPrice(2.67),
              max: this.formatPrice(5.54),
              repricing: false
            },
            {
              thumbnail: 'https://via.placeholder.com/100/DDDDDD/555555?text=Product+J',
              title: 'Product J',
              sku: 'PJFR0010',
              min: this.formatPrice(2.43),
              max: this.formatPrice(5.67),
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
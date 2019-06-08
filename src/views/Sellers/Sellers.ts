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
              min: 4.0,
              max: 24,
              repricing: false
            },
            {
              thumbnail: 'https://via.placeholder.com/100/DDDDDD/555555?text=Product+B',
              title: 'Product B',
              sku: 'PBFR0002',
              min: 7,
              max: 56,
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



}
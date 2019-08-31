import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Layout extends Vue {
  weight: number | null = null;
  amount: number | null = null;
  collection: Array<Object> = [];

  add() {
    let bracket = {
      weight: this.weight,
      amount: this.amount
    }

    this.collection.push(bracket);

    this.weight = null;
    this.amount = null;
  }

  remove(index: number) {
    this.collection.splice(index, 1);
  }


}
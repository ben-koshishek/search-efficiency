<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Input number</div>

          <div class="card-body">
            <input type="number" placeholder="input number from 0 to 1000" v-model="number" min="1" max="1000">
            <button>Ok</button>
          </div>

          <span v-if="number">Your number is {{number}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import bruteForceSearch from './mixins/bruteForceSearch'
  import mergeSort from './mixins/mergeSort'
  import quickSort from './mixins/quickSort'
  import treeSort from './mixins/treeSort'

  export default {
    name: 'Index',
    mixins: [ bruteForceSearch, mergeSort, quickSort, treeSort ],
    data() {
      return {
        number: 100,
        randomNumbers: [],
        bruteForceAccessCounter: 0,
        bruteForceOccurrencesCounter: 0,
        bruteForceOperationCounter: 0,
        mergeSortAccessCounter: 0,
        mergeSortOccurrencesCounter: 0,
        mergeSortOperationCounter: 0,
        quickSortAccessCounter: 0,
        quickSortOccurrencesCounter: 0,
        quickSortOperationCounter: 0,
        treeSortAccessCounter: 0,
        treeSortOccurrencesCounter: 0,
        treeSortOperationCounter: 0,
      }
    },
    computed: {
      randomNumber() {
        return this.randomNumbers[Math.floor(Math.random() * 10)];
      }
    },
    mounted() {
      this.setListOfRandomNumbers();
      console.log(this.bruteForceSearch());
      console.log(this.countMergeSortEfficiency());
      console.log(this.countQuickSortEfficiency());
      console.log(this.countTreeSortEfficiency());
    },
    methods: {
      setListOfRandomNumbers() {
        this.randomNumbers = Array.from({length: 15}, () => Math.floor(Math.random() * 10));
      },
    }
  }
</script>
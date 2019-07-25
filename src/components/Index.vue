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
        number: 1000,
        randomNumbers: [],
        bruteForceAccessCounter: 0,
        bruteForceOccurrencesCounter: 0,
        bruteForceOperationCounter: 0,

        mergeSortAccessCounter: 0,
        mergeSortOperationCounter: 0,
        mergeSearchAccessCounter: 0,
        mergeSearchOperationCounter: 0,
        mergeFindAccessCounter: 0,
        mergeFindOperationCounter: 0,
        mergeSortOccurrencesCounter: 0,

        quickSortAccessCounter: 0,
        quickSortOperationCounter: 0,
        quickSearchAccessCounter: 0,
        quickSearchOperationCounter: 0,
        quickFindAccessCounter: 0,
        quickFindOperationCounter: 0,
        quickSortOccurrencesCounter: 0,

        treeSortAccessCounter: 0,
        treeSortOperationCounter: 0,
        treeFindAccessCounter: 0,
        treeFindOperationCounter: 0,
        treeSortOccurrencesCounter: 0,

        maxArrayLength: 100000
      }
    },
    computed: {
      randomNumber() {
        return this.randomNumbers[Math.floor(Math.random() * this.maxArrayLength)];
      }
    },
    mounted() {
      this.setListOfRandomNumbers();

      console.log(this.countBruteForceSearchEfficiency(), 'brute');
      console.log(this.countMergeSortEfficiency(), 'merge');
      console.log(this.countQuickSortEfficiency(), 'quick');
      console.log(this.countTreeSortEfficiency(), 'sort');
    },
    methods: {
      setListOfRandomNumbers() {
        this.randomNumbers = Array.from({length: this.maxArrayLength}, () => Math.floor(Math.random() * 1000));
      },
    }
  }
</script>
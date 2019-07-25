export default {
    methods: {
        countBruteForceSearchEfficiency() {
            let unsortedArray = this.randomNumbers.slice(0);
            let target = this.randomNumber;

            unsortedArray.forEach((number) => {
                this.bruteForceAccessCounter++;
                this.bruteForceOperationCounter++;

                if (number === target) {
                    this.bruteForceOccurrencesCounter++
                }
            });

            return {
                'bruteForceAccessCounter': this.bruteForceAccessCounter,
                'bruteForceOperationCounter': this.bruteForceOperationCounter,
                'bruteForceOccurrencesCounter': this.bruteForceOccurrencesCounter
            };
        },
    }
}

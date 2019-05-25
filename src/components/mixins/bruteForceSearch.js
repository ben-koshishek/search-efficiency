export default {
    methods: {
        bruteForceSearch() {
            let unsortedArray = this.randomNumbers;
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

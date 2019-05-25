export default {
    methods: {
        countMergeSortEfficiency() {
            let unsortedArray = this.randomNumbers;
            let target = this.randomNumber;

            let sortedArray = this.mergeSort(unsortedArray);

            let index = this.mergeSortBinarySearch(sortedArray, target);
            this.mergeSortCountTarget(sortedArray, index, target);

            return {
                'mergeSortAccessCounter': this.mergeSortAccessCounter,
                'mergeSortOperationCounter': this.mergeSortOperationCounter,
                'mergeSortOccurrencesCounter': this.mergeSortOccurrencesCounter,
            };
        },
        mergeSort(unsortedArray) {
            if (unsortedArray.length === 1) {
                return unsortedArray
            }

            const middle = Math.floor(unsortedArray.length / 2);
            const left = unsortedArray.slice(0, middle); // is this counting?
            const right = unsortedArray.slice(middle);

            return this.merge(
                this.mergeSort(left),
                this.mergeSort(right)
            )
        },
        merge (left, right) {
            let result = [];
            let indexLeft = 0;
            let indexRight = 0;

            while (indexLeft < left.length && indexRight < right.length) {
                if (left[indexLeft] < right[indexRight]) {
                    result.push(left[indexLeft]);
                    indexLeft++
                } else {
                    result.push(right[indexRight]);
                    indexRight++
                }

                this.mergeSortAccessCounter += 3;
                this.mergeSortOperationCounter += 3;
            }

            return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
        },
        mergeSortBinarySearch(array, target){
            let startIndex = 0;
            let endIndex = array.length - 1;

            while(startIndex <= endIndex) {
                let middleIndex = Math.floor((startIndex + endIndex) / 2);

                this.mergeSortAccessCounter++;
                this.mergeSortOperationCounter++;

                if(target === array[middleIndex]) {
                    return middleIndex;
                }

                if(target > array[middleIndex]) {
                    startIndex = middleIndex + 1;
                }

                if(target < array[middleIndex]) {
                    endIndex = middleIndex - 1;
                }

                this.mergeSortAccessCounter++;
                this.mergeSortOperationCounter++;
            }+
        },
        mergeSortCountTarget(array, index, target) {
            let leftIndex = index;
            let rightIndex = index + 1;

            while (array[rightIndex] === target) {
                this.mergeSortAccessCounter++;
                this.mergeSortOperationCounter++;
                this.mergeSortOccurrencesCounter += 1;

                rightIndex++;
            }

            while (array[leftIndex] === target) {
                this.mergeSortAccessCounter++;
                this.mergeSortOperationCounter++;
                this.mergeSortOccurrencesCounter += 1;

                leftIndex--;
            }
        }
    }
}

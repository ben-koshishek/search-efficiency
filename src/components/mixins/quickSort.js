export default {
    methods: {
        countQuickSortEfficiency() {
            let unsortedArray = this.randomNumbers.slice(0);
            let target = this.randomNumber;

            let sortedArray = this.quickSort(unsortedArray);

            let index = this.quickSortBinarySearch(sortedArray, target);
            this.quickSortCountTarget(sortedArray, index, target);

            return {
                'quickSortAccessCounter': this.quickSortAccessCounter,
                'quickSortOperationCounter': this.quickSortOperationCounter,

                'quickSearchAccessCounter': this.quickSearchAccessCounter,
                'quickSearchOperationCounter': this.quickSearchOperationCounter,

                'quickFindAccessCounter': this.quickFindAccessCounter,
                'quickFindOperationCounter': this.quickFindOperationCounter,

                'quickSortOccurrencesCounter': this.quickSortOccurrencesCounter,
            };
        },
        quickSort(array, left = 0, right = array.length - 1) {
            if (left >= right) {
                return;
            }

            const pivot = array[Math.floor((left + right) / 2)];
            this.quickSortAccessCounter++;
            const index = this.partition(array, left, right, pivot);

            this.quickSort(array, left, index - 1);
            this.quickSort(array, index, right);

            return array;
        },
        partition(array, left, right, pivot) {
            while (left <= right) {
                this.quickSortOperationCounter++;

                while (array[left] < pivot) {
                    this.quickSortOperationCounter++;
                    this.quickSortAccessCounter++;

                    left++;
                }

                this.quickSortOperationCounter++;

                while (array[right] > pivot) {
                    this.quickSortOperationCounter++;

                    right--;
                }

                this.quickSortOperationCounter++;

                if (left <= right) {
                    this.quickSortOperationCounter++;

                    [array[left], array[right]] = [array[right], array[left]];
                    left++;
                    right--;

                    this.quickSortAccessCounter += 4;
                    this.quickSortOperationCounter += 2;

                }
            }

            return left;
        },
        quickSortBinarySearch(array, target){
            let startIndex = 0;
            let endIndex = array.length - 1;

            while(startIndex <= endIndex) {
                let middleIndex = Math.floor((startIndex + endIndex) / 2);

                this.quickSearchAccessCounter++;
                this.quickSearchOperationCounter++;

                if(target === array[middleIndex]) {
                    return middleIndex;
                }

                if(target > array[middleIndex]) {
                    startIndex = middleIndex + 1;
                }

                if(target < array[middleIndex]) {
                    endIndex = middleIndex - 1;
                }

                this.quickSearchAccessCounter++;
                this.quickSearchOperationCounter++;
            }
        },
        quickSortCountTarget(array, index, target) {
            let leftIndex = index;
            let rightIndex = index + 1;

            while (array[rightIndex] === target) {
                this.quickFindAccessCounter++;
                this.quickFindOperationCounter++;
                this.quickSortOccurrencesCounter++;

                rightIndex++;
            }

            while (array[leftIndex] === target) {
                this.quickFindAccessCounter++;
                this.quickFindOperationCounter++;
                this.quickSortOccurrencesCounter++;

                leftIndex--;
            }
        }
    }
}

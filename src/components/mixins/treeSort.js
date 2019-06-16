export default {
    methods: {
        countTreeSortEfficiency() {
            let array = this.randomNumbers,
                tree = array.reduce(this.insertBinTree, void 0),
                target = this.find(tree, this.randomNumber);

            this.treeSortOccurrencesCounter = target.count;

            return {
                'treeSortAccessCounter': this.treeSortAccessCounter,
                'treeSortOperationCounter': this.treeSortOperationCounter,
                'treeSortOccurrencesCounter': this.treeSortOccurrencesCounter,
            };
        },
        insertBinTree (t = {value: void 0, left: void 0, right: void 0}, v, count = 1){
            if (t.value !== void 0) {
                if (t.value === v) {
                    t.count++;
                } else if (t.value > v) {
                    t.left = this.insertBinTree(t.left,v);
                } else {
                    t.right = this.insertBinTree(t.right,v)
                }
            } else {
                t = {value: v, count: count};
            }


            return t;
        },

        find(tree, target){
            let t = tree;
            if (tree.value !== target) {
                if(tree.right && target > tree.value){
                    t = this.find(tree.right, target)
                } else {
                    t = this.find(tree.left, target)
                }
            }

            return t;
        }
    }
}

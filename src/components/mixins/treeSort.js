export default {
    methods: {
        countTreeSortEfficiency() {
            let array = [8, 10, 12, 5, 3, 6],
                tree = array.reduce((t, v) => t ? this.insertNode(t, v) : new this.Node(v), null);
            console.log(tree);
            return {
                'treeSortOccurrencesCounter': this.treeSortOccurrencesCounter,
                'treSortOperationCounter': this.treeSortOperationCounter
            };
        },
        insertNode(tree, value) {
            let node = tree, key;

            while (node.value !== value) {
                key = value < node.value ? 'left' : 'right';
                if (!node[key]) {
                    node[key] = new this.Node(value);
                    break;
                }
                node = node[key];
            }
            return tree;
        },
        Node(value) {
            this.value = value;
        },
    }
}

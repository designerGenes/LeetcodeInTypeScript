export class Tree {
    constructor(root) {
        this.root = root;
    }
    insert(value) {
        const newBranch = new Branch(value);
        if (this.root === null) {
            this.root = newBranch;
        }
        else {
            this.insertBranch(this.root, newBranch);
        }
    }
    insertBranch(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertBranch(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertBranch(node.right, newNode);
            }
        }
    }
    static fromList(list) {
        const root = new Branch(list.shift());
        const newTree = new Tree(root);
        while (list.length) {
            newTree.insert(list.shift());
        }
        return newTree;
    }
}
export class Branch {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    isLeaf() {
        return this.left === null && this.right === null;
    }
}
//# sourceMappingURL=BinaryTree.js.map
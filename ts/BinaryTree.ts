export type BranchValueType = number | string | object;

export class Tree<T extends BranchValueType> {
  root: Branch<T>;

  constructor(root: Branch<T>) {
    this.root = root;
  }

  insert(value: T) {
    const newBranch = new Branch(value);
    if (this.root === null) {
      this.root = newBranch;
    } else {
      this.insertBranch(this.root, newBranch);
    }
  }

  insertBranch(node: Branch<T>, newNode: Branch<T>) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertBranch(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertBranch(node.right, newNode);
      }
    }
  }

  static fromList<V extends BranchValueType>(list: [V]): Tree<V> {
    const root = new Branch(list.shift());
    const newTree = new Tree(root);
    while (list.length) {
      newTree.insert(list.shift());
    }
    return newTree;
  }
}

export class Branch<T extends BranchValueType> {
  value: T;
  left: Branch<T>;
  right: Branch<T>;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  isLeaf(): boolean {
    return this.left === null && this.right === null;
  }
}

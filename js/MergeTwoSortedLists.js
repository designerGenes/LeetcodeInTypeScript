/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
export class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    detail() {
        let arr = [];
        let node = this;
        arr.push(node.val);
        while (node.next != null) {
            node = node.next;
            arr.push(node.val);
        }
        return arr;
    }
}
export const arrOfNodes = (root) => {
    let nodes = [];
    let node = root;
    if (node == null)
        return nodes;
    nodes.push(node);
    while (node.next != null) {
        node = node.next;
        nodes.push(node);
    }
    return nodes;
};
export function mergeTwoLists(l1, l2) {
    let lHead = l1;
    let rHead = l2;
    let outTail;
    let outRoot;
    if (lHead == null && rHead != null)
        return rHead;
    if (rHead == null && lHead != null)
        return lHead;
    if (rHead == null && lHead == null)
        return null;
    if (lHead.val > rHead.val) {
        outRoot = rHead;
        rHead = outRoot.next;
    }
    else {
        outRoot = lHead;
        lHead = outRoot.next;
    }
    outTail = outRoot;
    while (lHead != null || rHead != null) {
        if (lHead == null) {
            // attach remaining right to left
            outTail.next = rHead;
            break;
        }
        else if (rHead == null) {
            // attach remaining left to right
            outTail.next = lHead;
            break;
        }
        else if (lHead.val > rHead.val) {
            outTail.next = rHead; // update old connection
            outTail = rHead; // update outRoot to lowest node
            rHead = rHead.next; // advance to next node or null
        }
        else if (lHead.val <= rHead.val) {
            outTail.next = lHead;
            outTail = lHead;
            lHead = lHead.next;
        }
    }
    return outRoot;
}
export function _mergeTwoLists(l1, l2) {
    const lArr = arrOfNodes(l1);
    const rArr = arrOfNodes(l2);
    let mergedArr = [];
    while (lArr.length && rArr.length) {
        if (lArr[0].val >= rArr[0].val) {
            mergedArr.push(rArr.shift());
        }
        else if (lArr[0].val < rArr[0].val) {
            mergedArr.push(lArr.shift());
        }
    }
    mergedArr = [...mergedArr, ...lArr, ...rArr];
    mergedArr.forEach((val, idx) => {
        if (idx < mergedArr.length - 1) {
            val.next = mergedArr[idx + 1];
        }
    });
    return mergedArr[0];
}
export const makeArr = (root) => {
    let outArr = [root.val];
    let node = root;
    while (node.next != null) {
        node = node.next;
        outArr.push(node.val);
    }
    return outArr;
};
export const makeList = (vals, node) => {
    if (vals.length == 0) {
        return null;
    }
    if (vals.length == 1) {
        let out = new ListNode(vals.shift());
        if (node != null)
            node.next = out;
        return out;
    }
    let newNode = new ListNode(vals.shift());
    newNode.next = makeList(vals, newNode);
    return newNode;
};
export const shuffle = (arr) => {
    for (let x of [...Array(arr.length / 2).keys()]) {
        const newIdx = Math.floor(Math.random() * 100) % (arr.length - 1);
        let holder = arr[newIdx];
        arr[newIdx] = arr[x];
        arr[x] = holder;
    }
    return arr;
};
export const randomInt = (max) => {
    return Math.floor(Math.random() * 100000) % max; // not perfect I know
};
export const makeJumpyArr = (size, startVal, arr) => {
    if (arr?.length == size)
        return arr;
    arr = arr ?? [];
    startVal = startVal ?? 1;
    let largestVal = arr?.length ? arr[arr.length - 1] : 0;
    let newVal = largestVal + Math.max(startVal, randomInt(9));
    arr.push(newVal);
    return makeJumpyArr(size, startVal, arr);
};
//# sourceMappingURL=MergeTwoSortedLists.js.map
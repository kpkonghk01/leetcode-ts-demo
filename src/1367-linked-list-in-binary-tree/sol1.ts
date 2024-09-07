// https://leetcode.com/problems/linked-list-in-binary-tree/description/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
  if (!head) return true;
  if (!root) return false;
  return dfs(root, listToArray(head), []);
}

function dfs(
  node: TreeNode | null,
  arr: number[],
  parentMatchedCounts: number[]
): boolean {
  if (!node) return false;
  let matchedCounts: number[];
  node.val === arr[0] ? (matchedCounts = [1]) : (matchedCounts = []);
  if (arr.length === matchedCounts.length) return true;

  for (let parentMatchedCount of parentMatchedCounts) {
    if (node.val !== arr[parentMatchedCount]) continue;
    let newCount = parentMatchedCount + 1;
    if (newCount === arr.length) return true;
    matchedCounts.push(newCount);
  }

  return (
    dfs(node.left, arr, matchedCounts) || dfs(node.right, arr, matchedCounts)
  );
}

function listToArray(head: ListNode | null): number[] {
  const res: number[] = [];

  while (head) {
    res.push(head.val);
    head = head.next;
  }

  return res;
}

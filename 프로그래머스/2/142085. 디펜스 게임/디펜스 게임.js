class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent] >= this.heap[i]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    let i = 0;
    while (true) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let largest = i;
      if (left < this.heap.length && this.heap[left] > this.heap[largest]) largest = left;
      if (right < this.heap.length && this.heap[right] > this.heap[largest]) largest = right;
      if (largest === i) break;
      [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
      i = largest;
    }
    return max;
  }
}

function solution(n, k, enemy) {
  const heap = new MaxHeap();
  let usedSoldiers = 0;

  for (let i = 0; i < enemy.length; i++) {
    heap.push(enemy[i]);
    usedSoldiers += enemy[i];

    if (usedSoldiers > n) {
      if (k === 0) return i;
      const largest = heap.pop();
      usedSoldiers -= largest;
      k--;
    }
  }

  return enemy.length;
}
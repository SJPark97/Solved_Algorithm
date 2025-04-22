function solution(scoville, K) {
  const sortedScoville = [...scoville].sort((a, b) => a - b); // 원본 보존
  let sortedScovilleIdx = 0;

  const queue = [];
  let queueIdx = 0;

  let answer = 0;

  while (true) {
    const candidates = [];

    // 2개 뽑기
    for (let i = 0; i < 2; i++) {
      const s = sortedScovilleIdx < sortedScoville.length
        ? sortedScoville[sortedScovilleIdx]
        : Infinity;
      const q = queueIdx < queue.length
        ? queue[queueIdx]
        : Infinity;

      if (s <= q) {
        candidates.push(s);
        sortedScovilleIdx++;
      } else {
        candidates.push(q);
        queueIdx++;
      }
    }

    const [num1, num2] = candidates;

    if (num1 === Infinity) {
      // 두 개 다 없음
      answer = -1;
      break;
    }
    if (num2 === Infinity) {
      // 하나만 있음
      if (num1 >= K) break;
      else {
        answer = -1;
        break;
      }
    }

    if (num1 >= K && num2 >= K) break;

    const newScoville = num1 + num2 * 2;
    queue.push(newScoville);
    answer++;
  }

  return answer;
}
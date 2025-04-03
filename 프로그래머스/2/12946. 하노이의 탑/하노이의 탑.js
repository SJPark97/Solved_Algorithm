function solution(n) {
    const answer = [];
    const hanoi = (start, center, target, count) => {
        if (count === 1) answer.push([start, target]);
        else {
            hanoi(start, target, center, count - 1);
            hanoi(start, center, target, 1);
            hanoi(center, start, target, count - 1);
        }
    }
    hanoi(1, 2, 3, n);
    return answer;
}
function solution(storey) {
    let answer = 0;
    while (storey > 0) {
        const left = storey % 10;
        storey = Math.floor(storey / 10);
        const next = storey % 10;
        if (left > 5 || left === 5 && next >= 5) {
            answer += 10 - left;
            storey += 1;
        } else {
            answer += left;
        }
    }
    return answer;
}
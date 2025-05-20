function solution(k, d) {
    let answer = 0;
    let x = 0;
    while (x <= d) {
        const maxY = Math.floor((d ** 2 - x ** 2) ** 0.5);
        answer += Math.floor(maxY / k) + 1;
        x += k
    }
    return answer;
}
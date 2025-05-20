function solution(k, d) {
    let answer = 0;
    let x = 0;
    while (x <= d) {
        const maxY = Math.floor(Math.sqrt(d ** 2 - x ** 2));
        answer += Math.floor(maxY / k) + 1;
        x += k
    }
    return answer;
}
function solution(n, l, r) {
    const checkNumber = (number) => {
        if (number % 5 === 2) return false;
        if (number <= 5) return true;
        return checkNumber(Math.floor(number / 5));
    }
    
    let answer = 0;
    for (let i = l - 1; i < r; i++) {
        if (checkNumber(i)) {
            answer += 1;
        }
    }
    return answer;
}
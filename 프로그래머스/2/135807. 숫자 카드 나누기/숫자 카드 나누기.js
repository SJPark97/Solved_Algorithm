function solution(arrayA, arrayB) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const numberGroupGcd = (numbers) => numbers.reduce((acc, cur) => gcd(acc, cur));
    const gcdA = numberGroupGcd(arrayA);
    const gcdB = numberGroupGcd(arrayB);
    const checkCanDivide = (gcd, numberArray) => {
        for (const number of numberArray) {
            if (number % gcd === 0) {
                return 0;
            }
        }
        return gcd;
    }
    const answer = Math.max(checkCanDivide(gcdA, arrayB), checkCanDivide(gcdB, arrayA));
    return answer;
}
function solution(n, w, num) {
    const floor = Math.ceil(num / w);
    let isOdd = floor % 2 === 1;
    let startNumber = 0;
    if (isOdd) {
        startNumber = (num - 1) % w + 1;
    } else {
        startNumber = w - (num - 1) % w
    }
    const plusArray = [2 * w + 1 - 2 * startNumber, 2 * startNumber - 1];
    let answer = 1;
    let boxNumber = num;
    while (boxNumber <= n) {
        if (isOdd) {
            boxNumber += plusArray[0];
        } else {
            boxNumber += plusArray[1];
        };
        isOdd = !isOdd;
        if (boxNumber <= n) {
            answer += 1
        }
    };
    return answer;
};
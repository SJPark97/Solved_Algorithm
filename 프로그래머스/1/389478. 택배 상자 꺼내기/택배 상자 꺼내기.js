function solution(n, w, num) {
    const boxInfo = Array.from({ length: w }, () => []);

    boxInfo.forEach((arry, idx) => {
        let startNumber = idx + 1;
        const plusArray = [2 * w + 1 - 2 * startNumber, 2 * startNumber - 1];
        let isOdd = true;
        while (startNumber <= n) {
            arry.push(startNumber);
            if (isOdd) {
                startNumber += plusArray[0];
            } else {
                startNumber += plusArray[1];
            };
            isOdd = !isOdd;
        };
    });
    
    const resultArray = boxInfo.filter((arry) => arry.filter((number) => number === num).length > 0)
                               .flatMap((value) => value);
    const answer = resultArray.length - resultArray.findIndex(number => number === num);
    
    return answer;
};
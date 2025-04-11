function solution(n, bans) {
    let answer = n;
    const convertStringToNumber = (str) => {
        let len = str.length;
        let num = 0;
        for (let idx = 0; idx < len; idx++) {
            num += (26 **(len - idx - 1)) * (str[idx].charCodeAt(0) - 96);
        }
        return num;
    }
    const convertNumberToString = (num) => {
        let str = '';
        while (num > 0) {
            num--;
            str = String.fromCharCode((num % 26) + 97) + str;
            num = Math.floor(num / 26);
        }
        return str;
    }
    const sortedBans = bans.map((str) => convertStringToNumber(str)).sort((a, b) => a - b);
    for (const ban of sortedBans) {
        if (answer >= ban) {
            answer++;
        } else {
            break;
        }
    }
    return convertNumberToString(answer);
}
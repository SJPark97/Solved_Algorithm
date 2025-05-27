function solution(k, tangerine) {
    const tangerineMap = {};
    for (const size of tangerine) {
        tangerineMap[size] = (tangerineMap[size] || 0) + 1;
    }
    const cntSortedArray = Array.from(Object.values(tangerineMap)).sort((a, b) => b - a);
    
    let answer = 0;
    for (const cnt of cntSortedArray) {
        if (k > 0) {
            answer += 1;
            k -= cnt;
        }
    }
    return answer;
}
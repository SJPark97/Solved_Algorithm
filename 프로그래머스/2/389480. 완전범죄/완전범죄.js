function solution(info, n, m) {
    const sortedInfo = info.sort((a, b) => b[1] - a[1]).sort((a, b) => b[0] / b[1] - a[0] / a[1])
                           
    
    let answer = -1;
    let aTotal = 0;
    let bTotal = 0;
    for (info of sortedInfo) {
        if (bTotal + info[1] < m) {
            bTotal += info[1];
        } else {
            aTotal += info[0];
        };
    };
    if (aTotal < n && bTotal < m) {
        answer = aTotal;
    };
    
    return answer;
};

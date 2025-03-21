function solution(targets) {
    const sortedTargets = targets.sort((a, b) => a[1] - b[1]);
    let answer = 0;
    let destroyedY = -1;
    console.log(sortedTargets);
    for (const [s, e] of sortedTargets) {
        if (destroyedY <= s) {
            destroyedY = e;
            answer += 1;
        };
    };
    return answer;
};
function solution(weights) {
    const weightsMap = new Map();
    const weightRatio = [3/2, 2, 2/3, 4/3, 1/2, 3/4];
    for (const weight of weights) {
        weightsMap.set(weight, (weightsMap.get(weight) || 0) + 1);
    }
    
    let answer = 0;
    for (const [w, cnt] of weightsMap) {
        if (cnt >= 2) {
            answer += cnt * (cnt - 1) / 2;
        }
        for (const ratio of weightRatio) {
            const pairWeight = w * ratio;
            if (weightsMap.get(pairWeight)) {
                answer += weightsMap.get(pairWeight) * cnt;
            }
        }
        weightsMap.delete(w);
    }
    return answer;
}
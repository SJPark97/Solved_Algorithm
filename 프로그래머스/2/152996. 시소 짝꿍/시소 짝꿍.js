function solution(weights) {
    const weightsMap = new Map();
    const weightRatio = [3/2, 2, 2/3, 4/3, 1/2, 3/4];

    // 1. 무게별 인원 수 기록
    for (const weight of weights) {
        weightsMap.set(weight, (weightsMap.get(weight) || 0) + 1);
    }

    let answer = 0;

    for (const [w, cnt] of weightsMap) {
        // 2. 동일 무게끼리 짝꿍
        if (cnt >= 2) {
            answer += (cnt * (cnt - 1)) / 2;
        }

        // 3. 다른 무게와 비율로 짝꿍
        for (const ratio of weightRatio) {
            const pairWeight = w * ratio;
            if (Number.isInteger(pairWeight) && weightsMap.get(pairWeight)) {
                answer += weightsMap.get(pairWeight) * cnt;
            }
        }

        // 4. 중복 방지: 현재 무게 삭제
        weightsMap.delete(w);
    }

    return answer;
}
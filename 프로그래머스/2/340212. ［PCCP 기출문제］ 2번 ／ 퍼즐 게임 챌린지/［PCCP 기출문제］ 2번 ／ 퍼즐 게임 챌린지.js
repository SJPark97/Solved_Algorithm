function solution(diffs, times, limit) {
    const calculateTimeBySkillLevel = (level) => {
        let solvingTime = 0;
        for (let i = 0; i < times.length; i++) {
            const diff = diffs[i];
            const time = times[i];
            if (diff <= level) {
                solvingTime += time;
            } else {
                if (i > 0) {
                    solvingTime += (times[i - 1] + time) * (diff - level) + time;
                } else {
                    solvingTime += time * (diff - level) + time;
                }
            }
            if (solvingTime > limit) {
                break;
            }
        }
        return solvingTime;
    }
    let answer = 0;
    for (let i = 10000; i >= 1; i /= 10) {
        for (let j = 9; j > 0; j--) {
            const level = answer + i * j;
            const solvingTime = calculateTimeBySkillLevel(level);
            if (solvingTime > limit) {
                answer += i * j;
                break;
            }
        }
    }
    return answer + 1;
}
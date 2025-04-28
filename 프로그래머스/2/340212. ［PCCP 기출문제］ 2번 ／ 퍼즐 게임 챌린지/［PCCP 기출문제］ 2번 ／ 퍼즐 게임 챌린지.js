function solution(diffs, times, limit) {
    const calculateTotalTime = (skillLevel) => {
        let totalTime = 0;
        let previousTime = 0;

        for (let i = 0; i < times.length; i++) {
            const difficulty = diffs[i];
            const timeCur = times[i];
            const timePrev = previousTime;

            if (difficulty <= skillLevel) {
                totalTime += timeCur;
            } else {
                totalTime += (timePrev + timeCur) * (difficulty - skillLevel) + timeCur;
            }

            if (totalTime > limit) {
                break;
            }

            previousTime = timeCur;
        }
        return totalTime;
    };

    let maxFailedSkillLevel = 0;
    for (let unit = 10000; unit >= 1; unit /= 10) {
        for (let digit = 9; digit > 0; digit--) {
            const skillLevel = maxFailedSkillLevel + unit * digit;
            const totalTime = calculateTotalTime(skillLevel);

            if (totalTime > limit) {
                maxFailedSkillLevel += unit * digit;
                break;
            }
        }
    }
    
    const answer = maxFailedSkillLevel + 1;
    return answer;
}
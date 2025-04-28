function solution(scores) {
    let answer = 1;
    const wanHoScore = [...scores[0]];
    const wanHoTotalScore = wanHoScore[0] + wanHoScore[1];
    const sortedScores = scores.sort((a, b) => b[0] - a[0] === 0 ? a[1] - b[1] : b[0] - a[0]);
    let workScore = 0;
    for (let i = 0; i < sortedScores.length; i++) {
        const [workAttitudeScore, teamworkScore] = sortedScores[i];
        if (wanHoScore[0] < workAttitudeScore && wanHoScore[1] < teamworkScore) {
            return -1;
        }
        if (workScore <= teamworkScore) {
            workScore = teamworkScore;
            if (workAttitudeScore + teamworkScore > wanHoTotalScore) {
                answer += 1;
            }
        }
    }
    
    return answer;
}
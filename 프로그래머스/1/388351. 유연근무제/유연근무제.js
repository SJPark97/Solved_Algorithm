function solution(schedules, timelogs, startday) {
    let answer = 0;
    const timeConverter = (time) => {
        const hour = Math.floor(time / 100);
        const min = Math.floor(time % 100);
        return hour * 60 + min;
    }
    for (let i = 0; i < schedules.length; i++) {
        const convertedSchedule = timeConverter(schedules[i]) + 10;
        let result = true;
        timelogs[i].forEach((timelog, index) => {
            if ((index + startday - 1) % 7 < 5) {
                const realConvertedSchedule = timeConverter(timelog);
                if (convertedSchedule < realConvertedSchedule) {
                    result = false;
                }
            }
        })
        if (result) {
            answer += 1;
        }
    }
    return answer;
}
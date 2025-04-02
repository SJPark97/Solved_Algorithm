function solution(video_len, pos, op_start, op_end, commands) {
    const timeToSec = (time) => {
        const [min, sec] = time.split(':').map(v => Number(v));
        return min * 60 + sec;
    }
    const secToTime = (time) => {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        const formattedMin = String(min).padStart(2, '0');
        const formattedSec = String(sec).padStart(2, '0');
        return `${formattedMin}:${formattedSec}`
    }

    const videoLenSec = timeToSec(video_len);
    const opStartSec = timeToSec(op_start);
    const opEndSec = timeToSec(op_end);
    const prev = (now) => {
        const result = now - 10;
        if (result < 0) return 0;
        return result
    }
    const next = (now) => {
        const result = now + 10;
        if (result > videoLenSec) return videoLenSec;
        return result
    }
    const skipOppening = (now) => {
        if (now >= opStartSec && now < opEndSec) return opEndSec;
        return now
    }
    
    let posSec = skipOppening(timeToSec(pos));
    
    for (const command of commands) {
        if (command === 'prev') {
            posSec = prev(posSec);
        } else if (command === 'next') {
            posSec = next(posSec);
        }
        posSec = skipOppening(posSec);
    }
    
    const answer = secToTime(posSec);
    return answer;
}
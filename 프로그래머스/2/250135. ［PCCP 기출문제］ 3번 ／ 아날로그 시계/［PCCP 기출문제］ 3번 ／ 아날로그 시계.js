function solution(h1, m1, s1, h2, m2, s2) {
    // var [h1, m1, s1, h2, m2, s2] = [0, 0, 0, 8, 24, 43]
    let answer = 0;
    const startSec = h1 * 3600 + m1 * 60 + s1;
    const endSec = h2 * 3600 + m2 * 60 + s2;
    // 시작 시간이 00시 00분 00초 일때 시, 분, 초침이 모두 한곳에 모임
    if (startSec === 0 || startSec === 43200 || endSec === 43200) {
        answer -= 1;
    }
    if (startSec < 43200 && 43200 < endSec) {
        answer -= 2;
    }
    if (m2 + s2 === 0) {
        answer += 1;
    }
    
    // 시작할 때 침의 위치
    const getDig = (h, m, s) => {
        const hDig = (h % 12) * 30 + m / 2 + s / 12;
        const mDig = m * 6 + s / 10;
        const sDig = s * 6;
        return { hDig, mDig, sDig }
    }
    const { hDig: startHDig, mDig: startMDig, sDig: startSDig } = getDig(h1, m1, s1);
    const { hDig: endHDig, mDig: endMDig, sDig: endSDig } = getDig(h2, m2, s2);
    if (startHDig < startSDig) answer -= 1;
    if (startMDig < startSDig) answer -= 1;
    if (endHDig < endSDig) answer += 1;
    if (endMDig < endSDig) answer += 1;
    answer += ((h2 * 60 + m2) - (h1 * 60 + m1)) * 2
    answer -= h2 - h1
    
    return answer;
}
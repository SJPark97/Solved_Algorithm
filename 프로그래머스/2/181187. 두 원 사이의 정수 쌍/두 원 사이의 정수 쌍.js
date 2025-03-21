function solution(r1, r2) {
    let answer = 0;
    for (let i = 1; i <= r2; i++) {
        if (i <= r1) {
            const r1_Y = (r1 * r1 - i * i) ** 0.5;
            const r2_Y = (r2 * r2 - i * i) ** 0.5;
            answer += Math.floor(r2_Y) - Math.ceil(r1_Y) + 1;
        } else {
            const r2_Y = (r2 * r2 - i * i) ** 0.5;
            answer += Math.floor(r2_Y) + 1;
        };
    };
    
    return answer * 4;
}
function solution(wallpaper) {
    const answer = [undefined, 50, 0, 0];
    wallpaper.forEach((val, index) => {
        const location = val.indexOf('#');
        if (location !== -1) {
            if (answer[0] === undefined) {
                answer[0] = index;
            }
            answer[2] = index + 1;
            if (answer[1] > location) {
                answer[1] = location
            }
            const lastLocation = val.lastIndexOf('#');
            if (answer[3] < lastLocation + 1) {
                answer[3] = lastLocation + 1;
            }
        }
    })
    return answer;
}
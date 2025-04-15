function solution(park, routes) {
    
    const getNextLocation = (location, route) => {
        const [current_x, current_y] = location;
        let [now_x, now_y] = location;
        const [dir, moves] = route.split(' ');
        const control = {
            'N': () => {
                for (let i = 0; i < +moves; i++) {
                    now_x -= 1;
                    if (now_x < 0 || park[now_x][now_y] === 'X') {
                        return [current_x, current_y];
                    }
                }
                return [now_x, now_y];
            },
            'S': () => {
                for (let i = 0; i < +moves; i++) {
                    now_x += 1;
                    if (now_x === park.length || park[now_x][now_y] === 'X') {
                        return [current_x, current_y];
                    }
                }
                return [now_x, now_y];
            },
            'W': () => {
                for (let i = 0; i < +moves; i++) {
                    now_y -= 1;
                    if (now_y < 0 || park[now_x][now_y] === 'X') {
                        return [current_x, current_y];
                    }
                }
                return [now_x, now_y];
            },
            'E': () => {
                for (let i = 0; i < +moves; i++) {
                    now_y += 1;
                    if (now_y === park[0].length || park[now_x][now_y] === 'X') {
                        return [current_x, current_y]
                    }
                }
                return [now_x, now_y];
            },
        }
        return control[dir]();
    }
    let answer = [0, 0];
    for (let x = 0; x < park.length; x++) {
        for (let y = 0; y < park[0].length; y++) {
            if (park[x][y] === 'S') answer = [x, y];
        }
    }
    for (const route of routes) {
        answer = getNextLocation(answer, route);
    }
    return answer;
}
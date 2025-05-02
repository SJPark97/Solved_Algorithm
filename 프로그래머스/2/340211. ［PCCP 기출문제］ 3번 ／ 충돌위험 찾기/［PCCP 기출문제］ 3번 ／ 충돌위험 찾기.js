function solution(points, routes) {
    const findShortestWay = (sR, sC, eR, eC) => {
        const path = [];
        let r = sR;
        let c = sC;

        while (r !== eR) {
            r += r < eR ? 1 : -1;
            path.push(`${r}_${c}`);
        }

        while (c !== eC) {
            c += c < eC ? 1 : -1;
            path.push(`${r}_${c}`);
        }

        return path;
    };
    const robotRoutes = routes.map((route) => {
        let robotLocation;
        
        return route.flatMap((point, idx) => {
            if (idx === 0) {
                const [r, c] = points[point - 1];
                robotLocation = [r, c];
                return [`${r}_${c}`];
            } else {
                const way = findShortestWay(...robotLocation, ...points[point - 1]);
                robotLocation = [...points[point - 1]];
                return way;
            }
        })
    })
    let answer = 0;
    let time = 0;
    const maxTime = Math.max(...robotRoutes.map((a) => a.length))
    while (time < maxTime) {
        const locationCounter = {};
        for (const robotRoute of robotRoutes) {
            if (robotRoute.length <= time) continue;
            if (!locationCounter[robotRoute[time]]) {
                locationCounter[robotRoute[time]] = 1;
            } else {
                if (locationCounter[robotRoute[time]] === 1) {
                    answer += 1;
                }
                locationCounter[robotRoute[time]] += 1;
            }
        }
        time += 1;
    }
    return answer;
}
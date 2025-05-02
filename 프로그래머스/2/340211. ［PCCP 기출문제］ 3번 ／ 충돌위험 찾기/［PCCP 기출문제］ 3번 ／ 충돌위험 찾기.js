function solution(points, routes) {
    const toKey = (r, c) => `${r}_${c}`;

    const getPath = (start, end) => {
        const [sr, sc] = start;
        const [er, ec] = end;
        const path = [];

        let r = sr, c = sc;
        while (r !== er) {
            r += r < er ? 1 : -1;
            path.push(toKey(r, c));
        }
        while (c !== ec) {
            c += c < ec ? 1 : -1;
            path.push(toKey(r, c));
        }
        return path;
    };

    const robotRoutes = routes.map(route => {
        const fullPath = [];
        let cur = points[route[0] - 1];
        fullPath.push(toKey(...cur));

        for (let i = 1; i < route.length; i++) {
            const next = points[route[i] - 1];
            const path = getPath(cur, next);
            fullPath.push(...path);
            cur = next;
        }
        return fullPath;
    });

    const maxTime = Math.max(...robotRoutes.map(r => r.length));
    let answer = 0;

    for (let t = 0; t < maxTime; t++) {
        const count = new Map();
        for (const route of robotRoutes) {
            if (t >= route.length) continue;
            const loc = route[t];
            count.set(loc, (count.get(loc) || 0) + 1);
        }
        for (const c of count.values()) {
            if (c > 1) answer += 1;
        }
    }

    return answer;
}
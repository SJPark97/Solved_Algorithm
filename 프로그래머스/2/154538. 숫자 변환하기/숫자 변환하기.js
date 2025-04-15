function solution(x, y, n) {
    const visited = new Set();
    const queue = [[x, 0]];
    let idx = 0;

    while (true) {
        if (idx === queue.length) return -1;
        const [current, depth] = queue[idx];
        idx++
        if (current === y) return depth;
        if (visited.has(current)) continue;
        visited.add(current);

        const next = [current + n, current * 2, current * 3];
        for (const value of next) {
            if (value <= y && !visited.has(value)) {
                queue.push([value, depth + 1]);
            }
        }
    }

    return -1;
}
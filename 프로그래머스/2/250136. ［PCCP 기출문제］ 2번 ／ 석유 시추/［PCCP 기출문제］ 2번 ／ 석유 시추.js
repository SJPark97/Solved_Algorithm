function solution(land) {
    const n = land.length;
    const m = land[0].length;
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const oils = new Map();
    const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    for (let x = 0; x < n; x++) {
        for (let y = 0; y < m; y++) {
            if (land[x][y] === 1 && !visited[x][y]) {
                visited[x][y] = true;
                const queue = [[x, y]];
                let queueIndex = 0;
                let cnt = 0;
                const ySet = new Set();

                while (queueIndex < queue.length) {
                    const [i, j] = queue[queueIndex++];
                    cnt += 1;
                    ySet.add(j);

                    for (const [dI, dJ] of direction) {
                        const ni = i + dI;
                        const nj = j + dJ;
                        if (ni < 0 || ni >= n || nj < 0 || nj >= m) continue;
                        if (land[ni][nj] === 1 && !visited[ni][nj]) {
                            visited[ni][nj] = true;
                            queue.push([ni, nj]);
                        }
                    }
                }

                for (const yCoord of ySet) {
                    oils.set(yCoord, (oils.get(yCoord) ?? 0) + cnt);
                }
            }
        }
    }

    return Math.max(...oils.values());
}
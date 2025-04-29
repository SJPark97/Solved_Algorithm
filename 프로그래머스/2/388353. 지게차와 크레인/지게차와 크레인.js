function solution(storage, requests) {
    const n = storage.length;
    const m = storage[0].length;
    const containersLocation = {};
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < m; y++) {
            const container = storage[x][y];
            if (!containersLocation[container]) {
                containersLocation[container] = new Set([[x, y]]);
            } else {
                containersLocation[container].add([x, y]);
            }
        }
    }
    
    const visit = Array.from({length: n}, () => Array.from({length: m}, () => false));
    const directions = [
      [-1, 0], // 위
      [1, 0],  // 아래
      [0, -1], // 왼쪽
      [0, 1],  // 오른쪽
    ];
    const canTakeOut = (startX, startY) => {
        const queue = [[startX, startY]];
        const visited = Array.from({ length: n }, () => Array(m).fill(false));
        visited[startX][startY] = true;

        while (queue.length) {
            const [x, y] = queue.shift();

            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;

                if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                    return true;
                }

                if (!visited[nx][ny] && visit[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }
        return false;
    };
    const forkLift = (containerInfo) => {
        let deleteCnt = 0;
        if (containersLocation[containerInfo]) {
            const locations = containersLocation[containerInfo];
            const takeOutLocationList = [];
            for (const location of locations) {
                const [x, y] = location;
                if (canTakeOut(x, y)) {
                    takeOutLocationList.push(location);
                }
            }
            for (const location of takeOutLocationList) {
                visit[location[0]][location[1]] = true;
                deleteCnt += 1;
                locations.delete(location);
            }
            if (locations.size === 0) {
                containersLocation[containerInfo] = undefined;
            }
        }
        return deleteCnt;
    }
    
    const crane = (containerInfo) => {
        let deleteCnt = 0;
        if (containersLocation[containerInfo]) {
            const locations = containersLocation[containerInfo];
            for (const [x, y] of locations) {
                visit[x][y] = true;
                deleteCnt += 1;
            }
            containersLocation[containerInfo] = undefined;
        }
        return deleteCnt;
    }
    
    let answer = n * m;
    for (const request of requests) {
        if (request.length === 1) {
            answer -= forkLift(request);
        } else {
            answer -= crane(request[0]);
        }
    }
    return answer;
}
function solution(players, m, k) {
    let answer = 0;
    let serverCnt = 0;
    const serverQueue = [];
    for (let i = 0; i < players.length; i++) {
        while (serverQueue.length > 0) {
            const serverInfo = serverQueue[0];
            if (serverInfo.deleteTime === i) {
                serverCnt -= serverInfo.count;
                serverQueue.shift();
                continue
            }
            break
        }
        
        const requiredServerCnt = Math.floor(players[i] / m);
        if (requiredServerCnt > serverCnt) {
            const serverIncrement = requiredServerCnt - serverCnt;
            answer += serverIncrement;
            serverCnt += serverIncrement;
            serverQueue.push({ count: serverIncrement, deleteTime: i + k })
        }
    }
    return answer;
}
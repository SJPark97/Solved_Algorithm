function solution(board) {
    let oCnt = 0;
    let xCnt = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === 'O') {
                oCnt += 1;
            } else if (board[i][j] === 'X') {
                xCnt += 1;
            }
        }
    }
    
    let oWinCnt = 0;
    let xWinCnt = 0;
    const completeLocations = [
        [[0, 0], [0, 1], [0, 2]], [[1, 0], [1, 1], [1, 2]], [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]], [[2, 0], [1, 1], [0, 2]]
    ]
    for (const completeLocation of completeLocations) {
        let complete = true;
        let pre = '';
        for (const [i, j] of completeLocation) {
            if (board[i][j] === '.') {
                complete = false;
            }
            if (!pre) {
                pre = board[i][j];
            } else {
                if (pre !== board[i][j]) {
                    complete = false;
                }
            }
        }
        if (complete) {
            if (pre === 'O') oWinCnt += 1;
            else xWinCnt += 1;
        }
    }
    if (oCnt - xCnt === 1 && xWinCnt === 0) return 1;
    if (oCnt - xCnt === 0 && oWinCnt === 0) return 1;
    return 0;
}
function solution(n, q, ans) {
    const combinationArray = [];
    const dfs = (combination) => {
        if (combination.length === 5) {
            combinationArray.push([...combination]);
            return;
        }
        
        for (let i = 1; i <= n; i++) {
            if (combination.length > 0) {
                if (i <= combination[combination.length - 1]) {
                    continue
                }
            }
            combination.push(i);
            dfs(combination);
            combination.pop();
        }
    }
    dfs([]);
    let answer = 0;
    const m = q.length;
    for (const combination of combinationArray) {
        let isAnswer = true;
        for (let i = 0; i < m; i++) {
            const checkSet = new Set([...combination, ...q[i]]);
            if (checkSet.size !== 10 - ans[i]) {
                isAnswer = false;
                break;
            }
        }
        if (isAnswer) answer++;
    }
    return answer;
}
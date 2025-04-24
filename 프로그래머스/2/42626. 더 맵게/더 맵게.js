function solution(scoville, K) {
    const sortedScoville = scoville.sort((a, b) => a - b);
    let sortedScovilleIdx = 0;
    
    const queue = [];
    let queueIdx = 0;
    
    let answer = 0;
    
    while (true) {
        let num1;
        let num2;
        
        for (let i = 0; i < 2; i++) {
            let smallNum;
            if (sortedScoville.length > sortedScovilleIdx && queue.length > queueIdx) {
                if (sortedScoville[sortedScovilleIdx] < queue[queueIdx]) {
                    smallNum = sortedScoville[sortedScovilleIdx];
                    sortedScovilleIdx++;
                } else {
                    smallNum = queue[queueIdx];
                    queueIdx++;
                }
            } else if (sortedScoville.length > sortedScovilleIdx) {
                smallNum = sortedScoville[sortedScovilleIdx];
                sortedScovilleIdx++;
            } else if (queue.length > queueIdx) {
                smallNum = queue[queueIdx];
                queueIdx++;
            }
            
            if (i === 0) {
                num1 = smallNum;
            } else {
                num2 = smallNum;
            }
        }
        if (num1 >= K && num2 >= K) {
            break;
        } else if (num2 === undefined && num1 >= K) {
            break;
        } else if (num2 === undefined && num1 < K) {
            answer = -1;
            break;
        }
        const newNumber = num1 + num2 * 2;
        queue.push(newNumber);
        answer++;
    }
    
    return answer;
}
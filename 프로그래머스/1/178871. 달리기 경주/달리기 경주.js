function solution(players, callings) {
    const playerIndexMap = new Map();
    
    players.forEach((player, index) => {
        playerIndexMap.set(player, index);
    });

    const answer = [...players];

    callings.forEach((player) => {
        const curIndex = playerIndexMap.get(player);
        const prevIndex = curIndex - 1;

        const prevPlayer = answer[prevIndex];

        answer[prevIndex] = player;
        answer[curIndex] = prevPlayer;

        playerIndexMap.set(player, prevIndex);
        playerIndexMap.set(prevPlayer, curIndex);
    });

    return answer;
}
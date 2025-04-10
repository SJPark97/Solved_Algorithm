function solution(cards1, cards2, goal) {
    let cards1Index = 0;
    let cards2Index = 0;
    for (const word of goal) {
        if (cards1Index < cards1.length) {
            if (cards1[cards1Index] === word) {
                cards1Index += 1;
                continue;
            };
        }
        if (cards2Index < cards2.length) {
            if (cards2[cards2Index] === word) {
                cards2Index += 1;
                continue;
            };
        }
        return "No"
    }
    return "Yes";
}
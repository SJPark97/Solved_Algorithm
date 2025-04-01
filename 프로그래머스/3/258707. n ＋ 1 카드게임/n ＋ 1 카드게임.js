function solution(coin, cards) {
    const totalRounds = cards.length / 3 + 1;
    const targetSum = cards.length + 1;
    let currentRound = 1;

    const handSet = new Set();
    for (let i = 0; i < cards.length / 3; i++) {
        const card = cards[i];
        handSet.add(card);
        if (handSet.has(targetSum - card)) {
            currentRound += 1;
        }
    }

    let remainingCoins = coin;
    let drawStartIndex = cards.length / 3;
    let drawEndIndex = drawStartIndex + 2 * currentRound;
    const drawnCardsSet = new Set();
    let availableOneCoinPairs = 0;
    let availableTwoCoinPairs = 0;

    while (remainingCoins > 0) {
        if (currentRound > totalRounds) {
            currentRound = totalRounds;
            break;
        }

        for (let i = drawStartIndex; i < drawEndIndex; i++) {
            if (i >= cards.length) break;

            const card = cards[i];
            drawnCardsSet.add(card);

            if (handSet.has(targetSum - card)) {
                availableOneCoinPairs += 1;
            }
            if (drawnCardsSet.has(targetSum - card)) {
                availableTwoCoinPairs += 1;
            }
        }

        drawStartIndex = drawEndIndex;

        if (availableOneCoinPairs > 0) {
            if (availableOneCoinPairs >= remainingCoins) {
                currentRound += remainingCoins;
                remainingCoins = 0;
            } else {
                remainingCoins -= availableOneCoinPairs;
                drawEndIndex += 2 * availableOneCoinPairs;
                currentRound += availableOneCoinPairs;
                availableOneCoinPairs = 0;
            }
        } else {
            if (availableTwoCoinPairs > 0 && remainingCoins >= 2) {
                remainingCoins -= 2;
                availableTwoCoinPairs -= 1;
                currentRound += 1;
                drawEndIndex += 2;
            } else {
                break;
            }
        }
    }

    return currentRound;
}
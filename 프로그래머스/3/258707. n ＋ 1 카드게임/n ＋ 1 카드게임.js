function solution(coin, cards) {
    let answer = 1;
    const gameSum = cards.length + 1;
    const cardsInfoSet = new Set();
    for (let i = 0; i < cards.length / 3; i++) {
        const card = cards[i];
        cardsInfoSet.add(card);
        if (cardsInfoSet.has(gameSum - card)) {
            answer += 1;
        }
    }
    let coins = coin;
    let getCardsStartIndex = cards.length / 3;
    let getCardsEndIndex = cards.length / 3 + 2 * answer;
    const roundCardsInfoSet = new Set();
    let getRoundsForOneCoin = 0;
    let getRoundsForTwoCoin = 0;
    while (coins > 0) {
        if (answer > cards.length / 3 + 1) {
            answer = cards.length / 3 + 1;
            break
        }
        for (let i = getCardsStartIndex; i < getCardsEndIndex; i++) {
            const card = cards[i];
            if (i > cards.length) {
                break
            }
            roundCardsInfoSet.add(card);
            if (cardsInfoSet.has(gameSum - card)) {
                getRoundsForOneCoin += 1;
            }
            if (roundCardsInfoSet.has(gameSum - card)) {
                getRoundsForTwoCoin += 1;
            }
        }
        getCardsStartIndex = getCardsEndIndex;
        if (getRoundsForOneCoin > 0) {
            if (getRoundsForOneCoin >= coins) {
                answer += coins;
                coins = 0;
            } else {
                coins -= getRoundsForOneCoin;
                getCardsEndIndex += 2 * getRoundsForOneCoin;
                answer += getRoundsForOneCoin;
                getRoundsForOneCoin = 0;
            }
        } else {
            if (getRoundsForTwoCoin > 0 && coins >= 2) {
                coins -= 2;
                getRoundsForTwoCoin -= 1;
                answer += 1;
                getCardsEndIndex += 2
            } else {
                break
            }
        }
    }
    return answer;
}
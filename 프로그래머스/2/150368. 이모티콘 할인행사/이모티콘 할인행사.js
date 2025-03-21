function solution(users, emoticons) {
    const allDiscountPercentList = [];
    const discountPercent = [10, 20, 30, 40];
    const dfs = (depth, discountPercentList) => {
        if (depth === emoticons.length) {
            allDiscountPercentList.push([...discountPercentList]);
            return;
        };
        
        for (const discount of discountPercent) {
            discountPercentList.push(discount);
            dfs(depth + 1, discountPercentList);
            discountPercentList.pop();
        };
        
    };
    dfs(0, []);
    
    const answerList = allDiscountPercentList.map((discountPercentList) => {
        let buyMembershipPeopleCnt = 0;
        let buyEmoticonTotalPrice = 0;
        users.forEach(([percent, price]) => {
            let result = 0;
            discountPercentList.forEach((discountPercent, idx) => {
                if (discountPercent >= percent) {
                    result += emoticons[idx] * (1 - discountPercent / 100);
                };
            });
            if (result >= price) {
                buyMembershipPeopleCnt += 1;
            } else {
                buyEmoticonTotalPrice += result;
            };
        });
        return { buyMembershipPeopleCnt, buyEmoticonTotalPrice };
    });
    return answerList
        .sort((a, b) => b.buyEmoticonTotalPrice - a.buyEmoticonTotalPrice)
        .sort((a, b) => b.buyMembershipPeopleCnt - a.buyMembershipPeopleCnt)
        .map((result) => [result.buyMembershipPeopleCnt, result.buyEmoticonTotalPrice])[0];
}
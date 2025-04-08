function solution(bandage, health, attacks) {
    const [t, x, y] = bandage;
    let time = 0;
    let healthInfo = health;
    attacks.forEach((attack, index) => {
        if (healthInfo !== -1) {
            const [attackTime, attackDmg] = attack;
            const healStage = attackTime - time - 1;
            healthInfo += x * healStage + y * Math.floor(healStage / t);
            healthInfo = Math.min(healthInfo, health);
            healthInfo -= attackDmg;
            if (healthInfo <= 0) {
                healthInfo = -1;
            };
            time = attackTime;
        }
    })
    return healthInfo;
}
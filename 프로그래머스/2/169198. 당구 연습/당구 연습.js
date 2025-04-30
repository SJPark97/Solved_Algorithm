function solution(m, n, startX, startY, balls) {
    const infinity = 10**15;
    const mirrorUp = ([sX, sY], [eX, eY]) => {
        if (sX === eX && sY < eY) {
            return infinity;
        }
        const mirroredY = 2 * n - sY;
        return (sX - eX) ** 2 + (mirroredY - eY) ** 2;
    }
    const mirrorDown = ([sX, sY], [eX, eY]) => {
        if (sX === eX && sY > eY) {
            return infinity;
        }
        const mirroredY = -1 * sY;
        return (sX - eX) ** 2 + (mirroredY - eY) ** 2;
    }
    const mirrorLeft = ([sX, sY], [eX, eY]) => {
        if (sY === eY && sX > eX) {
            return infinity;
        }
        const mirroredX = -1 * sX;
        return (mirroredX - eX) ** 2 + (sY - eY) ** 2;
    }
    const mirrorRight = ([sX, sY], [eX, eY]) => {
        if (sY === eY && sX < eX) {
            return infinity;
        }
        const mirroredX = 2 * m - sX;
        return (mirroredX - eX) ** 2 + (sY - eY) ** 2;
    }
    const mirrorLeftUp = ([sX, sY], [eX, eY]) => {
        if (sX / (n - sY) === eX / (n - eY) && sX < eX) {
            const mirroredX = -1 * sX;
            const mirroredY = 2 * n - sY;
            return (mirroredX - eX) ** 2 + (sY - eY) ** 2;
        }
        return infinity;
    }
    const mirrorLeftDown = ([sX, sY], [eX, eY]) => {
        if (sX / sY === eX / eY && sX < eX) {
            const mirroredX = -1 * sX;
            const mirroredY = -1 * sY;
            return (mirroredX - eX) ** 2 + (sY - eY) ** 2;
        }
        return infinity;
    }
    const mirrorRightUp = ([sX, sY], [eX, eY]) => {
        if ((m - sX) / (n - sY) === (m - eX) / (n - eY) && sX > eX) {
            const mirroredX = 2 * m * sX;
            const mirroredY = -1 * sY;
            return (mirroredX - eX) ** 2 + (sY - eY) ** 2;
        }
        return infinity;
    }
    const playGame = ([sX, sY], [eX, eY]) => {
        return Math.min(mirrorUp([sX, sY], [eX, eY]),
                        mirrorDown([sX, sY], [eX, eY]),
                        mirrorLeft([sX, sY], [eX, eY]),
                        mirrorRight([sX, sY], [eX, eY]));
    }
    return balls.map((ball) => playGame([startX, startY], ball));
}
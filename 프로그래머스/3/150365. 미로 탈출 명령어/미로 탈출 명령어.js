function solution(n, m, x, y, r, c, k) {
    const getDistance = (x1, y1, x2, y2) => {
        return (Math.abs(x1 - x2) + Math.abs(y1 - y2));
    }
    const distance = getDistance(x, y, r, c);
    if (k < distance || (k - distance) % 2 === 1) return 'impossible';
    const direction = [[1, 0], [0, -1], [0, 1], [-1, 0]];
    const word = ['d', 'l', 'r', 'u'];
    let answer = '';
    while (k > 0) {
        for (let i = 0; i < 4; i++) {
            const [dx, dy] = direction[i];
            const newX = x + dx;
            const newY = y + dy;
            if (newX < 1 || newY < 1 || newX > n || newY > m) continue;
            
            const newDistance = getDistance(newX, newY, r, c);
            if (newDistance <= k - 1) {
                answer += word[i];
                x = newX;
                y = newY;
                k -= 1;
                break;
            }
        }
    }
    return answer;
}
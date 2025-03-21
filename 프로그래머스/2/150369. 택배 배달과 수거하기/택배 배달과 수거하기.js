function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    let location = n - 1;
    let left_d = 0;
    let left_p = 0;
    while (location >= 0) {
        if (deliveries[location] >= left_d) {
            deliveries[location] -= left_d;
            left_d = 0;
        } else {
            left_d -= deliveries[location];
            deliveries[location] = 0;
        }
        if (pickups[location] >= left_p) {
            pickups[location] -= left_p;
            left_p = 0;
        } else {
            left_p -= pickups[location];
            pickups[location] = 0;
        }
        
        if (deliveries[location] > 0 || pickups[location] > 0) {
            if (deliveries[location] >= cap) {
                deliveries[location] -= cap;
            } else {
                left_d += cap - deliveries[location];
                deliveries[location] = 0;
            };
            if (pickups[location] >= cap) {
                pickups[location] -= cap;
            } else {
                left_p += cap - pickups[location];
                pickups[location] = 0;
            };
            answer += location + 1;
        };
        if (deliveries[location] === 0 && pickups[location] === 0) {
            location -= 1;  
        };
    };
    
    return answer * 2;
}
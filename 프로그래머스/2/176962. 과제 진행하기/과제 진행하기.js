function solution(plans) {
    plans.forEach((plan) => {
        const [startHour, startMin] = plan[1].split(':');
        plan[1] = Number(startHour) * 60 + Number(startMin);
        plan[2] = plan[1] + Number(plan[2]);
    });
    const sortedPlans = plans.sort((a, b) => b[1] - a[1]);
    const queue = [];
    const answer = [];
    let time = 0;
    while (sortedPlans.length !== 0) {
        const [title, start, end] = sortedPlans.pop();
        time = start;
        if (sortedPlans.length > 0) {
            const [nextTitle, nextStart, nextEnd] = sortedPlans[sortedPlans.length - 1];
            if (end > nextStart) {
                queue.push([title, end - nextStart]);
            } else if (end === nextStart) {
                answer.push(title);
            } else {
                answer.push(title);
                let leftTime = nextStart - end;
                while (leftTime > 0 && queue.length > 0) {
                    const [beforeTitle, beforeLeftTime] = queue.pop();
                    if (beforeLeftTime > leftTime) {
                        queue.push([beforeTitle, beforeLeftTime - leftTime]);
                        leftTime = 0;
                    } else {
                        answer.push(beforeTitle);
                        leftTime -= beforeLeftTime;
                    };
                };
            };
        } else {
            answer.push(title, ...queue.reverse().flatMap((homework) => homework[0]));
        };
    };
    
    return answer;
}
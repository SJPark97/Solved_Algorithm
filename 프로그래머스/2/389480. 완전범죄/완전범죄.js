function solution(info, n, m) {
    const itemsSortedByPriority = info
        .sort((a, b) => b[1] - a[1])
        .sort((a, b) => b[0] / b[1] - a[0] / a[1]);

    let aTraceSum = 0;
    let bTraceSum = 0;

    for (const item of itemsSortedByPriority) {
        const [aTrace, bTrace] = item;
        if (bTraceSum + bTrace < m) {
            bTraceSum += bTrace;
        } else {
            aTraceSum += aTrace;
        }
    }

    if (aTraceSum < n && bTraceSum < m) {
        return aTraceSum;
    }

    return -1;
}
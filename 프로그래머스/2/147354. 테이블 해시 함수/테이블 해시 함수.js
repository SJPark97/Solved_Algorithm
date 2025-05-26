function solution(data, col, row_begin, row_end) {
    const sortedData = data.sort((a, b) => b[0] - a[0]).sort((a, b) => a[col - 1] - b[col - 1]);
    const modData = sortedData.map((data, i) => data.reduce((acc, col) => acc + col % (i + 1), 0));
    const sliceData = modData.splice(row_begin - 1, row_end - row_begin + 1);
    const answer = sliceData.reduce((acc, col) => acc ^ col, 0);
    return answer;
}
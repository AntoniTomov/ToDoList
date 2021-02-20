function checkValue(value) {
    let tempValue = value.trim().split(' ');
    let outputValue = [];
    tempValue.forEach(el => {
        if (el !== '') {
            outputValue.push(el);
        }
    });
    return outputValue.join(' ').slice(0, 22);
}
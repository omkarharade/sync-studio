
exports.formatValue = (value) => {
    if (value.trim() === "-") return null;
    else return parseInt(value);
};

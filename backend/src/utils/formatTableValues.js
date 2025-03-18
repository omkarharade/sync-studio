


exports.formatValue = (value) => {
    if (value === undefined || value === null || value.trim() === "") return null; // Store NULL if empty
    if (value.trim() === "-") return -1; // Convert "-" to 0
    return value;
};

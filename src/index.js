
function min(array) {
    if (!arguments.length || !array.length) return 0;
    return Math.min(...array);
}

function max(array) {
    if (!arguments.length || !array.length) return 0;    
    return Math.max(...array);
}

function avg(array) {
    if (!arguments.length || !array.length) return 0;
    return array.reduce(function(previous, current) {
        return previous + current;
    })/array.length; 
}

exports.min = min;
exports.max = max;
exports.avg = avg;

const binarySearch = function (arr, element, start, end) {
    if (start > end) {
        return false;
    }
    var mid = Math.floor((start + end) / 2);

    if (arr[mid] === element) {
        return true;
    }
    if (arr[mid] > element) {
        return binarySearch(arr, element, start, mid - 1);
    }
    else {
        return binarySearch(arr, element, mid + 1, end);
    }
};

module.exports = binarySearch;

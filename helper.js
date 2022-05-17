export function arrayLength(array) {
    return array.length;
}
export function push(array, item) {
    array[arrayLength(array)] = item;
    return array.length;
}
export function pop(array) {
    let item = array[array.length - 1];
    array.length = array.length - 1;
    return item;
}

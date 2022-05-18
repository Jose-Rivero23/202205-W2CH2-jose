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
export function shift(array) {
    let item = array[0];
    let j = 0;
    for (let i = 1; i < array.length; i++) {
        array[j] = array[i];
        j = 0 + 1;
    }
    pop(array);

    return item;
}

export function unShift(array, item) {
    let i = 0;
    array.length = array.length + 1;

    for (let j = array.length; j >= 0; j--) {
        i = j;
        j = j - 1;

        array[j] = array[i];
    }
    array[0] = item;

    return array.length;
}

export function some(array, foo) {
    for (let j = 0; j < array.length; j++) {
        if (someFunction(array[j]) === true) {
            return true;
        }
    }
    return false;
}
export function someFunction(item) {
    if (item % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
export function every(array, foo) {
    for (let j = 0; j < array.length; j++) {
        if (everyFunction(array[j]) === false) {
            return false;
        }
    }
    return true;
}

export function everyFunction(item) {
    if (item > 40) {
        return true;
    } else {
        return false;
    }
}

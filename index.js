function myEach(collection, callback) {
    let modifiedCollection;
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        modifiedCollection = Object.values(collection)
        for (let i = 0; i < modifiedCollection.length; i++) {
            callback(modifiedCollection[i])
        }
    }
    return collection
}
function myMap(collection, callback) {
    const result = []
    myEach(collection, function (item) {
        result.push(callback(item));
    });
    return result;
}
const standardizeInput = function (collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
}
function myReduce(collection, callback, acc) {
    let startIndex = standardizeInput(collection);
    if (!acc) {
        acc = startIndex[0]
        startIndex = startIndex.slice(1);
    }
    for (let i = 0; i < startIndex.length; ++i) {
        acc = callback(acc, startIndex[i], startIndex);
    }
    return acc
}
function myFind(collection, predicate) {
    let arrayCollection = standardizeInput(collection);
    for (let i = 0; i < arrayCollection.length; ++i) {
        if (predicate(arrayCollection[i])) return arrayCollection[i];
    }
    return undefined;
}
function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, function (item) {
        if (predicate(item)) {
            result.push(item);
        }
    });
    return result;
}
function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}
function myFirst(array, n = 1) {
    if (n === 1) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}
function myLast(array, n = 1) {
    if (n === 1) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
}
function mySortBy(array, callback) {
    return array.slice().sort(function (a, b) {
        const valueA = callback(a);
        const valueB = callback(b);
        if (valueA < valueB) {
            return -1;
        } else if (valueA > valueB) {
            return 1;
        } else {
            return 0;
        }
    });
}
function myFlatten(array, shallow, newArr = []) {
    if (shallow) {
        return newArr.concat(...array);
    } else {
        for (let item of array) {
            if (Array.isArray(item)) {
                myFlatten(item, false, newArr);
            } else {
                newArr.push(item);
            }
        }
        return newArr;
    }
}
function myKeys(object) {
    return Object.keys(object);
}
function myValues(object) {
    return Object.values(object);
}


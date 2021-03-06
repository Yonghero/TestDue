export function mergeAttr(obj1, obj2) {
    if (obj1 == null) {
        return clone(obj2);
    }
    if (obj2 == null) {
        return clone(obj1);
    }
    let result = {};
    let obj1Attrs = Object.getOwnPropertyNames(obj1);
    for (let i = 0 ; i < obj1Attrs.length ; i ++) {
        result[obj1Attrs[i]] = obj1[obj1Attrs[i]];
    }
    let obj2Attrs = Object.getOwnPropertyNames(obj2);
    for (let i = 0 ; i < obj2Attrs.length ; i ++) {
        result[obj2Attrs[i]] = obj2[obj2Attrs[i]];
    }
    return result;
}
export function clone(obj) {
    if (obj instanceof Array) {
        return cloneArray(obj);
    } else if (obj instanceof Object) {
        return cloneObject(obj);
    } else {
        return obj;
    }
}

function cloneObject(obj) {
    let result = {};
    let names = Object.getOwnPropertyNames(obj);
    for (let i = 0 ; i < names.length ; i ++) {
        result[names[i]] = clone(obj[names[i]]);
    }
    return result;
}

function cloneArray(obj) {
    let result = new Array(obj.length);
    for (let i = 0 ; i < obj.length ; i ++) {
        result[i] = clone(obj[i]);
    }
    return result;
}


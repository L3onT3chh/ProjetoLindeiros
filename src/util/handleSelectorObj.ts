export const convertToArray = (obj: any) => {
    if (obj instanceof Array) {
        return obj;
    } else {
        return [obj];
    }
}
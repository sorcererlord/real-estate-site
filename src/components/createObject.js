export default function createObject(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i += 1) {
        result.push({
            id: i, content: arr[i]
        })
    }

    return result;
}
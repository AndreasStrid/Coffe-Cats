// A promise is async and can either callback resolve for success and reject for error
function simplePromise(aNumber: number): Promise<any> {
    return new Promise((resolve, reject) => {
        if (aNumber % 2 === 0) {
            resolve("Even")
        }
        else {
            reject("Not even")
        }

    })
}

// To get the value from a promise chain on the then() and add a variable that will get the value from resolve/reject
function promiseThen(aNumber: number) {
    const outsideResult = simplePromise(aNumber)
        .then(result => console.log("inside promise then ", result))
        .catch(result => console.log("inside promise then ", result))
    console.log("outside promise ", outsideResult);
}

// With await you don't need a then() or cathc(), just put await before the function and it waits to get the value from the promise resolve/reject
async function promiseAwait(aNumber: number) {
    try { // Try gets the resolve value
        const outsideResult = await simplePromise(aNumber);
        console.log("try ", outsideResult);
    }
    catch (error) { // error gets the reject value
        console.log("error ", error)
    }

}

export { promiseAwait, promiseThen }

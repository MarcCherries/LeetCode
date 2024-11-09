/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    let delay = new Promise(res => setTimeout(res, millis));
    return delay;
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
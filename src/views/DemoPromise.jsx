
const DemoPromise = () => {

    // Promise.all
    const p1 = Promise.resolve("OK");
    const p2 = Promise.reject("failed");
    const p3 = Promise.resolve("Well");

    const result = Promise.all([p1, p2, p3]).catch((err) => {
        console.log(err)
    });
    console.log(result);
    

    /* // 简单的Promise的例子
    const p = new Promise((resolve, reject) => {
        const result = +(Math.random() * 100).toFixed(0);
        if (result >= 0 && result <= 50) {
            resolve("成功 " + result);
        } else {
            reject("失败 " + result);
        }
        
    });

    p.then((msg) => {
        console.log(msg);
    }, (err) => console.log(err))
    p.catch(err => console.log(err)); */

    return (
        <div></div>
    );
}
export default DemoPromise;
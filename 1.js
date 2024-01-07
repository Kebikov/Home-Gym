const dog = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('time',);
            resolve(true);
        }, 1000);
    });
}


async function check() {
    const resalt = dog();
    console.log('',resalt);
}

check();




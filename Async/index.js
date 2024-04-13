let paraInterval;

let hello = () => {
    let mainDiv = document.querySelector("#main");
    let para = document.createElement("p");
    let textNode = document.createTextNode("Okay its first para");
    para.appendChild(textNode);
    mainDiv.appendChild(para);
}

let start = () => {
    if (!paraInterval) {
        console.log("starting interval");
        paraInterval = setInterval(hello, 1000);
    }
}

let stop = () => {
    if (paraInterval) {
        console.log("stopping interval");
        clearInterval(paraInterval); 
        paraInterval = null;
    }
}

const promise = new Promise((resolve, reject) => {
    //perfrom some task and if task is completed then call resolve with 
    //same value
    let data = {
        vikash: "hello",
        kundu: "seriously"
    }
    if (data.vikash === "hello") {
        reject("seriously vikash");
    } else {
        resolve(data);
    }
})

document.querySelector("#fetch-github").addEventListener("click", function() {
    fetch("https://api.github.com/users/vikashkundu")
    .then((resp) => {
        return resp.headers;
    }).then((headers) => {
        headers.forEach((value, key) => {
        console.log(`${key} : ${value}`);
        })
    });
});

promise.then((data) => {
    console.log("nice promise");
    console.log(data["vikash"]);
}, (error) => {
    console.log(error);
});

async function promiseTest() {
    try {
        const data = await promise;
        console.log("data inside async await syntax", data);
    } catch (error) {
        console.log("data in async fucntion : ", error);
    }
}

promiseTest();

function multiply(array) {
    let newArray = array.map((value, index) => value * index);
    console.log(newArray);
}

function passArray() {
    let array = [1,2,3,4,5,6];
    multiply(array);
}
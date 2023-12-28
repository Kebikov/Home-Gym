const myJson = [
    [
        {name: 'Вася1', age: 40, live: true}, 
        {name: 'Вася2', age: 40, live: true}
    ],
    [
        {name: 'Вася3', age: 40, live: true},
        {name: 'Вася4', age: 40, live: true}
    ]
]

const strJson = JSON.stringify(myJson);

console.log(strJson);

const numJson = JSON.parse(strJson);

console.log(numJson);

console.log(numJson[1][1].name);
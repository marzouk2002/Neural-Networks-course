const brain = require('brain.js')

const trainingData = [
    { input: { blue: 1 }, output: [1] },
    { input: { red: 1 }, output: [1] },
    { input: { black: 1 }, output: [0] },
    { input: { green: 1 }, output: [0] },
    { input: { brown: 1 }, output: [0] },
];

const net = new brain.NeuralNetwork()

net.train(trainingData)

// console.log('before preference change');
// console.log(Array.from(net.run({ blue: 1})))
// console.log(Array.from(net.run({ brown: 1})))

// trainingData.pop()
// trainingData.push({ input: { brown: 1 }, output: [1] })
// net.train(trainingData)

// console.log('after preference change');
// console.log(Array.from(net.run({ blue: 1})))
// console.log(Array.from(net.run({ brown: 1})))

// MY RECOMMENDATION ENGINE

function strToHex(str) {
    return parseInt(str, 16)
}

const MytrainingData = [
    { input: strToHex('ff0000'), output: [1] },
    { input: strToHex('00ff00'), output: [0] },
    { input: strToHex('0000ff'), output: [0] },
    { input: strToHex('000000'), output: [1] },
    { input: strToHex('ffffff'), output: [0] },
];

const myNet = new brain.NeuralNetwork()
myNet.train(MytrainingData)

console.log(myNet.run("000000"))
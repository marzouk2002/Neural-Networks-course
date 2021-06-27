const brain = require('brain.js')
const rawData = require('./stockData.json')

// scalers
function scaleDown(step) {
    return {
        high: step.high / 138,
        low: step.low / 138,
        close: step.close / 138,
        open: step.open / 138
    }
}

function scaleUp(step) {
    return {
        high: step.high * 138,
        low: step.low * 138,
        close: step.close * 138,
        open: step.open * 138
    }
}

const scaledData = rawData.map(scaleDown)

const trainingData = [
    scaledData.slice(0, 5),
    scaledData.slice(5, 10),
    scaledData.slice(10, 15),
    scaledData.slice(15, 20)
];

const net = new brain.recurrent.LSTMTimeStep({
    inputSize: 4,
    hiddenLayers: [8, 8],
    outputSize: 4
})

net.train(trainingData, {
    learningRate: 0.005,
    errorThresh: 0.02,
    // log: (status) => console.log(status)
})

// console.log(scaleUp(net.run(trainingData[0])))
// console.log(scaleUp((trainingData[1][0])))


console.log(net.forecast(trainingData[0], 3).map(scaleUp))
console.log(trainingData[1].slice(0, 3).map(scaleUp))
const brain = require('brain.js')

const net = new brain.NeuralNetwork({ 
    hiddenLayers : [3] })

const trainingData = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [0, 0], output: [0] }
]

net.train(trainingData, {
    log: (err) => console.log(err),
    logPeriod: 100
})

console.log(net.run([0, 1]))
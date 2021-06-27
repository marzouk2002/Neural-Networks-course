const brain = require('brain.js')
const mathData = require('./math.json')

const net = new brain.recurrent.LSTM({ hiddenLayers : [20]})

net.train(mathData, {errorThresh: 0.025 })

console.log(net.run('2+2='))


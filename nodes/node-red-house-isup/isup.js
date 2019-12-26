module.exports = function(RED) {

    var Check = require('./scan').Check

    RED.nodes.registerType('isup', function(config) {

        var node = this

        RED.nodes.createNode(this, config)

        this.on('input', function (msg) {

            this.status({
                fill: 'green',
                shape: 'dot',
                text: 'busy'
            })

            Check(config.rules, function(res) {
                msg.payload = res
                node.status({})
                node.send(msg)
            })
        })
    })
}
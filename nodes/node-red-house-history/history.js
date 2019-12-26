module.exports = function(RED) {

    var Get = require("./scraper").Get

    RED.nodes.registerType("history", function(config) {

        var node = this

        RED.nodes.createNode(this, config)

        this.on("input", function (msg) {

            this.status({
                fill: 'green',
                shape: 'dot',
                text: 'busy'
            })

            Get("http://www.freesticky.com/stickyweb/syndicate/otd_events.asp", function(res) {
                msg.payload = res
                node.status({})
                node.send(msg)
            })
        })
    })
}
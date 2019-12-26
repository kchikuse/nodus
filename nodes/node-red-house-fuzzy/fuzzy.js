module.exports = function(RED) {

    var GetTime = require("./clock").GetTime

    RED.nodes.registerType("fuzzy", function(config) {
        
        RED.nodes.createNode(this, config)

        this.on("input", function (msg) {
            msg.payload = GetTime()
            this.send(msg) 
        })
    })
}
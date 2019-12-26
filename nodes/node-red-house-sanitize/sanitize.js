module.exports = function(RED) {

    var Strip = require("./cleaner").Strip

    RED.nodes.registerType("sanitize", function(config) {
        
        RED.nodes.createNode(this, config)

        this.on("input", function (msg) {
        	msg.payload = Strip(msg.payload)
            this.send(msg) 
        })
    })
}
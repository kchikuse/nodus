module.exports = function(RED) {

	var Get = require("./rss").Get,
        _ = require("underscore")._

    RED.nodes.registerType("feedly", function(config) {
        
        RED.nodes.createNode(this, config)

        this.on("input", function (msg) {
        	
            var node = this,
                feeds = config.rules,
                len = feeds.length - 1

            this.status({
                fill: 'green',
                shape: 'dot',
                text: 'busy'
            })

          _.each(feeds, function(feed, i) {

                Get(feed.v, feed.t, function(res) {
                    msg.payload = res
                    i === len && node.status({})                  
                    node.send(msg)
                })

            })
        })
    })
}
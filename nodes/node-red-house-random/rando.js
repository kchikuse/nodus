module.exports = function(RED) {

    var _ = require('underscore')._,
        util = require('../lib/util')

    RED.nodes.registerType('rando', function(config) {

        RED.nodes.createNode(this, config)

        this.on('input', function (msg) {
        	
            var data = msg.payload,
                array = _.isArray(data)

            if(array) {
               var max = data.length - 1           
               msg.payload = data[ util.random(max) ]
               this.send(msg)
            }
        })
    })
}
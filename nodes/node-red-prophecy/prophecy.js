module.exports = function(RED) {

    var scrapper = require("./scrapper");

    function GetProphecy(config) {
        RED.nodes.createNode(this, config);

        this.on("input", function (msg) {
        	var html = msg.payload;
        	msg.payload = scrapper.read(html);
            this.send(msg);
        });
    }

    RED.nodes.registerType("prophecy", GetProphecy);
};
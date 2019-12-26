var	cheerio = require("cheerio");

module.exports = {

	read: function(body) {
		var $ = cheerio.load(body);

		$(".auto-style161").remove();
		
		return $(".auto-style152")
				.text()
				.replace(/\s/g, " ")
				.replace(/\s{2,}/g, " ")
				.trim();
	}
};
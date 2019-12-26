var http = require("http")

http.globalAgent.maxSockets = Infinity

var scrap = require("scrap")

module.exports = {

	Get: function(url, count, cb) {

        var res = []

        scrap(url, function(err, $) {

            if(err) return res

            var site = $("title").first().text()

            $("item, entry").each(function(i, e) {
                var el = $(e).find("title"),
                    title = el.first().text().replace(/'/g, "’")

                res.push(site + " - " + title.trim())
            })

            cb(res.splice(0, count))
        })
    }
}
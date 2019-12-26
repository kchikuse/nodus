var request = require("request"),
    cheerio = require("cheerio")

module.exports = {

	Get: function(url, cb) {

        var res = []

        request(url, function(error, response, body) {

            if (!error && response.statusCode === 200) {

                body = body || ""
                body = body.replace(new RegExp("'\\);", "g"), "")
                body = body.replace(new RegExp("document.writeln\\('", "g"), "")

                var $ = cheerio.load(body)

                $("table tr").each(function() {
                    
                    var t = $(this).find("td"),
                        date = $( t[0] ).text(),
                        text = $( t[1] ).text(),
                        fdate = date.replace("*", "").trim()

                    res.push(fdate + " " + text)
                })
            }

            cb(res)
        })
    }
}
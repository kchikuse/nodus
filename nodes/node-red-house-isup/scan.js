var isUp = require('is-up'),
	_ = require('underscore')._

module.exports = {

	Check: function(urls, cb) {

		var res = []

		_.each(urls, function(e, i) {

	        isUp(e.url, function (err, up) {
	            res.push({
	            	'url': e.url,
	            	'online': err ? false : up
	            })

	            if(res.length === urls.length) {
	        		cb(res)
	    		}
	        })

    	})
    }
}
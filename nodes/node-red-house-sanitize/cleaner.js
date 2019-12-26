module.exports = {

	Strip: function(html) {
        return html ? 
            String(html)
            .replace(/\s/g, " ")
            .replace(/\s{2,}/g, " ")
            .replace(/<(?:.|\n)*?>/gm, '').trim() : "";
    }
};
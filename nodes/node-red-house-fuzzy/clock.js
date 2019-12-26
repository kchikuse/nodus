module.exports = {

	GetTime: function() {
     
        var weekdayNames = new Array(7)             // create array containing names of days
        weekdayNames[0] = "Sunday"
        weekdayNames[1] = "Monday"
        weekdayNames[2] = "Tuesday"
        weekdayNames[3] = "Wednesday"
        weekdayNames[4] = "Thursday"
        weekdayNames[5] = "Friday"
        weekdayNames[6] = "Saturday"
        
        var hourNames = new Array(13)            // create array containing names of hours
        hourNames[0]  = "twelve"                 // we need 'twelve' here to account for 'midnight' (hour 0)
        hourNames[1]  = "one"
        hourNames[2]  = "two"
        hourNames[3]  = "three"
        hourNames[4]  = "four"
        hourNames[5]  = "five"
        hourNames[6]  = "six"
        hourNames[7]  = "seven"
        hourNames[8]  = "eight"
        hourNames[9]  = "nine"
        hourNames[10] = "ten"
        hourNames[11] = "eleven"
        hourNames[12] = "twelve"
        
        var minuteNames = new Array()              // arrays for key minute values
        minuteNames["5"]  = 'five'
        minuteNames["10"] = 'ten'
        minuteNames["15"] = 'quarter'
        minuteNames["20"] = 'twenty'
        minuteNames["30"] = 'half'
        
        var prefixes = new Array()
        prefixes["to"] = 'to'
        prefixes["past"] = 'past'
        
        var suffixes  = new Array()              // appended to the time string when hour is sharp ( :56 -> :04 )
        suffixes["sharp"] = "o'clock"
        
        var d = new Date()               
        
        var hours  = d.getHours()
        var minutes = d.getMinutes()
        var minuteName = d.minuteNames
        var exactHours = hours
        var exactMinutes = minutes
        var meridian = 'am'
        var prefix   = ''
        var suffix  = ''
        var hourName = ''
        
        if(minutes <= 33) {
            prefix = prefixes.past
        } else {
            prefix  = prefixes.to
            minutes = 60 - minutes
            hours++
        }
        
        if(hours >= 12) {
            hours  = hours - 12
            exactHours = exactHours - 12
            meridian = 'pm'
        }
        hourName = hourNames[hours]
        
        if (minutes < 4) {
            minuteName = ""
            suffix = "o'clock"
            prefix = ""
        } 
        else if (minutes < 8) {
            minuteName = minuteNames['5']
        } 
        else if (minutes < 13 ) {
            minuteName = minuteNames['10']
        } 
        else if ( minutes < 18 ) {
            minuteName = minuteNames['15']
        } 
        else if ( minutes < 27 ) {
            minuteName = minuteNames['20']
        } 
        else {
            minuteName = minuteNames['30']
        }
        
        var exactTime = exactHours + ':' + exactMinutes + meridian,
            fuzzyTime = minuteName + " " + prefix + " " + hourName + " " + suffix

        return fuzzyTime.trim()           
    }
}
function compareDates2() {

    var dates = arguments;
    // [d1,d2,d3,d4]

    var result;

    for ( var i = 0; i < dates.length-1; i++ ) {
        if ( dates[i].getTime() == dates[i+1].getTime() ) {
            result = true;
        } else {
            result = false;
            break;
        }
    }

    return result;
    
}

function compareDates(d1, d2) {

    var result = ( d1.getTime() == d2.getTime() ) ? true : false;
    return result;

}

var d1 = new Date(2014,2,25);
var d2 = new Date(2014,2,25);
var d3 = new Date(2014,2,25);
var d4 = new Date(2014,2,25);

//console.log( compareDates(d1,d2) );
console.log( compareDates(d1,d2,d3,d4) );
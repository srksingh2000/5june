function getFunc() {

    var a = 7;

    return function(b) {


        alert(a + b);


    }
    var f = grtFunc();
    f(5);


}
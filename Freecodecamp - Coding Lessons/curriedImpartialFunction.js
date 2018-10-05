function add(x){
    return function (y) {
        return function (z) {
            return x + y + z;
        }
    }
}

add(10)(20)(30);
/**
 * return a value using curried method
 */


 function impartial(x, y, z) {
     return x + y + z;
 }
 impartial.bind(this, 1, 2);

/**
 * return a value using impartial method
 */
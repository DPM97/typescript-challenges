/* Find the lowest 10 positive integers where the sum of the digits of each integer equals 10 and that contain the number 7 as one of the digits */
/* saw this one on twitter */

let solved: boolean = false;
let nums: number[] = [];
let i: number = 0;
while (!solved) {
    let added: number = 0;
    let temp: string = i.toString();
    let seven: boolean = false;
    for (var j = 0; j < temp.length; j++) {
        if (7 ==+ temp.charAt(j)) {
            seven = true;
        } 
        added +=+ temp.charAt(j)
    }
    if (added != 10 || !seven) {
        i++;
        continue
    } else {
        nums.push(i)
        if (nums.length == 10) {
            console.log(nums);
            break;
        } else {
            i++;
        }
    }
}

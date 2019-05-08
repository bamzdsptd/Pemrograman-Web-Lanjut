// /*function log(message) {
//     console.log(message);
// }
// var message = 'Hello World!';
// log(message);*/
// function doSomething() {
//     for (let i = 0; i < 5; i++){
//         console.log(i);
//     }
//     console.log('Finally: ' + i)
// }
// doSomething();
// let count = 5;
// count = 'a' ;
// let pesan ; //tipe data default yaitu any
// pesan = 'abc';
// let percobaan =(<string>pesan).endsWith('c');
// let alternative = (pesan as string).endsWith('c'); //cara kedua
// let log = function pesan(){
//     console.log(pesan);
// }
// //code diatas bisa disingkat menggunakan function arrow
// let dialog = (pesan) => {
//     console.log(pesan);
// }
// //atau seperti berikut
// let dolog1=(pesan) => console.log(pesan);
// interface Point{
//     x:number;
//     y:number;
// }
// let drawPoint = (point:Point) => {
//     // ....
// }
// drawPoint({
//     x:1,
//     y:1,
// })
// class Pointku{
//     a:number;
//     b:number;
//     draw(){
//         // ....
//     }
//     getDistance(another:Pointku){
//         // ....
//     }
// }
//jika kita jalankan code berikut maka akan terjadi error
//hal ini disebabkan karena coins tidak mengenal property a dan b
//maka buatlah objek baru dengan nama objekcoins line 79
var Pointku1 = /** @class */ (function () {
    function Pointku1() {
    }
    Pointku1.prototype.draw = function () {
        console.log('X' + this.a, ',Y' + this.b);
    };
    Pointku1.prototype.getDistance = function (another) {
        // ....
    };
    return Pointku1;
}());
var coins;
coins.draw();
// let objekcoins = new Pointku1;
// objekcoins.a=1;
// objekcoins.a=3;
// objekcoins.draw();

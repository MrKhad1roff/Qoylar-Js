
let a = +prompt("Qo`ylarni Sanash uchun istalgan son kiriting");
let b = 1;
while(isNaN(a) || a==0){
    a = +prompt("Qaytadan kiriting");
}

for (let i = 1; i <=a; i++) {
   
    if(i==1){
        console.log(i+" ta qo`y");
    }else{
    console.log(i+ " ta qo`ylar");
}
}











/* let board = "";
let a = 1;
let u = 1;
let b = +prompt("Kvadrat Tomonlari O`lchamini Kiriting:");

while (isNaN(b) || b == 0) {
    b = +prompt("Qaytadan Kiriting !");
}



for (let i = 1; i < b; i++) {

    for (let k = 1; k < b; k++) {

        if (i % 2 == 1 && k % 2 == 1 || i % 2 == 0 && k % 2 == 0) {
            board = board + "[*]"
            
        } else{
            board = board + "[*]"
        }
    }
    console.log(board);
    board=""
}
 */
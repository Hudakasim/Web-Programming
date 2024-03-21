alert("DENEME");
// printf
document.write("<h1> Başlık </h1>");
document.write("ilk js uygulaması");
document.write("<br> 3 + 5 = ", 3 + 5); */
/* ************************************************************** */
let a;
let b;
let c;
let d;

a = 3;
b = 5;
c = 90;
d = 23;

document.write("<br>" + (a+b));
document.write("<br>" , (a+b));
/* ************************************************************** */
function toplama(a, b)
{
return (a + b);
}
document.write("<br>", toplama(a, b));
/* ************************************************************** */
// arrow function
let sonuc = (a, b) => a - b;
document.write("<br>", sonuc(c, d));

let faktoryel = (a) =>
{
let sonuc2 = 1;
for (let i = 1;i <= a; i++)
sonuc2 = sonuc2 * i;
return sonuc2;
};
document.write("<br>", faktoryel(b) ,"<br>");
/* ************************************************************** */
const sayilar = [1, 2, 3, 10, 11, 12];
let dizi = () =>
{
for (let deger = 0; sayilar[deger]; deger++)
{
document.write(sayilar[deger]);
}
}
document.write(dizi());







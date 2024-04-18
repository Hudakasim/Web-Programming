function fn_topla(a, b){
	document.write(a+b);
  }

  let carp = (a,b)=>{
	document.getElementById("etiket1").innerHTML = a * b;
	// aynı isme sahip birden fazla eleman olabilir
	// index gibi düşünüp kullanabilirsiniz.
	document.getElementsByName("input2")[0].type = "checkbox";
  }

  let cıkar = () => {
	let s1 = document.getElementById("sayi1").value;
	let s2 = document.getElementById("sayi2").value;
	document.getElementById("sonuc").innerHTML = s1 - s2;
  }

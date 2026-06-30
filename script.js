fetch("../data/soal.json")
.then(res=>res.json())
.then(data=>{

let html="";

data.forEach((item,index)=>{

html+=`
<h3>${index+1}. ${item.soal}</h3>

`;

item.pilihan.forEach(p=>{

html+=`
<label>

<input type="radio"
name="${item.id}"
value="${p}">

${p}

</label><br>

`;

});

});

document.getElementById("soal").innerHTML=html;

});

document
.getElementById("loginForm")
.addEventListener("submit",function(e){

    e.preventDefault();

    const nama=document.getElementById("nama").value.trim();

    const kelas=document.getElementById("kelas").value;

    const mapel=document.getElementById("mapel").value;

    if(nama===""){

        alert("Nama belum diisi");

        return;

    }

    if(kelas===""){

        alert("Pilih kelas");

        return;

    }

    if(mapel===""){

        alert("Pilih mata pelajaran");

        return;

    }

    localStorage.setItem("nama",nama);

    localStorage.setItem("kelas",kelas);

    localStorage.setItem("mapel",mapel);

    window.location.href="dashboard.html";

});

let push = 0;
function pushMe() {
    push += 1;
    document.getElementById("clicks").innerHTML = push;
};


function keklik(obj) {
    obj.innerHTML = "NOOOOOBBBB"
}

function lepas(obj) {
    obj.innerHTML = ">>CLICKS HERE<<"
}

function startGame() {
    var kata = "Kamu akan diminta untuk menekan tombol clicl me sebanyak yg kamu bisa dalam waktu 10 detik. Hanya pemberani saja yg sanggup menghadapi permainan ini. Are you ready for MOUSE DESTROYER?!"
    var kata2 = "Setelah anda menekan ok, maka permainan langsung dimulai. Ingat, persiapkan jari jari anda dengan benar."
    if (confirm(kata + kata2)) {
        setTimeout(waktuHabis, 10000)
    } else {
        alert("TAKUT YA?")
        alert("Reload lagi kalau mau main, kalau mau latihan ya gak usah di reload pagenya.")
    }
}

function waktuHabis() {
    let hasil = "";
    if (push >= 70) {
        hasil = "Itu tangan apa mesin jahit? LAJU BENER"
    } else if (push >= 60) {
        hasil = "Itu tangan pasti geter."
    } else if (push >= 50) {
        hasil = "Mantep juga, kecepatan mengklik mousenya diatas rata-rata."
    } else if (push >= 40) {
        hasil = "Laju juga tangannya, ya okelah"
    } else if (push >= 30) {
        hasil = "masih bisa dibilang kecepatan normal"
    } else if (push >= 20) {
        hasil = "Agak pegal ya tangannya?"
    } else if (push >= 10) {
        hasil = "Ini tangan pasti lagi kesemutan"
    } else if (push >= 0) {
        hasil = "Pasti cuman nyobain aja kan?"
    } else {
        hasil = "Niat main gak? Please aku gak bisa didiemin gini"
    }

    alert(" untuk hasil, silahkan tekan oke");
    alert("Kamu berhasil mengklik sebanyak " + push+ "\nRANKED : "+ hasil)
    if (confirm("Main LAGI?")) {
        push = 0
        startGame()
    } else {
        alert("Terima kasih sudah mencoba game ini.")
    }
}

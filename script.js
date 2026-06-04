const pages = document.querySelectorAll(".page");
const enterBtn = document.getElementById("enterBtn");
const envelope = document.getElementById("envelope");
const surpriseBtn = document.getElementById("surpriseBtn");
const bgMusic = document.getElementById("bgMusic");
const playMusicBtn = document.getElementById("playMusic");

function showPage(id){
    pages.forEach(page=>{
        page.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

/* LOGIN */

enterBtn.addEventListener("click",()=>{

    const name =
    document.getElementById("username").value;

    const birth =
    document.getElementById("birthdate").value;

    if(name === "" || birth === ""){
        alert("Isi nama dan tanggal lahir dulu ya 💙");
        return;
    }

    bgMusic.play();

    showPage("qrPage");
});

/* QR PAGE */

document
.querySelectorAll(".nextBtn")
.forEach(btn=>{

    btn.addEventListener("click",()=>{

        const next =
        btn.dataset.next;

        showPage(next);

    });

});

/* ENVELOPE */

envelope.addEventListener("click",()=>{

    envelope.classList.add("open");

    setTimeout(()=>{

        showPage("cardPage");

    },1000);

});

/* SURPRISE */

surpriseBtn.addEventListener("click",()=>{

    showPage("menuPage");

});

/* MENU */

document
.querySelectorAll(".menu-card")
.forEach(card=>{

    card.addEventListener("click",()=>{

        const target =
        card.dataset.target;

        showPage(target);

    });

});

/* BACK */

document
.querySelectorAll(".backMenu")
.forEach(btn=>{

    btn.addEventListener("click",()=>{

        showPage("menuPage");

    });

});

/* PLAY MUSIC */

if(playMusicBtn){

    playMusicBtn.addEventListener("click",()=>{

        bgMusic.play();

    });

}

/* TYPING EFFECT */

const giftText = `
Selamat bertambah umur, Aufa.

Hari ini bukan sekadar bertambah usia.

Ini adalah pengingat bahwa kamu telah tumbuh menjadi seseorang yang begitu berharga.

Terima kasih karena selalu menjadi pribadi yang hangat, tulus, dan membawa kenyamanan bagi orang-orang di sekitarmu.

Menjadi cahaya tidak selalu tentang bersinar paling terang, terkadang cukup hadir untuk menghangatkan.

Karena kebaikan yang sederhana sering kali lebih membekas daripada kemewahan yang sementara.

Semoga di usia yang baru ini, semua hal baik menemukan jalannya menuju dirimu.

Semoga setiap langkahmu dipenuhi kebahagiaan, kesehatan, dan orang-orang yang tulus menyayangimu.

Tetaplah menjadi Aufa yang baik, kuat, dan selalu membawa kehangatan.

Happy Birthday 🎂💙

- Someone Who Cares
`;

const typingTarget =
document.getElementById("typingText");

let i = 0;

function typeWriter(){

    if(!typingTarget) return;

    if(i < giftText.length){

        typingTarget.innerHTML +=
        giftText.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }

}

window.onload = ()=>{

    if(typingTarget){

        typingTarget.innerHTML = "";

        setTimeout(typeWriter,500);

    }

};

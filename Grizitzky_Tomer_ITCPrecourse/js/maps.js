let currentlySelected = 0;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");


let a = [
    //Tel Aviv
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108169.89028976239!2d34.797245999999994!3d32.08793150000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2z16rXnCDXkNeR15nXkS3Xmdek15U!5e0!3m2!1siw!2sil!4v1653124844885!5m2!1siw!2sil',

    //Jerusalem
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217027.3611576277!2d35.17535899999999!3d31.796318600000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2z15nXqNeV16nXnNeZ150!5e0!3m2!1siw!2sil!4v1653124970163!5m2!1siw!2sil',

    //Ramat Gan
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54094.4907523685!2d34.8263035!3d32.071799949999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c86e794e4ad%3A0x2d00bf3ee717526f!2z16jXnteqINeS158!5e0!3m2!1siw!2sil!4v1653124638137!5m2!1siw!2sil',

    //Givatayim
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27047.67348062703!2d34.809304450000006!3d32.07035265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4bba478c09a7%3A0x876720020e35c8f7!2z15LXkdei16rXmdeZ150!5e0!3m2!1siw!2sil!4v1653125079278!5m2!1siw!2sil',

    //Petah Tikva
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54083.25322235814!2d34.88718555!3d32.090790000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d3673a30753b9%3A0xcde0651f23c1443c!2z16TXqteXINeq16fXldeV15Q!5e0!3m2!1siw!2sil!4v1653125195131!5m2!1siw!2sil',

];


let i = 0;

function next() {
    console.log("next ", i);
    prevBtn.disabled = false;
    if (i !== (a.length - 1)) {
        document.getElementById('myIframe').src = a[i];
        i++;
    } else {
        document.getElementById('myIframe').src = a[i];
        nextBtn.disabled = true;
    }
}

function prev() {
    console.log("prev ", i);
    nextBtn.disabled = false;
    if (i !== 0) {
        document.getElementById('myIframe').src = a[i];
        i--;
    } else {
        document.getElementById('myIframe').src = a[i];
        prevBtn.disabled = true;
    }
}

function init() {
    prevBtn.addEventListener("click", function () {
        prev();
    });

    nextBtn.addEventListener("click", function () {
        next();
    });
}

init();
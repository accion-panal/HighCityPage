import {SocialRedes}from "./userId.js";  


const loadInformation=()=>{

    let facebookSocial = document.getElementById("facebookSocial");
    if (facebookSocial !== null){
        facebookSocial.innerHTML = `
        <a class="btn btn-dark btn-circle btn-sm" href="${SocialRedes.facebok}" target="_blank"
        ><i class="bi bi-facebook"></i
        ></a>
        `;
    }
    let instagramSocial = document.getElementById("instagramSocial");
    if (instagramSocial !== null){
        instagramSocial.innerHTML = `
        <a class="btn btn-dark btn-circle btn-sm" href="${SocialRedes.instagram}" target="_blank"
        ><i class="bi bi-instagram"></i
        ></a>
        `;
    }
    let tiktokSocial = document.getElementById("tiktokSocial");
    if (tiktokSocial !== null){
        tiktokSocial.innerHTML = `
        <a class="btn btn-dark btn-circle btn-sm" href="${SocialRedes.tiktok}" target="_blank"
        ><i class="bi bi-tiktok"></i></a>
        `;
    }
}
loadInformation();
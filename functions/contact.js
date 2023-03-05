
function contact(){
    let page = document.getElementById("content");

    let contactus = document.createElement("h1");
    contactus.innerText = "******** CONTACT US ********";

    let chiefman = document.createElement("div");
    chiefman.setAttribute("id", "chiefman");
    let chiefname = document.createElement("h2");
    chiefname.textContent = "Chief Manager";
    let phonechief = document.createElement("p");
    phonechief.textContent = "+000 000 0000";
    let email1 = document.createElement("p");
    email1.textContent = "fakeemail@real.com";
    let img1 = document.createElement("img");
    img1.setAttribute("id", "menuimg");
    img1.setAttribute("src", "../images/logo.jpg");
    chiefman.append(chiefname);
    chiefman.append(phonechief);
    chiefman.append(email1);
    chiefman.append(img1);

    let markdir = document.createElement("div");
    markdir.setAttribute("id", "markdir");
    let markdirname = document.createElement("h2");
    markdirname.textContent = "Marketing Director";
    let phonemark = document.createElement("p");
    phonemark.textContent = "+000 000 0000";
    let email2 = document.createElement("p");
    email2.textContent = "fakeemail@real.com";
    let img2 = document.createElement("img");
    img2.setAttribute("id", "menuimg");
    img2.setAttribute("src", "../images/logo.jpg");
    markdir.append(markdirname);
    markdir.append(phonemark);
    markdir.append(email2);
    markdir.append(img2);

    let branchman = document.createElement("div");
    branchman.setAttribute("id", "markdir");
    let branchmanname = document.createElement("h2");
    branchmanname.textContent = "Branch Manager";
    let branchmanphone = document.createElement("p");
    branchmanphone.textContent = "+000 000 0000";
    let email3 = document.createElement("p");
    email3.textContent = "fakeemail@real.com";
    let img3 = document.createElement("img");
    img3.setAttribute("id", "menuimg");
    img3.setAttribute("src", "../images/logo.jpg");
    branchman.append(branchmanname);
    branchman.append(branchmanphone);
    branchman.append(email3);
    branchman.append(img3);

    page.append(contactus);
    page.append(chiefman);
    page.append(markdir);
    page.append(branchman);
}
export {contact};
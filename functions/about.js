
function about(){
    let page = document.getElementById("content");

    let menu = document.createElement("h1");
    menu.innerText = "******** MENU ********";

    let bev = document.createElement("div");
    let bevhead = document.createElement("h1");
    bev.setAttribute("id", "bev");
    bevhead.innerText = "BEVERAGES"
    bev.append(bevhead);

    let bev1 = document.createElement("div");
    bev1.setAttribute("id", "bev1");
    let name1 = document.createElement("h2");
    name1.innerText = "Honey Tea"
    let par1 = document.createElement("p");
    par1.innerText = "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!"
    let pic1 = document.createElement("img");
    pic1.setAttribute("src", "/images/honeytea.jpg");
    pic1.setAttribute("id", "menuimg");
    bev1.append(name1);
    bev1.append(par1);
    bev1.append(pic1)
    bev.append(bev1);

    let bev2 = document.createElement("div");
    bev2.setAttribute("id", "bev2");
    let name2 = document.createElement("h2");
    name2.innerText = "Beary Tea"
    let par2 = document.createElement("p");
    par2.innerText = "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request."
    let pic2 = document.createElement("img");
    pic2.setAttribute("src", "/images/bearytea.jpeg");
    pic2.setAttribute("id", "menuimg");
    bev2.append(name2);
    bev2.append(par2);
    bev2.append(pic2);
    bev.append(bev2);

    let dish = document.createElement("div");
    let dishhead = document.createElement("h1");
    dish.setAttribute("id", "dish");
    dishhead.innerText = "MAIN DISHES"
    dish.append(dishhead)

    let dish1 = document.createElement("div");
    dish1.setAttribute("id", "dish1");
    let dname1 = document.createElement("h2");
    dname1.innerText = "Chicken"
    let dpar1 = document.createElement("p");
    dpar1.innerText = "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request."
    let dpic1 = document.createElement("img");
    dpic1.setAttribute("id", "menuimg");
    dpic1.setAttribute("src", "/images/chicken.jpg");
    dish1.append(dname1);
    dish1.append(dpar1);
    dish1.append(dpic1)
    dish.append(dish1);

    let dish2 = document.createElement("div");
    dish2.setAttribute("id", "dish2");
    let dname2 = document.createElement("h2");
    dname2.innerText = "Mutton"
    let dpar2 = document.createElement("p");
    dpar2.innerText = "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request."
    let dpic2 = document.createElement("img");
    dpic2.setAttribute("id", "menuimg");
    dpic2.setAttribute("src", "/images/mutton.jpg");
    dish2.append(dname2);
    dish2.append(dpar2);
    dish2.append(dpic2)
    dish.append(dish2);

    page.append(menu);
    page.append(bev);
    page.append(dish);
}
export {about};
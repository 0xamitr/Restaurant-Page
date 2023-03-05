
function pageload(){
    let page = document.getElementById("content");
    let restname = document.createElement("h1");
    restname.setAttribute("id", "restname");
    restname.innerText = "THE TASTE OF CHINA";

    let about = document.createElement("div");
    let abouthead = document.createElement("h2");
    about.setAttribute("id", "about");
    abouthead.innerText = "ABOUT";
    about.append(abouthead);

    let aboutpara = document.createElement("p");
    aboutpara.setAttribute("id", "aboutpara");
    aboutpara.innerText = "A Chinese restaurant is a restaurant that serves Chinese cuisine. Most of them are in the Cantonese style, due to the history of the Chinese diaspora, though other regional cuisines such as Sichuan cuisine and Hakka cuisine are also common. Many Chinese restaurants may adapt their cuisine to fit local taste preferences, as in British Chinese cuisine and American Chinese cuisine. Some Chinese restaurants may also serve other Asian cuisines in their menus, such as Japanese, Korean, Indonesian, or Thai cuisines, though their selection is often limited and minimal compared to Chinese dishes.";
    about.append(aboutpara);

    let image = document.createElement("img");
    image.setAttribute("id", "image");
    image.setAttribute("src", "images/logo.JPG");
    
    page.append(restname);
    page.append(about);
    page.append(image);

}
export {pageload};

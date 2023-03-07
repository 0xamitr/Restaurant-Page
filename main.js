(()=>{"use strict";function e(){let e=document.getElementById("content"),t=document.createElement("h1");t.setAttribute("id","restname"),t.innerText="THE TASTE OF CHINA";let n=document.createElement("div"),i=document.createElement("h2");n.setAttribute("id","about"),i.innerText="ABOUT",n.append(i);let a=document.createElement("p");a.setAttribute("id","aboutpara"),a.innerText="A Chinese restaurant is a restaurant that serves Chinese cuisine. Most of them are in the Cantonese style, due to the history of the Chinese diaspora, though other regional cuisines such as Sichuan cuisine and Hakka cuisine are also common. Many Chinese restaurants may adapt their cuisine to fit local taste preferences, as in British Chinese cuisine and American Chinese cuisine. Some Chinese restaurants may also serve other Asian cuisines in their menus, such as Japanese, Korean, Indonesian, or Thai cuisines, though their selection is often limited and minimal compared to Chinese dishes.",n.append(a);let r=document.createElement("img");r.setAttribute("id","image"),r.setAttribute("src","images/logo.JPG"),e.append(t),e.append(n),e.append(r)}console.log("Hello world");let t=document.getElementById("content"),n=document.createElement("div");n.setAttribute("id","options");let i=document.createElement("button");i.innerText="HOME";let a=document.createElement("button");a.innerText="MENU";let r=document.createElement("button");r.innerText="CONTACT US",n.append(i),n.append(a),n.append(r),t.append(n),e(),i.addEventListener("click",(()=>{t.innerHTML="",t.append(n),e()})),a.addEventListener("click",(()=>{t.innerHTML="",t.append(n),function(){let e=document.getElementById("content"),t=document.createElement("h1");t.innerText="******** MENU ********";let n=document.createElement("div"),i=document.createElement("h1");n.setAttribute("id","bev"),i.innerText="BEVERAGES",n.append(i);let a=document.createElement("div");a.setAttribute("id","bev1");let r=document.createElement("h2");r.innerText="Honey Tea";let d=document.createElement("p");d.innerText="A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!";let m=document.createElement("img");m.setAttribute("src","images/honeytea.JPG"),m.setAttribute("id","menuimg"),a.append(r),a.append(d),a.append(m),n.append(a);let c=document.createElement("div");c.setAttribute("id","bev2");let o=document.createElement("h2");o.innerText="Beary Tea";let s=document.createElement("p");s.innerText="A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.";let l=document.createElement("img");l.setAttribute("src","images/bearytea.JPG"),l.setAttribute("id","menuimg"),c.append(o),c.append(s),c.append(l),n.append(c);let u=document.createElement("div"),p=document.createElement("h1");u.setAttribute("id","dish"),p.innerText="MAIN DISHES",u.append(p);let h=document.createElement("div");h.setAttribute("id","dish1");let E=document.createElement("h2");E.innerText="Chicken";let b=document.createElement("p");b.innerText="A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.";let g=document.createElement("img");g.setAttribute("id","menuimg"),g.setAttribute("src","images/chicken.JPG"),h.append(E),h.append(b),h.append(g),u.append(h);let A=document.createElement("div");A.setAttribute("id","dish2");let f=document.createElement("h2");f.innerText="Mutton";let T=document.createElement("p");T.innerText="A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.";let v=document.createElement("img");v.setAttribute("id","menuimg"),v.setAttribute("src","images/mutton.JPG"),A.append(f),A.append(T),A.append(v),u.append(A),e.append(t),e.append(n),e.append(u)}()})),r.addEventListener("click",(()=>{t.innerHTML="",t.append(n),function(){let e=document.getElementById("content"),t=document.createElement("h1");t.innerText="******** CONTACT US ********";let n=document.createElement("div");n.setAttribute("id","chiefman");let i=document.createElement("h2");i.textContent="Chief Manager";let a=document.createElement("p");a.textContent="+000 000 0000";let r=document.createElement("p");r.textContent="fakeemail@real.com";let d=document.createElement("img");d.setAttribute("id","menuimg"),d.setAttribute("src","images/michael.jpg"),n.append(i),n.append(a),n.append(r),n.append(d);let m=document.createElement("div");m.setAttribute("id","markdir");let c=document.createElement("h2");c.textContent="Marketing Director";let o=document.createElement("p");o.textContent="+000 000 0000";let s=document.createElement("p");s.textContent="fakeemail@real.com";let l=document.createElement("img");l.setAttribute("id","menuimg"),l.setAttribute("src","images/dwight.jpg"),m.append(c),m.append(o),m.append(s),m.append(l);let u=document.createElement("div");u.setAttribute("id","markdir");let p=document.createElement("h2");p.textContent="Branch Manager";let h=document.createElement("p");h.textContent="+000 000 0000";let E=document.createElement("p");E.textContent="fakeemail@real.com";let b=document.createElement("img");b.setAttribute("id","menuimg"),b.setAttribute("src","images/pam.jpeg"),u.append(p),u.append(h),u.append(E),u.append(b),e.append(t),e.append(n),e.append(m),e.append(u)}()}))})();
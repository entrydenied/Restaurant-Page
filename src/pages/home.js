import lukaImage from "../assets/images/luka.jpeg";

const home = function(){
    const content = document.querySelector('#content');

    const header = document.createElement("div");
    header.id = "header";

    const topText = document.createElement("p");
    topText.id = "topText";
    topText.textContent = "Imagine Being a Suns Fan"
    header.appendChild(topText);

    content.appendChild(header);

    const lukaContainer = document.createElement("div");
    lukaContainer.id = "lukaContainer";

    const luka = document.createElement("img");
    luka.src = lukaImage;
    luka.id = "luka";
    lukaContainer.appendChild(luka);

    content.appendChild(lukaContainer);

    const pageLoad = document.createElement("div");
    pageLoad.className="pageLoad";

    content.appendChild(pageLoad);
}

export default home;
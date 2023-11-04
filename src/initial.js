export function initialPgLoad(){


    const contentDiv = document.querySelector("#content");
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Jaybees";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const topImage = document.createElement('img');
    topImage.classList.add('image');
    topImage.src = "../tokyo.png";
    topImage.alt = 'restaurant image';
    contentDiv.appendChild(topImage);

    const para1 = document.createElement('p');
    para1.classList.add('para-1');  
    para1.textContent = "good food";
    contentDiv.appendChild(para1);

    const para2 = document.createElement('p');
    para2.classList.add('para-2');
    para2.textContent = "great food";
    contentDiv.appendChild(para2);



}


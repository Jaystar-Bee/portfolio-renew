const project = [
    {
        pic: "project 1.jpg",
        title: "Budget Calculator",
        url: "https://budgi.netlify.app",
        code: ["Javascript", "HTML", "CSS"]
    },

    {
        pic: "project 2.jpg",
        title: "Dice Game",
        url: "https://gampiggy.netlify.app",
        code: ["Javascript", "HTML", "CSS"]
    },

    {
        pic: "project 3.jpg",
        title: "Tour Landing Page",
        url: "https://btour.netlify.app",
        code: ["CSS", "HTML"]
    },

    {
        pic: "project 4.jpg",
        title: "Social Media",
        url: "https://talka.netlify.app",
        code: ["Vue Js", "HTML", "CSS"]
    },

    {
        pic: "project 5.jpg",
        title: "Hotel Landing Page",
        url: "https://trilly.netlify.app",
        code: [ "CSS","HTML"]
    },
    {
        pic: "project 6.jpg",
        title: "Hotel Landing Page",
        url: "https://gitcopy.netlify.app",
        code: [ "CSS","HTML"]
    },
    {
        pic: "project 7.jpg",
        title: "Hotel Landing Page",
        url: "https://jaystarvid.netlify.app",
        code: ["Javascript", "CSS","HTML"]
    },
    {
        pic: "project 8.jpg",
        title: "Hotel Landing Page",
        url: "https://jaystar.netlify.app",
        code: [ "CSS","HTML"]
    },


];

// DISPLAY THE PROJECT CARD
project.forEach(function(current) {

// I TRIED TO DISPLAY THE INOLVED CODE LANGUAGE BUT FAILED!!!!!!
const code = current.code.map(function(cur){
    console.log(cur);
    return cur;

});
var i = 0;

   if (current.code == undefined)  current.code = '';
const project__card = `
    <div class="section__project-card">
    <div class="section__project-image--cover">
        <img src="img/web/${current.pic}" alt="project picture">
    </div>
    <div class="section__project-image--details">
        <div class="card__details-top">
            <h2>${current.title}</h2>
            <a href="${current.url}" target="_blank">preview</a>
        </div>
        <div class="card__details-bottom">     
        <button class="card__button">${current.code[i]}</button>
        </div>
    </div>
    </div>
    `;

    document.querySelector('.project').insertAdjacentHTML('beforeend', project__card);

    

    
});


document.querySelector('.open__button').addEventListener('click', function(e) {
    document.querySelector('.home').classList.toggle('display');
});

 let highestZ = 20;
 function updateTime() {
  var currentTime = new Date().toLocaleString();
  var timeText = document.querySelector("#timeElement");
  timeText.innerHTML = currentTime;
}
setInterval(updateTime, 1000);

dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("notes"));
dragElement(document.getElementById("facts"));
dragElement(document.getElementById("settings"));


function dragElement(element) {

  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
 
    element.onmousedown = startDragging;
  }

  function startDragging(e) {
  e = e || window.event;
  e.preventDefault();

  highestZ++;
  element.style.zIndex = highestZ;

  initialX = e.clientX;
  initialY = e.clientY;

  document.onmouseup = stopDragging;
  document.onmousemove = dragElement;
} 

 function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }
function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}





var welcomeScreen = document.querySelector("#welcome")

function closeWindow(element) {

    element.classList.remove("show");

    setTimeout(function(){

        element.style.display = "none";

    },180);

}

function openWindow(element) {

  highestZ++;

  element.style.zIndex = highestZ;

  element.style.display = "block";

  setTimeout(function(){

      element.classList.add("show");

  },10);

}

var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")


welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});




var selectedIcon = undefined;

function selectIcon(element) {

  if (selectedIcon !== undefined) {
    deselectIcon(selectedIcon);
  }

  element.classList.add("selected");
  selectedIcon = element;
}

function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = undefined;
}

function handleIconTap(element) {
  console.log("selected?", element.classList.contains("selected"));

  if (element.classList.contains("selected")) {
    deselectIcon(element);
  } else {
    selectIcon(element);
  }
}

var app1 = document.querySelector("#app1");
console.log(app1);

var factsApp = document.querySelector("#factsApp");

factsApp.addEventListener("click", function () {
  handleIconTap(factsApp);
});

app1.addEventListener("click", function () {
  console.log("CLICKED");
  handleIconTap(app1);
});



var notesScreen = document.querySelector("#notes")

var notesScreenClose = document.querySelector("#notesclose")

notesScreenClose.addEventListener("click", () => closeWindow(notesScreen));

var app1 = document.querySelector("#app1");

app1.addEventListener("click", function () {
    openWindow(notesWindow);
    app1.classList.add("active");
});

var notesWindow = document.querySelector("#notes");
var notesClose = document.querySelector("#notesclose");

notesClose.addEventListener("click", function () {
    closeWindow(notesWindow);
    app1.classList.remove("active");
});


var factsWindow = document.querySelector("#facts");
var factsClose = document.querySelector("#factsclose");
var factsApp = document.querySelector("#factsApp");

factsApp.addEventListener("click", function() {
  openWindow(factsWindow);
  factsApp.classList.add("active");
});

factsClose.addEventListener("click", function() {
  closeWindow(factsWindow);
  factsApp.classList.remove("active");
});

var facts = [
  "Sputnik 1 was the first artificial satellite launched into space.",
  "A day on Venus is longer than a year on Venus.",
  "Chandrayaan-3 made India the first nation to land near the Moon's south pole.",
  "Voyager 1 is the most distant human-made object from Earth.",
  "Mars has the tallest volcano in the Solar System: Olympus Mons.",
  "The International Space Station travels at about 28,000 km/h.",
  "Jupiter is so large that more than 1,300 Earths could fit inside it.",
  "The Sun contains about 99.8% of the mass in our Solar System.",
  "Space is completely silent because there is no atmosphere to carry sound waves."
];

var factButton = document.querySelector("#factButton");
var factText = document.querySelector("#factText");

factButton.addEventListener("click", function() {
  var randomNumber = Math.floor(Math.random() * facts.length);
  factText.innerHTML = facts[randomNumber];
}); 









const bootButton = document.getElementById("bootButton");
const bootScreen = document.getElementById("bootScreen");

bootButton.addEventListener("click", () => {

    const desktop = document.getElementById("desktop");

    bootScreen.classList.add("fadeOut");

    desktop.style.opacity = "1";

    openWindow(welcomeScreen);

    setTimeout(() => {
        bootScreen.style.display = "none";
    },600);

});



const contextMenu = document.getElementById("contextMenu");
const desktop = document.getElementById("desktop");

desktop.addEventListener("contextmenu", function(e){

    e.preventDefault();

    contextMenu.style.display = "block";

    let x = e.clientX;
    let y = e.clientY;

    const menuWidth = contextMenu.offsetWidth;
    const menuHeight = contextMenu.offsetHeight;

    if(x + menuWidth > window.innerWidth){
        x = window.innerWidth - menuWidth - 10;
    }

    if(y + menuHeight > window.innerHeight){
        y = window.innerHeight - menuHeight - 10;
    }

    contextMenu.style.left = x + "px";
    contextMenu.style.top = y + "px";

});

document.addEventListener("click", function(){
    contextMenu.style.display = "none";
});


document.getElementById("newNote").addEventListener("click", function () {
    openWindow(notesWindow);
    app1.classList.add("active");
    contextMenu.style.display = "none";
});


const wallpapers = [
    "https://cdn.esahubble.org/archives/images/screen/heic0910e.jpg",
    "https://www.nasa.gov/wp-content/uploads/2026/06/55352876103-02b858152c-o.jpg?resize=1200,809",
    "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001861/GSFC_20171208_Archive_e001861~orig.jpg",
    "https://images-assets.nasa.gov/image/PIA00407/PIA00407~orig.jpg"
];



function setWallpaper(image){

    document.body.style.backgroundImage = `url(${image})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";

}

setWallpaper(wallpapers[0]);

dragElement(document.getElementById("wallpaperPicker"));
const wallpaperWindow = document.getElementById("wallpaperPicker");
const wallpaperClose = document.getElementById("wallpaperPickerclose");
const changeWallpaper = document.getElementById("changeWallpaper");

changeWallpaper.addEventListener("click",function(){

    openWindow(wallpaperWindow);

    contextMenu.style.display="none";

});

wallpaperClose.addEventListener("click",function(){

    closeWindow(wallpaperWindow);

});
document.querySelectorAll(".wallpaperThumb").forEach(function(img){

    img.addEventListener("click",function(){

        setWallpaper(wallpapers[this.dataset.wall]);

    });

});



dragElement(document.getElementById("missions"));

const missionsWindow = document.getElementById("missions");
const missionsApp = document.getElementById("missionsApp");
const missionsClose = document.getElementById("missionsclose");

missionsApp.addEventListener("click", function(){

    openWindow(missionsWindow);

    missionsApp.classList.add("active");

});

missionsClose.addEventListener("click", function(){

    closeWindow(missionsWindow);

    missionsApp.classList.remove("active");

});





const missions = {

    apollo:{
        title:"Apollo 11",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4sY5w48rTyWNoQBcxYcgtouobQ3G67-lORRsllCd2k3YJRG1nG6AlHi6iQ_gIJzgQYkfOmeXOu-AfWVSOGltMLhb_JlhCrETlDly0MX4rSw&s=10",
        description:"First crewed mission to land on the Moon in 1969.",
        link:"https://www.nasa.gov/mission/apollo-11/"
    },

    sputnik:{
        title:"Sputnik 1",
        image:"data:image/jpeg;base64,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",
        description:"The world's first artificial satellite.",
        link:"https://www.ebsco.com/research-starters/history/sputnik-i"
    },

    voyager:{
        title:"Voyager 1",
        image: "data:image/jpeg;base64,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",
        description:"The farthest human-made object from Earth.",
        link:"https://science.nasa.gov/mission/voyager/voyager-1/"
    },

    chandrayaan:{
        title:"Chandrayaan-3",
        image:"data:image/jpeg;base64,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",
        description:"India's successful Moon south pole mission.",
        link:"https://www.isro.gov.in/Chandrayaan3_Details.html"
    },


    perseverance: {
        title: "Perseverance",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQgsvha-nZRwlal_9b69JeNOaTb960cpMb91s6jRtwy3bzjVVQgyLI578bv9ElY57IiY8r6B6ZpZdnIYkzmoZmlqjiCpF-rME1SQucbvu&s=10",
        description: "NASA's Mars rover searching for signs of ancient life.",
        link: "https://science.nasa.gov/mission/mars-2020-perseverance/"
    },

    artemis: {
        title: "Artemis II",
        image: "data:image/jpeg;base64,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",
        description: "NASA's crewed Artemis mission around the Moon.",
        link: "https://www.nasa.gov/mission/artemis-ii/"
    }

};


const missionList = document.getElementById("missionList");
const missionDetails = document.getElementById("missionDetails");

const missionTitle = document.getElementById("missionTitle");
const missionImage = document.getElementById("missionImage");
const missionDescription = document.getElementById("missionDescription");
const missionLink = document.getElementById("missionLink");

document.querySelectorAll(".missionCard").forEach(card => {

    card.addEventListener("click", function(){

        const mission = missions[this.dataset.mission];

        missionTitle.textContent = mission.title;
        missionDescription.textContent = mission.description;
        missionImage.src = mission.image;
        missionLink.href = mission.link;

        missionList.style.display = "none";
        missionDetails.style.display = "block";

    });

});


document.getElementById("backButton").addEventListener("click", function(){

    missionDetails.style.display = "none";
    missionList.style.display = "block";

});



var settingsWindow = document.querySelector("#settings");
var settingsApp = document.querySelector("#settingsApp");
var settingsClose = document.querySelector("#settingsclose");

settingsApp.addEventListener("click", function () {

    openWindow(settingsWindow);
    settingsApp.classList.add("active");

});

settingsClose.addEventListener("click", function () {

    closeWindow(settingsWindow);
    settingsApp.classList.remove("active");

});

document.getElementById("openWallpaperPicker").addEventListener("click", function () {

    openWindow(document.getElementById("wallpaperPicker"));

});


dragElement(document.getElementById("about"));

const aboutWindow = document.getElementById("about");
const aboutClose = document.getElementById("aboutclose");


const aboutButton = document.getElementById("aboutButton");

aboutButton.addEventListener("click", function () {
    openWindow(aboutWindow);
});

aboutClose.addEventListener("click", function () {
    closeWindow(aboutWindow);
});

aboutButton.addEventListener("click", function () {
    closeWindow(settingsWindow);
    openWindow(aboutWindow);
});


aboutClose.addEventListener("click", function () {

    closeWindow(aboutWindow);

});


document.getElementById("aboutButton").addEventListener("click", function () {

    openWindow(aboutWindow);

});


document.getElementById("githubButton").addEventListener("click", function(){

    window.open(
        "https://github.com/ShubhDalmia9/Shubh-Hacktime",
        "_blank"
    );

});



dragElement(document.getElementById("solar"));

const solarWindow = document.getElementById("solar");
const solarApp = document.getElementById("solarApp");
const solarClose = document.getElementById("solarclose");

solarApp.addEventListener("click", function(){

    openWindow(solarWindow);

    solarApp.classList.add("active");

});

solarClose.addEventListener("click", function(){

    closeWindow(solarWindow);

    solarApp.classList.remove("active");

});


const planetButtons = document.querySelectorAll(".planetButton");

const planetList = document.getElementById("planetList");
const planetPage = document.getElementById("planetPage");

const planetName = document.getElementById("planetName");
const planetImage = document.getElementById("planetImage");
const planetInfo = document.getElementById("planetInfo");

const planetBack = document.getElementById("planetBack");
const planetLearn = document.getElementById("planetLearn");

planetButtons.forEach(button => {

    button.addEventListener("click", function () {

        planetName.textContent = this.dataset.name;
        planetInfo.textContent = this.dataset.info;

        planetImage.src = this.dataset.image;

        planetLearn.onclick = function () {
            window.open(button.dataset.link, "_blank");
        };

        planetList.style.display = "none";
        planetPage.style.display = "block";

    });

});

planetBack.addEventListener("click", function () {

    planetPage.style.display = "none";
    planetList.style.display = "grid";

});

document.getElementById("openSettings").addEventListener("click", function () {

    document.getElementById("contextMenu").style.display = "none";

    openWindow(settingsWindow);

    settingsApp.classList.add("active");

});

const notesText = document.getElementById("notesText");

if (notesText) {

    notesText.value = localStorage.getItem("spaceNotes") || "";

    notesText.addEventListener("input", function () {

        localStorage.setItem("spaceNotes", notesText.value);

    });

}




const saveToast = document.getElementById("saveToast");

function showSaveToast() {

    saveToast.classList.add("show");

    setTimeout(function () {
        saveToast.classList.remove("show");
    }, 1200);

}

document.addEventListener("keydown", function(e){

    if(e.ctrlKey && e.key.toLowerCase() === "s"){

        e.preventDefault();

        localStorage.setItem("spaceNotes", notesText.value);

        showSaveToast();

    }

});
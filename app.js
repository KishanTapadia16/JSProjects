console.log("Welcome To Spotify");
let songindex=0;
let audioElement=new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Salam-E-Ishq",filePath:"1.mp3",coverPath:"1.jpg"},
    {songName:"Salam-E-mohabbat",filePath:"2.mp3",coverPath:"2.jpg"},
    {songName:"Salam-E-Ibadat",filePath:"3.mp3",coverPath:"3.jpg"},
    {songName:"Salam-E-Ishqiana",filePath:"4.mp3",coverPath:"4.jpg"},
    {songName:"Salam-E-qafirana",filePath:"5.mp3",coverPath:"5.jpg"},
    {songName:"Salam-E-Ishqfakiri",filePath:"6.mp3",coverPath:"6.jpg"},
    {songName:"Salam-E-chaina",filePath:"7.mp3",coverPath:"7.jpg"},
    {songName:"Salam-E-naina",filePath:"8.mp3",coverPath:"8.jpg"},
    {songName:"Salam-E-manzil",filePath:"9.mp3",coverPath:"9.jpg"}
]
songItems.forEach((element,i)=>{
  // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;

})
//audioElement.play();
//handle play pause events
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
    }

)
//Listen To Events
audioElement.addEventListener('timeupdate',()=>{
    //console.log('timeupdate');
    //update seek bar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})
const makeAllPlays=()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
       
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        //console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
  
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src='1.mp3';
    //audioElement.src='${songIndex}.mp3';
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');

    })
})
document.getElementById('previous').addEventListener('click',()=>{
    audioElement.src='1.mp3';
    //audioElement.src='${songIndex}.mp3';
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');

})
document.getElementById('next').addEventListener('click',()=>{
    audioElement.src='1.mp3';
    //audioElement.src='${songIndex}.mp3';
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');

})
/*previous aur next ke liye saare songs add karke songindex se access karlo
audioElement.src='1.mp3';
//audioElement.src='${songIndex}.mp3';
audioElement.currentTime=0;
audioElement.play();
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');*/
//songname bhi songindex se change kar sakte haik
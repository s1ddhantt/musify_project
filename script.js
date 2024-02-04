console.log("Welcome to spotify");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs= [
    {songName: "Lambiyaan si Judaaiyan- Arijit Singh",filePath: "songs/1.mp3", coverPath:"cover/1.jpeg" },
    {songName: "Tarasti he Nigaahein -Asim Azhar ",filePath: "songs/2.mp3",coverPath:"cover/2.jpeg"},
    {songName: "Bekhayali mein bhi tera - Sachet Tondon",filePath: "songs/3.mp3",coverPath:"cover/3.jpeg"},
    {songName: "Brown Munde-AP Dhillon",filePath: "songs/4.mp3",coverPath:"cover/4.jpeg"},
    {songName: "Tujhe Kitna Chahne lage hum- Arijit Singh",filePath: "songs/5.mp3",coverPath:"cover/5.jpeg"},
    {songName: "Illahi- Yeh Jawani He Deewani",filePath: "songs/6.mp3",coverPath:"cover/16.jpeg"},
    {songName: "Hawa Banke - Darshan Raval",filePath: "songs/7.mp3",coverPath:"cover/6.jpeg"},
    {songName: "Bhula diya - Darshan Raval",filePath: "songs/8.mp3",coverPath:"cover/7.jpg"},
    {songName: "BeIntehaan - Race 2",filePath: "songs/9.mp3",coverPath:"cover/8.jpeg"},
    {songName: "Main dhundhne ko zamane me jab wafa nikla",filePath: "songs/10.mp3",coverPath:"cover/9.jpeg"},
    {songName: "Old Love Mahup-2022",filePath: "songs/11.mp3",coverPath:"cover/10.jpeg"},
    {songName: "O-Mehramaaa      Love aaj kal 2 ",filePath: "songs/12.mp3",coverPath:"cover/11.jpeg"},
    {songName: "Naino ki jo baat naina jaane he-2020",filePath: "songs/13.mp3",coverPath:"cover/12.jpeg"},
    {songName: "Shab tum ho - Darshan Raval",filePath: "songs/14.mp3",coverPath:"cover/13.jpeg"},
    {songName: "LOVE STORY - Taylor Swift",filePath: "songs/15.mp3",coverPath:"cover/14.jpeg"},
    {songName: "Tera hone laga hoon - Atif Aslam",filePath: "songs/16.mp3",coverPath:"cover/15.jpeg"},
]

//songItems.forEach(element ,i)=>{
 //   console.log(element,i);
   // element.getElementsByTagName("img")[0].src = songs[i].filePath;
    //element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
//};
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

//Handle play/pause click

masterPlay.addEventListener('click' , ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      gif.style.opacity = 1;
      
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
    
  }
})

// Listen to events

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //updating Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;  
})

// changing of songs with slider 

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

//playing songs on list only

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove(`fa-pause-circle`);
        element.classList.add(`fa-play-circle`);
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
       
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

//pausing songs from list



//next song play

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>7){
        songIndex=0;
    }
    else{
        songIndex = songIndex+1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
   masterSongName.innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

// previous song
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex = songIndex-1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterSongName.innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

//Repeat song
document.getElementsByClassName('songRepeat').addEventListener('click',()=>{
    if(audioElement.currentTime==audioElement.duration){
        //audioElement.currentTime=0;
        audioElement.play();
    }
})

// timer for song

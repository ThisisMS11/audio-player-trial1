console.log('hey mohit we are connected');
let songindex=0;
let audioelement= new Audio('song/phir lae aaya.mp3');


audioelement.playbackRate=0.1;
let masterplay=document.getElementById('masterplay');

let forwardb=document.getElementById('forwardb');
let backwardb=document.getElementById('backwardb');

let fastforward=document.getElementById('fastforward');
let fastbackward=document.getElementById('fastbackward');


let progressbar=document.getElementById('progressbar');
let songitems=Array.from(document.getElementsByClassName('song'));   //bcoz it is htmlcollection
let songphotoc=document.getElementById('songphoto');



let  songs=[
    {songname:'hawayein- When harry met sejal', filepath:'song/hawayein.mp3',coverpath:'covers/hawayein-cover.jpg',credits:'Singer: Arijit Singh Lyrics: Irshad Kamil Music: Pritam Chakraborty'},

    {songname:'Ik vaari aa- Raabta', filepath:'song/Ik_Vaari_Aa.mp3',coverpath:'covers/ik-vaari-aa-cover.jpg',credits:'Singer: Arijit Singh Lyrics: Amitabh Bhattacharya Music: Pritam Chakraborty'},


    {songname:'Behti-hawa -3 Idiots', filepath:'song/behti-hawa.mp3',coverpath:'covers/behti-hawa-cover.jpg',credits:'Singer:Shaan, Shantanu Moitra Lyrics:Swanand Kirkire  Music  :Shantanu Moitra'},


    {songname:'kabira -Yeh Jawani Hai Deewani', filepath:'song/kabira.mp3',coverpath:'covers/kabira-cover.jpg',credits:'Singer: Rekha Bhardwaj, Tochi Raina Lyrics: Amitabh Bhattacharya  music:Pritam '},


    {songname:'ek jindari - Hindi Medium', filepath:'song/ek_jindari.mp3',coverpath:'covers/ekj-cover.jpg', credits:' Singer:Taniskaa Sanghvi  Lyrics:Kumaar   music:Sachin-Jigar'},


    {songname:'Aashayein- Iqbal', filepath:'song/Aashayein.mp3',coverpath:'covers/ash-cover.jpg',credits:'Singer:KK, Salim Merchant, Chorus  Lyrics:Irfan Siddique  Music:Salim Sulaiman'},
    
    {songname:'o-rangrez - Bhaag Milkha Bhaag', filepath:'song/orangrez.mp3',coverpath:'covers/orangrez.jpg',credits:'Singers: Shreya Ghoshal, Javed Bashir  Music: Shankar - Ehsaan - Loy Lyrics: Prasoon Joshi'},


    {songname:'Baarish- Half Girlfriend', filepath:'song/Baarish.mp3',coverpath:'covers/Baarish-cover.jpg' ,credits:'Singer: Ash King, Shashaa Tirupati  Music: Tanishk Bagchi Lyrics: Arafat Mehmood, Tanishk Bagchi '},


    {songname:'jeena jeena -Badlapur', filepath:'song/Jeena_Jeena.mp3',coverpath:'covers/jeena-cover.jpg',credits:'Singer: Atif Aslam  Music: Sachin Jigar Lyrics: Dinesh Vijan, Priya Saraiya'},

    {songname:'phir lae aaya- Barfi', filepath:'song/phir_lae_aaya.mp3',coverpath:'covers/phir-cover.jpg',credits:'Singer:Arijit Singh   Music:Pritam Chakraborty   lyrics:Sayeed Quadri '}
]





// handle  the play/pause clicks
masterplay.addEventListener('click',()=>{
    if (audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");

        no=songindexfinder();
        patopl(no);



        



        

    }
    else{

        audioelement.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle");

        no=songindexfinder();
        pltopaf(no)


    }
})




//finding the index of the current song using songindexfinder

window.songindexfinder=function(){
    string1=audioelement.src.toString();
    currentfile=string1.slice(22);
    



    i=0;

    while(i<songs.length){
        if(songs[i].filepath==currentfile){
            return i;
        }
        else{
            i++;
        }
    };
    

};




// fastforward and fastbackward buttons functions

fastforward.addEventListener('click',()=>{
    audioelement.currentTime=audioelement.currentTime+3;
});

fastbackward.addEventListener('click',()=>{
    audioelement.currentTime=audioelement.currentTime-3;
})



//forward button javascript

forwardb.addEventListener('click',()=>{



    
    
    no=songindexfinder();



    

    // if statement is to play the song
    if (no<(songs.length-1)){
        pltopaf(no);
        patoplf(no);
        audioelement.src=songs[no+1].filepath;
        audioelement.play();


        a=songs[no+1].filepath.slice(5);
        b=a.slice(-4);
        songid=a.replace(b,'');

        songidprevious=songid;
    }
    else if(no==(songs.length-1)){
        pltopaf(9);
        patoplf(-1);
        audioelement.src=songs[0].filepath;
        no=-1;
        audioelement.play();


        a=songs[no+1].filepath.slice(5);
        b=a.slice(-4);
        songid=a.replace(b,'');

        songidprevious=songid;
    }
    else{
        console.log('something went wrong beta!');
    }

    
    photochanger(no+1);


});



// function that changes the photos.
window.photochanger=function(songi){

    songphotoc.src=songs[songi].coverpath;

    document.getElementById('thirdhead').innerText=songs[songi].songname;
    document.getElementById('fourthead').innerText=songs[songi].credits;



    // changing the background blackish image with transition

    let bimage=document.querySelector('.maincontainer');
                                                    
    let pseudoelement=getComputedStyle(bimage,'::before');
                                                    
    bimage.style.setProperty(`--back`,`url(${songs[songi].coverpath})no-repeat center center/cover`);

};





//backward button javascript


backwardb.addEventListener('click',()=>{

    

    no=songindexfinder();


    a=songs[no-1].filepath.slice(5);
    b=a.slice(-4);
    songid=a.replace(b,'');

    songidprevious=songid;

    // if statement is to play the song
    if (no<=(songs.length-1)  && no!=0) {
        
        pltopaf(no);
        patoplb(no);
        
        audioelement.src=songs[no-1].filepath;
        audioelement.play();


        
        a=songs[no-1].filepath.slice(5);
        b=a.slice(-4);
        songid=a.replace(b,'');

        songidprevious=songid;
    }
    else if(no==0){
        
        pltopaf(0);

        patoplb(10);
        audioelement.src=songs[9].filepath;
        no=10;
        audioelement.play();

        a=songs[no-1].filepath.slice(5);
        b=a.slice(-4);
        songid=a.replace(b,'');

        songidprevious=songid;
    }
    else{
        
        console.log('something went wrong beta!');
    }

    
    photochanger(no-1);


});

//here the - may also come for backwardb click.


// for changing the play button to pause button
window.patoplf=function(no) {
    // no=songindexfinder();
    //slicing work bcoz of finding the id of the divider 2 icons.
    a=songs[no+1].filepath.slice(5);
    b=a.slice(-4);
    songid=a.replace(b,'');
    
    smallmasterplay=document.getElementById(songid)
    smallmasterplay.classList.add("fa-pause-circle");
    smallmasterplay.classList.remove("fa-play-circle");
};

window.patoplb=function(no) {
    // no=songindexfinder();
    //slicing work bcoz of finding the id of the divider 2 icons.
    a=songs[no-1].filepath.slice(5);
    b=a.slice(-4);
    songid=a.replace(b,'');
    
    smallmasterplay=document.getElementById(songid)
    smallmasterplay.classList.add("fa-pause-circle");
    smallmasterplay.classList.remove("fa-play-circle");
};



// this is to convert the current song divider icon from play to pause   ***********.

window.patopl=function(no) {
    // no=songindexfinder();
    //slicing work bcoz of finding the id of the divider 2 icons.
    a=songs[no].filepath.slice(5);
    b=a.slice(-4);
    songid=a.replace(b,'');
   
    smallmasterplay=document.getElementById(songid)
    smallmasterplay.classList.add("fa-pause-circle");
    smallmasterplay.classList.remove("fa-play-circle");
};


// for changing the pause button to play button + current song
window.pltopaf=function(no) { /////////////

    // no=songindexfinder();
    //slicing work bcoz of finding the id of the divider 2 icons.
    a=songs[no].filepath.slice(5);
    b=a.slice(-4);
    songid=a.replace(b,'');
    
    smallmasterplay=document.getElementById(songid)
    smallmasterplay.classList.add("fa-play-circle");
    smallmasterplay.classList.remove("fa-pause-circle");
};




// to solve duration thing

window.showdurationmain=function(){
    
    window.showdurationsub=function(){
    
    
        seconds=parseInt(audioelement.currentTime);
        minutes=parseInt(seconds/60);
        second=seconds-minutes*60;
        // console.log(minutes,second);
    
        songcurrent=minutes+':'+second;     ///current time
    
        duration=parseInt(audioelement.duration);
        songminutes=parseInt(duration/60);
    
        songseconds=duration-60*songminutes;
    
        songduration=songminutes+':'+songseconds;
    
    
        document.getElementById('starting').innerText=songcurrent;
        document.getElementById('ending').innerText=songduration;
    
        
    };


    setInterval(showdurationsub, 1000);
};

showdurationmain();


































// listen to events
audioelement.addEventListener('timeupdate',()=>{


    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    

    progressbar.value=progress;


});


// to play  the song according to the position of the  progressbar

progressbar.addEventListener('change',()=>{
    // console.log(audioelement.currentTime+'this is our current song time.')
    // console.log(progressbar.value + 'pgv')
    audioelement.currentTime=progressbar.value * (audioelement.duration/100);   ///this is restricting the change of audio speed.

})





//javascript for applying the names and covers of the songs using loop laziness continues.
songitems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName('songtext1')[0].innerText=songs[i].songname;
    element.getElementsByClassName('songtext2')[0].innerText=songs[i].credits;
    
});







// for playing songs on click divider2 icon.
Array.from(document.getElementsByClassName('divider2')).forEach((element) => {

    
    element.addEventListener('click',(e)=>{
            

            
            // here you can add the playing gif if you want  1:20 par jao for more information

            index=e.target.id;
            
            
            window.finderindex= function () {
                path=`song/${index}.mp3`;

                i=0;

                while(i<songs.length){
                    if(songs[i].filepath==path){
                        return i;
                    }
                    else{
                        i++;
                    }
                }

            };
            no=finderindex();


            
            
            
            if (audioelement.currentTime<=0){
                audioelement.src=songs[no].filepath;
                audioelement.currentTime=0;
                progressbar.value=0;
                audioelement.play();
                masterplay.classList.remove("fa-play-circle");
                masterplay.classList.add("fa-pause-circle");


                songidprevious=index;

                
        
                // no1=songindexfinder();

                patopl(no);
            }


            // dikkat hai in playing the same song with this line existing audioelement.src=songs[no].filepath;
            

            // if song is changed then use audioelement.src=songs[no].filepath; 
            //else keep with the song.

            //pause hokar agar same song  par click karu toh wahi sae shuru ho jaha sae chodo ho.


            else if (audioelement.paused){


                

                // console.log('the  previous current song was',songidprevious)
                


      
                if (songidprevious!=index){

                    console.log(songidprevious,'!=',index);
                    audioelement.src=songs[no].filepath;

                    songidprevious=index;

                }


                
               
                

                // if(audioelement)




                audioelement.play();
                masterplay.classList.remove("fa-play-circle");
                masterplay.classList.add("fa-pause-circle");
                
                // no1=songindexfinder();


                
                patopl(no);

            }





            else{
        
                audioelement.pause();
                masterplay.classList.remove("fa-pause-circle");
                masterplay.classList.add("fa-play-circle");


                
        
                // no1=songindexfinder();
                pltopaf(no)
            }

            



            


            photochanger(no);




            

            
    });
    
});






// to bind actions with keyboard keys
// https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp



















/*

STRETCH GOALS:

1) Go all out with styles: fonts, sizes, backgrounds, transitions, colours! 

2) Find a purpose for your card: business card, invitation to a party, email subscription, 
a video reveal or a music album cover with a song player at the back. 

3) Depending on you purpose add some the relevant interactivity: 
    - business card: links to your social media
    - invitation to a party, email subscription: confirmation of the subscription 
    - a video reveal/song card: start playing the video/song

*/

// SC.initialize({
//   client_id: '5ca0647784c347d18951ff15b6c57302'
// });

// var track_url = 'https://soundcloud.com/forss/flickermood';
// SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
//   console.log('oEmbed response: ', oEmbed);
// });


const btn = document.getElementById('play')
const back = document.getElementsByClassName('back')[0]
const front = document.getElementsByClassName('front')[0]
const control = document.getElementById('control')
const control_icon = document.getElementById('control-icon')
let play
let player
function onPlayerReady(event) {
    play = true
    event.target.playVideo();
}


function load_youtube() {
    //     var tag = document.createElement('script');
    //   tag.src = "https://www.youtube.com/player_api";
    //   var firstScriptTag = document.getElementsByTagName('script')[0];
    //   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Replace the 'ytplayer' element with an <iframe> and
    // YouTube player after the API code downloads.
    
    //   function onYouTubePlayerAPIReady() {
    player = new YT.Player('video', {
        height: 'inherit',
        width: 'inherit',
        videoId: '0v2383pEWqE',
        events: {
            'onReady': onPlayerReady,
        }
    });
    //   }
}


btn.onclick = function (e) {
    const card = document.getElementById('card')
    card.classList.toggle('flip')
    setTimeout(() => {
        card.classList.toggle('flip')
        card.style.background = "url(bg-flipped.jpg)"
        load_youtube()
        front.style.display = "none";
        back.style.display = "block";
        card.style.transform = "rotateY(180deg)"

    }, 200)
}

control.onclick = function(e){
    if(play){
        control_icon.src = "play.svg"
        player.pauseVideo();
    }
    else{
        control_icon.src = "pause.svg"
        player.playVideo();
    }
    play = !play;
}

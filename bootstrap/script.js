$(document).ready(function() {
    let btn = $(".btn");
    let vid = $("#vid");
    let progress = $("#progress");
    let volume = $("#volume");
    btn.click(function() {
      btn.toggleClass("paused");
      return false;
    });

    
  });

  function play(){
    vid.paused ? vid.play() : vid.pause();
  }

  vid.addEventListener('timeupdate', function(){
    progress.value = vid.currentTime / vid.duration;
  })

  volume.addEventListener('change', function(e){
    vid.volume = e.currentTarget.value / 100;
  })
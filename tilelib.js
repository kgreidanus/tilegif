function random_gif() {
  gif_index = Math.floor(Math.random()*GIF_URLS.length);
  setListGif();
}

function random_overlay() {
  overlay_index = Math.floor(Math.random()*OVERLAY_URLS.length);
  setListOverlay();
}

function removeGifAtIndex() {
  GIF_URLS.splice(index,1);
  setListGif();
}

function remove_gif() {
  GIF_URLS.splice(gif_index,1);
  gif_index = Math.min(gif_index, GIF_URLS.length-1); //ugh
  setListGif();
}

function remove_overlay() {
  OVERLAY_URLS.splice(overlay_index,1);
  overlay_index = Math.min(overlay_index, OVERLAY_URLS.length-1); //ugh
  setListOverlay();
}

function setManualGif() {
  url = gifarea.value;
  
  GIF_URLS.push(url);
  gif_index = GIF_URLS.length-1;

  setListGif();

  gifarea.value = "";
}

function setManualOverlay() {
  url = overlayarea.value;
  
  OVERLAY_URLS.push(url);
  overlay_index = OVERLAY_URLS.length-1;

  setListOverlay();

  overlayarea.value = "";
}

function setListGif() {
  gif_index_max = GIF_URLS.length-1;

  gif_index_display.innerHTML = gif_index + 1;
  gif_index_max_display.innerHTML = gif_index_max + 1;
  setBackgroundImageFromUrl(rawr, GIF_URLS[gif_index]);
}

function setListOverlay() {
  overlay_index_max = OVERLAY_URLS.length-1;

  overlay_index_display.innerHTML = overlay_index + 1;
  overlay_index_max_display.innerHTML = overlay_index_max + 1;
  setBackgroundImageFromUrl(overlay, OVERLAY_URLS[overlay_index]);
}

function setBackgroundImageFromUrl(e, url) {
  e.style.backgroundImage = "url("+url+")";
}

function minus() {
  hpercent *= (1 - PERCENT_STEP);
  vpercent *= (1 - PERCENT_STEP);
  set_backgroundSize(hpercent, vpercent);
}

function plus() {
  hpercent *= (1 + PERCENT_STEP);
  vpercent *= (1 + PERCENT_STEP);
  set_backgroundSize(hpercent, vpercent);
}

function horiz() {
  set_backgroundSize("100%", vpercent);
}

function verti() {
  set_backgroundSize(hpercent, "100%");
}

function full() {
  set_backgroundSize("100%", "100%");
}

function set_backgroundSize(hpercent, vpercent) {
  rawr.style.backgroundSize = ""+hpercent+"% "+vpercent+"%";
}

function next_gif() {
  if (gif_index < gif_index_max){
    gif_index++;
  } else {
    gif_index = gif_index_min;
  }

  setListGif();
}

function prev_gif() {
  if (gif_index > gif_index_min){
    gif_index--;
  } else {
    gif_index = gif_index_max;
  }

  setListGif();
}

function next_overlay() {
  if (overlay_index < overlay_index_max){
    overlay_index++;
  } else {
    overlay_index = overlay_index_min;
  }

  setListOverlay();
}

function prev_overlay() {
  if (overlay_index > overlay_index_min){
    overlay_index--;
  } else {
    overlay_index = overlay_index_max;
  }

  setListOverlay();
}

//action
function nozoom() {
  rawr.style.backgroundSize = "";

  tracking = false;
  stopmovingit();

  x = DEFAULT_X;
  y = DEFAULT_Y;

  dx = DEFAULT_DX;
  dy = DEFAULT_DY;

  hpercent = DEFAULT_PERCENT;
  vpercent = DEFAULT_PERCENT;

  drawxy();
}

//action? jesus.
function drawxy() {
  // This is a bit of a misnomer, nothing is really being "drawn" but it makes sense kind of
  draw(x,y);
}

function draw(_x,_y) {
    rawr.style.backgroundPositionY = _y+"px";
    rawr.style.backgroundPositionX = _x+"px";      
}

//action -- sort of
function moveit() {
  moving = true;

  if (translate_interval){
    dx *= 1.5;
    dy *= 1.5;
  } else {
    translate_interval = window.setInterval(function(){
      if (moving){
        x += dx; 
        y += dy; 
        drawxy();
      }
    }, dt);
  }
}
      var key_function_mappings = {

        "M" : moveit,
        "S" : stopmovingit,
        "T" : trackit,
        "N" : next_gif,
        "P" : prev_gif,
        "H" : horiz,
        "V" : verti,
        "F" : full,
        "0" : nozoom,
        "O" : toggleoverlay,
        "C" : togglecontrols,
        "R" : random_gif,
        "D" : function() { 
          if (demo_mode){
            if (demo_paused){
              demo_paused = 0;  
              console.log("demo paused");
              
            } else {
              demo_paused = 1;
              console.log("demo unpaused");
            }
          } else {
            demo_shit();
          }
        },
        "%" : function() { dx -= ACCELERATION_INCREMENT; drawxy(); }, // left arrow
        "'" : function() { dx += ACCELERATION_INCREMENT; drawxy(); }, // right arrow
        "(" : function() { dy += ACCELERATION_INCREMENT; drawxy(); }, // up arrow
        "&" : function() { dy -= ACCELERATION_INCREMENT; drawxy(); }, // down arrow
        187 : plus,  // -
        189 : minus, // =
        219 : prev_overlay, // [
        221 : next_overlay, // ]
      };

      function keystroke(e){
        if (document.activeElement == document.getElementById("gifarea")){
          return;
        }

        if (document.activeElement == document.getElementById("overlayarea")){
          return;
        }

        // High ascii is being all shitty so this tries to look up codes if it can't find the character.
        keyChar = String.fromCharCode(e.keyCode);
        if ( key_function_mappings.hasOwnProperty(keyChar) ){
          key_function_mappings[keyChar]();
        } else if (key_function_mappings.hasOwnProperty(e.keyCode)) {
          key_function_mappings[e.keyCode]();
        }
      }

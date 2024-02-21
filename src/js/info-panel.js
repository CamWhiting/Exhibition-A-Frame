// This wipes current score for testing
// localStorage.removeItem('playedVideos');

// Standalone Vimeo player function
var player;
var counterContainer = document.querySelector('.counter-container');
var counterBackup = document.querySelector('.backupCounter');
var playedVideos = JSON.parse(localStorage.getItem('playedVideos')) || [];

function updateCounter(value) {             
  var counterText = document.getElementById('counter-text');
  var currentMax = counterText.innerText.split('/')[1]; // Get the number after the slash
  counterText.innerText = value + '/' + currentMax; 

  // Update the button text
  var counterBackup = document.querySelector('.backupCounter');

  if (counterBackup) {
    var buttonText = counterBackup.textContent.trim();
    var newText = buttonText.replace(/\d+(?=\/)/, value); // Replace the number before "/"
    counterBackup.textContent = newText;
  }


  // Check and perform actions based on the playedVideos.length and currentMax
    if (playedVideos.length >= currentMax) {
      parent.postMessage('working', 'https://missionsconnect.net');

      // Change the style of element with class "counter-container"
      if (counterContainer) {
        counterContainer.style.backgroundColor = '#1263D3';
        counterContainer.style.color = 'white';
        counterContainer.style.border = '1px solid white';
      }

    }
}    

window.onload = function() {
  // Select all iframe elements with Vimeo videos
  var iframes = document.querySelectorAll('iframe[src*="vimeo.com"]');
  iframes.forEach(function(iframe) {
    // Create a new Vimeo player instance
    var player = new Vimeo.Player(iframe);

    // Attach 'play' event listener to the player instance
    player.on('play', function () {
      var videoId = iframe.id; // You can access the video ID from the iframe
      if (!playedVideos.includes(videoId)) {
        console.log(videoId);
        console.log(playedVideos);
        playedVideos.push(videoId);
        localStorage.setItem('playedVideos', JSON.stringify(playedVideos));
        updateCounter(playedVideos.length);
        checkingComplete();
      }
    });
  });


  // THis reloads score on refreshed pages. above code needs to be deleted.
  var playedVideos = JSON.parse(localStorage.getItem('playedVideos')) || [];
  var counterText = document.getElementById('counter-text');
  var currentMax = counterText.innerText.split('/')[1]; // Get the number after the slash
  counterText.innerText = playedVideos.length + '/' + currentMax; 
  
  checkingComplete();


  // If user re-checks the page and has already completed watching X no. of videos, allow them to continue again
  if (playedVideos.length >= currentMax) {
    console.log("quota reached");
    var counterContainer = document.querySelector('.counter-container');
    // Change the style of element with class "counter-container"
    if (counterContainer) {
      counterContainer.style.backgroundColor = '#1263D3';
      counterContainer.style.color = 'white';
      counterContainer.style.border = '1px solid white';
    }
    try {
      parent.postMessage('working', 'https://missionsconnect.net');
    } catch (error) {
      console.error("Error posting message to parent:", error);
    }

  }
};



/* global AFRAME */
AFRAME.registerComponent('info-panel', {
  modal: null,
  welcomeModal: null,
  init: function () {
    var buttonEls = document.querySelectorAll('.menu-button');
    var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');
    var self = this;
    
    // Code to close modal
    var modal = document.getElementById("myModal"); // Store the modal reference
    var welcomeModal = document.getElementById("welcomeModal"); // Store the modal reference 
    var score = document.getElementById("score");
    var span = document.getElementsByClassName("close")[0];
    
    // Close the welcomeModal pop-up
    var welcomeModalSpan = document.querySelector('.welcomeClose');
    score.style.display = "block";
    // Get the current page's filename (including extension)
    var currentPage = window.location.pathname.split('/').pop();

    // Check if the current page is not the end page
    if (currentPage !== 'index(end).html') {
        welcomeModal.style.display = "flex";
    }

    function closeModal(){
      modal.style.display = "none";
      document.querySelector('#camera').setAttribute('look-controls', 'enabled', true);
      player.pause();
    }

    // Close the modal pop-up
    span.onclick = function() {
      closeModal();
    }; 

    document.body.addEventListener('keydown', function(e) {
      if (e.key == "Escape") {
        closeModal();
      }
    });





    welcomeModalSpan.onclick = function() {
      welcomeModal.style.display = "none";
    };

    this.TitleEl = document.querySelector('#Title');
    this.DescriptionEl = document.querySelector('#Description');
 
      this.Info = {
        /* Safe Speakers. No viewer discression */
        howardButton: {
          title: '',
          imgEl: document.querySelector('#howardImage'),
          description: `
          <div style="height:100%">
          <iframe id="howard" src="https://player.vimeo.com/video/841766857?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="LIMEN 2.0: Howard Riley">
          </iframe>
          </div>`, 
        },
        dianneButton: {
          title: '',
          imgEl: document.querySelector('#dianneImage'),
          description: `
          <div style="height:100%">
          <iframe id="dianne" src="https://player.vimeo.com/video/835658211?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="Dianne Mippy Dual Audio">
          </iframe>
          </div>`
        },
        edithButton: {
          title: '',
          imgEl: document.querySelector('#edithImage'),
          description: `
          <div style="height:100%">
          <iframe id="edith" src="https://player.vimeo.com/video/837837238?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="LIMEN 2.0: Maisie Weston">
          </iframe>
          </div>
          `
        },
        garryButton: {
          title: '',
          imgEl: document.querySelector('#garryImage'),
          description: `
          <div style="height:100%">
          <iframe id="garry" src="https://player.vimeo.com/video/835638228?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="Garry Ryder">
          </iframe>
          </div>
          `
        },
        jenniferButton: {
          title: '',
          imgEl: document.querySelector('#jenniferImage'),
          description: `
          <div style="height:100%">
          <iframe id="mogridge" src="https://player.vimeo.com/video/835624371?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="Jennifer Mogridge_duel_audio">
          </iframe>
          </div>
          `
        },
        lenButton: {
          title: '',
          imgEl: document.querySelector('#lenImage'),
          description: `
          <div style="height:100%">
          <iframe id="len" src="https://player.vimeo.com/video/841769019?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="LIMEN 2.0: Len Oglive">
          </iframe>
          </div>
          `
        },
        maisieButton: {
          title: '',
          imgEl: document.querySelector('#maisieImage'),
          description: `
          <div style="height:100%">
          <iframe id="maise" src="https://player.vimeo.com/video/841771256?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="Maisie Weston 2">
          </iframe>
          </div>
          `
        },
        stephanieButton: {
          title: '',
          imgEl: document.querySelector('#stephanieImage'),
          description: `
          <div style="height:100%">
          <iframe id="steph" src="https://player.vimeo.com/video/841780740?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="Stephanie Mippy">
          </iframe>
          </div>
          `
        },
        timButton: {
          title: '',
          imgEl: document.querySelector('#timImage'),
          description: `
          <div style="height:100%">
          <iframe id="tim" src="https://player.vimeo.com/video/841784139?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="tim flowers">
          </iframe>
          </div>
          `
        },
        tim2Button: {
          title: 'Tim\'s Grandmother Story',
          imgEl: document.querySelector('#timImage'),
          description: `
          <div style="height:100%">
          <iframe id="tim2" src="https://player.vimeo.com/video/896734162?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="tim flowers">
          </iframe>
          </div>
          `
        },
        tonjiButton: {
          title: '',
          imgEl: document.querySelector('#tonjiImage'),
          description: `
          <div style="height:100%">
          <iframe id="tonji" src="https://player.vimeo.com/video/841784177?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="Tonji Hansen">
          </iframe>
          </div>`
        },
        gailButton: {
          title: '',
          imgEl: document.querySelector('#gailImage'),
          description: `
          <div style="height:100%">
          <iframe id="gail" src="https://player.vimeo.com/video/894344953?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="Tonji Hansen">
          </iframe>
          </div>`
        },
        yarningButton: {
          title: '',
          imgEl: document.querySelector('#yarningImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/888981328?h=896621e015" frameborder="0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="Yarning Circle"></iframe>`,
        },
        unnamedButton: {
          title: '',
          imgEl: document.querySelector('#tonjiImage'),
          description: 'A tribute to the lost children and an invitation to continue and share their stories.'
        },
        rearButton: {
          title: '',
          imgEl: document.querySelector('#rearImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/845777052?h=fa1075c132" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;"></iframe>`, 
        },
        leftButton: {
          title: '',
          imgEl: document.querySelector('#leftImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/845777149?h=b190e3af4e" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;"></iframe>`, 
        },
        middleButton: {
          title: '',
          imgEl: document.querySelector('#rearImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/845777365?h=bcc510e21d" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;"></iframe>`, 
        },
        floorButton: {
          title: '',
          imgEl: document.querySelector('#rearImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/845777347?h=53f40f2216" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;"></iframe>`, 
        },
        displayButton: {
          title: '',
          imgEl: document.querySelector('#rearImage'),
          description: `
          <img style="width:100%; display: block;" src="src/img/info-board.jpg">
          `, 
        },
        welcomeButton: {
          title: '',
          imgEl: document.querySelector('#rearImage'),
          description: `
          <img style="width:100%; display: block;" src="src/img/welcome-board.jpg">
          `, 
        },
        artworkButton: {
          title: '',
          imgEl: document.querySelector('#rearImage'),
          description: `
          <div class="sketchfab-embed-wrapper" style="height:100%;"> 
          <iframe width="100%" height="100%" title="LIMEN 2.0 Artwork" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/8667ddc21f69476bbd8321ad0353cc0c/embed?preload=1">
          </iframe>
          </div>`, 
        },
      };
  
      this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
      this.onBackgroundClick = this.onBackgroundClick.bind(this);
  
      this.backgroundEl = document.querySelector('#background');

      for (var i = 0; i < buttonEls.length; ++i) {
        buttonEls[i].addEventListener('click', this.onMenuButtonClick);
        buttonEls[i].addEventListener('mouseleave', this.onMouseLeave);
      }

      this.backgroundEl.addEventListener('click', this.onBackgroundClick);
      this.el.object3D.renderOrder = 9999999;
      this.el.object3D.depthTest = false;
      fadeBackgroundEl.object3D.renderOrder = 9;
      fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;
    },

    // NEW FUNCTION FOR BUTTON EVENTS
    onMenuButtonClick: function (evt) {
      var modal = document.getElementById("myModal"); // Store the modal reference
      var Info = this.Info[evt.currentTarget.id];
      var currentEntity = evt.currentTarget;
      var counterContainer = document.querySelector('.counter-container');

      const clickedButton = evt.target;
      const checkbox = clickedButton.querySelector('#checkbox');
      const checkboxBG = clickedButton.querySelector('#checkbox_border');
      const tick = clickedButton.querySelector('#tick');
      
      if (!currentEntity.classList.contains('menu-button')) {
        currentEntity.classList.add('menu-button')

      }else{
        currentEntity.classList.remove('menu-button')
        document.querySelector('#camera').setAttribute('look-controls', 'enabled', false);


        var infoKey = evt.currentTarget.id;
        var Info = this.Info[infoKey];

        this.TitleEl.innerText = Info.title;
        this.DescriptionEl.innerHTML = Info.description;
    
        this.backgroundEl.object3D.scale.set(1, 1, 1);
        modal.style.display = "flex";

              
        this.el.object3D.scale.set(1, 1, 1);
        if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
        this.el.object3D.visible = true;
        this.TitleEl.setAttribute('text', 'value', Info.title);
        this.DescriptionEl.setAttribute('text', 'value', Info.description);
      }

        // Records played Vimeo videos. This is external from A-Frame in the event the experience does not work. If that occurs, they can video videos in accordion below. 
        var iframe = document.querySelector('iframe');
        player = new Vimeo.Player(iframe);
        var playedVideos = JSON.parse(localStorage.getItem('playedVideos')) || [];


        
        player.on('play', function () {
          var videoId = iframe.id;
            if (!playedVideos.includes(videoId)) {
                checkbox.setAttribute('material', 'color', '#0075FF');
                checkboxBG.setAttribute('material', 'color', '#0075FF');
                clickedButton.setAttribute('material', 'color', '#0075FF');
                tick.setAttribute('visible', 'true');
                playedVideos.push(videoId);
                localStorage.setItem('playedVideos', JSON.stringify(playedVideos));
                updateCounter(playedVideos.length);
                checkingComplete();
            }
        });
 
      },
  
    onBackgroundClick: function (evt) {
      this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.visible = false;
      this.fadeBackgroundEl.object3D.visible = false;
      document.querySelector('#camera').setAttribute('look-controls', 'enabled', true);

      
    }, 
  })
  
//  Phone Look Controls
AFRAME.components["look-controls"].Component.prototype.onTouchMove = function (t) {
  if (this.touchStarted && this.data.touchEnabled) {
      this.pitchObject.rotation.x += .6 * Math.PI * (t.touches[0].pageY - this.touchStart.y) / this.el.sceneEl.canvas.clientHeight;
      this.yawObject.rotation.y += /*  */ Math.PI * (t.touches[0].pageX - this.touchStart.x) / this.el.sceneEl.canvas.clientWidth;
      this.pitchObject.rotation.x = Math.max(Math.PI / -2, Math.min(Math.PI / 2, this.pitchObject.rotation.x));
      this.touchStart = {
          x: t.touches[0].pageX,
          y: t.touches[0].pageY
      }
  }};

  // For ending scene entering yarning space
AFRAME.registerShader('portal2', {
  schema: {
    borderEnabled: {
      default: 1.0,
      type: 'int',
      is: 'uniform'
    },
    backgroundColor: {
      default: 'red',
      type: 'color',
      is: 'uniform'
    },
    pano: {
      type: 'map',
      is: 'uniform'
    },
  },
  vertexShader: ['vec3 portalPosition;', 'varying vec3 vWorldPosition;', 'varying float vDistanceToCenter;', 'varying float vDistance;', 'void main() {', 'vDistanceToCenter = clamp(length(position - vec3(0.0, 0.0, 0.0)), 0.0, 1.0);', 'portalPosition = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;', 'vDistance = length(portalPosition - cameraPosition);', 'vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;', 'gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);', '}'].join('\n'),
  fragmentShader: ['#define RECIPROCAL_PI2 0.15915494', 'uniform sampler2D pano;', 'uniform vec3 strokeColor;', 'uniform vec3 backgroundColor;', 'uniform float borderEnabled;', 'varying float vDistanceToCenter;', 'varying float vDistance;', 'varying vec3 vWorldPosition;', 'void main() {', 'vec3 direction = normalize(vWorldPosition - cameraPosition);', 'vec2 sampleUV;', 'float borderThickness = clamp(exp(-vDistance / 50.0), 0.6, 0.95);', 'sampleUV.y = clamp(direction.y * 0.5  + 0.5, 0.0, 1.0);', 'sampleUV.x = atan(direction.z, -direction.x) * -RECIPROCAL_PI2 + 0.5;', 'if (vDistanceToCenter > borderThickness && borderEnabled == 1.0) {', 'gl_FragColor = vec4(strokeColor, 1.0);', '} else {', 'gl_FragColor = texture2D(pano, sampleUV); // Use the pano texture color directly', '}', '}'].join('\n')
});


function checkingComplete(){
  console.log("checking");
  var playedVideos = JSON.parse(localStorage.getItem('playedVideos')) || [];

  playedVideos.forEach(function(videoId) {
    console.log("checking Each");
    // Look for corresponding button with the ID format "videoIdButton"
    var button = document.getElementById(videoId + 'Button');
    if (button) {
        // Look for child elements checkbox, checkbox_border, and tick
        var checkbox = button.querySelector('#checkbox');
        var checkboxBorder = button.querySelector('#checkbox_border');
        var tick = button.querySelector('#tick');
        console.log("New button found");
        // Set their attributes
        checkbox.setAttribute('material', 'color', '#0075FF');
        checkboxBorder.setAttribute('material', 'color', '#0075FF');
        button.setAttribute('material', 'color', '#0075FF');
        tick.setAttribute('visible', 'true');

        // Append a tick symbol to the beginning of the button's title
        var buttonTitle = button.textContent.trim();
        button.textContent = "✓ " + buttonTitle;
    }

    // Look for buttons with class matching the video ID
    var matchingButtons = document.querySelectorAll('.' + videoId);
    matchingButtons.forEach(function(matchingButton) {
        // Set their style properties
        matchingButton.style.backgroundColor = '#0075FF';
        matchingButton.style.color = '#fff';
        matchingButton.style.fontWeight = 'bold';

        // Append a tick symbol to the beginning of the button's title
        var buttonTitle = matchingButton.textContent.trim();
        matchingButton.textContent = "✓ " + buttonTitle;
    });
  });
}
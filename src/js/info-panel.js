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
    welcomeModal.style.display = "flex";

    // Close the modal pop-up
    span.onclick = function() {
      modal.style.display = "none";
      document.querySelector('#camera').setAttribute('look-controls', 'enabled', true);
      player.pause();
    }; 
    welcomeModalSpan.onclick = function() {
      welcomeModal.style.display = "none";
    };

    this.TitleEl = document.querySelector('#Title');
    this.DescriptionEl = document.querySelector('#Description');
 
    // Task 1: Disable the button with class "tutor-topbar-mark-btn"
    var markButton = document.querySelector('.tutor-topbar-mark-btn');
    if (markButton) {
      markButton.disabled = true;
    }

    // Task 2: Replace "Mark as Complete" with "Complete watching videos"
    var markButtonText = document.querySelector('.tutor-topbar-mark-btn span');
    if (markButtonText && markButtonText.textContent.trim() === 'Mark as Complete') {
      markButtonText.textContent = 'Complete watching videos';
    }

    // Task 3: Disable the link within the div with class "tutor-single-course-content-next"
    var nextLink = document.querySelector('.tutor-single-course-content-next a');
    if (nextLink) {
      nextLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
      });
    }


    // Check if it's the final launch (not during testing)
    var isFinalLaunch = true;  // Set this to true for the final launch

    if (isFinalLaunch) {
      // Task 1: Disable the button with class "tutor-topbar-mark-btn"
      var markButton = document.querySelector('.tutor-topbar-mark-btn');
      if (markButton) {
        markButton.disabled = true;
      }

      // Task 2: Replace "Mark as Complete" with "Complete watching videos"
      var markButtonText = document.querySelector('.tutor-topbar-mark-btn');
      if (markButtonText) {
        markButtonText.textContent = "Complete watching videos";
      }

      // Task 3: Disable the link within div with class "tutor-single-course-content-next"
      var nextLink = document.querySelector('.tutor-single-course-content-next a');
      if (nextLink) {
        nextLink.addEventListener('click', function(event) {
          event.preventDefault();
        });
      }
    }



      this.Info = {
        /* Safe Speakers. No viewer discression */
        howardButton: {
          title: '',
          imgEl: document.querySelector('#howardImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/841766857?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="LIMEN 2.0: Howard Riley">
          </iframe>
          </div>`, 
        },
        dianneButton: {
          title: '',
          imgEl: document.querySelector('#dianneImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/835658211?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="Dianne Mippy Dual Audio">
          </iframe>
          </div>`
        },
        edithButton: {
          title: '',
          imgEl: document.querySelector('#edithImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/837837238?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="LIMEN 2.0: Maisie Weston">
          </iframe>
          </div>
          `
        },
        garryButton: {
          title: '',
          imgEl: document.querySelector('#garryImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/835638228?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="Garry Ryder">
          </iframe>
          </div>
          `
        },
        jenniferButton: {
          title: '',
          imgEl: document.querySelector('#jenniferImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/835624371?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="Jennifer Mogridge_duel_audio">
          </iframe>
          </div>
          `
        },
        lenButton: {
          title: '',
          imgEl: document.querySelector('#lenImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/841769019?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="LIMEN 2.0: Len Oglive">
          </iframe>
          </div>
          `
        },
        maisieButton: {
          title: '',
          imgEl: document.querySelector('#maisieImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/841771256?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="Maisie Weston 2">
          </iframe>
          </div>
          `
        },
        stephanieButton: {
          title: '',
          imgEl: document.querySelector('#stephanieImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/841780740?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="Stephanie Mippy">
          </iframe>
          </div>
          `
        },
        timButton: {
          title: '',
          imgEl: document.querySelector('#timImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/841784139?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="tim flowers">
          </iframe>
          </div>
          `
        },
        tim2Button: {
          title: 'Tim\'s Grandmother Story',
          imgEl: document.querySelector('#timImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/896734162?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="tim flowers">
          </iframe>
          </div>
          `
        },
        tonjiButton: {
          title: '',
          imgEl: document.querySelector('#tonjiImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/841784177?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="Tonji Hansen">
          </iframe>
          </div>`
        },
        gailButton: {
          title: '',
          imgEl: document.querySelector('#gailImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/894344953?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="Tonji Hansen">
          </iframe>
          </div>`
        },
        yarningButton: {
          title: '',
          imgEl: document.querySelector('#yarningImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/888981328?h=896621e015&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;"></iframe>`, 
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
        tim2Button: {
          title: '',
          imgEl: document.querySelector('#rearImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/896734162?h=db3415a96f" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;"></iframe>`, 
        },
        artworkButton: {
          title: '',
          imgEl: document.querySelector('#rearImage'),
          description: `
          <div class="sketchfab-embed-wrapper"> 
          <iframe width="100%" height="500px" title="LIMEN 2.0 Artwork" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/8667ddc21f69476bbd8321ad0353cc0c/embed?preload=1">
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

        // Check if counter value is already stored in local storage
        var counterValue = localStorage.getItem('counterValue');
        if (counterValue === null) {
            counterValue = 0;
        } else {
            counterValue = parseInt(counterValue);
        }

        // Records played Vimeo videos. This is external from A-Frame in the event the experience does not work. If that occurs, they can video videos in accordion below. 
        var iframe = document.querySelector('iframe');
        player = new Vimeo.Player(iframe);
        var playedVideos = JSON.parse(localStorage.getItem('playedVideos')) || [];

        player.on('play', function () {
            var videoId = iframe.src.split('/').pop();
            // Check if the video has already been played
            if (!playedVideos.includes(videoId)) {
                checkbox.setAttribute('material', 'color', '#0075FF');
                checkboxBG.setAttribute('material', 'color', '#0075FF');
                clickedButton.setAttribute('material', 'color', '#0075FF');
                tick.setAttribute('visible', 'true');
                playedVideos.push(videoId);
                localStorage.setItem('playedVideos', JSON.stringify(playedVideos));
                updateCounter(playedVideos.length);
            }

        });

        function updateCounter(value) {
            var counterText = document.getElementById('counter-text');
            var currentMax = counterText.innerText.split('/')[1]; // Get the number after the slash
            counterText.innerText = value + '/' + currentMax; 

            
            // Task 4: Check and perform actions based on the playedVideos.length and currentMax
            if (playedVideos.length >= currentMax) {

              // Task 4A: Change the style of element with class "counter-container"
              if (counterContainer) {
                counterContainer.style.backgroundColor = '#1263D3';
                counterContainer.style.color = 'white';
                counterContainer.style.border = '1px solid white';
              }

              // Task 4B: Enable the "tutor-topbar-mark-btn"
              if (markButton) {
                markButton.disabled = false;
              }

              // Task 4C: Replace "Complete watching videos" with "Mark as Complete"
              if (markButtonText) {
                markButtonText.textContent = "Mark as Complete";
              }

              // Task 4D: Enable the link within div with class "tutor-single-course-content-next"
              if (nextLink) {
                nextLink.removeEventListener('click', function(event) {
                  event.preventDefault();
                });
              }
            }
        }    
      },
  
    onBackgroundClick: function (evt) {
      this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.visible = false;
      this.fadeBackgroundEl.object3D.visible = false;
      document.querySelector('#camera').setAttribute('look-controls', 'enabled', true);

      
    }, 
  })
  
  window.onload = function() {
    localStorage.removeItem('playedVideos');
  };

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
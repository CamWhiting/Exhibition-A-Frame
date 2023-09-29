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
    var span = document.getElementsByClassName("close")[0];
    // Close the welcomeModal pop-up
    var welcomeModalSpan = document.querySelector('.welcomeClose');
    
    welcomeModal.style.display = "flex";

    span.onclick = function() {
      modal.style.display = "none";
      document.querySelector('#camera').setAttribute('look-controls', 'enabled', true);
    }; 

    welcomeModalSpan.onclick = function() {
      welcomeModal.style.display = "none";
    };

    span.onclick = function() {
      modal.style.display = "none";
      document.querySelector('#camera').setAttribute('look-controls', 'enabled', true);
    }; 

    this.TitleEl = document.querySelector('#Title');
    this.DescriptionEl = document.querySelector('#Description');
 
      this.Info = {
        /* Safe Speakers. No viewer discression */
        howardButton: {
          title: 'Howard Riley',
          imgEl: document.querySelector('#howardImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/841766857?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="LIMEN 2.0: Howard Riley">
          </iframe>
          </div>`, 
        },
        dianneButton: {
          title: 'Dianne Mippy',
          imgEl: document.querySelector('#dianneImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/835658211?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="Dianne Mippy Dual Audio">
          </iframe>
          </div>`
        },
        edithButton: {
          title: 'Edith de Giambattista',
          imgEl: document.querySelector('#edithImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/841771256?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="LIMEN 2.0: Maisie Weston">
          </iframe>
          </div>
          `
        },
        garryButton: {
          title: 'Garry Ryder',
          imgEl: document.querySelector('#garryImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/835638228?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="Garry Ryder">
          </iframe>
          </div>
          `
        },
        jenniferButton: {
          title: 'Jennifer Mogridge',
          imgEl: document.querySelector('#jenniferImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/835624371?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="Jennifer Mogridge_duel_audio">
          </iframe>
          </div>
          `
        },
        lenButton: {
          title: 'Len Oglive',
          imgEl: document.querySelector('#lenImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/841769019?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="LIMEN 2.0: Len Oglive">
          </iframe>
          </div>
          `
        },
        maisieButton: {
          title: 'Maisie Weston',
          imgEl: document.querySelector('#maisieImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/841771256?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="Maisie Weston 2">
          </iframe>
          </div>
          `
        },
        stephanieButton: {
          title: 'Stephanie Mippy',
          imgEl: document.querySelector('#stephanieImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/841780740?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="Stephanie Mippy">
          </iframe>
          </div>
          `
        },
        timButton: {
          title: 'Tim Flowers',
          imgEl: document.querySelector('#timImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/841784139?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="tim flowers">
          </iframe>
          </div>
          `
        },
        tonjiButton: {
          title: 'Tonji Hansen',
          imgEl: document.querySelector('#tonjiImage'),
          description: `
          <div style="height:100%">
          <iframe src="https://player.vimeo.com/video/841784177?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%;height:100%;" title="Tonji Hansen">
          </iframe>
          </div>`
        },
        unnamedButton: {
          title: 'Unnamed',
          imgEl: document.querySelector('#tonjiImage'),
          description: 'A tribute to the lost children and an invitation to continue and share their stories.'
        },
        rearButton: {
          title: 'Carrolup Marribank',
          imgEl: document.querySelector('#rearImage'),
          description: `
          <div style="text-align: center;">
          <iframe width="100%" height="450px" src="https://www.youtube.com/embed/sTPuWor5kNI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, 
        },
        leftButton: {
          title: 'Mogumber Moore River',
          imgEl: document.querySelector('#leftImage'),
          description: `
          <div style="text-align: center;">
          <iframe width="100%" height="450px" src="https://www.youtube.com/embed/SST1hwjRyyM?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, 
        },
        middleButton: {
          title: 'Wandering Mission',
          imgEl: document.querySelector('#rearImage'),
          description: `
          <div style="text-align: center;">
          <iframe width="100%" height="450px" src="https://www.youtube.com/embed/yw5dZFTT1nA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, 
        },
        floorButton: {
          title: 'Site Map',
          imgEl: document.querySelector('#rearImage'),
          description: `
          <div style="text-align: center;">
          <iframe width="100%" height="450px" src="https://www.youtube.com/embed/lasT77J2vH8?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, 
        },
        displayButton: {
          title: 'Catelogue',
          imgEl: document.querySelector('#rearImage'),
          description: `
          <div style="text-align: center;">
          <iframe width="100%" height="450px" src="https://www.youtube.com/embed/n9YqZFGrNHM?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, 
        },
        artworkButton: {
          title: 'Artwork',
          imgEl: document.querySelector('#rearImage'),
          description: `
          <div class="sketchfab-embed-wrapper"> 
          <iframe width="100%" height="450px" title="LIMEN 2.0 Artwork" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/8667ddc21f69476bbd8321ad0353cc0c/embed?preload=1">
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
      var welcomeModal = document.getElementById("welcomeModal");
      var Info = this.Info[evt.currentTarget.id];
      var currentEntity = evt.currentTarget;
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
          counterValue = 0; // If not found, initialize counterValue to 0
      } else {
          counterValue = parseInt(counterValue); // Convert stored value to integer
      }


          var playedVideos = JSON.parse(localStorage.getItem('playedVideos')) || [];
          var iframe = document.querySelector('iframe');
          var player = new Vimeo.Player(iframe);
      
          player.on('play', function () {
              var videoId = iframe.src.split('/').pop(); // Extract the video ID from the URL
              var checkbox = document.getElementById('checkbox');

              // Check if the video has already been played
              if (!playedVideos.includes(videoId)) {
                  console.log('Played by the User!');
                  playedVideos.push(videoId); // Add video ID to the playedVideos array
                  updateCounter(playedVideos.length); // Update the counter value
                  localStorage.setItem('playedVideos', JSON.stringify(playedVideos)); // Store the updated array in local storage
                  checkbox.setAttribute('material', 'color', '#00FF00'); // Change color to green
                }

          });
      
          function updateCounter(value) {
              var counterText = document.getElementById('counter-text');
              counterText.innerText = value + '/10';
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
  }
}
//  Cursor Animation
AFRAME.registerComponent('interactive-cursor', {
  init: function () {
    var cursor = document.querySelector('#cursor');
    var innerRing = document.querySelector('#inner-ring');
    var middleRing = document.querySelector('#middle-ring');
    var outerRing = document.querySelector('#outer-ring');

    var animateOuterRing = function () {
      outerRing.setAttribute('geometry', 'thetaStart: 0; thetaLength: 0');
      outerRing.setAttribute('animation__theta', 'property: geometry.thetaLength; to: 360; dur: 1000; easing: linear; loop: false');
    };

    cursor.addEventListener('mouseenter', function () {
      innerRing.setAttribute('color', 'rgba(1,28,64,1)');
      innerRing.setAttribute('animation__expand-inner', 'property: radius-inner; to: 0.03; dur: 800; easing: linear');
      innerRing.setAttribute('animation__expand-outer', 'property: radius-outer; to: 0.05; dur: 800; easing: linear');
      innerRing.setAttribute('animation__expand-opacity', 'property: opacity; to: 1; dur: 400; easing: linear');
      animateOuterRing();
    });

    cursor.addEventListener('mouseleave', function () {
      innerRing.removeAttribute('animation__expand-inner');
      innerRing.removeAttribute('animation__expand-outer');
      innerRing.removeAttribute('animation__expand-opacity');
      innerRing.setAttribute('radius-inner', '0.025');
      innerRing.setAttribute('radius-outer', '0.035');
      innerRing.setAttribute('color', '#fff');
      innerRing.setAttribute('opacity', '0.5');
      middleRing.setAttribute('color', '#fff');
      middleRing.setAttribute('opacity', '0.5');
      outerRing.removeAttribute('animation__theta');
      outerRing.setAttribute('geometry', 'thetaStart: 0; thetaLength: 0');
    });

    cursor.addEventListener('fusing', function () {
      innerRing.setAttribute('color', '#88c9d1');    
      outerRing.setAttribute('visible', 'true');
      animateOuterRing();
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var cursor = document.querySelector('#cursor');
  cursor.setAttribute('interactive-cursor', '');
});


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

      var counterValue = 0; // Initialize counterValue
      var iframe = document.querySelector('iframe');
      var player = new Vimeo.Player(iframe);

      player.on('play', function () {
          console.log('Played by the User!');
          counterValue++; // Increment counterValue by 1
          updateCounter(counterValue); // Update the counter value
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
  


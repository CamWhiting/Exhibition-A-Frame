/* global AFRAME */
AFRAME.registerComponent('info-panel', {
    init: function () {
      var buttonEls = document.querySelectorAll('.menu-button');
      var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');
  
      this.ImageEl;
      this.TitleEl = document.querySelector('#Title');
      this.DescriptionEl = document.querySelector('#Description');
  
      this.Info = {
        howardButton: {
          title: 'The Secret World of Arrietty (2010)',
          imgEl: document.querySelector('#howardImage'),
          description: 'The cottage, yeah. They called it a cottage for some reason. And it looked like a hospital or a nursery. I remember a lot of cots being in there. But as a child, kindy years is I only went to one end of the building, wasn\'t- I didn\’t going anywhere else in the building. So maybe it was being used for something else while I was a kindy.' 
        },
        kazetachinuButton: {
          title: 'The Wind Rises (2013)',
          imgEl: document.querySelector('#kazetachinuImage'),
          description: 'The Wind Rises is a fictionalised biographical film of Jiro Horikoshi (1903, 1982), designer of the Mitsubishi A5M fighter aircraft and its successor, the Mitsubishi A6M Zero, used by the Empire of Japan during World War II. The film is adapted from Miyazaki\'s manga of the same name, which was in turn loosely based on both the 1937 novel The Wind Has Risen by Tatsuo Hori and the life of Jiro Horikoshi.'
        },
        ponyoButton: {
          title: 'Ponyo (2003)',
          imgEl: document.querySelector('#ponyoImage'),
          description: 'It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of Ponyo (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.'
        }
      };
  
      this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
      this.onBackgroundClick = this.onBackgroundClick.bind(this);
      this.backgroundEl = document.querySelector('#background');
      for (var i = 0; i < buttonEls.length; ++i) {
        buttonEls[i].addEventListener('click', this.onMenuButtonClick);
      }
      this.backgroundEl.addEventListener('click', this.onBackgroundClick);
      this.el.object3D.renderOrder = 9999999;
      this.el.object3D.depthTest = false;
      fadeBackgroundEl.object3D.renderOrder = 9;
      fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;
    },
  
    onMenuButtonClick: function (evt) {
      var Info = this.Info[evt.currentTarget.id];
  
      this.backgroundEl.object3D.scale.set(1, 1, 1);
  
      this.el.object3D.scale.set(1, 1, 1);
      if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
      this.el.object3D.visible = true;
      this.fadeBackgroundEl.object3D.visible = true;
  
      if (this.ImageEl) { this.ImageEl.object3D.visible = false; }
      this.ImageEl = Info.imgEl;
      this.ImageEl.object3D.visible = true;
  
      this.TitleEl.setAttribute('text', 'value', Info.title);
      this.DescriptionEl.setAttribute('text', 'value', Info.description);
    },
  
    onBackgroundClick: function (evt) {
      this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.visible = false;
      this.fadeBackgroundEl.object3D.visible = false;
    }
  });
/* global AFRAME */
AFRAME.registerComponent('info-panel', {
  modal: null,
  init: function () {
    var buttonEls = document.querySelectorAll('.menu-button');
    var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');
    var modal = document.getElementById("myModal"); // Store the modal reference
    
    // Code to close modal
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
      modal.style.display = "none";
      document.querySelector('#camera').setAttribute('look-controls', 'enabled', true);
    }; // Semicolon added

    this.TitleEl = document.querySelector('#Title');
    this.DescriptionEl = document.querySelector('#Description');
  
      this.Info = {
        /* Safe Speakers. No viewer discression */
        howardButton: {
          title: 'Howard Riley',
          imgEl: document.querySelector('#howardImage'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non urna augue. Donec vitae nunc vitae nibh vulputate lobortis ut vehicula quam. Vivamus luctus tempor cursus. Curabitur consequat urna nisl, et suscipit libero tempus a. Curabitur elementum nunc felis, sit amet porttitor felis ultricies ac. Nullam auctor quam eu volutpat condimentum. Morbi quis dui in turpis viverra volutpat. Donec vitae accumsan arcu. Integer quam justo, blandit ut pretium non, scelerisque sit amet ipsum. Aenean a sem nibh. Aliquam eu nisl vel enim sodales faucibus nec ut risus. Fusce mattis, tortor et condimentum rhoncus, sapien mi tincidunt turpis, quis elementum orci leo nec sapien. Mauris accumsan fringilla eleifend. Nulla laoreet semper ex ut dapibus. Sed a finibus metus, sed vulputate elit. Maecenas nisi lorem, ultricies ut nisl tincidunt, iaculis viverra lorem. Donec quis hendrerit neque. Duis blandit elit convallis dui viverra eleifend. Fusce a consequat velit, nec pharetra mi. Integer eu sagittis augue. Morbi volutpat nisl erat, elementum maximus justo viverra at. Maecenas ligula est, commodo eget sagittis quis, euismod vitae dolor. Cras mi odio, sodales consequat consequat sed, lacinia non eros. Fusce vel porta lorem. Ut quis augue quam. Sed sed odio nibh. Vestibulum condimentum sed justo sit amet viverra. Nam sit amet augue gravida, sollicitudin lacus vel, lobortis magna. Morbi dignissim efficitur vulputate. Etiam ut faucibus risus, et pulvinar quam. Aliquam ut sapien interdum, molestie ipsum sit amet, rutrum lacus. In hac habitasse platea dictumst. Proin vitae ipsum tellus. Duis ultricies mi eu laoreet feugiat. Curabitur lacinia pretium velit id facilisis. Fusce enim elit, congue ac purus quis, suscipit mattis arcu. Cras feugiat lorem nec eleifend auctor. Ut leo velit, ullamcorper ac aliquam nec, dignissim eget diam. Fusce quis dictum magna, vitae pulvinar erat. Nulla sagittis neque vel ex volutpat mattis. Donec in lectus odio. Pellentesque in accumsan quam. Cras nisi nunc, sagittis finibus sem viverra, viverra ultricies libero. Duis nec urna vehicula, dictum augue sit amet, luctus urna. Fusce in finibus purus, sed finibus ligula. Morbi egestas velit ut velit tristique, sit amet eleifend ante condimentum. Proin eget tincidunt augue, a faucibus ante. Curabitur congue magna quis mauris laoreet volutpat. Etiam dignissim eu massa vitae fringilla. Aenean posuere, nunc in suscipit rhoncus, risus mi euismod enim, ut vulputate dolor diam nec purus. Mauris mollis erat in sagittis vestibulum. Vestibulum id efficitur augue, eu aliquam elit. Morbi auctor arcu neque, sed sagittis libero feugiat id. Nunc mi urna, varius at urna ut, malesuada efficitur elit. Nunc eget libero ac orci consectetur condimentum. Nulla finibus posuere consequat. Nunc sit amet dolor nibh. Sed eu purus non quam posuere iaculis quis eget ante. Praesent consequat tristique nisi, non blandit ex molestie et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed lacus leo, fermentum a scelerisque sit amet, feugiat et quam. Ut et odio sed est consectetur cursus. Duis a ultrices metus. Nullam lorem dui, pretium eu malesuada at, maximus varius elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non urna augue. Donec vitae nunc vitae nibh vulputate lobortis ut vehicula quam. Vivamus luctus tempor cursus. Curabitur consequat urna nisl, et suscipit libero tempus a. Curabitur elementum nunc felis, sit amet porttitor felis ultricies ac. Nullam auctor quam eu volutpat condimentum. Morbi quis dui in turpis viverra volutpat. Donec vitae accumsan arcu. Integer quam justo, blandit ut pretium non, scelerisque sit amet ipsum. Aenean a sem nibh. Aliquam eu nisl vel enim sodales faucibus nec ut risus. Fusce mattis, tortor et condimentum rhoncus, sapien mi tincidunt turpis, quis elementum orci leo nec sapien. Mauris accumsan fringilla eleifend. Nulla laoreet semper ex ut dapibus. Sed a finibus metus, sed vulputate elit. Maecenas nisi lorem, ultricies ut nisl tincidunt, iaculis viverra lorem. Donec quis hendrerit neque. Duis blandit elit convallis dui viverra eleifend. Fusce a consequat velit, nec pharetra mi. Integer eu sagittis augue. Morbi volutpat nisl erat, elementum maximus justo viverra at. Maecenas ligula est, commodo eget sagittis quis, euismod vitae dolor. Cras mi odio, sodales consequat consequat sed, lacinia non eros. Fusce vel porta lorem. Ut quis augue quam. Sed sed odio nibh. Vestibulum condimentum sed justo sit amet viverra. Nam sit amet augue gravida, sollicitudin lacus vel, lobortis magna. Morbi dignissim efficitur vulputate. Etiam ut faucibus risus, et pulvinar quam. Aliquam ut sapien interdum, molestie ipsum sit amet, rutrum lacus. In hac habitasse platea dictumst. Proin vitae ipsum tellus. Duis ultricies mi eu laoreet feugiat. Curabitur lacinia pretium velit id facilisis. Fusce enim elit, congue ac purus quis, suscipit mattis arcu. Cras feugiat lorem nec eleifend auctor. Ut leo velit, ullamcorper ac aliquam nec, dignissim eget diam. Fusce quis dictum magna, vitae pulvinar erat. Nulla sagittis neque vel ex volutpat mattis. Donec in lectus odio. Pellentesque in accumsan quam. Cras nisi nunc, sagittis finibus sem viverra, viverra ultricies libero. Duis nec urna vehicula, dictum augue sit amet, luctus urna. Fusce in finibus purus, sed finibus ligula. Morbi egestas velit ut velit tristique, sit amet eleifend ante condimentum. Proin eget tincidunt augue, a faucibus ante. Curabitur congue magna quis mauris laoreet volutpat. Etiam dignissim eu massa vitae fringilla. Aenean posuere, nunc in suscipit rhoncus, risus mi euismod enim, ut vulputate dolor diam nec purus. Mauris mollis erat in sagittis vestibulum. Vestibulum id efficitur augue, eu aliquam elit. Morbi auctor arcu neque, sed sagittis libero feugiat id. Nunc mi urna, varius at urna ut, malesuada efficitur elit. Nunc eget libero ac orci consectetur condimentum. Nulla finibus posuere consequat. Nunc sit amet dolor nibh. Sed eu purus non quam posuere iaculis quis eget ante. Praesent consequat tristique nisi, non blandit ex molestie et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed lacus leo, fermentum a scelerisque sit amet, feugiat et quam. Ut et odio sed est consectetur cursus. Duis a ultrices metus. Nullam lorem dui, pretium eu malesuada at, maximus varius elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non urna augue. Donec vitae nunc vitae nibh vulputate lobortis ut vehicula quam. Vivamus luctus tempor cursus. Curabitur consequat urna nisl, et suscipit libero tempus a. Curabitur elementum nunc felis, sit amet porttitor felis ultricies ac. Nullam auctor quam eu volutpat condimentum. Morbi quis dui in turpis viverra volutpat. Donec vitae accumsan arcu. Integer quam justo, blandit ut pretium non, scelerisque sit amet ipsum. Aenean a sem nibh. Aliquam eu nisl vel enim sodales faucibus nec ut risus. Fusce mattis, tortor et condimentum rhoncus, sapien mi tincidunt turpis, quis elementum orci leo nec sapien. Mauris accumsan fringilla eleifend. Nulla laoreet semper ex ut dapibus. Sed a finibus metus, sed vulputate elit. Maecenas nisi lorem, ultricies ut nisl tincidunt, iaculis viverra lorem. Donec quis hendrerit neque. Duis blandit elit convallis dui viverra eleifend. Fusce a consequat velit, nec pharetra mi. Integer eu sagittis augue. Morbi volutpat nisl erat, elementum maximus justo viverra at. Maecenas ligula est, commodo eget sagittis quis, euismod vitae dolor. Cras mi odio, sodales consequat consequat sed, lacinia non eros. Fusce vel porta lorem. Ut quis augue quam. Sed sed odio nibh. Vestibulum condimentum sed justo sit amet viverra. Nam sit amet augue gravida, sollicitudin lacus vel, lobortis magna. Morbi dignissim efficitur vulputate. Etiam ut faucibus risus, et pulvinar quam. Aliquam ut sapien interdum, molestie ipsum sit amet, rutrum lacus. In hac habitasse platea dictumst. Proin vitae ipsum tellus. Duis ultricies mi eu laoreet feugiat. Curabitur lacinia pretium velit id facilisis. Fusce enim elit, congue ac purus quis, suscipit mattis arcu. Cras feugiat lorem nec eleifend auctor. Ut leo velit, ullamcorper ac aliquam nec, dignissim eget diam. Fusce quis dictum magna, vitae pulvinar erat. Nulla sagittis neque vel ex volutpat mattis. Donec in lectus odio. Pellentesque in accumsan quam. Cras nisi nunc, sagittis finibus sem viverra, viverra ultricies libero. Duis nec urna vehicula, dictum augue sit amet, luctus urna. Fusce in finibus purus, sed finibus ligula. Morbi egestas velit ut velit tristique, sit amet eleifend ante condimentum. Proin eget tincidunt augue, a faucibus ante. Curabitur congue magna quis mauris laoreet volutpat. Etiam dignissim eu massa vitae fringilla. Aenean posuere, nunc in suscipit rhoncus, risus mi euismod enim, ut vulputate dolor diam nec purus. Mauris mollis erat in sagittis vestibulum. Vestibulum id efficitur augue, eu aliquam elit. Morbi auctor arcu neque, sed sagittis libero feugiat id. Nunc mi urna, varius at urna ut, malesuada efficitur elit. Nunc eget libero ac orci consectetur condimentum. Nulla finibus posuere consequat. Nunc sit amet dolor nibh. Sed eu purus non quam posuere iaculis quis eget ante. Praesent consequat tristique nisi, non blandit ex molestie et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed lacus leo, fermentum a scelerisque sit amet, feugiat et quam. Ut et odio sed est consectetur cursus. Duis a ultrices metus. Nullam lorem dui, pretium eu malesuada at, maximus varius elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non urna augue. Donec vitae nunc vitae nibh vulputate lobortis ut vehicula quam. Vivamus luctus tempor cursus. Curabitur consequat urna nisl, et suscipit libero tempus a. Curabitur elementum nunc felis, sit amet porttitor felis ultricies ac. Nullam auctor quam eu volutpat condimentum. Morbi quis dui in turpis viverra volutpat. Donec vitae accumsan arcu. Integer quam justo, blandit ut pretium non, scelerisque sit amet ipsum. Aenean a sem nibh. Aliquam eu nisl vel enim sodales faucibus nec ut risus. Fusce mattis, tortor et condimentum rhoncus, sapien mi tincidunt turpis, quis elementum orci leo nec sapien. Mauris accumsan fringilla eleifend. Nulla laoreet semper ex ut dapibus. Sed a finibus metus, sed vulputate elit. Maecenas nisi lorem, ultricies ut nisl tincidunt, iaculis viverra lorem. Donec quis hendrerit neque. Duis blandit elit convallis dui viverra eleifend. Fusce a consequat velit, nec pharetra mi. Integer eu sagittis augue. Morbi volutpat nisl erat, elementum maximus justo viverra at. Maecenas ligula est, commodo eget sagittis quis, euismod vitae dolor. Cras mi odio, sodales consequat consequat sed, lacinia non eros. Fusce vel porta lorem. Ut quis augue quam. Sed sed odio nibh. Vestibulum condimentum sed justo sit amet viverra. Nam sit amet augue gravida, sollicitudin lacus vel, lobortis magna. Morbi dignissim efficitur vulputate. Etiam ut faucibus risus, et pulvinar quam. Aliquam ut sapien interdum, molestie ipsum sit amet, rutrum lacus. In hac habitasse platea dictumst. Proin vitae ipsum tellus. Duis ultricies mi eu laoreet feugiat. Curabitur lacinia pretium velit id facilisis. Fusce enim elit, congue ac purus quis, suscipit mattis arcu. Cras feugiat lorem nec eleifend auctor. Ut leo velit, ullamcorper ac aliquam nec, dignissim eget diam. Fusce quis dictum magna, vitae pulvinar erat. Nulla sagittis neque vel ex volutpat mattis. Donec in lectus odio. Pellentesque in accumsan quam. Cras nisi nunc, sagittis finibus sem viverra, viverra ultricies libero. Duis nec urna vehicula, dictum augue sit amet, luctus urna. Fusce in finibus purus, sed finibus ligula. Morbi egestas velit ut velit tristique, sit amet eleifend ante condimentum. Proin eget tincidunt augue, a faucibus ante. Curabitur congue magna quis mauris laoreet volutpat. Etiam dignissim eu massa vitae fringilla. Aenean posuere, nunc in suscipit rhoncus, risus mi euismod enim, ut vulputate dolor diam nec purus. Mauris mollis erat in sagittis vestibulum. Vestibulum id efficitur augue, eu aliquam elit. Morbi auctor arcu neque, sed sagittis libero feugiat id. Nunc mi urna, varius at urna ut, malesuada efficitur elit. Nunc eget libero ac orci consectetur condimentum. Nulla finibus posuere consequat. Nunc sit amet dolor nibh. Sed eu purus non quam posuere iaculis quis eget ante. Praesent consequat tristique nisi, non blandit ex molestie et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed lacus leo, fermentum a scelerisque sit amet, feugiat et quam. Ut et odio sed est consectetur cursus. Duis a ultrices metus. Nullam lorem dui, pretium eu malesuada at, maximus varius elit.', 
        },
        dianneButton: {
          title: 'Dianne Mippy',
          imgEl: document.querySelector('#dianneImage'),
          description: 'The Wind Rises is a fictionalised biographical film of Jiro Horikoshi (1903, 1982), designer of the Mitsubishi A5M fighter aircraft and its successor, the Mitsubishi A6M Zero, used by the Empire of Japan during World War II. The film is adapted from Miyazaki\'s manga of the same name, which was in turn loosely based on both the 1937 novel The Wind Has Risen by Tatsuo Hori and the life of Jiro Horikoshi.'
        },
        edithButton: {
          title: 'Edith de Giambattista',
          imgEl: document.querySelector('#edithImage'),
          description: 'It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of Ponyo (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.'
        },
        garryButton: {
          title: 'Garry Ryder',
          imgEl: document.querySelector('#garryImage'),
          description: 'It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of Ponyo (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.'
        },
        jenniferButton: {
          title: 'Jennifer Mogridge',
          imgEl: document.querySelector('#jenniferImage'),
          description: 'It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of Ponyo (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.'
        },
        lenButton: {
          title: 'Len Oglive',
          imgEl: document.querySelector('#lenImage'),
          description: 'It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of Ponyo (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.'
        },
        maisieButton: {
          title: 'Maisie Weston',
          imgEl: document.querySelector('#maisieImage'),
          description: 'It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of Ponyo (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.'
        },
        stephanieButton: {
          title: 'Stephanie Mippy',
          imgEl: document.querySelector('#jenniferImage'),
          description: 'It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of Ponyo (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.'
        },
        timButton: {
          title: 'Time Flowers',
          imgEl: document.querySelector('#timImage'),
          description: 'It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of Ponyo (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.'
        },
        tonjiButton: {
          title: 'Tonji Hansen',
          imgEl: document.querySelector('#tonjiImage'),
          description: 'It is the eighth film Miyazaki directed for Studio Ghibli, and his tenth overall. The film tells the story of Ponyo (Nara), a goldfish who escapes from the ocean and is rescued by a five-year-old human boy, Sōsuke (Doi) after she is washed ashore while trapped in a glass jar.'
        },
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
      var modal = document.getElementById("myModal"); // Store the modal reference
      var Info = this.Info[evt.currentTarget.id];
      
      document.querySelector('#camera').setAttribute('look-controls', 'enabled', false);

      var infoKey = evt.currentTarget.id;
      var Info = this.Info[infoKey];

      this.TitleEl.innerText = Info.title;
      this.DescriptionEl.innerText = Info.description;
    
  
      this.backgroundEl.object3D.scale.set(1, 1, 1);
      modal.style.display = "block";
  
  
      this.el.object3D.scale.set(1, 1, 1);
      if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
      this.el.object3D.visible = true;
      this.TitleEl.setAttribute('text', 'value', Info.title);
      this.DescriptionEl.setAttribute('text', 'value', Info.description);
    },
  
    onBackgroundClick: function (evt) {
      this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.visible = false;
      this.fadeBackgroundEl.object3D.visible = false;
      modal.style.display = "none";
      document.querySelector('#camera').setAttribute('look-controls', 'enabled', true);

      
    },

    
  })
  


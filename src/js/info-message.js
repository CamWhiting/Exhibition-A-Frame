/* global AFRAME */
AFRAME.registerComponent('info-message', {
    schema: {
      htmlSrc: {type: 'selector'},
      startOpened: {default: false},
      width: {default: 400},
      height: {default: 320}
    },
    init: function () {
      var sceneEl = this.el.sceneEl;
      var messageEl = this.messageEl = document.createElement('div');
      this.toggleInfoMessage = this.toggleInfoMessage.bind(this);
      messageEl.setAttribute('aframe-injected', '');
      this.createInfoButton(this.toggleInfoMessage);
      this.addStyles();
      sceneEl.appendChild(messageEl);
     
      var helpModal = document.querySelector('.a-info-message-button');
      
        // Check if the current page is "index(end).html"
        if (window.location.pathname.endsWith("index(end).html")) {
          var helpModal = document.querySelector('.a-info-message-button');
          helpModal.style.display = "flex";
        };

        helpModal.onclick = function() {
          welcomeModal.style.display = "flex";
        };

    },

  
    addStyles: function () {
      var css =
        '.a-info-message{border-radius: 10px; position: absolute; width: ' + this.data.width + 'px;' +
        'height: ' + this.data.height + 'px; background-color: white; border: 3px solid rgba(0,0,0,0.65);' +
        'bottom: 22px; left: 22px; color: rgb(51, 51, 51); padding: 20px 15px 0 15px;' +
        'font-size: 11pt; line-height: 20pt; z-index: 9999}' +
  
        '.a-info-message a{border-bottom: 1px solid rgba(53,196,232,.15); color: #1497b8;' +
        'position: relative; text-decoration: none; transition: .05s ease;}' +
  
        '@media only screen and (min-width: 1200px) {' +
        '.a-info-message {font-size: 12pt}}' +
  
        '@media only screen and (max-width: 600px) {' +
        '.a-info-message {left: 20px; right: 20px; bottom: 60px; width: auto}}' +
  
        '@media only screen and (max-height: 600px) {' +
        '.a-info-message {left: 20px; bottom: 20px; height: 250px}}' +
  
        '.a-close-button-info{width: 25px; height: 25px; padding: 0;' +
        'top: 10px; right: 10px; position: absolute; color: white;' +
        'font-size: 12px; line-height: 12px; border: none; background-color: #ef2d5e;' +
        'border-radius: 5px; font-weight: medium}' +
  
        '.a-close-button-info:hover{background-color: #b32146; color: white}' +
        '.a-info-message-container {position: absolute; left: 100px; bottom: 20px;}' +
        '.a-info-message-button {background: rgba(0, 0, 0, 0.35) ' + this.infoMessageButtonDataURI + ' 50% 50% no-repeat;}' +
        '.a-info-message-button {background-size: 92% 90%; border: 0; bottom: 0; cursor: pointer; min-width: 78px; min-height: 34px; padding-right: 0; padding-top: 0; position: absolute; right: 0; transition: background-color .05s ease; -webkit-transition: background-color .05s ease; z-index: 2; border-radius: 8px; touch-action: manipulation;}' +
        '.a-info-message-button:active, .a-info-message-button:hover {background-color: #ef2d5e;}';
      var style = document.createElement('style');
  
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
  
      document.getElementsByTagName('head')[0].appendChild(style);
    },
  
    toggleInfoMessage: function () {
      var display = this.messageEl.style.display;
      this.infoButton.style.display = display;
      display = display === 'none' ? '' : 'none';
      this.messageEl.style.display = display;
      if (display === 'none') {
        this.el.emit('infomessageclosed');
      } else {
        this.el.emit('infomessageopened');
      }
    },
  
    createInfoButton: function (onClick) {
      var infoButton;
      var wrapper;

      // Create elements.
      wrapper = document.createElement('div');
      wrapper.classList.add('a-info-message-container');
      this.infoButton = infoButton = document.createElement('button');
      infoButton.className = 'a-info-message-button';
      infoButton.setAttribute('title', 'Information about this experience');
      // Insert elements.
      wrapper.appendChild(infoButton);

      this.el.sceneEl.appendChild(wrapper);
    },
  
    infoMessageButtonDataURI: 'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi4zLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxNTAgNjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE1MCA2MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTExNy4xLDIyLjNjLTAuOC0wLjgtMS44LTEuMy0zLjEtMS4zaC00Ljl2OC43aDQuOGMxLjQsMCwyLjUtMC40LDMuMi0xLjFjMC43LTAuNywxLjEtMS43LDEuMS0zDQoJQzExOC4yLDI0LjMsMTE3LjgsMjMuMSwxMTcuMSwyMi4zeiBNMTE3LjEsMjIuM2MtMC44LTAuOC0xLjgtMS4zLTMuMS0xLjNoLTQuOXY4LjdoNC44YzEuNCwwLDIuNS0wLjQsMy4yLTEuMQ0KCWMwLjctMC43LDEuMS0xLjcsMS4xLTNDMTE4LjIsMjQuMywxMTcuOCwyMy4xLDExNy4xLDIyLjN6IE0xMTcuMSwyMi4zYy0wLjgtMC44LTEuOC0xLjMtMy4xLTEuM2gtNC45djguN2g0LjgNCgljMS40LDAsMi41LTAuNCwzLjItMS4xYzAuNy0wLjcsMS4xLTEuNywxLjEtM0MxMTguMiwyNC4zLDExNy44LDIzLjEsMTE3LjEsMjIuM3ogTTExNy4xLDIyLjNjLTAuOC0wLjgtMS44LTEuMy0zLjEtMS4zaC00Ljl2OC43DQoJaDQuOGMxLjQsMCwyLjUtMC40LDMuMi0xLjFjMC43LTAuNywxLjEtMS43LDEuMS0zQzExOC4yLDI0LjMsMTE3LjgsMjMuMSwxMTcuMSwyMi4zeiBNMTM4LDBIMTJDNS40LDAsMCw1LjQsMCwxMnYzOA0KCWMwLDYuNiw1LjQsMTIsMTIsMTJoMTI2YzYuNiwwLDEyLTUuNCwxMi0xMlYxMkMxNTAsNS40LDE0NC42LDAsMTM4LDB6IE01MC42LDQ1LjVoLTcuMlYzM0gzMi42djEyLjZoLTcuM1YxNS40aDcuM3YxMmgxMC43di0xMmg3LjINCglWNDUuNXogTTc2LDIxSDYyLjR2Ni40aDExLjR2NS40SDYyLjRWNDBoMTMuNXY1LjZINTUuMVYxNS40SDc2VjIxeiBNOTguOCw0NS41SDc4LjlWMTUuNGg3LjNWNDBoMTIuN1Y0NS41eiBNMTIyLjQsMzIuNw0KCWMtMi4xLDEuOC01LDIuNi04LjcsMi42aC00LjZ2MTAuMmgtNy4zVjE1LjRoMTJjMi4zLDAsNC40LDAuNCw2LjEsMS4zYzEuOCwwLjksMy4yLDIuMSw0LjEsMy42YzEsMS42LDEuNSwzLjMsMS41LDUuMw0KCUMxMjUuNiwyOC42LDEyNC41LDMwLjksMTIyLjQsMzIuN3ogTTExNCwyMWgtNC45djguN2g0LjhjMS40LDAsMi41LTAuNCwzLjItMS4xYzAuNy0wLjcsMS4xLTEuNywxLjEtM2MwLTEuNC0wLjQtMi41LTEuMS0zLjQNCglDMTE2LjMsMjEuNSwxMTUuMywyMSwxMTQsMjF6IE0xMTcuMSwyMi4zYy0wLjgtMC44LTEuOC0xLjMtMy4xLTEuM2gtNC45djguN2g0LjhjMS40LDAsMi41LTAuNCwzLjItMS4xYzAuNy0wLjcsMS4xLTEuNywxLjEtMw0KCUMxMTguMiwyNC4zLDExNy44LDIzLjEsMTE3LjEsMjIuM3ogTTExNy4xLDIyLjNjLTAuOC0wLjgtMS44LTEuMy0zLjEtMS4zaC00Ljl2OC43aDQuOGMxLjQsMCwyLjUtMC40LDMuMi0xLjENCgljMC43LTAuNywxLjEtMS43LDEuMS0zQzExOC4yLDI0LjMsMTE3LjgsMjMuMSwxMTcuMSwyMi4zeiIvPg0KPC9zdmc+DQo=)'

  });
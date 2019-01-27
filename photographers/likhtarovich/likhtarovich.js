        var modal = document.getElementById('myModal');
        var btn = document.getElementById("myBtn");
        var vid = document.getElementById("video");

        btn.onclick = function() {
          modal.style.display = "block";
        }
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
            let iframeSrc = vid.src;
		        vid.src = iframeSrc;
          }
        }
        var mymap = L.map('mapid').setView([53.9, 27.56667], 13);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox.streets',
          accessToken: 'pk.eyJ1IjoibW9vcDcwOSIsImEiOiJjanJleGZiMnYwcGt5NGFvZzU0YnZtOHoyIn0.gd2GZzwXsY9IQozLfgVmow'
      }).addTo(mymap);
      var marker = L.marker([53.9, 27.56970]).addTo(mymap);
      marker.bindPopup("Месца творчасці");
        (function(){
          // Vertical Timeline - by CodyHouse.co
        function VerticalTimeline( element ) {
          this.element = element;
          this.blocks = this.element.getElementsByClassName("js-cd-block");
          this.images = this.element.getElementsByClassName("js-cd-img");
          this.contents = this.element.getElementsByClassName("js-cd-content");
          this.offset = 0.8;
          this.hideBlocks();
        };
      
        VerticalTimeline.prototype.hideBlocks = function() {
          //hide timeline blocks which are outside the viewport
          if ( !"classList" in document.documentElement ) {
            return;
          }
          var self = this;
          for( var i = 0; i < this.blocks.length; i++) {
            (function(i){
              if( self.blocks[i].getBoundingClientRect().top > window.innerHeight*self.offset ) {
                self.images[i].classList.add("cd-is-hidden"); 
                self.contents[i].classList.add("cd-is-hidden"); 
              }
            })(i);
          }
        };
      
        VerticalTimeline.prototype.showBlocks = function() {
          if ( ! "classList" in document.documentElement ) {
            return;
          }
          var self = this;
          for( var i = 0; i < this.blocks.length; i++) {
            (function(i){
              if( self.contents[i].classList.contains("cd-is-hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight*self.offset ) {
                // add bounce-in animation
                self.images[i].classList.add("cd-timeline__img--bounce-in");
                self.contents[i].classList.add("cd-timeline__content--bounce-in");
                self.images[i].classList.remove("cd-is-hidden");
                self.contents[i].classList.remove("cd-is-hidden");
              }
            })(i);
          }
        };
      
        var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
          verticalTimelinesArray = [],
          scrolling = false;
        if( verticalTimelines.length > 0 ) {
          for( var i = 0; i < verticalTimelines.length; i++) {
            (function(i){
              verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
            })(i);
          }
      
          //show timeline blocks on scrolling
          window.addEventListener("scroll", function(event) {
            if( !scrolling ) {
              scrolling = true;
              (!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
            }
          });
        }
      
        function checkTimelineScroll() {
          verticalTimelinesArray.forEach(function(timeline){
            timeline.showBlocks();
          });
          scrolling = false;
        };
      })();
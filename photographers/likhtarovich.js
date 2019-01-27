google.charts.load('current', {'packages':['timeline']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var container = document.getElementById('timeline');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();


        dataTable.addColumn({ type: 'string', id: 'President' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows([
          [ 'Родился', new Date(1947, 11, 6 ), new Date(1947, 11, 6 )],
          [ 'Работа ассистентом',  new Date(1965, 2, 4),  new Date(1966, 2, 4) ],
          [ 'Служба в г.Печи',  new Date(1966, 2, 4),  new Date(1968, 2, 4) ],
          [ 'Работа фотографом',  new Date(1969, 2, 4),  new Date(1972, 2, 4) ],
          [ 'Работа фотокорреспондентом',  new Date(1973, 2, 4),  new Date(1974, 2, 4) ],
          [ 'Творческая деятельность',  new Date(1992, 2, 4),  new Date(2019, 2, 4) ]
          
        ]);

        chart.draw(dataTable);
        }

        var modal = document.getElementById('myModal');
        var btn = document.getElementById("myBtn");

        btn.onclick = function() {
          modal.style.display = "block";
        }
        function initMap(){
          var minsk = {lat: 53.90453979999999, lng: 27.561524400000053};
          // The map, centered at Uluru
          var map = new google.maps.Map(
              document.getElementById('myMap'), {zoom: 10, center: minsk});
          // The marker, positioned at Uluru
          var marker = new google.maps.Marker({position: minsk, map: map});

        }
        
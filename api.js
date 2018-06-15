var question;
var layerArray = [];

function toggleChoice(choice){
  if(question.getChoiceValue(choice)){
    question.setChoiceValue(choice,false);
  }
  else question.setChoiceValue(choice, true);
}
function selectnone(){
    $j(".QuestionBody input").prop("checked", false);
    $j(".QuestionBody input").each(function(e){
    debugger;
    var id = this.id;
    var choice = id.split("~")[2];
    if(layerArray[choice] !== undefined){

      map.removeLayer(layerArray[choice]);
      layerArray[choice] = undefined;
    }
  });
}
function selectall(){
    $j(".QuestionBody input").prop("checked", true);
    $j(".QuestionBody input").each(function(e){
    debugger;
    var id = this.id;
    var choice = id.split("~")[2];
    if(layerArray[choice] === undefined){
      var polygon = L.geoJson(json_SFBay_OLUs_v0r1_1.features[choice - 1], {
        style: {
          color: "#000",
          fillColor: "#fff",
          weight: 10,
          opacity: 0.65
        }
      });
      layerArray[choice] = polygon;
      map.addLayer(polygon);
    }
  });
}

Qualtrics.SurveyEngine.addOnload(function()
{
  $j(".QuestionText small").eq(0).after("<div id='toggleLinks'>Select <a href='javascript:selectall()'>All</a> / <a href='javascript:selectnone()'>None</a></div>");
	$j(".QuestionText small").eq(1).parent().before("<div id='toggleLinks'>Select <a href='javascript:selectall()'>All</a> / <a href='javascript:selectnone()'>None</a></div>");
});

Qualtrics.SurveyEngine.addOnReady(function()
{
  question = this;
  var highlightLayer;
        function highlightFeature(e) {
            highlightLayer = e.target;
            highlightLayer.openPopup();
        }
  map = L.map('map', {
      zoomControl:true, maxZoom:11, minZoom:8
  }).fitBounds([[37.129978998053566,-123.7097155817439],[38.43288831108196,-120.88772842993154]]);
  var hash = new L.Hash(map);
  map.attributionControl.addAttribution('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a>');
  var bounds_group = new L.featureGroup([]);
  function setBounds() {
  }
  var overlay_EsriGraylight_0 = L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      opacity: 1.0
  });
  overlay_EsriGraylight_0.addTo(map);
  map.addLayer(overlay_EsriGraylight_0);
  function pop_SFBay_OLUs_v0r1_1(feature, layer) {
      var popupContent = '<table>\
              <tr>\
                  <td colspan="2">' + (feature.properties['Name'] !== null ? Autolinker.link(String(feature.properties['Name'])) : '') + '</td>\
              </tr>\
          </table>';
  layer.on({
        mouseout: function(e) {
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function(feature){
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td>' + (feature.properties['Name'] !== null ? Autolinker.link(String(feature.properties['Name'])) : '') + '</td>\
            </tr>\
        </table>';
  layer.bindPopup(popupContent, {maxHeight: 400});
  layer.on('click',function(e,popupContent){
      optionID = feature.properties['OBJECTID'];
      if(layerArray[feature.properties['OBJECTID']] === undefined){
                var polygon = L.geoJson(feature, {
                style: {
                  color: "#000",
                  fillColor: "#fff",
                  weight: 10,
                  opacity: 0.65
                }
              });
              layerArray[feature.properties['OBJECTID']] = polygon;
              map.addLayer(polygon);
            }
      else {
        map.removeLayer(layerArray[feature.properties['OBJECTID']]);
        layerArray[feature.properties['OBJECTID']] = undefined;
      }
      toggleChoice(optionID);
    });
  }

function style_SFBay_OLUs_v0r1_1_0(feature) {
    switch(String(feature.properties['Name'])) {
        case 'Alameda':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(247,252,245,1.0)',
    }
            break;
        case 'Belmont - Redwood':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(243,251,240,1.0)',
    }
            break;
        case 'Carquinez North':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(238,249,235,1.0)',
    }
            break;
        case 'Carquinez South':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(234,247,229,1.0)',
    }
            break;
        case 'Colma - San Bruno':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(229,245,224,1.0)',
    }
            break;
        case 'Corte Madera':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(221,242,215,1.0)',
    }
            break;
        case 'East Bay Crescent':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(213,239,207,1.0)',
    }
            break;
        case 'Gallinas':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(205,236,199,1.0)',
    }
            break;
        case 'Golden Gate':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(197,233,190,1.0)',
    }
            break;
        case 'Mission - Islais':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(188,228,181,1.0)',
    }
            break;
        case 'Montezuma Slough':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(178,224,171,1.0)',
    }
            break;
        case 'Mowry':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(168,220,162,1.0)',
    }
            break;
        case 'Napa - Sonoma':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(158,216,152,1.0)',
    }
            break;
        case 'Novato':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(146,210,143,1.0)',
    }
            break;
        case 'Petaluma':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(134,205,133,1.0)',
    }
            break;
        case 'Pinole':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(123,200,124,1.0)',
    }
            break;
        case 'Point Richmond':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(111,194,115,1.0)',
    }
            break;
        case 'Port Chicago':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(98,187,109,1.0)',
    }
            break;
        case 'Richardson':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(84,181,103,1.0)',
    }
            break;
        case 'San Francisquito':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(71,174,96,1.0)',
    }
            break;
        case 'San Leandro':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(61,167,90,1.0)',
    }
            break;
        case 'San Lorenzo':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(53,159,84,1.0)',
    }
            break;
        case 'San Mateo':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(45,151,77,1.0)',
    }
            break;
        case 'San Rafael':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(38,142,71,1.0)',
    }
            break;
        case 'Santa Clara Valley':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(29,134,65,1.0)',
    }
            break;
        case 'Stevens':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(19,126,58,1.0)',
    }
            break;
        case 'Suisun Slough':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(9,117,51,1.0)',
    }
            break;
        case 'Walnut':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,109,44,1.0)',
    }
            break;
        case 'Wildcat':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,95,38,1.0)',
    }
            break;
        case 'Yosemite - Visitacion':
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,81,32,1.0)',
    }
            break;
        default:
            return {
        pane: 'pane_SFBay_OLUs_v0r1_1',
        opacity: 1,
        color: 'rgba(247,247,247,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,68,27,1.0)',
    }
            break;
    }
  }
  map.createPane('pane_SFBay_OLUs_v0r1_1');
  map.getPane('pane_SFBay_OLUs_v0r1_1').style.zIndex = 401;
  map.getPane('pane_SFBay_OLUs_v0r1_1').style['mix-blend-mode'] = 'normal';
  var layer_SFBay_OLUs_v0r1_1 = new L.geoJson(json_SFBay_OLUs_v0r1_1, {
      attribution: '<a href=""></a>',
      pane: 'pane_SFBay_OLUs_v0r1_1',
      onEachFeature: pop_SFBay_OLUs_v0r1_1,
      style: style_SFBay_OLUs_v0r1_1_0,
  });
  bounds_group.addLayer(layer_SFBay_OLUs_v0r1_1);
  map.addLayer(layer_SFBay_OLUs_v0r1_1);
  setBounds();
  map.setZoom(9)

  $j("#" + this.questionId + " input:checkbox[id^='QR\\~"+ this.questionId + "\\~']").change(function(e){
    var id = e.target.id;
    var choice = id.split("~")[2];
    if(layerArray[choice] === undefined){
      var polygon = L.geoJson(json_SFBay_OLUs_v0r1_1.features[choice - 1], {
        style: {
          color: "#000",
          fillColor: "#fff",
          weight: 10,
          opacity: 0.65
        }
      });
      layerArray[choice] = polygon;
      map.addLayer(polygon);
    }
    else {
      map.removeLayer(layerArray[choice]);
      layerArray[choice] = undefined;
    }
  });

  for(var i=0, len=this.getSelectedChoices().length; i<len; i++){
    var choice = this.getSelectedChoices()[i];
    if(layerArray[choice] === undefined){
      var polygon = L.geoJson(json_SFBay_OLUs_v0r1_1.features[choice - 1], {
        style: {
          color: "#000",
          fillColor: "#fff",
          weight: 10,
          opacity: 0.65
        }
      });
      layerArray[choice] = polygon;
      map.addLayer(polygon);
    }
  }
});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});

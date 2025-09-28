var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'GoogleMaps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_line_2 = new ol.format.GeoJSON();
var features_line_2 = format_line_2.readFeatures(json_line_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_line_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_line_2.addFeatures(features_line_2);
var lyr_line_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_line_2, 
                style: style_line_2,
                popuplayertitle: 'line',
                interactive: true,
                title: '<img src="styles/legend/line_2.png" /> line'
            });
var format_poi_3 = new ol.format.GeoJSON();
var features_poi_3 = format_poi_3.readFeatures(json_poi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poi_3.addFeatures(features_poi_3);
var lyr_poi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poi_3, 
                style: style_poi_3,
                popuplayertitle: 'poi',
                interactive: true,
                title: '<img src="styles/legend/poi_3.png" /> poi'
            });
var format_fastoche_4 = new ol.format.GeoJSON();
var features_fastoche_4 = format_fastoche_4.readFeatures(json_fastoche_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fastoche_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fastoche_4.addFeatures(features_fastoche_4);
var lyr_fastoche_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fastoche_4, 
                style: style_fastoche_4,
                popuplayertitle: 'fastoche',
                interactive: true,
    title: 'fastoche<br />\
    <img src="styles/legend/fastoche_4_0.png" /> orga<br />\
    <img src="styles/legend/fastoche_4_1.png" /> stand<br />\
    <img src="styles/legend/fastoche_4_2.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_line_2.setVisible(true);lyr_poi_3.setVisible(true);lyr_fastoche_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleMaps_1,lyr_line_2,lyr_poi_3,lyr_fastoche_4];
lyr_line_2.set('fieldAliases', {'fid': 'fid', 'nom': 'nom', });
lyr_poi_3.set('fieldAliases', {'fid': 'fid', 'nom': 'nom', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_fastoche_4.set('fieldAliases', {'fid': 'fid', 'nom': 'nom', 'surface': 'surface', 'type': 'type', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_line_2.set('fieldImages', {'fid': 'TextEdit', 'nom': 'Range', });
lyr_poi_3.set('fieldImages', {'fid': 'TextEdit', 'nom': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_fastoche_4.set('fieldImages', {'fid': 'TextEdit', 'nom': 'TextEdit', 'surface': 'TextEdit', 'type': 'ValueMap', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_line_2.set('fieldLabels', {'fid': 'hidden field', 'nom': 'hidden field', });
lyr_poi_3.set('fieldLabels', {'fid': 'hidden field', 'nom': 'inline label - always visible', });
lyr_fastoche_4.set('fieldLabels', {'fid': 'hidden field', 'nom': 'inline label - always visible', 'surface': 'hidden field', 'type': 'inline label - always visible', });
lyr_fastoche_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
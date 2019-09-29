var wms_layers = [];


        var lyr_Googlestreet_0 = new ol.layer.Tile({
            'title': 'Google street',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PROVINCIAS_1 = new ol.format.GeoJSON();
var features_PROVINCIAS_1 = format_PROVINCIAS_1.readFeatures(json_PROVINCIAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROVINCIAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROVINCIAS_1.addFeatures(features_PROVINCIAS_1);
var lyr_PROVINCIAS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROVINCIAS_1, 
                style: style_PROVINCIAS_1,
                interactive: false,
                title: '<img src="styles/legend/PROVINCIAS_1.png" /> PROVINCIAS'
            });
var format_MINASCO_2 = new ol.format.GeoJSON();
var features_MINASCO_2 = format_MINASCO_2.readFeatures(json_MINASCO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MINASCO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINASCO_2.addFeatures(features_MINASCO_2);
var lyr_MINASCO_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MINASCO_2, 
                style: style_MINASCO_2,
                interactive: true,
                title: '<img src="styles/legend/MINASCO_2.png" /> MINAS CO'
            });
var format_MANIFESTACIONESCO_3 = new ol.format.GeoJSON();
var features_MANIFESTACIONESCO_3 = format_MANIFESTACIONESCO_3.readFeatures(json_MANIFESTACIONESCO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANIFESTACIONESCO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANIFESTACIONESCO_3.addFeatures(features_MANIFESTACIONESCO_3);
var lyr_MANIFESTACIONESCO_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MANIFESTACIONESCO_3, 
                style: style_MANIFESTACIONESCO_3,
                interactive: true,
                title: '<img src="styles/legend/MANIFESTACIONESCO_3.png" /> MANIFESTACIONES CO'
            });
var format_CATEOSCO_4 = new ol.format.GeoJSON();
var features_CATEOSCO_4 = format_CATEOSCO_4.readFeatures(json_CATEOSCO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CATEOSCO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CATEOSCO_4.addFeatures(features_CATEOSCO_4);
var lyr_CATEOSCO_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CATEOSCO_4, 
                style: style_CATEOSCO_4,
                interactive: true,
                title: '<img src="styles/legend/CATEOSCO_4.png" /> CATEOS CO'
            });
var format_CANTERASCO_5 = new ol.format.GeoJSON();
var features_CANTERASCO_5 = format_CANTERASCO_5.readFeatures(json_CANTERASCO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CANTERASCO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CANTERASCO_5.addFeatures(features_CANTERASCO_5);
var lyr_CANTERASCO_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CANTERASCO_5, 
                style: style_CANTERASCO_5,
                interactive: true,
                title: '<img src="styles/legend/CANTERASCO_5.png" /> CANTERAS CO'
            });

lyr_Googlestreet_0.setVisible(true);lyr_PROVINCIAS_1.setVisible(true);lyr_MINASCO_2.setVisible(true);lyr_MANIFESTACIONESCO_3.setVisible(true);lyr_CATEOSCO_4.setVisible(true);lyr_CANTERASCO_5.setVisible(true);
var layersList = [lyr_Googlestreet_0,lyr_PROVINCIAS_1,lyr_MINASCO_2,lyr_MANIFESTACIONESCO_3,lyr_CATEOSCO_4,lyr_CANTERASCO_5];
lyr_PROVINCIAS_1.set('fieldAliases', {'Objeto': 'Objeto', 'FNA': 'FNA', 'GNA': 'GNA', 'NAM': 'NAM', 'SAG': 'SAG', });
lyr_MINASCO_2.set('fieldAliases', {'id': 'id', 'expediente': 'expediente', 'nombre': 'nombre', 'mineral': 'mineral', 'estado_leg': 'estado_leg', 'titular': 'titular', 'propietari': 'propietari', 'ruami nro': 'ruami nro', });
lyr_MANIFESTACIONESCO_3.set('fieldAliases', {'id': 'id', 'expediente': 'expediente', 'nombre': 'nombre', 'mineral': 'mineral', 'estado_leg': 'estado_leg', 'titular': 'titular', 'propietari': 'propietari', 'ruami nro': 'ruami nro', 'razon soci': 'razon soci', });
lyr_CATEOSCO_4.set('fieldAliases', {'id': 'id', 'expediente': 'expediente', 'estado_leg': 'estado_leg', 'titular': 'titular', 'nombre': 'nombre', 'mineral': 'mineral', });
lyr_CANTERASCO_5.set('fieldAliases', {'id': 'id', 'titular': 'titular', 'nombre': 'nombre', 'mineral': 'mineral', 'producto': 'producto', 'expediente': 'expediente', });
lyr_PROVINCIAS_1.set('fieldImages', {'Objeto': 'TextEdit', 'FNA': 'TextEdit', 'GNA': 'TextEdit', 'NAM': 'TextEdit', 'SAG': 'TextEdit', });
lyr_MINASCO_2.set('fieldImages', {'id': 'TextEdit', 'expediente': 'TextEdit', 'nombre': 'TextEdit', 'mineral': 'TextEdit', 'estado_leg': 'TextEdit', 'titular': 'TextEdit', 'propietari': 'TextEdit', 'ruami nro': 'TextEdit', });
lyr_MANIFESTACIONESCO_3.set('fieldImages', {'id': 'TextEdit', 'expediente': 'TextEdit', 'nombre': 'TextEdit', 'mineral': 'TextEdit', 'estado_leg': 'TextEdit', 'titular': 'TextEdit', 'propietari': 'TextEdit', 'ruami nro': 'TextEdit', 'razon soci': 'TextEdit', });
lyr_CATEOSCO_4.set('fieldImages', {'id': 'TextEdit', 'expediente': 'TextEdit', 'estado_leg': 'TextEdit', 'titular': 'TextEdit', 'nombre': 'TextEdit', 'mineral': 'TextEdit', });
lyr_CANTERASCO_5.set('fieldImages', {'id': 'TextEdit', 'titular': 'TextEdit', 'nombre': 'TextEdit', 'mineral': 'TextEdit', 'producto': 'TextEdit', 'expediente': 'TextEdit', });
lyr_PROVINCIAS_1.set('fieldLabels', {'Objeto': 'no label', 'FNA': 'no label', 'GNA': 'no label', 'NAM': 'no label', 'SAG': 'no label', });
lyr_MINASCO_2.set('fieldLabels', {'id': 'no label', 'expediente': 'header label', 'nombre': 'inline label', 'mineral': 'inline label', 'estado_leg': 'inline label', 'titular': 'inline label', 'propietari': 'inline label', 'ruami nro': 'inline label', });
lyr_MANIFESTACIONESCO_3.set('fieldLabels', {'id': 'no label', 'expediente': 'header label', 'nombre': 'inline label', 'mineral': 'inline label', 'estado_leg': 'inline label', 'titular': 'inline label', 'propietari': 'inline label', 'ruami nro': 'inline label', 'razon soci': 'inline label', });
lyr_CATEOSCO_4.set('fieldLabels', {'id': 'no label', 'expediente': 'header label', 'estado_leg': 'inline label', 'titular': 'inline label', 'nombre': 'inline label', 'mineral': 'inline label', });
lyr_CANTERASCO_5.set('fieldLabels', {'id': 'no label', 'titular': 'inline label', 'nombre': 'inline label', 'mineral': 'inline label', 'producto': 'inline label', 'expediente': 'header label', });
lyr_CANTERASCO_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
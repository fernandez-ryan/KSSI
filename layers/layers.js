var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIWorldImagery_1 = new ol.layer.Tile({
            'title': 'ESRI World Imagery ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_DEM_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "DEM",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DEM_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13382788.306983, 1674622.414207, 13383815.240960, 1675179.191108]
                            })
                        });
var format_Sounding_3 = new ol.format.GeoJSON();
var features_Sounding_3 = format_Sounding_3.readFeatures(json_Sounding_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sounding_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sounding_3.addFeatures(features_Sounding_3);
var lyr_Sounding_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sounding_3, 
                style: style_Sounding_3,
                interactive: true,
                title: 'Sounding'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_ESRIWorldImagery_1.setVisible(true);lyr_DEM_2.setVisible(true);lyr_Sounding_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_ESRIWorldImagery_1,lyr_DEM_2,lyr_Sounding_3];
lyr_Sounding_3.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', });
lyr_Sounding_3.set('fieldImages', {'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', });
lyr_Sounding_3.set('fieldLabels', {'field_1': 'header label', 'field_2': 'header label', 'field_3': 'header label', });
lyr_Sounding_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_StudyArea_1 = new ol.format.GeoJSON();
var features_StudyArea_1 = format_StudyArea_1.readFeatures(json_StudyArea_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StudyArea_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StudyArea_1.addFeatures(features_StudyArea_1);
var lyr_StudyArea_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StudyArea_1, 
                style: style_StudyArea_1,
                popuplayertitle: 'StudyArea',
                interactive: true,
                title: '<img src="styles/legend/StudyArea_1.png" /> StudyArea'
            });
var format_Properties_2 = new ol.format.GeoJSON();
var features_Properties_2 = format_Properties_2.readFeatures(json_Properties_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Properties_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Properties_2.addFeatures(features_Properties_2);
var lyr_Properties_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Properties_2, 
                style: style_Properties_2,
                popuplayertitle: 'Properties',
                interactive: true,
                title: '<img src="styles/legend/Properties_2.png" /> Properties'
            });

lyr_OSMStandard_0.setVisible(true);lyr_StudyArea_1.setVisible(true);lyr_Properties_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_StudyArea_1,lyr_Properties_2];
lyr_StudyArea_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Properties_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SG26 Code': 'SG26 Code', 'ISIS Key': 'ISIS Key', 'Addr No': 'Addr No', 'Address No Suffix': 'Address No Suffix', 'Street Name': 'Street Name', 'Street Name Type': 'Street Name Type', 'Official Suburb Name': 'Official Suburb Name', 'Allotment Name': 'Allotment Name', 'Legal Status SG': 'Legal Status SG', 'Property Number': 'Property Number', 'Zoning Description': 'Zoning Description', 'SUB_CNCL_NMBR': 'SUB_CNCL_NMBR', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'Cadastral Record': 'Cadastral Record', 'Deeds Record': 'Deeds Record', });
lyr_StudyArea_1.set('fieldImages', {'OBJECTID': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Properties_2.set('fieldImages', {'OBJECTID': 'Range', 'SG26 Code': 'TextEdit', 'ISIS Key': 'Range', 'Addr No': 'Range', 'Address No Suffix': 'TextEdit', 'Street Name': 'TextEdit', 'Street Name Type': 'TextEdit', 'Official Suburb Name': 'TextEdit', 'Allotment Name': 'TextEdit', 'Legal Status SG': 'TextEdit', 'Property Number': 'TextEdit', 'Zoning Description': 'TextEdit', 'SUB_CNCL_NMBR': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Cadastral Record': 'TextEdit', 'Deeds Record': 'TextEdit', });
lyr_StudyArea_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Properties_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'SG26 Code': 'header label - always visible', 'ISIS Key': 'hidden field', 'Addr No': 'header label - always visible', 'Address No Suffix': 'hidden field', 'Street Name': 'header label - always visible', 'Street Name Type': 'hidden field', 'Official Suburb Name': 'header label - always visible', 'Allotment Name': 'hidden field', 'Legal Status SG': 'hidden field', 'Property Number': 'header label - always visible', 'Zoning Description': 'header label - always visible', 'SUB_CNCL_NMBR': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', 'Cadastral Record': 'header label - always visible', 'Deeds Record': 'header label - always visible', });
lyr_Properties_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
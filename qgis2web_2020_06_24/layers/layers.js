var wms_layers = [];

var format_cerveceria_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_49_26_0 = new ol.format.GeoJSON();
var features_cerveceria_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_49_26_0 = format_cerveceria_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_49_26_0.readFeatures(json_cerveceria_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_49_26_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cerveceria_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_49_26_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cerveceria_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_49_26_0.addFeatures(features_cerveceria_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_49_26_0);
var lyr_cerveceria_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_49_26_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cerveceria_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_49_26_0, 
                style: style_cerveceria_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_49_26_0,
                interactive: true,
                title: '<img src="styles/legend/cerveceria_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_49_26_0.png" /> cerveceria_UMTS_ Best RSCP - Multi-Tech Default, Outdoor, Carrier1 from 2020-06-15 09_49_26'
            });
var format_cotoca_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_53_34_1 = new ol.format.GeoJSON();
var features_cotoca_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_53_34_1 = format_cotoca_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_53_34_1.readFeatures(json_cotoca_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_53_34_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cotoca_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_53_34_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cotoca_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_53_34_1.addFeatures(features_cotoca_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_53_34_1);
var lyr_cotoca_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_53_34_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cotoca_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_53_34_1, 
                style: style_cotoca_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_53_34_1,
                interactive: true,
                title: '<img src="styles/legend/cotoca_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_53_34_1.png" /> cotoca_UMTS_ Best RSCP - Multi-Tech Default, Outdoor, Carrier1 from 2020-06-15 09_53_34'
            });

lyr_cerveceria_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_49_26_0.setVisible(true);lyr_cotoca_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_53_34_1.setVisible(true);
var layersList = [lyr_cerveceria_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_49_26_0,lyr_cotoca_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_53_34_1];
lyr_cerveceria_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_49_26_0.set('fieldAliases', {'Float': 'Float', 'String': 'String', });
lyr_cotoca_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_53_34_1.set('fieldAliases', {'Float': 'Float', 'String': 'String', });
lyr_cerveceria_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_49_26_0.set('fieldImages', {'Float': '', 'String': '', });
lyr_cotoca_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_53_34_1.set('fieldImages', {'Float': '', 'String': '', });
lyr_cerveceria_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_49_26_0.set('fieldLabels', {'Float': 'no label', 'String': 'no label', });
lyr_cotoca_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_53_34_1.set('fieldLabels', {'Float': 'no label', 'String': 'no label', });
lyr_cotoca_UMTS_BestRSCPMultiTechDefaultOutdoorCarrier1from2020061509_53_34_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
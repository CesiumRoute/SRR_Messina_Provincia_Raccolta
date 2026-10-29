var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_1 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_ZONEUcria_2 = new ol.format.GeoJSON();
var features_ZONEUcria_2 = format_ZONEUcria_2.readFeatures(json_ZONEUcria_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEUcria_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEUcria_2.addFeatures(features_ZONEUcria_2);
var lyr_ZONEUcria_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEUcria_2, 
                style: style_ZONEUcria_2,
                popuplayertitle: 'ZONE Ucria',
                interactive: true,
    title: 'ZONE Ucria<br />\
    <img src="styles/legend/ZONEUcria_2_0.png" /> Zona 1<br />' });
var format_ZONETusa_3 = new ol.format.GeoJSON();
var features_ZONETusa_3 = format_ZONETusa_3.readFeatures(json_ZONETusa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONETusa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONETusa_3.addFeatures(features_ZONETusa_3);
var lyr_ZONETusa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONETusa_3, 
                style: style_ZONETusa_3,
                popuplayertitle: 'ZONE Tusa',
                interactive: true,
    title: 'ZONE Tusa<br />\
    <img src="styles/legend/ZONETusa_3_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONETusa_3_1.png" /> Zona 2<br />' });
var format_ZONETripi_4 = new ol.format.GeoJSON();
var features_ZONETripi_4 = format_ZONETripi_4.readFeatures(json_ZONETripi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONETripi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONETripi_4.addFeatures(features_ZONETripi_4);
var lyr_ZONETripi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONETripi_4, 
                style: style_ZONETripi_4,
                popuplayertitle: 'ZONE Tripi',
                interactive: true,
    title: 'ZONE Tripi<br />\
    <img src="styles/legend/ZONETripi_4_0.png" /> Zona 1<br />' });
var format_ZONETortorici_5 = new ol.format.GeoJSON();
var features_ZONETortorici_5 = format_ZONETortorici_5.readFeatures(json_ZONETortorici_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONETortorici_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONETortorici_5.addFeatures(features_ZONETortorici_5);
var lyr_ZONETortorici_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONETortorici_5, 
                style: style_ZONETortorici_5,
                popuplayertitle: 'ZONE Tortorici',
                interactive: true,
    title: 'ZONE Tortorici<br />\
    <img src="styles/legend/ZONETortorici_5_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONETortorici_5_1.png" /> Zona 2<br />\
    <img src="styles/legend/ZONETortorici_5_2.png" /> Zona 3<br />' });
var format_ZONETorrenova_6 = new ol.format.GeoJSON();
var features_ZONETorrenova_6 = format_ZONETorrenova_6.readFeatures(json_ZONETorrenova_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONETorrenova_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONETorrenova_6.addFeatures(features_ZONETorrenova_6);
var lyr_ZONETorrenova_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONETorrenova_6, 
                style: style_ZONETorrenova_6,
                popuplayertitle: 'ZONE Torrenova',
                interactive: true,
    title: 'ZONE Torrenova<br />\
    <img src="styles/legend/ZONETorrenova_6_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONETorrenova_6_1.png" /> Zona 2<br />\
    <img src="styles/legend/ZONETorrenova_6_2.png" /> Zona 3<br />' });
var format_ZONESinagra_7 = new ol.format.GeoJSON();
var features_ZONESinagra_7 = format_ZONESinagra_7.readFeatures(json_ZONESinagra_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONESinagra_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONESinagra_7.addFeatures(features_ZONESinagra_7);
var lyr_ZONESinagra_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONESinagra_7, 
                style: style_ZONESinagra_7,
                popuplayertitle: 'ZONE Sinagra',
                interactive: true,
    title: 'ZONE Sinagra<br />\
    <img src="styles/legend/ZONESinagra_7_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONESinagra_7_1.png" /> Zona 2<br />' });
var format_ZONESantoStefanodiCamastra_8 = new ol.format.GeoJSON();
var features_ZONESantoStefanodiCamastra_8 = format_ZONESantoStefanodiCamastra_8.readFeatures(json_ZONESantoStefanodiCamastra_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONESantoStefanodiCamastra_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONESantoStefanodiCamastra_8.addFeatures(features_ZONESantoStefanodiCamastra_8);
var lyr_ZONESantoStefanodiCamastra_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONESantoStefanodiCamastra_8, 
                style: style_ZONESantoStefanodiCamastra_8,
                popuplayertitle: 'ZONE Santo Stefano di Camastra',
                interactive: true,
    title: 'ZONE Santo Stefano di Camastra<br />\
    <img src="styles/legend/ZONESantoStefanodiCamastra_8_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONESantoStefanodiCamastra_8_1.png" /> Zona 2<br />\
    <img src="styles/legend/ZONESantoStefanodiCamastra_8_2.png" /> Zona 3<br />' });
var format_ZONESantAngelodiBrolo_9 = new ol.format.GeoJSON();
var features_ZONESantAngelodiBrolo_9 = format_ZONESantAngelodiBrolo_9.readFeatures(json_ZONESantAngelodiBrolo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONESantAngelodiBrolo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONESantAngelodiBrolo_9.addFeatures(features_ZONESantAngelodiBrolo_9);
var lyr_ZONESantAngelodiBrolo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONESantAngelodiBrolo_9, 
                style: style_ZONESantAngelodiBrolo_9,
                popuplayertitle: 'ZONE Sant\'Angelo di Brolo',
                interactive: true,
    title: 'ZONE Sant\'Angelo di Brolo<br />\
    <img src="styles/legend/ZONESantAngelodiBrolo_9_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONESantAngelodiBrolo_9_1.png" /> Zona 2<br />' });
var format_ZONESantAgatadiMilitello_10 = new ol.format.GeoJSON();
var features_ZONESantAgatadiMilitello_10 = format_ZONESantAgatadiMilitello_10.readFeatures(json_ZONESantAgatadiMilitello_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONESantAgatadiMilitello_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONESantAgatadiMilitello_10.addFeatures(features_ZONESantAgatadiMilitello_10);
var lyr_ZONESantAgatadiMilitello_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONESantAgatadiMilitello_10, 
                style: style_ZONESantAgatadiMilitello_10,
                popuplayertitle: 'ZONE Sant\'Agata di Militello',
                interactive: true,
    title: 'ZONE Sant\'Agata di Militello<br />\
    <img src="styles/legend/ZONESantAgatadiMilitello_10_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONESantAgatadiMilitello_10_1.png" /> Zona 2<br />\
    <img src="styles/legend/ZONESantAgatadiMilitello_10_2.png" /> Zona 3<br />\
    <img src="styles/legend/ZONESantAgatadiMilitello_10_3.png" /> Zona 4<br />\
    <img src="styles/legend/ZONESantAgatadiMilitello_10_4.png" /> Zona 5<br />\
    <img src="styles/legend/ZONESantAgatadiMilitello_10_5.png" /> Zona 6<br />' });
var format_ZONESantaDomenicaVittoria_11 = new ol.format.GeoJSON();
var features_ZONESantaDomenicaVittoria_11 = format_ZONESantaDomenicaVittoria_11.readFeatures(json_ZONESantaDomenicaVittoria_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONESantaDomenicaVittoria_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONESantaDomenicaVittoria_11.addFeatures(features_ZONESantaDomenicaVittoria_11);
var lyr_ZONESantaDomenicaVittoria_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONESantaDomenicaVittoria_11, 
                style: style_ZONESantaDomenicaVittoria_11,
                popuplayertitle: 'ZONE Santa Domenica Vittoria',
                interactive: true,
    title: 'ZONE Santa Domenica Vittoria<br />\
    <img src="styles/legend/ZONESantaDomenicaVittoria_11_0.png" /> Zona 1<br />' });
var format_ZONESanTeodoro_12 = new ol.format.GeoJSON();
var features_ZONESanTeodoro_12 = format_ZONESanTeodoro_12.readFeatures(json_ZONESanTeodoro_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONESanTeodoro_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONESanTeodoro_12.addFeatures(features_ZONESanTeodoro_12);
var lyr_ZONESanTeodoro_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONESanTeodoro_12, 
                style: style_ZONESanTeodoro_12,
                popuplayertitle: 'ZONE San Teodoro',
                interactive: true,
    title: 'ZONE San Teodoro<br />\
    <img src="styles/legend/ZONESanTeodoro_12_0.png" /> Zona 1<br />' });
var format_ZONESanSalvatorediFitalia_13 = new ol.format.GeoJSON();
var features_ZONESanSalvatorediFitalia_13 = format_ZONESanSalvatorediFitalia_13.readFeatures(json_ZONESanSalvatorediFitalia_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONESanSalvatorediFitalia_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONESanSalvatorediFitalia_13.addFeatures(features_ZONESanSalvatorediFitalia_13);
var lyr_ZONESanSalvatorediFitalia_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONESanSalvatorediFitalia_13, 
                style: style_ZONESanSalvatorediFitalia_13,
                popuplayertitle: 'ZONE San Salvatore di Fitalia',
                interactive: true,
    title: 'ZONE San Salvatore di Fitalia<br />\
    <img src="styles/legend/ZONESanSalvatorediFitalia_13_0.png" /> Zona 1<br />' });
var format_ZONESanPieroPatti_14 = new ol.format.GeoJSON();
var features_ZONESanPieroPatti_14 = format_ZONESanPieroPatti_14.readFeatures(json_ZONESanPieroPatti_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONESanPieroPatti_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONESanPieroPatti_14.addFeatures(features_ZONESanPieroPatti_14);
var lyr_ZONESanPieroPatti_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONESanPieroPatti_14, 
                style: style_ZONESanPieroPatti_14,
                popuplayertitle: 'ZONE San Piero Patti',
                interactive: true,
    title: 'ZONE San Piero Patti<br />\
    <img src="styles/legend/ZONESanPieroPatti_14_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONESanPieroPatti_14_1.png" /> Zona 2<br />' });
var format_ZONESanMarcodAlunzio_15 = new ol.format.GeoJSON();
var features_ZONESanMarcodAlunzio_15 = format_ZONESanMarcodAlunzio_15.readFeatures(json_ZONESanMarcodAlunzio_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONESanMarcodAlunzio_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONESanMarcodAlunzio_15.addFeatures(features_ZONESanMarcodAlunzio_15);
var lyr_ZONESanMarcodAlunzio_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONESanMarcodAlunzio_15, 
                style: style_ZONESanMarcodAlunzio_15,
                popuplayertitle: 'ZONE San Marco d\'Alunzio',
                interactive: true,
    title: 'ZONE San Marco d\'Alunzio<br />\
    <img src="styles/legend/ZONESanMarcodAlunzio_15_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONESanMarcodAlunzio_15_1.png" /> Zona 2<br />' });
var format_ZONESanFratello_16 = new ol.format.GeoJSON();
var features_ZONESanFratello_16 = format_ZONESanFratello_16.readFeatures(json_ZONESanFratello_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONESanFratello_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONESanFratello_16.addFeatures(features_ZONESanFratello_16);
var lyr_ZONESanFratello_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONESanFratello_16, 
                style: style_ZONESanFratello_16,
                popuplayertitle: 'ZONE San Fratello',
                interactive: true,
    title: 'ZONE San Fratello<br />\
    <img src="styles/legend/ZONESanFratello_16_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONESanFratello_16_1.png" /> Zona 2<br />' });
var format_ZONERodMilici_17 = new ol.format.GeoJSON();
var features_ZONERodMilici_17 = format_ZONERodMilici_17.readFeatures(json_ZONERodMilici_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONERodMilici_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONERodMilici_17.addFeatures(features_ZONERodMilici_17);
var lyr_ZONERodMilici_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONERodMilici_17, 
                style: style_ZONERodMilici_17,
                popuplayertitle: 'ZONE Rodì Milici',
                interactive: true,
    title: 'ZONE Rodì Milici<br />\
    <img src="styles/legend/ZONERodMilici_17_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONERodMilici_17_1.png" /> Zona 2<br />' });
var format_ZONERoccellaValdemone_18 = new ol.format.GeoJSON();
var features_ZONERoccellaValdemone_18 = format_ZONERoccellaValdemone_18.readFeatures(json_ZONERoccellaValdemone_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONERoccellaValdemone_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONERoccellaValdemone_18.addFeatures(features_ZONERoccellaValdemone_18);
var lyr_ZONERoccellaValdemone_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONERoccellaValdemone_18, 
                style: style_ZONERoccellaValdemone_18,
                popuplayertitle: 'ZONE Roccella Valdemone',
                interactive: true,
    title: 'ZONE Roccella Valdemone<br />\
    <img src="styles/legend/ZONERoccellaValdemone_18_0.png" /> Zona 1<br />' });
var format_ZONEReitano_19 = new ol.format.GeoJSON();
var features_ZONEReitano_19 = format_ZONEReitano_19.readFeatures(json_ZONEReitano_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEReitano_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEReitano_19.addFeatures(features_ZONEReitano_19);
var lyr_ZONEReitano_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEReitano_19, 
                style: style_ZONEReitano_19,
                popuplayertitle: 'ZONE Reitano',
                interactive: true,
    title: 'ZONE Reitano<br />\
    <img src="styles/legend/ZONEReitano_19_0.png" /> Zona 1<br />' });
var format_ZONERaccuja_20 = new ol.format.GeoJSON();
var features_ZONERaccuja_20 = format_ZONERaccuja_20.readFeatures(json_ZONERaccuja_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONERaccuja_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONERaccuja_20.addFeatures(features_ZONERaccuja_20);
var lyr_ZONERaccuja_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONERaccuja_20, 
                style: style_ZONERaccuja_20,
                popuplayertitle: 'ZONE Raccuja',
                interactive: true,
    title: 'ZONE Raccuja<br />\
    <img src="styles/legend/ZONERaccuja_20_0.png" /> Zona 1<br />' });
var format_ZONEPiraino_21 = new ol.format.GeoJSON();
var features_ZONEPiraino_21 = format_ZONEPiraino_21.readFeatures(json_ZONEPiraino_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEPiraino_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEPiraino_21.addFeatures(features_ZONEPiraino_21);
var lyr_ZONEPiraino_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEPiraino_21, 
                style: style_ZONEPiraino_21,
                popuplayertitle: 'ZONE Piraino',
                interactive: true,
    title: 'ZONE Piraino<br />\
    <img src="styles/legend/ZONEPiraino_21_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONEPiraino_21_1.png" /> Zona 2<br />' });
var format_ZONEPettineo_22 = new ol.format.GeoJSON();
var features_ZONEPettineo_22 = format_ZONEPettineo_22.readFeatures(json_ZONEPettineo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEPettineo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEPettineo_22.addFeatures(features_ZONEPettineo_22);
var lyr_ZONEPettineo_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEPettineo_22, 
                style: style_ZONEPettineo_22,
                popuplayertitle: 'ZONE Pettineo',
                interactive: true,
    title: 'ZONE Pettineo<br />\
    <img src="styles/legend/ZONEPettineo_22_0.png" /> Zona 1<br />' });
var format_ZONEPatti_23 = new ol.format.GeoJSON();
var features_ZONEPatti_23 = format_ZONEPatti_23.readFeatures(json_ZONEPatti_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEPatti_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEPatti_23.addFeatures(features_ZONEPatti_23);
var lyr_ZONEPatti_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEPatti_23, 
                style: style_ZONEPatti_23,
                popuplayertitle: 'ZONE Patti',
                interactive: true,
    title: 'ZONE Patti<br />\
    <img src="styles/legend/ZONEPatti_23_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONEPatti_23_1.png" /> Zona 2<br />\
    <img src="styles/legend/ZONEPatti_23_2.png" /> Zona 3<br />\
    <img src="styles/legend/ZONEPatti_23_3.png" /> Zona 4<br />\
    <img src="styles/legend/ZONEPatti_23_4.png" /> Zona 5<br />\
    <img src="styles/legend/ZONEPatti_23_5.png" /> Zona 6<br />\
    <img src="styles/legend/ZONEPatti_23_6.png" /> Zona 7<br />' });
var format_ZONEOliveri_24 = new ol.format.GeoJSON();
var features_ZONEOliveri_24 = format_ZONEOliveri_24.readFeatures(json_ZONEOliveri_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEOliveri_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEOliveri_24.addFeatures(features_ZONEOliveri_24);
var lyr_ZONEOliveri_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEOliveri_24, 
                style: style_ZONEOliveri_24,
                popuplayertitle: 'ZONE Oliveri',
                interactive: true,
    title: 'ZONE Oliveri<br />\
    <img src="styles/legend/ZONEOliveri_24_0.png" /> Zona 1<br />' });
var format_ZONENovaradiSicilia_25 = new ol.format.GeoJSON();
var features_ZONENovaradiSicilia_25 = format_ZONENovaradiSicilia_25.readFeatures(json_ZONENovaradiSicilia_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONENovaradiSicilia_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONENovaradiSicilia_25.addFeatures(features_ZONENovaradiSicilia_25);
var lyr_ZONENovaradiSicilia_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONENovaradiSicilia_25, 
                style: style_ZONENovaradiSicilia_25,
                popuplayertitle: 'ZONE Novara di Sicilia',
                interactive: true,
    title: 'ZONE Novara di Sicilia<br />\
    <img src="styles/legend/ZONENovaradiSicilia_25_0.png" /> Zona 1<br />' });
var format_ZONENaso_26 = new ol.format.GeoJSON();
var features_ZONENaso_26 = format_ZONENaso_26.readFeatures(json_ZONENaso_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONENaso_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONENaso_26.addFeatures(features_ZONENaso_26);
var lyr_ZONENaso_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONENaso_26, 
                style: style_ZONENaso_26,
                popuplayertitle: 'ZONE Naso',
                interactive: true,
    title: 'ZONE Naso<br />\
    <img src="styles/legend/ZONENaso_26_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONENaso_26_1.png" /> Zona 2<br />\
    <img src="styles/legend/ZONENaso_26_2.png" /> Zona 3<br />' });
var format_ZONEMottadAffermo_27 = new ol.format.GeoJSON();
var features_ZONEMottadAffermo_27 = format_ZONEMottadAffermo_27.readFeatures(json_ZONEMottadAffermo_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEMottadAffermo_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEMottadAffermo_27.addFeatures(features_ZONEMottadAffermo_27);
var lyr_ZONEMottadAffermo_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEMottadAffermo_27, 
                style: style_ZONEMottadAffermo_27,
                popuplayertitle: 'ZONE Motta d\'Affermo',
                interactive: true,
    title: 'ZONE Motta d\'Affermo<br />\
    <img src="styles/legend/ZONEMottadAffermo_27_0.png" /> Zona 1<br />' });
var format_ZONEMottaCamastra_28 = new ol.format.GeoJSON();
var features_ZONEMottaCamastra_28 = format_ZONEMottaCamastra_28.readFeatures(json_ZONEMottaCamastra_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEMottaCamastra_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEMottaCamastra_28.addFeatures(features_ZONEMottaCamastra_28);
var lyr_ZONEMottaCamastra_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEMottaCamastra_28, 
                style: style_ZONEMottaCamastra_28,
                popuplayertitle: 'ZONE Motta Camastra',
                interactive: true,
    title: 'ZONE Motta Camastra<br />\
    <img src="styles/legend/ZONEMottaCamastra_28_0.png" /> Zona 1<br />' });
var format_ZONEMontalbanoElicona_29 = new ol.format.GeoJSON();
var features_ZONEMontalbanoElicona_29 = format_ZONEMontalbanoElicona_29.readFeatures(json_ZONEMontalbanoElicona_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEMontalbanoElicona_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEMontalbanoElicona_29.addFeatures(features_ZONEMontalbanoElicona_29);
var lyr_ZONEMontalbanoElicona_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEMontalbanoElicona_29, 
                style: style_ZONEMontalbanoElicona_29,
                popuplayertitle: 'ZONE Montalbano Elicona',
                interactive: true,
    title: 'ZONE Montalbano Elicona<br />\
    <img src="styles/legend/ZONEMontalbanoElicona_29_0.png" /> ZONA 1<br />\
    <img src="styles/legend/ZONEMontalbanoElicona_29_1.png" /> ZONA 2<br />' });
var format_ZONEMontagnareale_30 = new ol.format.GeoJSON();
var features_ZONEMontagnareale_30 = format_ZONEMontagnareale_30.readFeatures(json_ZONEMontagnareale_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEMontagnareale_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEMontagnareale_30.addFeatures(features_ZONEMontagnareale_30);
var lyr_ZONEMontagnareale_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEMontagnareale_30, 
                style: style_ZONEMontagnareale_30,
                popuplayertitle: 'ZONE Montagnareale',
                interactive: true,
    title: 'ZONE Montagnareale<br />\
    <img src="styles/legend/ZONEMontagnareale_30_0.png" /> Zona 1<br />' });
var format_ZONEMoioAlcantara_31 = new ol.format.GeoJSON();
var features_ZONEMoioAlcantara_31 = format_ZONEMoioAlcantara_31.readFeatures(json_ZONEMoioAlcantara_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEMoioAlcantara_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEMoioAlcantara_31.addFeatures(features_ZONEMoioAlcantara_31);
var lyr_ZONEMoioAlcantara_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEMoioAlcantara_31, 
                style: style_ZONEMoioAlcantara_31,
                popuplayertitle: 'ZONE Moio Alcantara',
                interactive: true,
    title: 'ZONE Moio Alcantara<br />\
    <img src="styles/legend/ZONEMoioAlcantara_31_0.png" /> Zona 1<br />' });
var format_ZONEMistretta_32 = new ol.format.GeoJSON();
var features_ZONEMistretta_32 = format_ZONEMistretta_32.readFeatures(json_ZONEMistretta_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEMistretta_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEMistretta_32.addFeatures(features_ZONEMistretta_32);
var lyr_ZONEMistretta_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEMistretta_32, 
                style: style_ZONEMistretta_32,
                popuplayertitle: 'ZONE Mistretta',
                interactive: true,
    title: 'ZONE Mistretta<br />\
    <img src="styles/legend/ZONEMistretta_32_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONEMistretta_32_1.png" /> Zona 2<br />\
    <img src="styles/legend/ZONEMistretta_32_2.png" /> Zona 3<br />' });
var format_ZONEMirto_33 = new ol.format.GeoJSON();
var features_ZONEMirto_33 = format_ZONEMirto_33.readFeatures(json_ZONEMirto_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEMirto_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEMirto_33.addFeatures(features_ZONEMirto_33);
var lyr_ZONEMirto_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEMirto_33, 
                style: style_ZONEMirto_33,
                popuplayertitle: 'ZONE Mirto',
                interactive: true,
    title: 'ZONE Mirto<br />\
    <img src="styles/legend/ZONEMirto_33_0.png" /> Zona 1<br />' });
var format_ZONEMilitelloRosmarino_34 = new ol.format.GeoJSON();
var features_ZONEMilitelloRosmarino_34 = format_ZONEMilitelloRosmarino_34.readFeatures(json_ZONEMilitelloRosmarino_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEMilitelloRosmarino_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEMilitelloRosmarino_34.addFeatures(features_ZONEMilitelloRosmarino_34);
var lyr_ZONEMilitelloRosmarino_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEMilitelloRosmarino_34, 
                style: style_ZONEMilitelloRosmarino_34,
                popuplayertitle: 'ZONE Militello Rosmarino',
                interactive: true,
    title: 'ZONE Militello Rosmarino<br />\
    <img src="styles/legend/ZONEMilitelloRosmarino_34_0.png" /> Zona 1<br />' });
var format_ZONEMazzarrSantAndrea_35 = new ol.format.GeoJSON();
var features_ZONEMazzarrSantAndrea_35 = format_ZONEMazzarrSantAndrea_35.readFeatures(json_ZONEMazzarrSantAndrea_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEMazzarrSantAndrea_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEMazzarrSantAndrea_35.addFeatures(features_ZONEMazzarrSantAndrea_35);
var lyr_ZONEMazzarrSantAndrea_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEMazzarrSantAndrea_35, 
                style: style_ZONEMazzarrSantAndrea_35,
                popuplayertitle: 'ZONE Mazzarrà Sant\'Andrea',
                interactive: true,
    title: 'ZONE Mazzarrà Sant\'Andrea<br />\
    <img src="styles/legend/ZONEMazzarrSantAndrea_35_0.png" /> Zona 1<br />' });
var format_ZONEMalvagna_36 = new ol.format.GeoJSON();
var features_ZONEMalvagna_36 = format_ZONEMalvagna_36.readFeatures(json_ZONEMalvagna_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEMalvagna_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEMalvagna_36.addFeatures(features_ZONEMalvagna_36);
var lyr_ZONEMalvagna_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEMalvagna_36, 
                style: style_ZONEMalvagna_36,
                popuplayertitle: 'ZONE Malvagna',
                interactive: true,
    title: 'ZONE Malvagna<br />\
    <img src="styles/legend/ZONEMalvagna_36_0.png" /> Zona 1<br />' });
var format_ZONELongi_37 = new ol.format.GeoJSON();
var features_ZONELongi_37 = format_ZONELongi_37.readFeatures(json_ZONELongi_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONELongi_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONELongi_37.addFeatures(features_ZONELongi_37);
var lyr_ZONELongi_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONELongi_37, 
                style: style_ZONELongi_37,
                popuplayertitle: 'ZONE Longi',
                interactive: true,
    title: 'ZONE Longi<br />\
    <img src="styles/legend/ZONELongi_37_0.png" /> Zona 1<br />' });
var format_ZONELibrizzi_38 = new ol.format.GeoJSON();
var features_ZONELibrizzi_38 = format_ZONELibrizzi_38.readFeatures(json_ZONELibrizzi_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONELibrizzi_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONELibrizzi_38.addFeatures(features_ZONELibrizzi_38);
var lyr_ZONELibrizzi_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONELibrizzi_38, 
                style: style_ZONELibrizzi_38,
                popuplayertitle: 'ZONE Librizzi',
                interactive: true,
    title: 'ZONE Librizzi<br />\
    <img src="styles/legend/ZONELibrizzi_38_0.png" /> Zona 1<br />' });
var format_ZONEGraniti_39 = new ol.format.GeoJSON();
var features_ZONEGraniti_39 = format_ZONEGraniti_39.readFeatures(json_ZONEGraniti_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEGraniti_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEGraniti_39.addFeatures(features_ZONEGraniti_39);
var lyr_ZONEGraniti_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEGraniti_39, 
                style: style_ZONEGraniti_39,
                popuplayertitle: 'ZONE Graniti',
                interactive: true,
    title: 'ZONE Graniti<br />\
    <img src="styles/legend/ZONEGraniti_39_0.png" /> Zona 1<br />' });
var format_ZONEGioiosaMarea_40 = new ol.format.GeoJSON();
var features_ZONEGioiosaMarea_40 = format_ZONEGioiosaMarea_40.readFeatures(json_ZONEGioiosaMarea_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEGioiosaMarea_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEGioiosaMarea_40.addFeatures(features_ZONEGioiosaMarea_40);
var lyr_ZONEGioiosaMarea_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEGioiosaMarea_40, 
                style: style_ZONEGioiosaMarea_40,
                popuplayertitle: 'ZONE Gioiosa Marea',
                interactive: true,
    title: 'ZONE Gioiosa Marea<br />\
    <img src="styles/legend/ZONEGioiosaMarea_40_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONEGioiosaMarea_40_1.png" /> Zona 2<br />\
    <img src="styles/legend/ZONEGioiosaMarea_40_2.png" /> Zona 3<br />' });
var format_ZONEGalatiMamertino_41 = new ol.format.GeoJSON();
var features_ZONEGalatiMamertino_41 = format_ZONEGalatiMamertino_41.readFeatures(json_ZONEGalatiMamertino_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEGalatiMamertino_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEGalatiMamertino_41.addFeatures(features_ZONEGalatiMamertino_41);
var lyr_ZONEGalatiMamertino_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEGalatiMamertino_41, 
                style: style_ZONEGalatiMamertino_41,
                popuplayertitle: 'ZONE Galati Mamertino',
                interactive: true,
    title: 'ZONE Galati Mamertino<br />\
    <img src="styles/legend/ZONEGalatiMamertino_41_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONEGalatiMamertino_41_1.png" /> Zona 2<br />' });
var format_ZONEFrazzan_42 = new ol.format.GeoJSON();
var features_ZONEFrazzan_42 = format_ZONEFrazzan_42.readFeatures(json_ZONEFrazzan_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEFrazzan_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEFrazzan_42.addFeatures(features_ZONEFrazzan_42);
var lyr_ZONEFrazzan_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEFrazzan_42, 
                style: style_ZONEFrazzan_42,
                popuplayertitle: 'ZONE Frazzanò',
                interactive: true,
    title: 'ZONE Frazzanò<br />\
    <img src="styles/legend/ZONEFrazzan_42_0.png" /> Zona 1<br />' });
var format_ZONEFrancavilladiSicilia_43 = new ol.format.GeoJSON();
var features_ZONEFrancavilladiSicilia_43 = format_ZONEFrancavilladiSicilia_43.readFeatures(json_ZONEFrancavilladiSicilia_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEFrancavilladiSicilia_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEFrancavilladiSicilia_43.addFeatures(features_ZONEFrancavilladiSicilia_43);
var lyr_ZONEFrancavilladiSicilia_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEFrancavilladiSicilia_43, 
                style: style_ZONEFrancavilladiSicilia_43,
                popuplayertitle: 'ZONE Francavilla di Sicilia',
                interactive: true,
    title: 'ZONE Francavilla di Sicilia<br />\
    <img src="styles/legend/ZONEFrancavilladiSicilia_43_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONEFrancavilladiSicilia_43_1.png" /> Zona 2<br />' });
var format_ZONEFondachelliFantina_44 = new ol.format.GeoJSON();
var features_ZONEFondachelliFantina_44 = format_ZONEFondachelliFantina_44.readFeatures(json_ZONEFondachelliFantina_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEFondachelliFantina_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEFondachelliFantina_44.addFeatures(features_ZONEFondachelliFantina_44);
var lyr_ZONEFondachelliFantina_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEFondachelliFantina_44, 
                style: style_ZONEFondachelliFantina_44,
                popuplayertitle: 'ZONE Fondachelli-Fantina',
                interactive: true,
    title: 'ZONE Fondachelli-Fantina<br />\
    <img src="styles/legend/ZONEFondachelliFantina_44_0.png" /> Zona 1<br />' });
var format_ZONEFloresta_45 = new ol.format.GeoJSON();
var features_ZONEFloresta_45 = format_ZONEFloresta_45.readFeatures(json_ZONEFloresta_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEFloresta_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEFloresta_45.addFeatures(features_ZONEFloresta_45);
var lyr_ZONEFloresta_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEFloresta_45, 
                style: style_ZONEFloresta_45,
                popuplayertitle: 'ZONE Floresta',
                interactive: true,
    title: 'ZONE Floresta<br />\
    <img src="styles/legend/ZONEFloresta_45_0.png" /> Zona 1<br />' });
var format_ZONEFalcone_46 = new ol.format.GeoJSON();
var features_ZONEFalcone_46 = format_ZONEFalcone_46.readFeatures(json_ZONEFalcone_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEFalcone_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEFalcone_46.addFeatures(features_ZONEFalcone_46);
var lyr_ZONEFalcone_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEFalcone_46, 
                style: style_ZONEFalcone_46,
                popuplayertitle: 'ZONE Falcone',
                interactive: true,
    title: 'ZONE Falcone<br />\
    <img src="styles/legend/ZONEFalcone_46_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONEFalcone_46_1.png" /> Zona 2<br />' });
var format_ZONEFicarra_47 = new ol.format.GeoJSON();
var features_ZONEFicarra_47 = format_ZONEFicarra_47.readFeatures(json_ZONEFicarra_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEFicarra_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEFicarra_47.addFeatures(features_ZONEFicarra_47);
var lyr_ZONEFicarra_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEFicarra_47, 
                style: style_ZONEFicarra_47,
                popuplayertitle: 'ZONE Ficarra',
                interactive: true,
    title: 'ZONE Ficarra<br />\
    <img src="styles/legend/ZONEFicarra_47_0.png" /> Zona 1<br />' });
var format_ZONECesar_48 = new ol.format.GeoJSON();
var features_ZONECesar_48 = format_ZONECesar_48.readFeatures(json_ZONECesar_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONECesar_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONECesar_48.addFeatures(features_ZONECesar_48);
var lyr_ZONECesar_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONECesar_48, 
                style: style_ZONECesar_48,
                popuplayertitle: 'ZONE Cesarò',
                interactive: true,
    title: 'ZONE Cesarò<br />\
    <img src="styles/legend/ZONECesar_48_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONECesar_48_1.png" /> Zona 2<br />' });
var format_ZONECastellUmberto_49 = new ol.format.GeoJSON();
var features_ZONECastellUmberto_49 = format_ZONECastellUmberto_49.readFeatures(json_ZONECastellUmberto_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONECastellUmberto_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONECastellUmberto_49.addFeatures(features_ZONECastellUmberto_49);
var lyr_ZONECastellUmberto_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONECastellUmberto_49, 
                style: style_ZONECastellUmberto_49,
                popuplayertitle: 'ZONE Castell\'Umberto',
                interactive: true,
    title: 'ZONE Castell\'Umberto<br />\
    <img src="styles/legend/ZONECastellUmberto_49_0.png" /> Zona 1<br />' });
var format_ZONECasteldiLucio_50 = new ol.format.GeoJSON();
var features_ZONECasteldiLucio_50 = format_ZONECasteldiLucio_50.readFeatures(json_ZONECasteldiLucio_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONECasteldiLucio_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONECasteldiLucio_50.addFeatures(features_ZONECasteldiLucio_50);
var lyr_ZONECasteldiLucio_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONECasteldiLucio_50, 
                style: style_ZONECasteldiLucio_50,
                popuplayertitle: 'ZONE Castel di Lucio',
                interactive: true,
    title: 'ZONE Castel di Lucio<br />\
    <img src="styles/legend/ZONECasteldiLucio_50_0.png" /> Zona 1<br />' });
var format_ZONECaronia_51 = new ol.format.GeoJSON();
var features_ZONECaronia_51 = format_ZONECaronia_51.readFeatures(json_ZONECaronia_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONECaronia_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONECaronia_51.addFeatures(features_ZONECaronia_51);
var lyr_ZONECaronia_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONECaronia_51, 
                style: style_ZONECaronia_51,
                popuplayertitle: 'ZONE Caronia',
                interactive: true,
    title: 'ZONE Caronia<br />\
    <img src="styles/legend/ZONECaronia_51_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONECaronia_51_1.png" /> Zona 2<br />\
    <img src="styles/legend/ZONECaronia_51_2.png" /> Zona 3<br />' });
var format_ZONECapriLeone_52 = new ol.format.GeoJSON();
var features_ZONECapriLeone_52 = format_ZONECapriLeone_52.readFeatures(json_ZONECapriLeone_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONECapriLeone_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONECapriLeone_52.addFeatures(features_ZONECapriLeone_52);
var lyr_ZONECapriLeone_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONECapriLeone_52, 
                style: style_ZONECapriLeone_52,
                popuplayertitle: 'ZONE Capri Leone',
                interactive: true,
    title: 'ZONE Capri Leone<br />\
    <img src="styles/legend/ZONECapriLeone_52_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONECapriLeone_52_1.png" /> Zona 2<br />\
    <img src="styles/legend/ZONECapriLeone_52_2.png" /> Zona 3<br />' });
var format_ZONECapodOrlando_53 = new ol.format.GeoJSON();
var features_ZONECapodOrlando_53 = format_ZONECapodOrlando_53.readFeatures(json_ZONECapodOrlando_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONECapodOrlando_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONECapodOrlando_53.addFeatures(features_ZONECapodOrlando_53);
var lyr_ZONECapodOrlando_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONECapodOrlando_53, 
                style: style_ZONECapodOrlando_53,
                popuplayertitle: 'ZONE Capo d\'Orlando',
                interactive: true,
    title: 'ZONE Capo d\'Orlando<br />\
    <img src="styles/legend/ZONECapodOrlando_53_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONECapodOrlando_53_1.png" /> Zona 2<br />\
    <img src="styles/legend/ZONECapodOrlando_53_2.png" /> Zona 3<br />\
    <img src="styles/legend/ZONECapodOrlando_53_3.png" /> Zona 4<br />\
    <img src="styles/legend/ZONECapodOrlando_53_4.png" /> Zona 5<br />\
    <img src="styles/legend/ZONECapodOrlando_53_5.png" /> Zona 6<br />\
    <img src="styles/legend/ZONECapodOrlando_53_6.png" /> Zona 7<br />' });
var format_ZoneCapizzi_54 = new ol.format.GeoJSON();
var features_ZoneCapizzi_54 = format_ZoneCapizzi_54.readFeatures(json_ZoneCapizzi_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZoneCapizzi_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneCapizzi_54.addFeatures(features_ZoneCapizzi_54);
var lyr_ZoneCapizzi_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneCapizzi_54, 
                style: style_ZoneCapizzi_54,
                popuplayertitle: 'Zone Capizzi',
                interactive: true,
    title: 'Zone Capizzi<br />\
    <img src="styles/legend/ZoneCapizzi_54_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZoneCapizzi_54_1.png" /> Zona 2<br />' });
var format_ZONEBrolo_55 = new ol.format.GeoJSON();
var features_ZONEBrolo_55 = format_ZONEBrolo_55.readFeatures(json_ZONEBrolo_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEBrolo_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEBrolo_55.addFeatures(features_ZONEBrolo_55);
var lyr_ZONEBrolo_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEBrolo_55, 
                style: style_ZONEBrolo_55,
                popuplayertitle: 'ZONE Brolo',
                interactive: true,
    title: 'ZONE Brolo<br />\
    <img src="styles/legend/ZONEBrolo_55_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONEBrolo_55_1.png" /> Zona 2<br />\
    <img src="styles/legend/ZONEBrolo_55_2.png" /> Zona 3<br />' });
var format_ZONEBasic_56 = new ol.format.GeoJSON();
var features_ZONEBasic_56 = format_ZONEBasic_56.readFeatures(json_ZONEBasic_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEBasic_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEBasic_56.addFeatures(features_ZONEBasic_56);
var lyr_ZONEBasic_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEBasic_56, 
                style: style_ZONEBasic_56,
                popuplayertitle: 'ZONE Basicò',
                interactive: true,
    title: 'ZONE Basicò<br />\
    <img src="styles/legend/ZONEBasic_56_0.png" /> Zona 1<br />' });
var format_ZONEAlcaraliFusi_57 = new ol.format.GeoJSON();
var features_ZONEAlcaraliFusi_57 = format_ZONEAlcaraliFusi_57.readFeatures(json_ZONEAlcaraliFusi_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEAlcaraliFusi_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEAlcaraliFusi_57.addFeatures(features_ZONEAlcaraliFusi_57);
var lyr_ZONEAlcaraliFusi_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEAlcaraliFusi_57, 
                style: style_ZONEAlcaraliFusi_57,
                popuplayertitle: 'ZONE Alcara li Fusi',
                interactive: true,
    title: 'ZONE Alcara li Fusi<br />\
    <img src="styles/legend/ZONEAlcaraliFusi_57_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONEAlcaraliFusi_57_1.png" /> Zona 2<br />' });
var format_ZONEAcquedolci_58 = new ol.format.GeoJSON();
var features_ZONEAcquedolci_58 = format_ZONEAcquedolci_58.readFeatures(json_ZONEAcquedolci_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONEAcquedolci_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONEAcquedolci_58.addFeatures(features_ZONEAcquedolci_58);
var lyr_ZONEAcquedolci_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONEAcquedolci_58, 
                style: style_ZONEAcquedolci_58,
                popuplayertitle: 'ZONE Acquedolci',
                interactive: true,
    title: 'ZONE Acquedolci<br />\
    <img src="styles/legend/ZONEAcquedolci_58_0.png" /> Zona 1<br />\
    <img src="styles/legend/ZONEAcquedolci_58_1.png" /> Zona 2<br />\
    <img src="styles/legend/ZONEAcquedolci_58_2.png" /> Zona 3<br />' });
var format_limiti57comuni_59 = new ol.format.GeoJSON();
var features_limiti57comuni_59 = format_limiti57comuni_59.readFeatures(json_limiti57comuni_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limiti57comuni_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limiti57comuni_59.addFeatures(features_limiti57comuni_59);
var lyr_limiti57comuni_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limiti57comuni_59, 
                style: style_limiti57comuni_59,
                popuplayertitle: 'limiti 57 comuni',
                interactive: true,
                title: '<img src="styles/legend/limiti57comuni_59.png" /> limiti 57 comuni'
            });
var group_Acquedolci = new ol.layer.Group({
                                layers: [lyr_ZONEAcquedolci_58,],
                                fold: 'close',
                                title: 'Acquedolci'});
var group_AlcaraliFusi = new ol.layer.Group({
                                layers: [lyr_ZONEAlcaraliFusi_57,],
                                fold: 'close',
                                title: 'Alcara li Fusi'});
var group_Basic = new ol.layer.Group({
                                layers: [lyr_ZONEBasic_56,],
                                fold: 'close',
                                title: 'Basicò'});
var group_Brolo = new ol.layer.Group({
                                layers: [lyr_ZONEBrolo_55,],
                                fold: 'close',
                                title: 'Brolo'});
var group_Capizzi = new ol.layer.Group({
                                layers: [lyr_ZoneCapizzi_54,],
                                fold: 'close',
                                title: 'Capizzi'});
var group_CapodOrlando = new ol.layer.Group({
                                layers: [lyr_ZONECapodOrlando_53,],
                                fold: 'close',
                                title: 'Capo d\'Orlando'});
var group_CapriLeone = new ol.layer.Group({
                                layers: [lyr_ZONECapriLeone_52,],
                                fold: 'close',
                                title: 'Capri Leone'});
var group_Caronia = new ol.layer.Group({
                                layers: [lyr_ZONECaronia_51,],
                                fold: 'close',
                                title: 'Caronia'});
var group_CasteldiLucio = new ol.layer.Group({
                                layers: [lyr_ZONECasteldiLucio_50,],
                                fold: 'close',
                                title: 'Castel di Lucio'});
var group_CastellUmberto = new ol.layer.Group({
                                layers: [lyr_ZONECastellUmberto_49,],
                                fold: 'close',
                                title: 'Castell\'Umberto'});
var group_Cesar = new ol.layer.Group({
                                layers: [lyr_ZONECesar_48,],
                                fold: 'close',
                                title: 'Cesarò'});
var group_Ficarra = new ol.layer.Group({
                                layers: [lyr_ZONEFicarra_47,],
                                fold: 'close',
                                title: 'Ficarra'});
var group_Falcone = new ol.layer.Group({
                                layers: [lyr_ZONEFalcone_46,],
                                fold: 'close',
                                title: 'Falcone'});
var group_Floresta = new ol.layer.Group({
                                layers: [lyr_ZONEFloresta_45,],
                                fold: 'close',
                                title: 'Floresta'});
var group_FondachelliFantina = new ol.layer.Group({
                                layers: [lyr_ZONEFondachelliFantina_44,],
                                fold: 'close',
                                title: 'Fondachelli-Fantina'});
var group_FrancavilladiSicilia = new ol.layer.Group({
                                layers: [lyr_ZONEFrancavilladiSicilia_43,],
                                fold: 'close',
                                title: 'Francavilla di Sicilia'});
var group_Frazzan = new ol.layer.Group({
                                layers: [lyr_ZONEFrazzan_42,],
                                fold: 'close',
                                title: 'Frazzanò'});
var group_GalatiMamertino = new ol.layer.Group({
                                layers: [lyr_ZONEGalatiMamertino_41,],
                                fold: 'close',
                                title: 'Galati Mamertino'});
var group_GioiosaMarea = new ol.layer.Group({
                                layers: [lyr_ZONEGioiosaMarea_40,],
                                fold: 'close',
                                title: 'Gioiosa Marea'});
var group_Graniti = new ol.layer.Group({
                                layers: [lyr_ZONEGraniti_39,],
                                fold: 'close',
                                title: 'Graniti'});
var group_Librizzi = new ol.layer.Group({
                                layers: [lyr_ZONELibrizzi_38,],
                                fold: 'close',
                                title: 'Librizzi'});
var group_Longi = new ol.layer.Group({
                                layers: [lyr_ZONELongi_37,],
                                fold: 'close',
                                title: 'Longi'});
var group_Malvagna = new ol.layer.Group({
                                layers: [lyr_ZONEMalvagna_36,],
                                fold: 'close',
                                title: 'Malvagna'});
var group_Mazzarr = new ol.layer.Group({
                                layers: [lyr_ZONEMazzarrSantAndrea_35,],
                                fold: 'close',
                                title: 'Mazzarrà'});
var group_MilitelloRosmarino = new ol.layer.Group({
                                layers: [lyr_ZONEMilitelloRosmarino_34,],
                                fold: 'close',
                                title: 'Militello Rosmarino'});
var group_Mirto = new ol.layer.Group({
                                layers: [lyr_ZONEMirto_33,],
                                fold: 'close',
                                title: 'Mirto'});
var group_Mistretta = new ol.layer.Group({
                                layers: [lyr_ZONEMistretta_32,],
                                fold: 'close',
                                title: 'Mistretta'});
var group_MoioAlcantara = new ol.layer.Group({
                                layers: [lyr_ZONEMoioAlcantara_31,],
                                fold: 'close',
                                title: 'Moio Alcantara'});
var group_Montagnareale = new ol.layer.Group({
                                layers: [lyr_ZONEMontagnareale_30,],
                                fold: 'close',
                                title: 'Montagnareale'});
var group_MonralbanoElicona = new ol.layer.Group({
                                layers: [lyr_ZONEMontalbanoElicona_29,],
                                fold: 'close',
                                title: 'Monralbano Elicona'});
var group_MottaCamastra = new ol.layer.Group({
                                layers: [lyr_ZONEMottaCamastra_28,],
                                fold: 'close',
                                title: 'Motta Camastra'});
var group_MottadAffermo = new ol.layer.Group({
                                layers: [lyr_ZONEMottadAffermo_27,],
                                fold: 'close',
                                title: 'Motta d\'Affermo'});
var group_Naso = new ol.layer.Group({
                                layers: [lyr_ZONENaso_26,],
                                fold: 'close',
                                title: 'Naso'});
var group_NovaradiSicilia = new ol.layer.Group({
                                layers: [lyr_ZONENovaradiSicilia_25,],
                                fold: 'close',
                                title: 'Novara di Sicilia'});
var group_Oliveri = new ol.layer.Group({
                                layers: [lyr_ZONEOliveri_24,],
                                fold: 'close',
                                title: 'Oliveri'});
var group_Patti = new ol.layer.Group({
                                layers: [lyr_ZONEPatti_23,],
                                fold: 'close',
                                title: 'Patti'});
var group_Pettineo = new ol.layer.Group({
                                layers: [lyr_ZONEPettineo_22,],
                                fold: 'close',
                                title: 'Pettineo'});
var group_Piraino = new ol.layer.Group({
                                layers: [lyr_ZONEPiraino_21,],
                                fold: 'close',
                                title: 'Piraino'});
var group_Raccuja = new ol.layer.Group({
                                layers: [lyr_ZONERaccuja_20,],
                                fold: 'close',
                                title: 'Raccuja'});
var group_Reitano = new ol.layer.Group({
                                layers: [lyr_ZONEReitano_19,],
                                fold: 'close',
                                title: 'Reitano'});
var group_RoccellaValdemone = new ol.layer.Group({
                                layers: [lyr_ZONERoccellaValdemone_18,],
                                fold: 'close',
                                title: 'Roccella Valdemone'});
var group_RodMilici = new ol.layer.Group({
                                layers: [lyr_ZONERodMilici_17,],
                                fold: 'close',
                                title: 'Rodì Milici'});
var group_SanFratello = new ol.layer.Group({
                                layers: [lyr_ZONESanFratello_16,],
                                fold: 'close',
                                title: 'San Fratello'});
var group_SanMarcodAlunzio = new ol.layer.Group({
                                layers: [lyr_ZONESanMarcodAlunzio_15,],
                                fold: 'close',
                                title: 'San Marco d\'Alunzio'});
var group_SanPieroPatti = new ol.layer.Group({
                                layers: [lyr_ZONESanPieroPatti_14,],
                                fold: 'close',
                                title: 'San Piero Patti'});
var group_SanSalvatorediFitalia = new ol.layer.Group({
                                layers: [lyr_ZONESanSalvatorediFitalia_13,],
                                fold: 'close',
                                title: 'San Salvatore di Fitalia'});
var group_SanTeodoro = new ol.layer.Group({
                                layers: [lyr_ZONESanTeodoro_12,],
                                fold: 'close',
                                title: 'San Teodoro'});
var group_SantaDomenicaVittoria = new ol.layer.Group({
                                layers: [lyr_ZONESantaDomenicaVittoria_11,],
                                fold: 'close',
                                title: 'Santa Domenica Vittoria'});
var group_SantAgatadiMilitello = new ol.layer.Group({
                                layers: [lyr_ZONESantAgatadiMilitello_10,],
                                fold: 'close',
                                title: 'Sant\'Agata di Militello'});
var group_SantAngelodiBrolo = new ol.layer.Group({
                                layers: [lyr_ZONESantAngelodiBrolo_9,],
                                fold: 'close',
                                title: 'Sant\'Angelo di Brolo'});
var group_SantoStefanodiCamastra = new ol.layer.Group({
                                layers: [lyr_ZONESantoStefanodiCamastra_8,],
                                fold: 'close',
                                title: 'Santo Stefano di Camastra'});
var group_Sinagra = new ol.layer.Group({
                                layers: [lyr_ZONESinagra_7,],
                                fold: 'close',
                                title: 'Sinagra'});
var group_Torrenova = new ol.layer.Group({
                                layers: [lyr_ZONETorrenova_6,],
                                fold: 'close',
                                title: 'Torrenova'});
var group_Tortorici = new ol.layer.Group({
                                layers: [lyr_ZONETortorici_5,],
                                fold: 'close',
                                title: 'Tortorici'});
var group_Tripi = new ol.layer.Group({
                                layers: [lyr_ZONETripi_4,],
                                fold: 'close',
                                title: 'Tripi'});
var group_Tusa = new ol.layer.Group({
                                layers: [lyr_ZONETusa_3,],
                                fold: 'close',
                                title: 'Tusa'});
var group_Ucria = new ol.layer.Group({
                                layers: [lyr_ZONEUcria_2,],
                                fold: 'close',
                                title: 'Ucria'});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleLabels_1.setVisible(false);lyr_ZONEUcria_2.setVisible(true);lyr_ZONETusa_3.setVisible(true);lyr_ZONETripi_4.setVisible(true);lyr_ZONETortorici_5.setVisible(true);lyr_ZONETorrenova_6.setVisible(true);lyr_ZONESinagra_7.setVisible(true);lyr_ZONESantoStefanodiCamastra_8.setVisible(true);lyr_ZONESantAngelodiBrolo_9.setVisible(true);lyr_ZONESantAgatadiMilitello_10.setVisible(true);lyr_ZONESantaDomenicaVittoria_11.setVisible(true);lyr_ZONESanTeodoro_12.setVisible(true);lyr_ZONESanSalvatorediFitalia_13.setVisible(true);lyr_ZONESanPieroPatti_14.setVisible(true);lyr_ZONESanMarcodAlunzio_15.setVisible(true);lyr_ZONESanFratello_16.setVisible(true);lyr_ZONERodMilici_17.setVisible(true);lyr_ZONERoccellaValdemone_18.setVisible(true);lyr_ZONEReitano_19.setVisible(true);lyr_ZONERaccuja_20.setVisible(true);lyr_ZONEPiraino_21.setVisible(true);lyr_ZONEPettineo_22.setVisible(true);lyr_ZONEPatti_23.setVisible(true);lyr_ZONEOliveri_24.setVisible(true);lyr_ZONENovaradiSicilia_25.setVisible(true);lyr_ZONENaso_26.setVisible(true);lyr_ZONEMottadAffermo_27.setVisible(true);lyr_ZONEMottaCamastra_28.setVisible(true);lyr_ZONEMontalbanoElicona_29.setVisible(true);lyr_ZONEMontagnareale_30.setVisible(true);lyr_ZONEMoioAlcantara_31.setVisible(true);lyr_ZONEMistretta_32.setVisible(true);lyr_ZONEMirto_33.setVisible(true);lyr_ZONEMilitelloRosmarino_34.setVisible(true);lyr_ZONEMazzarrSantAndrea_35.setVisible(true);lyr_ZONEMalvagna_36.setVisible(true);lyr_ZONELongi_37.setVisible(true);lyr_ZONELibrizzi_38.setVisible(true);lyr_ZONEGraniti_39.setVisible(true);lyr_ZONEGioiosaMarea_40.setVisible(true);lyr_ZONEGalatiMamertino_41.setVisible(true);lyr_ZONEFrazzan_42.setVisible(true);lyr_ZONEFrancavilladiSicilia_43.setVisible(true);lyr_ZONEFondachelliFantina_44.setVisible(true);lyr_ZONEFloresta_45.setVisible(true);lyr_ZONEFalcone_46.setVisible(true);lyr_ZONEFicarra_47.setVisible(true);lyr_ZONECesar_48.setVisible(true);lyr_ZONECastellUmberto_49.setVisible(true);lyr_ZONECasteldiLucio_50.setVisible(true);lyr_ZONECaronia_51.setVisible(true);lyr_ZONECapriLeone_52.setVisible(true);lyr_ZONECapodOrlando_53.setVisible(true);lyr_ZoneCapizzi_54.setVisible(true);lyr_ZONEBrolo_55.setVisible(true);lyr_ZONEBasic_56.setVisible(true);lyr_ZONEAlcaraliFusi_57.setVisible(true);lyr_ZONEAcquedolci_58.setVisible(true);lyr_limiti57comuni_59.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleLabels_1,group_Ucria,group_Tusa,group_Tripi,group_Tortorici,group_Torrenova,group_Sinagra,group_SantoStefanodiCamastra,group_SantAngelodiBrolo,group_SantAgatadiMilitello,group_SantaDomenicaVittoria,group_SanTeodoro,group_SanSalvatorediFitalia,group_SanPieroPatti,group_SanMarcodAlunzio,group_SanFratello,group_RodMilici,group_RoccellaValdemone,group_Reitano,group_Raccuja,group_Piraino,group_Pettineo,group_Patti,group_Oliveri,group_NovaradiSicilia,group_Naso,group_MottadAffermo,group_MottaCamastra,group_MonralbanoElicona,group_Montagnareale,group_MoioAlcantara,group_Mistretta,group_Mirto,group_MilitelloRosmarino,group_Mazzarr,group_Malvagna,group_Longi,group_Librizzi,group_Graniti,group_GioiosaMarea,group_GalatiMamertino,group_Frazzan,group_FrancavilladiSicilia,group_FondachelliFantina,group_Floresta,group_Falcone,group_Ficarra,group_Cesar,group_CastellUmberto,group_CasteldiLucio,group_Caronia,group_CapriLeone,group_CapodOrlando,group_Capizzi,group_Brolo,group_Basic,group_AlcaraliFusi,group_Acquedolci,lyr_limiti57comuni_59];
lyr_ZONEUcria_2.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONETusa_3.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONETripi_4.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONETortorici_5.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONETorrenova_6.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONESinagra_7.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONESantoStefanodiCamastra_8.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONESantAngelodiBrolo_9.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONESantAgatadiMilitello_10.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONESantaDomenicaVittoria_11.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONESanTeodoro_12.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONESanSalvatorediFitalia_13.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONESanPieroPatti_14.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONESanMarcodAlunzio_15.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONESanFratello_16.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONERodMilici_17.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'ZONA': 'ZONA', });
lyr_ZONERoccellaValdemone_18.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEReitano_19.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'ZONA': 'ZONA', });
lyr_ZONERaccuja_20.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEPiraino_21.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEPettineo_22.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEPatti_23.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'ZONA': 'ZONA', });
lyr_ZONEOliveri_24.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONENovaradiSicilia_25.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONENaso_26.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'ZONA': 'ZONA', });
lyr_ZONEMottadAffermo_27.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEMottaCamastra_28.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEMontalbanoElicona_29.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEMontagnareale_30.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEMoioAlcantara_31.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEMistretta_32.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEMirto_33.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEMilitelloRosmarino_34.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEMazzarrSantAndrea_35.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEMalvagna_36.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONELongi_37.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'ZONA': 'ZONA', });
lyr_ZONELibrizzi_38.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEGraniti_39.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEGioiosaMarea_40.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEGalatiMamertino_41.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEFrazzan_42.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'ZONA': 'ZONA', });
lyr_ZONEFrancavilladiSicilia_43.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEFondachelliFantina_44.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEFloresta_45.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEFalcone_46.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEFicarra_47.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONECesar_48.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONECastellUmberto_49.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONECasteldiLucio_50.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONECaronia_51.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONECapriLeone_52.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONECapodOrlando_53.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZoneCapizzi_54.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEBrolo_55.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEBasic_56.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_ZONEAlcaraliFusi_57.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', 'AUTOMEZZI': 'AUTOMEZZI', });
lyr_ZONEAcquedolci_58.set('fieldAliases', {'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'COMUNE': 'COMUNE', 'Area_mq': 'Area_mq', 'DENSITA\'': 'DENSITA\'', 'ZONA': 'ZONA', });
lyr_limiti57comuni_59.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', 'COMUNE_A': 'COMUNE_A', 'CC_UTS': 'CC_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Sub-Ambito': 'Sub-Ambito', 'SPAMPA': 'SPAMPA', });
lyr_ZONEUcria_2.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONETusa_3.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONETripi_4.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONETortorici_5.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONETorrenova_6.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONESinagra_7.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONESantoStefanodiCamastra_8.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONESantAngelodiBrolo_9.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONESantAgatadiMilitello_10.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONESantaDomenicaVittoria_11.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONESanTeodoro_12.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONESanSalvatorediFitalia_13.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONESanPieroPatti_14.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONESanMarcodAlunzio_15.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONESanFratello_16.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONERodMilici_17.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONERoccellaValdemone_18.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEReitano_19.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONERaccuja_20.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEPiraino_21.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEPettineo_22.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEPatti_23.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEOliveri_24.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONENovaradiSicilia_25.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONENaso_26.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEMottadAffermo_27.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEMottaCamastra_28.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEMontalbanoElicona_29.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEMontagnareale_30.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEMoioAlcantara_31.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEMistretta_32.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEMirto_33.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEMilitelloRosmarino_34.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEMazzarrSantAndrea_35.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEMalvagna_36.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONELongi_37.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONELibrizzi_38.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEGraniti_39.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEGioiosaMarea_40.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEGalatiMamertino_41.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEFrazzan_42.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEFrancavilladiSicilia_43.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEFondachelliFantina_44.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEFloresta_45.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEFalcone_46.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEFicarra_47.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONECesar_48.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONECastellUmberto_49.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONECasteldiLucio_50.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONECaronia_51.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONECapriLeone_52.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONECapodOrlando_53.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZoneCapizzi_54.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEBrolo_55.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEBasic_56.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ZONEAlcaraliFusi_57.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', 'AUTOMEZZI': 'TextEdit', });
lyr_ZONEAcquedolci_58.set('fieldImages', {'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'COMUNE': 'TextEdit', 'Area_mq': 'TextEdit', 'DENSITA\'': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_limiti57comuni_59.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_CM': 'TextEdit', 'COD_UTS': 'TextEdit', 'PRO_COM': 'TextEdit', 'PRO_COM_T': 'TextEdit', 'COMUNE': 'TextEdit', 'COMUNE_A': 'TextEdit', 'CC_UTS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Sub-Ambito': 'TextEdit', 'SPAMPA': 'TextEdit', });
lyr_ZONEUcria_2.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONETusa_3.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONETripi_4.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONETortorici_5.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONETorrenova_6.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'hidden field', });
lyr_ZONESinagra_7.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONESantoStefanodiCamastra_8.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONESantAngelodiBrolo_9.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONESantAgatadiMilitello_10.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONESantaDomenicaVittoria_11.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONESanTeodoro_12.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONESanSalvatorediFitalia_13.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONESanPieroPatti_14.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONESanMarcodAlunzio_15.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONESanFratello_16.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONERodMilici_17.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'ZONA': 'header label - always visible', });
lyr_ZONERoccellaValdemone_18.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONEReitano_19.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'ZONA': 'header label - always visible', });
lyr_ZONERaccuja_20.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONEPiraino_21.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONEPettineo_22.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONEPatti_23.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'ZONA': 'header label - always visible', });
lyr_ZONEOliveri_24.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONENovaradiSicilia_25.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONENaso_26.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'ZONA': 'header label - always visible', });
lyr_ZONEMottadAffermo_27.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONEMottaCamastra_28.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONEMontalbanoElicona_29.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONEMontagnareale_30.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONEMoioAlcantara_31.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'hidden field', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'hidden field', });
lyr_ZONEMistretta_32.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONEMirto_33.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONEMilitelloRosmarino_34.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONEMazzarrSantAndrea_35.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONEMalvagna_36.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONELongi_37.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'ZONA': 'header label - always visible', });
lyr_ZONELibrizzi_38.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONEGraniti_39.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONEGioiosaMarea_40.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONEGalatiMamertino_41.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONEFrazzan_42.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'ZONA': 'header label - always visible', });
lyr_ZONEFrancavilladiSicilia_43.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONEFondachelliFantina_44.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONEFloresta_45.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONEFalcone_46.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONEFicarra_47.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONECesar_48.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONECastellUmberto_49.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONECasteldiLucio_50.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONECaronia_51.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONECapriLeone_52.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONECapodOrlando_53.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZoneCapizzi_54.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONEBrolo_55.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONEBasic_56.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_ZONEAlcaraliFusi_57.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', 'AUTOMEZZI': 'hidden field', });
lyr_ZONEAcquedolci_58.set('fieldLabels', {'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'COMUNE': 'header label - always visible', 'Area_mq': 'hidden field', 'DENSITA\'': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_limiti57comuni_59.set('fieldLabels', {'COD_RIP': 'hidden field', 'COD_REG': 'hidden field', 'COD_PROV': 'hidden field', 'COD_CM': 'hidden field', 'COD_UTS': 'hidden field', 'PRO_COM': 'hidden field', 'PRO_COM_T': 'hidden field', 'COMUNE': 'header label - always visible', 'COMUNE_A': 'hidden field', 'CC_UTS': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Sub-Ambito': 'hidden field', 'SPAMPA': 'hidden field', });
lyr_limiti57comuni_59.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
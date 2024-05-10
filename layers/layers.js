var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIKEC_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKEC_1 = format_ADMINISTRASIKEC_1.readFeatures(json_ADMINISTRASIKEC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKEC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKEC_1.addFeatures(features_ADMINISTRASIKEC_1);
var lyr_ADMINISTRASIKEC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKEC_1, 
                style: style_ADMINISTRASIKEC_1,
                popuplayertitle: "ADMINISTRASIKEC",
                interactive: false,
    title: 'ADMINISTRASIKEC<br />\
    <img src="styles/legend/ADMINISTRASIKEC_1_0.png" /> GEGER<br />\
    <img src="styles/legend/ADMINISTRASIKEC_1_1.png" /> JIWAN<br />\
    <img src="styles/legend/ADMINISTRASIKEC_1_2.png" /> KARTOHARJO<br />\
    <img src="styles/legend/ADMINISTRASIKEC_1_3.png" /> MADIUN<br />\
    <img src="styles/legend/ADMINISTRASIKEC_1_4.png" /> MANGUNHARJO<br />\
    <img src="styles/legend/ADMINISTRASIKEC_1_5.png" /> SAWAHAN<br />\
    <img src="styles/legend/ADMINISTRASIKEC_1_6.png" /> TAKERAN<br />\
    <img src="styles/legend/ADMINISTRASIKEC_1_7.png" /> TAMAN<br />\
    <img src="styles/legend/ADMINISTRASIKEC_1_8.png" /> WUNGU<br />\
    <img src="styles/legend/ADMINISTRASIKEC_1_9.png" /> <br />'
        });
var format_RSKOTAMADIUNPT_2 = new ol.format.GeoJSON();
var features_RSKOTAMADIUNPT_2 = format_RSKOTAMADIUNPT_2.readFeatures(json_RSKOTAMADIUNPT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSKOTAMADIUNPT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSKOTAMADIUNPT_2.addFeatures(features_RSKOTAMADIUNPT_2);
var lyr_RSKOTAMADIUNPT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSKOTAMADIUNPT_2, 
                style: style_RSKOTAMADIUNPT_2,
                popuplayertitle: "RS KOTA MADIUN PT",
                interactive: true,
                title: '<img src="styles/legend/RSKOTAMADIUNPT_2.png" /> RS KOTA MADIUN PT'
            });
var format_TEMPATIBADAHMADIUN_3 = new ol.format.GeoJSON();
var features_TEMPATIBADAHMADIUN_3 = format_TEMPATIBADAHMADIUN_3.readFeatures(json_TEMPATIBADAHMADIUN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TEMPATIBADAHMADIUN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEMPATIBADAHMADIUN_3.addFeatures(features_TEMPATIBADAHMADIUN_3);
var lyr_TEMPATIBADAHMADIUN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEMPATIBADAHMADIUN_3, 
                style: style_TEMPATIBADAHMADIUN_3,
                popuplayertitle: "TEMPAT IBADAH MADIUN",
                interactive: true,
                title: '<img src="styles/legend/TEMPATIBADAHMADIUN_3.png" /> TEMPAT IBADAH MADIUN'
            });
var format_PENDIDIKAN_4 = new ol.format.GeoJSON();
var features_PENDIDIKAN_4 = format_PENDIDIKAN_4.readFeatures(json_PENDIDIKAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_4.addFeatures(features_PENDIDIKAN_4);
var lyr_PENDIDIKAN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PENDIDIKAN_4, 
                style: style_PENDIDIKAN_4,
                popuplayertitle: "PENDIDIKAN",
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_4.png" /> PENDIDIKAN'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ADMINISTRASIKEC_1.setVisible(true);lyr_RSKOTAMADIUNPT_2.setVisible(true);lyr_TEMPATIBADAHMADIUN_3.setVisible(true);lyr_PENDIDIKAN_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ADMINISTRASIKEC_1,lyr_RSKOTAMADIUNPT_2,lyr_TEMPATIBADAHMADIUN_3,lyr_PENDIDIKAN_4];
lyr_ADMINISTRASIKEC_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RSKOTAMADIUNPT_2.set('fieldAliases', {'NAMA': 'NAMA', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ALAMAT': 'ALAMAT', 'KECAMATAN': 'KECAMATAN', 'WEBSITE': 'WEBSITE', 'NO.TELPON': 'NO.TELPON', 'LOK_FOTO': 'LOK_FOTO', });
lyr_TEMPATIBADAHMADIUN_3.set('fieldAliases', {'NAMA OBJEK': 'NAMA OBJEK', 'KOORDINAT': 'KOORDINAT', 'KOORDINA_1': 'KOORDINA_1', 'ALAMAT': 'ALAMAT', 'TELP': 'TELP', 'BUKA': 'BUKA', });
lyr_PENDIDIKAN_4.set('fieldAliases', {'No': 'No', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Koordinat': 'Koordinat', 'field_5': 'field_5', });
lyr_ADMINISTRASIKEC_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_RSKOTAMADIUNPT_2.set('fieldImages', {'NAMA': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'ALAMAT': 'TextEdit', 'KECAMATAN': 'TextEdit', 'WEBSITE': 'TextEdit', 'NO.TELPON': 'TextEdit', 'LOK_FOTO': 'ExternalResource', });
lyr_TEMPATIBADAHMADIUN_3.set('fieldImages', {'NAMA OBJEK': 'TextEdit', 'KOORDINAT': 'TextEdit', 'KOORDINA_1': 'TextEdit', 'ALAMAT': 'TextEdit', 'TELP': 'TextEdit', 'BUKA': 'TextEdit', });
lyr_PENDIDIKAN_4.set('fieldImages', {'No': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'Koordinat': 'TextEdit', 'field_5': 'TextEdit', });
lyr_ADMINISTRASIKEC_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'hidden field', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_RSKOTAMADIUNPT_2.set('fieldLabels', {'NAMA': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'ALAMAT': 'no label', 'KECAMATAN': 'no label', 'WEBSITE': 'no label', 'NO.TELPON': 'no label', 'LOK_FOTO': 'no label', });
lyr_TEMPATIBADAHMADIUN_3.set('fieldLabels', {'NAMA OBJEK': 'no label', 'KOORDINAT': 'no label', 'KOORDINA_1': 'no label', 'ALAMAT': 'no label', 'TELP': 'no label', 'BUKA': 'no label', });
lyr_PENDIDIKAN_4.set('fieldLabels', {'No': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Koordinat': 'no label', 'field_5': 'no label', });
lyr_PENDIDIKAN_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
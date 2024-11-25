var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SouthKilburnBoundary_1 = new ol.format.GeoJSON();
var features_SouthKilburnBoundary_1 = format_SouthKilburnBoundary_1.readFeatures(json_SouthKilburnBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthKilburnBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SouthKilburnBoundary_1.addFeatures(features_SouthKilburnBoundary_1);
var lyr_SouthKilburnBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SouthKilburnBoundary_1, 
                style: style_SouthKilburnBoundary_1,
                popuplayertitle: "South Kilburn Boundary",
                interactive: false,
                title: '<img src="styles/legend/SouthKilburnBoundary_1.png" /> South Kilburn Boundary'
            });
var format_WoodhouseUrbanPark_2 = new ol.format.GeoJSON();
var features_WoodhouseUrbanPark_2 = format_WoodhouseUrbanPark_2.readFeatures(json_WoodhouseUrbanPark_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WoodhouseUrbanPark_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WoodhouseUrbanPark_2.addFeatures(features_WoodhouseUrbanPark_2);
var lyr_WoodhouseUrbanPark_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WoodhouseUrbanPark_2, 
                style: style_WoodhouseUrbanPark_2,
                popuplayertitle: "Woodhouse Urban Park",
                interactive: true,
                title: '<img src="styles/legend/WoodhouseUrbanPark_2.png" /> Woodhouse Urban Park'
            });
var format_SouthKilburnOpenSpace_3 = new ol.format.GeoJSON();
var features_SouthKilburnOpenSpace_3 = format_SouthKilburnOpenSpace_3.readFeatures(json_SouthKilburnOpenSpace_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthKilburnOpenSpace_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SouthKilburnOpenSpace_3.addFeatures(features_SouthKilburnOpenSpace_3);
var lyr_SouthKilburnOpenSpace_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SouthKilburnOpenSpace_3, 
                style: style_SouthKilburnOpenSpace_3,
                popuplayertitle: "South Kilburn Open Space",
                interactive: true,
                title: '<img src="styles/legend/SouthKilburnOpenSpace_3.png" /> South Kilburn Open Space'
            });
var format_GranvilleRec_4 = new ol.format.GeoJSON();
var features_GranvilleRec_4 = format_GranvilleRec_4.readFeatures(json_GranvilleRec_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranvilleRec_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranvilleRec_4.addFeatures(features_GranvilleRec_4);
var lyr_GranvilleRec_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranvilleRec_4, 
                style: style_GranvilleRec_4,
                popuplayertitle: "Granville Rec",
                interactive: true,
                title: '<img src="styles/legend/GranvilleRec_4.png" /> Granville Rec'
            });
var format_CraikandCronePlayArea_5 = new ol.format.GeoJSON();
var features_CraikandCronePlayArea_5 = format_CraikandCronePlayArea_5.readFeatures(json_CraikandCronePlayArea_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CraikandCronePlayArea_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CraikandCronePlayArea_5.addFeatures(features_CraikandCronePlayArea_5);
var lyr_CraikandCronePlayArea_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CraikandCronePlayArea_5, 
                style: style_CraikandCronePlayArea_5,
                popuplayertitle: "Craik and Crone Play Area",
                interactive: true,
                title: '<img src="styles/legend/CraikandCronePlayArea_5.png" /> Craik and Crone Play Area'
            });
var format_SouthKilburnMUGA_6 = new ol.format.GeoJSON();
var features_SouthKilburnMUGA_6 = format_SouthKilburnMUGA_6.readFeatures(json_SouthKilburnMUGA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthKilburnMUGA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SouthKilburnMUGA_6.addFeatures(features_SouthKilburnMUGA_6);
var lyr_SouthKilburnMUGA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SouthKilburnMUGA_6, 
                style: style_SouthKilburnMUGA_6,
                popuplayertitle: "South Kilburn MUGA",
                interactive: true,
                title: '<img src="styles/legend/SouthKilburnMUGA_6.png" /> South Kilburn MUGA'
            });
var format_PeelPlaza_7 = new ol.format.GeoJSON();
var features_PeelPlaza_7 = format_PeelPlaza_7.readFeatures(json_PeelPlaza_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PeelPlaza_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PeelPlaza_7.addFeatures(features_PeelPlaza_7);
var lyr_PeelPlaza_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PeelPlaza_7, 
                style: style_PeelPlaza_7,
                popuplayertitle: "Peel Plaza",
                interactive: true,
                title: '<img src="styles/legend/PeelPlaza_7.png" /> Peel Plaza'
            });
var format_MasefieldWordsworthBlakePlayArea_8 = new ol.format.GeoJSON();
var features_MasefieldWordsworthBlakePlayArea_8 = format_MasefieldWordsworthBlakePlayArea_8.readFeatures(json_MasefieldWordsworthBlakePlayArea_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MasefieldWordsworthBlakePlayArea_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasefieldWordsworthBlakePlayArea_8.addFeatures(features_MasefieldWordsworthBlakePlayArea_8);
var lyr_MasefieldWordsworthBlakePlayArea_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasefieldWordsworthBlakePlayArea_8, 
                style: style_MasefieldWordsworthBlakePlayArea_8,
                popuplayertitle: "Masefield, Wordsworth, Blake Play Area",
                interactive: true,
                title: '<img src="styles/legend/MasefieldWordsworthBlakePlayArea_8.png" /> Masefield, Wordsworth, Blake Play Area'
            });
var format_UnityPlacePlayArea_9 = new ol.format.GeoJSON();
var features_UnityPlacePlayArea_9 = format_UnityPlacePlayArea_9.readFeatures(json_UnityPlacePlayArea_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnityPlacePlayArea_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnityPlacePlayArea_9.addFeatures(features_UnityPlacePlayArea_9);
var lyr_UnityPlacePlayArea_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnityPlacePlayArea_9, 
                style: style_UnityPlacePlayArea_9,
                popuplayertitle: "Unity Place Play Area",
                interactive: true,
                title: '<img src="styles/legend/UnityPlacePlayArea_9.png" /> Unity Place Play Area'
            });
var format_CambridgeGardens_10 = new ol.format.GeoJSON();
var features_CambridgeGardens_10 = format_CambridgeGardens_10.readFeatures(json_CambridgeGardens_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CambridgeGardens_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CambridgeGardens_10.addFeatures(features_CambridgeGardens_10);
var lyr_CambridgeGardens_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CambridgeGardens_10, 
                style: style_CambridgeGardens_10,
                popuplayertitle: "Cambridge Gardens",
                interactive: true,
                title: '<img src="styles/legend/CambridgeGardens_10.png" /> Cambridge Gardens'
            });
var format_TheValeCommunityCentre_11 = new ol.format.GeoJSON();
var features_TheValeCommunityCentre_11 = format_TheValeCommunityCentre_11.readFeatures(json_TheValeCommunityCentre_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TheValeCommunityCentre_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TheValeCommunityCentre_11.addFeatures(features_TheValeCommunityCentre_11);
var lyr_TheValeCommunityCentre_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TheValeCommunityCentre_11, 
                style: style_TheValeCommunityCentre_11,
                popuplayertitle: "The Vale Community Centre",
                interactive: true,
                title: '<img src="styles/legend/TheValeCommunityCentre_11.png" /> The Vale Community Centre'
            });
var format_WilliamDunbarCommunityHall_12 = new ol.format.GeoJSON();
var features_WilliamDunbarCommunityHall_12 = format_WilliamDunbarCommunityHall_12.readFeatures(json_WilliamDunbarCommunityHall_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilliamDunbarCommunityHall_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilliamDunbarCommunityHall_12.addFeatures(features_WilliamDunbarCommunityHall_12);
var lyr_WilliamDunbarCommunityHall_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WilliamDunbarCommunityHall_12, 
                style: style_WilliamDunbarCommunityHall_12,
                popuplayertitle: "William Dunbar Community Hall",
                interactive: true,
                title: '<img src="styles/legend/WilliamDunbarCommunityHall_12.png" /> William Dunbar Community Hall'
            });
var format_TollgateGardensCommunityCentre_13 = new ol.format.GeoJSON();
var features_TollgateGardensCommunityCentre_13 = format_TollgateGardensCommunityCentre_13.readFeatures(json_TollgateGardensCommunityCentre_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TollgateGardensCommunityCentre_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TollgateGardensCommunityCentre_13.addFeatures(features_TollgateGardensCommunityCentre_13);
var lyr_TollgateGardensCommunityCentre_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TollgateGardensCommunityCentre_13, 
                style: style_TollgateGardensCommunityCentre_13,
                popuplayertitle: "Tollgate Gardens Community Centre",
                interactive: true,
                title: '<img src="styles/legend/TollgateGardensCommunityCentre_13.png" /> Tollgate Gardens Community Centre'
            });
var format_CarltonandGranvilleCentres_14 = new ol.format.GeoJSON();
var features_CarltonandGranvilleCentres_14 = format_CarltonandGranvilleCentres_14.readFeatures(json_CarltonandGranvilleCentres_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CarltonandGranvilleCentres_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarltonandGranvilleCentres_14.addFeatures(features_CarltonandGranvilleCentres_14);
var lyr_CarltonandGranvilleCentres_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CarltonandGranvilleCentres_14, 
                style: style_CarltonandGranvilleCentres_14,
                popuplayertitle: "Carlton and Granville Centres",
                interactive: true,
                title: '<img src="styles/legend/CarltonandGranvilleCentres_14.png" /> Carlton and Granville Centres'
            });
var format_GranvilleFamilyWellbeingCentre_15 = new ol.format.GeoJSON();
var features_GranvilleFamilyWellbeingCentre_15 = format_GranvilleFamilyWellbeingCentre_15.readFeatures(json_GranvilleFamilyWellbeingCentre_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranvilleFamilyWellbeingCentre_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranvilleFamilyWellbeingCentre_15.addFeatures(features_GranvilleFamilyWellbeingCentre_15);
var lyr_GranvilleFamilyWellbeingCentre_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranvilleFamilyWellbeingCentre_15, 
                style: style_GranvilleFamilyWellbeingCentre_15,
                popuplayertitle: "Granville Family Wellbeing Centre",
                interactive: true,
                title: '<img src="styles/legend/GranvilleFamilyWellbeingCentre_15.png" /> Granville Family Wellbeing Centre'
            });
var format_CraikCourtmeetingroom_16 = new ol.format.GeoJSON();
var features_CraikCourtmeetingroom_16 = format_CraikCourtmeetingroom_16.readFeatures(json_CraikCourtmeetingroom_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CraikCourtmeetingroom_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CraikCourtmeetingroom_16.addFeatures(features_CraikCourtmeetingroom_16);
var lyr_CraikCourtmeetingroom_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CraikCourtmeetingroom_16, 
                style: style_CraikCourtmeetingroom_16,
                popuplayertitle: "Craik Court meeting room",
                interactive: true,
                title: '<img src="styles/legend/CraikCourtmeetingroom_16.png" /> Craik Court meeting room'
            });
var format_AlphaGorefieldHall_17 = new ol.format.GeoJSON();
var features_AlphaGorefieldHall_17 = format_AlphaGorefieldHall_17.readFeatures(json_AlphaGorefieldHall_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlphaGorefieldHall_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlphaGorefieldHall_17.addFeatures(features_AlphaGorefieldHall_17);
var lyr_AlphaGorefieldHall_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlphaGorefieldHall_17, 
                style: style_AlphaGorefieldHall_17,
                popuplayertitle: "Alpha Gorefield Hall",
                interactive: true,
                title: '<img src="styles/legend/AlphaGorefieldHall_17.png" /> Alpha Gorefield Hall'
            });
var format_TabotCentre_18 = new ol.format.GeoJSON();
var features_TabotCentre_18 = format_TabotCentre_18.readFeatures(json_TabotCentre_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TabotCentre_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TabotCentre_18.addFeatures(features_TabotCentre_18);
var lyr_TabotCentre_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TabotCentre_18, 
                style: style_TabotCentre_18,
                popuplayertitle: "Tabot Centre",
                interactive: true,
                title: '<img src="styles/legend/TabotCentre_18.png" /> Tabot Centre'
            });
var format_StAugustinesSportsCentre_19 = new ol.format.GeoJSON();
var features_StAugustinesSportsCentre_19 = format_StAugustinesSportsCentre_19.readFeatures(json_StAugustinesSportsCentre_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StAugustinesSportsCentre_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StAugustinesSportsCentre_19.addFeatures(features_StAugustinesSportsCentre_19);
var lyr_StAugustinesSportsCentre_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StAugustinesSportsCentre_19, 
                style: style_StAugustinesSportsCentre_19,
                popuplayertitle: "St Augustines Sports Centre",
                interactive: true,
                title: '<img src="styles/legend/StAugustinesSportsCentre_19.png" /> St Augustines Sports Centre'
            });
var format_HornbillHouse_20 = new ol.format.GeoJSON();
var features_HornbillHouse_20 = format_HornbillHouse_20.readFeatures(json_HornbillHouse_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HornbillHouse_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HornbillHouse_20.addFeatures(features_HornbillHouse_20);
var lyr_HornbillHouse_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HornbillHouse_20, 
                style: style_HornbillHouse_20,
                popuplayertitle: "Hornbill House",
                interactive: true,
                title: '<img src="styles/legend/HornbillHouse_20.png" /> Hornbill House'
            });
var format_WestKilburnBaptistChurch_21 = new ol.format.GeoJSON();
var features_WestKilburnBaptistChurch_21 = format_WestKilburnBaptistChurch_21.readFeatures(json_WestKilburnBaptistChurch_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WestKilburnBaptistChurch_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WestKilburnBaptistChurch_21.addFeatures(features_WestKilburnBaptistChurch_21);
var lyr_WestKilburnBaptistChurch_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WestKilburnBaptistChurch_21, 
                style: style_WestKilburnBaptistChurch_21,
                popuplayertitle: "West Kilburn Baptist Church",
                interactive: true,
                title: '<img src="styles/legend/WestKilburnBaptistChurch_21.png" /> West Kilburn Baptist Church'
            });
var format_UKAlbanianMosque_22 = new ol.format.GeoJSON();
var features_UKAlbanianMosque_22 = format_UKAlbanianMosque_22.readFeatures(json_UKAlbanianMosque_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UKAlbanianMosque_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UKAlbanianMosque_22.addFeatures(features_UKAlbanianMosque_22);
var lyr_UKAlbanianMosque_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UKAlbanianMosque_22, 
                style: style_UKAlbanianMosque_22,
                popuplayertitle: "UK Albanian Mosque",
                interactive: true,
                title: '<img src="styles/legend/UKAlbanianMosque_22.png" /> UK Albanian Mosque'
            });
var format_SalvationArmy_23 = new ol.format.GeoJSON();
var features_SalvationArmy_23 = format_SalvationArmy_23.readFeatures(json_SalvationArmy_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SalvationArmy_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SalvationArmy_23.addFeatures(features_SalvationArmy_23);
var lyr_SalvationArmy_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SalvationArmy_23, 
                style: style_SalvationArmy_23,
                popuplayertitle: "Salvation Army",
                interactive: true,
                title: '<img src="styles/legend/SalvationArmy_23.png" /> Salvation Army'
            });
var format_MarianCentreImmaculateHeartofMary_24 = new ol.format.GeoJSON();
var features_MarianCentreImmaculateHeartofMary_24 = format_MarianCentreImmaculateHeartofMary_24.readFeatures(json_MarianCentreImmaculateHeartofMary_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MarianCentreImmaculateHeartofMary_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarianCentreImmaculateHeartofMary_24.addFeatures(features_MarianCentreImmaculateHeartofMary_24);
var lyr_MarianCentreImmaculateHeartofMary_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MarianCentreImmaculateHeartofMary_24, 
                style: style_MarianCentreImmaculateHeartofMary_24,
                popuplayertitle: "Marian Centre - Immaculate Heart of Mary",
                interactive: true,
                title: '<img src="styles/legend/MarianCentreImmaculateHeartofMary_24.png" /> Marian Centre - Immaculate Heart of Mary'
            });
var format_StLukesChurch_25 = new ol.format.GeoJSON();
var features_StLukesChurch_25 = format_StLukesChurch_25.readFeatures(json_StLukesChurch_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StLukesChurch_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StLukesChurch_25.addFeatures(features_StLukesChurch_25);
var lyr_StLukesChurch_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StLukesChurch_25, 
                style: style_StLukesChurch_25,
                popuplayertitle: "St Luke's Church",
                interactive: true,
                title: '<img src="styles/legend/StLukesChurch_25.png" /> St Luke\'s Church'
            });
var format_ElyCourt_26 = new ol.format.GeoJSON();
var features_ElyCourt_26 = format_ElyCourt_26.readFeatures(json_ElyCourt_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElyCourt_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElyCourt_26.addFeatures(features_ElyCourt_26);
var lyr_ElyCourt_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElyCourt_26, 
                style: style_ElyCourt_26,
                popuplayertitle: "Ely Court",
                interactive: true,
                title: '<img src="styles/legend/ElyCourt_26.png" /> Ely Court'
            });
var format_Gorefieldspace_27 = new ol.format.GeoJSON();
var features_Gorefieldspace_27 = format_Gorefieldspace_27.readFeatures(json_Gorefieldspace_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gorefieldspace_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gorefieldspace_27.addFeatures(features_Gorefieldspace_27);
var lyr_Gorefieldspace_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gorefieldspace_27, 
                style: style_Gorefieldspace_27,
                popuplayertitle: "Gorefield space",
                interactive: true,
                title: '<img src="styles/legend/Gorefieldspace_27.png" /> Gorefield space'
            });
var format_Alphaspace_28 = new ol.format.GeoJSON();
var features_Alphaspace_28 = format_Alphaspace_28.readFeatures(json_Alphaspace_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alphaspace_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alphaspace_28.addFeatures(features_Alphaspace_28);
var lyr_Alphaspace_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alphaspace_28, 
                style: style_Alphaspace_28,
                popuplayertitle: "Alpha space",
                interactive: true,
                title: '<img src="styles/legend/Alphaspace_28.png" /> Alpha space'
            });
var format_CarltonValeplayground_29 = new ol.format.GeoJSON();
var features_CarltonValeplayground_29 = format_CarltonValeplayground_29.readFeatures(json_CarltonValeplayground_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CarltonValeplayground_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarltonValeplayground_29.addFeatures(features_CarltonValeplayground_29);
var lyr_CarltonValeplayground_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CarltonValeplayground_29, 
                style: style_CarltonValeplayground_29,
                popuplayertitle: "Carlton Vale playground",
                interactive: true,
                title: '<img src="styles/legend/CarltonValeplayground_29.png" /> Carlton Vale playground'
            });
var format_CambridgeandKilburnParkRoadspace_30 = new ol.format.GeoJSON();
var features_CambridgeandKilburnParkRoadspace_30 = format_CambridgeandKilburnParkRoadspace_30.readFeatures(json_CambridgeandKilburnParkRoadspace_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CambridgeandKilburnParkRoadspace_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CambridgeandKilburnParkRoadspace_30.addFeatures(features_CambridgeandKilburnParkRoadspace_30);
var lyr_CambridgeandKilburnParkRoadspace_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CambridgeandKilburnParkRoadspace_30, 
                style: style_CambridgeandKilburnParkRoadspace_30,
                popuplayertitle: "Cambridge and Kilburn Park Road space",
                interactive: true,
                title: '<img src="styles/legend/CambridgeandKilburnParkRoadspace_30.png" /> Cambridge and Kilburn Park Road space'
            });
var format_WigginsHouseandThamesCourtspace_31 = new ol.format.GeoJSON();
var features_WigginsHouseandThamesCourtspace_31 = format_WigginsHouseandThamesCourtspace_31.readFeatures(json_WigginsHouseandThamesCourtspace_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WigginsHouseandThamesCourtspace_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WigginsHouseandThamesCourtspace_31.addFeatures(features_WigginsHouseandThamesCourtspace_31);
var lyr_WigginsHouseandThamesCourtspace_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WigginsHouseandThamesCourtspace_31, 
                style: style_WigginsHouseandThamesCourtspace_31,
                popuplayertitle: "Wiggins House and Thames Court space",
                interactive: true,
                title: '<img src="styles/legend/WigginsHouseandThamesCourtspace_31.png" /> Wiggins House and Thames Court space'
            });
var format_BirchsideandCedarSidespaces_32 = new ol.format.GeoJSON();
var features_BirchsideandCedarSidespaces_32 = format_BirchsideandCedarSidespaces_32.readFeatures(json_BirchsideandCedarSidespaces_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BirchsideandCedarSidespaces_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BirchsideandCedarSidespaces_32.addFeatures(features_BirchsideandCedarSidespaces_32);
var lyr_BirchsideandCedarSidespaces_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BirchsideandCedarSidespaces_32, 
                style: style_BirchsideandCedarSidespaces_32,
                popuplayertitle: "Birchside and Cedar Side spaces",
                interactive: true,
                title: '<img src="styles/legend/BirchsideandCedarSidespaces_32.png" /> Birchside and Cedar Side spaces'
            });
var format_Bristolwalkspace_33 = new ol.format.GeoJSON();
var features_Bristolwalkspace_33 = format_Bristolwalkspace_33.readFeatures(json_Bristolwalkspace_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bristolwalkspace_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bristolwalkspace_33.addFeatures(features_Bristolwalkspace_33);
var lyr_Bristolwalkspace_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bristolwalkspace_33, 
                style: style_Bristolwalkspace_33,
                popuplayertitle: "Bristol walk space",
                interactive: true,
                title: '<img src="styles/legend/Bristolwalkspace_33.png" /> Bristol walk space'
            });
var group_GatedHousingspaces = new ol.layer.Group({
                                layers: [lyr_ElyCourt_26,lyr_Gorefieldspace_27,lyr_Alphaspace_28,lyr_CarltonValeplayground_29,lyr_CambridgeandKilburnParkRoadspace_30,lyr_WigginsHouseandThamesCourtspace_31,lyr_BirchsideandCedarSidespaces_32,lyr_Bristolwalkspace_33,],
                                fold: "open",
                                title: "Gated/Housing spaces"});
var group_DenominationalCommunityBuildings = new ol.layer.Group({
                                layers: [lyr_WestKilburnBaptistChurch_21,lyr_UKAlbanianMosque_22,lyr_SalvationArmy_23,lyr_MarianCentreImmaculateHeartofMary_24,lyr_StLukesChurch_25,],
                                fold: "open",
                                title: "Denominational Community Buildings"});
var group_CommunityBuildings = new ol.layer.Group({
                                layers: [lyr_TheValeCommunityCentre_11,lyr_WilliamDunbarCommunityHall_12,lyr_TollgateGardensCommunityCentre_13,lyr_CarltonandGranvilleCentres_14,lyr_GranvilleFamilyWellbeingCentre_15,lyr_CraikCourtmeetingroom_16,lyr_AlphaGorefieldHall_17,lyr_TabotCentre_18,lyr_StAugustinesSportsCentre_19,lyr_HornbillHouse_20,],
                                fold: "open",
                                title: "Community Buildings"});
var group_Greenandoutdoorspaces = new ol.layer.Group({
                                layers: [lyr_WoodhouseUrbanPark_2,lyr_SouthKilburnOpenSpace_3,lyr_GranvilleRec_4,lyr_CraikandCronePlayArea_5,lyr_SouthKilburnMUGA_6,lyr_PeelPlaza_7,lyr_MasefieldWordsworthBlakePlayArea_8,lyr_UnityPlacePlayArea_9,lyr_CambridgeGardens_10,],
                                fold: "open",
                                title: "Green and outdoor spaces"});

lyr_OSMStandard_0.setVisible(true);lyr_SouthKilburnBoundary_1.setVisible(true);lyr_WoodhouseUrbanPark_2.setVisible(true);lyr_SouthKilburnOpenSpace_3.setVisible(true);lyr_GranvilleRec_4.setVisible(true);lyr_CraikandCronePlayArea_5.setVisible(true);lyr_SouthKilburnMUGA_6.setVisible(true);lyr_PeelPlaza_7.setVisible(true);lyr_MasefieldWordsworthBlakePlayArea_8.setVisible(true);lyr_UnityPlacePlayArea_9.setVisible(true);lyr_CambridgeGardens_10.setVisible(true);lyr_TheValeCommunityCentre_11.setVisible(true);lyr_WilliamDunbarCommunityHall_12.setVisible(true);lyr_TollgateGardensCommunityCentre_13.setVisible(true);lyr_CarltonandGranvilleCentres_14.setVisible(true);lyr_GranvilleFamilyWellbeingCentre_15.setVisible(true);lyr_CraikCourtmeetingroom_16.setVisible(true);lyr_AlphaGorefieldHall_17.setVisible(true);lyr_TabotCentre_18.setVisible(true);lyr_StAugustinesSportsCentre_19.setVisible(true);lyr_HornbillHouse_20.setVisible(true);lyr_WestKilburnBaptistChurch_21.setVisible(true);lyr_UKAlbanianMosque_22.setVisible(true);lyr_SalvationArmy_23.setVisible(true);lyr_MarianCentreImmaculateHeartofMary_24.setVisible(true);lyr_StLukesChurch_25.setVisible(true);lyr_ElyCourt_26.setVisible(true);lyr_Gorefieldspace_27.setVisible(true);lyr_Alphaspace_28.setVisible(true);lyr_CarltonValeplayground_29.setVisible(true);lyr_CambridgeandKilburnParkRoadspace_30.setVisible(true);lyr_WigginsHouseandThamesCourtspace_31.setVisible(true);lyr_BirchsideandCedarSidespaces_32.setVisible(true);lyr_Bristolwalkspace_33.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SouthKilburnBoundary_1,group_Greenandoutdoorspaces,group_CommunityBuildings,group_DenominationalCommunityBuildings,group_GatedHousingspaces];
lyr_SouthKilburnBoundary_1.set('fieldAliases', {'id': 'id', });
lyr_WoodhouseUrbanPark_2.set('fieldAliases', {'id': 'id', });
lyr_SouthKilburnOpenSpace_3.set('fieldAliases', {'id': 'id', });
lyr_GranvilleRec_4.set('fieldAliases', {'id': 'id', });
lyr_CraikandCronePlayArea_5.set('fieldAliases', {'id': 'id', });
lyr_SouthKilburnMUGA_6.set('fieldAliases', {'id': 'id', });
lyr_PeelPlaza_7.set('fieldAliases', {'id': 'id', });
lyr_MasefieldWordsworthBlakePlayArea_8.set('fieldAliases', {'id': 'id', });
lyr_UnityPlacePlayArea_9.set('fieldAliases', {'id': 'id', });
lyr_CambridgeGardens_10.set('fieldAliases', {'id': 'id', });
lyr_TheValeCommunityCentre_11.set('fieldAliases', {'id': 'id', });
lyr_WilliamDunbarCommunityHall_12.set('fieldAliases', {'id': 'id', });
lyr_TollgateGardensCommunityCentre_13.set('fieldAliases', {'id': 'id', });
lyr_CarltonandGranvilleCentres_14.set('fieldAliases', {'id': 'id', });
lyr_GranvilleFamilyWellbeingCentre_15.set('fieldAliases', {'id': 'id', });
lyr_CraikCourtmeetingroom_16.set('fieldAliases', {'id': 'id', });
lyr_AlphaGorefieldHall_17.set('fieldAliases', {'id': 'id', });
lyr_TabotCentre_18.set('fieldAliases', {'id': 'id', });
lyr_StAugustinesSportsCentre_19.set('fieldAliases', {'id': 'id', });
lyr_HornbillHouse_20.set('fieldAliases', {'id': 'id', });
lyr_WestKilburnBaptistChurch_21.set('fieldAliases', {'id': 'id', });
lyr_UKAlbanianMosque_22.set('fieldAliases', {'id': 'id', });
lyr_SalvationArmy_23.set('fieldAliases', {'id': 'id', });
lyr_MarianCentreImmaculateHeartofMary_24.set('fieldAliases', {'id': 'id', });
lyr_StLukesChurch_25.set('fieldAliases', {'id': 'id', });
lyr_ElyCourt_26.set('fieldAliases', {'id': 'id', });
lyr_Gorefieldspace_27.set('fieldAliases', {'id': 'id', });
lyr_Alphaspace_28.set('fieldAliases', {'id': 'id', });
lyr_CarltonValeplayground_29.set('fieldAliases', {'id': 'id', });
lyr_CambridgeandKilburnParkRoadspace_30.set('fieldAliases', {'id': 'id', });
lyr_WigginsHouseandThamesCourtspace_31.set('fieldAliases', {'id': 'id', });
lyr_BirchsideandCedarSidespaces_32.set('fieldAliases', {'id': 'id', });
lyr_Bristolwalkspace_33.set('fieldAliases', {'id': 'id', });
lyr_SouthKilburnBoundary_1.set('fieldImages', {'id': '', });
lyr_WoodhouseUrbanPark_2.set('fieldImages', {'id': '', });
lyr_SouthKilburnOpenSpace_3.set('fieldImages', {'id': '', });
lyr_GranvilleRec_4.set('fieldImages', {'id': '', });
lyr_CraikandCronePlayArea_5.set('fieldImages', {'id': '', });
lyr_SouthKilburnMUGA_6.set('fieldImages', {'id': '', });
lyr_PeelPlaza_7.set('fieldImages', {'id': '', });
lyr_MasefieldWordsworthBlakePlayArea_8.set('fieldImages', {'id': '', });
lyr_UnityPlacePlayArea_9.set('fieldImages', {'id': '', });
lyr_CambridgeGardens_10.set('fieldImages', {'id': '', });
lyr_TheValeCommunityCentre_11.set('fieldImages', {'id': '', });
lyr_WilliamDunbarCommunityHall_12.set('fieldImages', {'id': '', });
lyr_TollgateGardensCommunityCentre_13.set('fieldImages', {'id': '', });
lyr_CarltonandGranvilleCentres_14.set('fieldImages', {'id': '', });
lyr_GranvilleFamilyWellbeingCentre_15.set('fieldImages', {'id': '', });
lyr_CraikCourtmeetingroom_16.set('fieldImages', {'id': '', });
lyr_AlphaGorefieldHall_17.set('fieldImages', {'id': '', });
lyr_TabotCentre_18.set('fieldImages', {'id': '', });
lyr_StAugustinesSportsCentre_19.set('fieldImages', {'id': '', });
lyr_HornbillHouse_20.set('fieldImages', {'id': '', });
lyr_WestKilburnBaptistChurch_21.set('fieldImages', {'id': '', });
lyr_UKAlbanianMosque_22.set('fieldImages', {'id': '', });
lyr_SalvationArmy_23.set('fieldImages', {'id': '', });
lyr_MarianCentreImmaculateHeartofMary_24.set('fieldImages', {'id': '', });
lyr_StLukesChurch_25.set('fieldImages', {'id': '', });
lyr_ElyCourt_26.set('fieldImages', {'id': '', });
lyr_Gorefieldspace_27.set('fieldImages', {'id': '', });
lyr_Alphaspace_28.set('fieldImages', {'id': '', });
lyr_CarltonValeplayground_29.set('fieldImages', {'id': '', });
lyr_CambridgeandKilburnParkRoadspace_30.set('fieldImages', {'id': '', });
lyr_WigginsHouseandThamesCourtspace_31.set('fieldImages', {'id': '', });
lyr_BirchsideandCedarSidespaces_32.set('fieldImages', {'id': '', });
lyr_Bristolwalkspace_33.set('fieldImages', {'id': '', });
lyr_SouthKilburnBoundary_1.set('fieldLabels', {'id': 'hidden field', });
lyr_WoodhouseUrbanPark_2.set('fieldLabels', {'id': 'no label', });
lyr_SouthKilburnOpenSpace_3.set('fieldLabels', {'id': 'no label', });
lyr_GranvilleRec_4.set('fieldLabels', {'id': 'no label', });
lyr_CraikandCronePlayArea_5.set('fieldLabels', {'id': 'no label', });
lyr_SouthKilburnMUGA_6.set('fieldLabels', {'id': 'no label', });
lyr_PeelPlaza_7.set('fieldLabels', {'id': 'no label', });
lyr_MasefieldWordsworthBlakePlayArea_8.set('fieldLabels', {'id': 'no label', });
lyr_UnityPlacePlayArea_9.set('fieldLabels', {'id': 'no label', });
lyr_CambridgeGardens_10.set('fieldLabels', {'id': 'no label', });
lyr_TheValeCommunityCentre_11.set('fieldLabels', {'id': 'no label', });
lyr_WilliamDunbarCommunityHall_12.set('fieldLabels', {'id': 'no label', });
lyr_TollgateGardensCommunityCentre_13.set('fieldLabels', {'id': 'no label', });
lyr_CarltonandGranvilleCentres_14.set('fieldLabels', {'id': 'no label', });
lyr_GranvilleFamilyWellbeingCentre_15.set('fieldLabels', {'id': 'no label', });
lyr_CraikCourtmeetingroom_16.set('fieldLabels', {'id': 'no label', });
lyr_AlphaGorefieldHall_17.set('fieldLabels', {'id': 'no label', });
lyr_TabotCentre_18.set('fieldLabels', {'id': 'no label', });
lyr_StAugustinesSportsCentre_19.set('fieldLabels', {'id': 'no label', });
lyr_HornbillHouse_20.set('fieldLabels', {'id': 'no label', });
lyr_WestKilburnBaptistChurch_21.set('fieldLabels', {'id': 'no label', });
lyr_UKAlbanianMosque_22.set('fieldLabels', {'id': 'no label', });
lyr_SalvationArmy_23.set('fieldLabels', {'id': 'no label', });
lyr_MarianCentreImmaculateHeartofMary_24.set('fieldLabels', {'id': 'no label', });
lyr_StLukesChurch_25.set('fieldLabels', {'id': 'no label', });
lyr_ElyCourt_26.set('fieldLabels', {'id': 'no label', });
lyr_Gorefieldspace_27.set('fieldLabels', {'id': 'no label', });
lyr_Alphaspace_28.set('fieldLabels', {'id': 'no label', });
lyr_CarltonValeplayground_29.set('fieldLabels', {'id': 'no label', });
lyr_CambridgeandKilburnParkRoadspace_30.set('fieldLabels', {'id': 'no label', });
lyr_WigginsHouseandThamesCourtspace_31.set('fieldLabels', {'id': 'no label', });
lyr_BirchsideandCedarSidespaces_32.set('fieldLabels', {'id': 'no label', });
lyr_Bristolwalkspace_33.set('fieldLabels', {'id': 'no label', });
lyr_Bristolwalkspace_33.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

    // Code generated with noaa-tools.
    // This can be executed using Cesium. The easiest way to test it is to go to
    // https://sandcastle.cesium.com and paste this code there.

    var viewer = new Cesium.Viewer('cesiumContainer');
    var pinBuilder = new Cesium.PinBuilder();
     var czml = [
{
    "id": "document",
    "version": "1.0",
    "name": "document_packet",
    "clock": {
        "interval": "2020-04-12T08:56:03.063/2020-04-12T09:12:06.467",
        "currentTime": "2020-04-12T08:56:03.063",
        "multiplier": 60,
        "range": "LOOP_STOP",
        "step": "SYSTEM_CLOCK_MULTIPLIER"
    }
},
{
    "id": "custom_properties",
    "properties": {
        "custom_attractor": true,
        "ellipsoid": [
            {
                "array": [
                    6378137.0,
                    6378137.0,
                    6356752.314245179
                ]
            }
        ],
        "map_url": [
            "https://upload.wikimedia.org/wikipedia/commons/c/c4/Earthmap1000x500compac.jpg"
        ],
        "scene3D": true
    }
},
{
    "id": 0,
    "availability": "2020-04-12T08:56:03Z/2020-04-12T09:12:06Z",
    "position": {
        "epoch": "2020-04-12T08:56:03.063",
        "interpolationAlgorithm": "LAGRANGE",
        "interpolationDegree": 5,
        "referenceFrame": "INERTIAL",
        "cartesian": [
            0.0,
            546809.6949835494,
            997167.3135752518,
            7128330.303366836,
            96.3403478,
            1188103.6447637808,
            681079.352083942,
            7087761.56447164,
            192.6806956,
            1817723.0522225776,
            358298.7724549277,
            6977545.958027417,
            289.0210434,
            2429484.5913144816,
            31997.9974941473,
            6798779.905981708,
            385.3613912,
            3017383.697283869,
            -294617.2016403693,
            6553235.350301016,
            481.701739,
            3575654.0392862787,
            -618339.5775677286,
            6243341.522088322,
            578.0420868,
            4098824.475111188,
            -935992.2298870086,
            5872160.1286998475,
            674.3824346,
            4581772.910094812,
            -1244460.0508312597,
            5443354.242962401,
            770.7227824,
            5019776.520856553,
            -1540720.471674681,
            4961151.244431365,
            867.0631302,
            5408557.8487756625,
            -1821873.1988119334,
            4430300.223217122,
            963.403478,
            5744326.317359933,
            -2085168.6424795266,
            3856024.3115669084,
            1059.7438258,
            6023814.781011104,
            -2328034.7582677784,
            3243968.4565780303
        ]
    },
    "billboard": {
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADJSURBVDhPnZHRDcMgEEMZjVEYpaNklIzSEfLfD4qNnXAJSFWfhO7w2Zc0Tf9QG2rXrEzSUeZLOGm47WoH95x3Hl3jEgilvDgsOQUTqsNl68ezEwn1vae6lceSEEYvvWNT/Rxc4CXQNGadho1NXoJ+9iaqc2xi2xbt23PJCDIB6TQjOC6Bho/sDy3fBQT8PrVhibU7yBFcEPaRxOoeTwbwByCOYf9VGp1BYI1BA+EeHhmfzKbBoJEQwn1yzUZtyspIQUha85MpkNIXB7GizqDEECsAAAAASUVORK5CYII=",
        "show": true
    },
    "label": {
        "text": "satname",
        "font": "11pt Lucida Console",
        "style": "FILL",
        "fillColor": {
            "rgba": [
                255,
                255,
                0,
                255
            ]
        },
        "outlineColor": {
            "rgba": [
                255,
                255,
                0,
                255
            ]
        },
        "outlineWidth": 1.0
    },
    "path": {
        "show": true,
        "width": 3,
        "resolution": 120,
        "material": {
            "solidColor": {
                "color": {
                    "rgba": [
                        125,
                        80,
                        120,
                        255
                    ]
                }
            }
        }
    }
},
];
var dataSourcePromise = viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));


    var questionPin = viewer.entities.add({
        name : 'AOS(SPHERICAL) lat=79.859318,lon=65.910315',
        position : Cesium.Cartesian3.fromDegrees(65.910315, 79.859318, 0.000000),
        billboard : {
            image : pinBuilder.fromText('A', Cesium.Color.BLUE, 48).toDataURL(),
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
        }
    });
    
    var questionPin = viewer.entities.add({
        name : 'LOS(SPHERICAL) lat=28.223308,lon=3.768348',
        position : Cesium.Cartesian3.fromDegrees(3.768348, 28.223308, 0.000000),
        billboard : {
            image : pinBuilder.fromText('L', Cesium.Color.YELLOW, 48).toDataURL(),
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
        }
    });
    
    var questionPin = viewer.entities.add({
        name : 'Upper Left lat=83.597758,lon=47.775346',
        position : Cesium.Cartesian3.fromDegrees(47.775346, 83.597758, 0.000000),
        billboard : {
            image : pinBuilder.fromText('U', Cesium.Color.RED, 48).toDataURL(),
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
        }
    });
    
    var questionPin = viewer.entities.add({
        name : 'Upper Right lat=75.669464,lon=73.971107',
        position : Cesium.Cartesian3.fromDegrees(73.971107, 75.669464, 0.000000),
        billboard : {
            image : pinBuilder.fromText('U', Cesium.Color.GREEN, 48).toDataURL(),
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
        }
    });
    
    var questionPin = viewer.entities.add({
        name : 'Lower Left lat=29.210025,lon=-1.255804',
        position : Cesium.Cartesian3.fromDegrees(-1.255804, 29.210025, 0.000000),
        billboard : {
            image : pinBuilder.fromText('L', Cesium.Color.RED, 48).toDataURL(),
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
        }
    });
    
    var questionPin = viewer.entities.add({
        name : 'Lower Right lat=27.056640,lon=8.692279',
        position : Cesium.Cartesian3.fromDegrees(8.692279, 27.056640, 0.000000),
        billboard : {
            image : pinBuilder.fromText('L', Cesium.Color.GREEN, 48).toDataURL(),
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
        }
    });
    
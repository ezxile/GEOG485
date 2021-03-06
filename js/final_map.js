<script type="text/javascript">        
        	var lon = -106.6405675;
       		var lat = 35.0473125;
        	var zoom = 9;
       		var map;
        	var myProjection = new OpenLayers.Projection("EPSG:4326");
        	var OSMlayer;
        	var gmap, ghyb;
        	var Layers = new Object();
        	

		// =============== Initialization function ===================
        function init(){
            map = new OpenLayers.Map( 'map',
            	{projection:myProjection,
            	maxExtent: new OpenLayers.Bounds(-20037508, -20037508,
				20037508, 20037508.34),
				maxResolution: 156543.0339,
				units: 'm'}
            	 );
                        
		// =========== OSM Map ====================
            gmap = new OpenLayers.Layer.Google(
                "Google Streets", // the default
                {numZoomLevels: 20}
            	);
            ghyb = new OpenLayers.Layer.Google(
                "Google Hybrid",
                {type: google.maps.MapTypeId.HYBRID, numZoomLevels: 20}
            	);
            map.addLayers([gmap, ghyb]
            	);
            OSMlayer = new OpenLayers.Layer.OSM( "Open Street Map");
            map.addLayer(OSMlayer);
            map.setCenter(new OpenLayers.LonLat(lon,lat).transform(
                myProjection,
                map.getProjectionObject()
             ), zoom
             	);
             	
 		// =============== WMS (layer) ============
Layers.A5 = new OpenLayers.Layer.WMS("WMS - 35106-A5.tif",
      "http://geog485.unm.edu:8080/geoserver/s_cedillos/wms",
      {
      layers: "35106-A5",
      transparent: true
      }, {
      singleTile: true
    });
    map.addLayer(Layers.A5) ;
Layers.A6 = new OpenLayers.Layer.WMS("WMS - 35106-A6.tif",
      "http://geog485.unm.edu:8080/geoserver/s_cedillos/wms",
      {
      layers: "35106-A6",
      transparent: true
      }, {
      singleTile: true
    });
    map.addLayer(Layers.A6) ;
Layers.A5_CONT = new OpenLayers.Layer.WMS("WMS - 35106-A5_CONT.shp",
      "http://geog485.unm.edu:8080/geoserver/s_cedillos/wms",
      {
      layers: "35106-A5_CONT",
      transparent: true
      }, {
      singleTile: true
    });
    map.addLayer(Layers.A5_CONT) ;
Layers.A6_CONT = new OpenLayers.Layer.WMS("WMS - 35106-A6_CONT.shp",
      "http://geog485.unm.edu:8080/geoserver/s_cedillos/wms",
      {
      layers: "35106-A6_CONT",
      transparent: true
      }, {
      singleTile: true
    });
    map.addLayer(Layers.A6_CONT) ; 
Layers.tgr2006 = new OpenLayers.Layer.WMS("WMS - tgr2006se_bern_lka.shp",
      "http://geog485.unm.edu:8080/geoserver/s_cedillos/wms",
      {
      layers: "tgr2006se_bern_lka",
      transparent: false
      }, {
      singleTile: true
    });
    map.addLayer(Layers.tgr2006) ; 
         	
           	
           	
          

           			map.addControl(new OpenLayers.Control.LayerSwitcher() );
        		    map.addControl(new OpenLayers.Control.MousePosition() );
        		    

            }
          
            
        // =============== End of Initialization Function ============
        
    </script>
    <style type="text/css">
        #map {width:90%; height:100%}
    </style>
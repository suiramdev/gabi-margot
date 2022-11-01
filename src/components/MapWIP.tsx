import React from "react";
import Map, { Layer, NavigationControl, Source } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import circle from "@turf/circle";
import { FeatureCollection } from "geojson";

const latitude = 46.884681;
const longitude = -2.118506;

const geojson: FeatureCollection = {
  type: "FeatureCollection",
  features: [circle([longitude, latitude], 30, { units: "kilometers" })],
};

function MapWIP() {
  return (
    <Map
      initialViewState={{
        latitude,
        longitude,
        zoom: 7,
      }}
      style={{ width: "100%", height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken="pk.eyJ1Ijoic3VpcmFtZGV2IiwiYSI6ImNsOXljNGlkMDAyZjIzbm52dHhtN3V2aWEifQ.DsuQkJzkHd63OjVqfIEuig"
    >
      <NavigationControl />
      <Source type="geojson" data={geojson}>
        <Layer
          type="fill"
          paint={{
            "fill-color": "rgba(17,128,255,0.2)",
            "fill-outline-color": "rgb(17,128,255)",
          }}
        />
      </Source>
    </Map>
  );
}

export default MapWIP;

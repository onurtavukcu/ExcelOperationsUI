import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

export default function GoogleMaps(props) {
  const [markersData, setMarkersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "http://localhost:5005/ExcelOperationsEndPoints/GetRelatedCoordinate"
      )
      .then((response) => {
        const data = response.data;
        setMarkersData(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDduoYpSau-HfCuMTZwpxUYRPhxM7OnpPY",
  });

  if (!isLoaded || isLoading) return <div>Loading...</div>;

  return <Map markersData={markersData} />;
}

function Map({ markersData }) {
  const [mapInstance, setMapInstance] = useState(null);

  const center = { lat: 51.011257, lng: 9.014927 };

  const handleMapLoad = (map) => {
    setMapInstance(map);
  };

  const addMarkersEx = () => {
    return (
      !!mapInstance &&
      markersData.map((item, index) => (
        <Marker
          key={`markerKey_${index}`}
          position={{ lat: item.Item2, lng: item.Item1 }}
          options={{
            map: mapInstance,
            animation: window.google.maps.Animation.DROP,
          }}
        />
      ))
    );
  };

  return (
    <GoogleMap
      zoom={8}
      center={center}
      mapContainerClassName="map-container"
      onLoad={handleMapLoad}
    >
      {addMarkersEx()}
    </GoogleMap>
  );
}

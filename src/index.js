import ReactDOM from "react-dom";
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

function Map() {
  const key = ""; // PUT GMAP API KEY HERE
  const defaultLocation = {
    lat: 37.9755691,
    lng: 23.7361789
  };

  return (
    <LoadScript googleMapsApiKey={key}>
      <div>
        <div
          style={{
            width: "100%",
            height: 500,
            display: "flex"
          }}
        >
          <GoogleMap
            center={defaultLocation}
            zoom={18}
            mapContainerStyle={{ flex: 1 }}
          >
          </GoogleMap>
        </div>
      </div>
    </LoadScript>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Map />, rootElement);

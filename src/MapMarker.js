import React from "react";

import { InfoBox, Marker, OverlayView } from "@react-google-maps/api";

export default class MapMarker extends React.Component {
  state = {
    mapMarker: null
  };

  onLoad = mapMarker => {
    this.setState({
      mapMarker
    });
  };

  render() {
    const { clusterer, markerData } = this.props;
    const { mapMarker } = this.state;

    return (
      <Marker
        clusterer={clusterer}
        onLoad={this.onLoad}
        position={{
          lat: markerData.lat,
          lng: markerData.lng
        }}
      >
        {mapMarker && (
          <InfoBox
            anchor={mapMarker}
            options={{
              closeBoxURL: "",
              disableAutoPan: true
            }}
            position={{
              lat: markerData.lat,
              lng: markerData.lng
            }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div style={{ background: "white" }}>
              {"custom Infobox: " + markerData.id}
            </div>
          </InfoBox>
        )}
      </Marker>
    );
  }
}

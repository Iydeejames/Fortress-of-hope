import React, { useEffect } from 'react';

const ChicagoMap = () => {
  let map;

  useEffect(() => {
    const chicago = { lat: 41.85, lng: -87.65 };

    const createCenterControl = () => {
      const controlButton = document.createElement("button");
      // Set CSS for the control.
      controlButton.classList.add('buttonStyle');

      controlButton.textContent = "Center Map";
      controlButton.title = "Click to recenter the map";
      controlButton.type = "button";
      // Setup the click event listeners: simply set the map to Chicago.
      controlButton.addEventListener("click", () => {
        map.setCenter(chicago);
      });
      return controlButton;
    }

    const initMap = () => {
      map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: { lat: 49.496675, lng: -102.65625 },
      });

      var georssLayer = new window.google.maps.KmlLayer({
        url: "http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss",
      });
      georssLayer.setMap(map);

      // Create the DIV to hold the control.
      const centerControlDiv = document.createElement("div");
      // Create the control.
      const centerControl = createCenterControl(map);

      // Append the control to the DIV.
      centerControlDiv.appendChild(centerControl);
      map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(
        centerControlDiv
      );
    }

    if (!window.google) {
      // If Google Maps API not loaded, do nothing or handle accordingly
      console.error("Google Maps API not loaded!");
      return;
    }

    initMap();

  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <div id="map" style={{ height: "100%" }} />
    </div>
  );
};

export default ChicagoMap;
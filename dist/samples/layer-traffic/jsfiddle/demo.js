/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: -6.930135, lng: 107.615151 },
  });
  const trafficLayer = new google.maps.TrafficLayer();

  trafficLayer.setMap(map);
}

window.initMap = initMap;

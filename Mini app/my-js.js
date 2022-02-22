function TogglePopup(e) {
  enablePopup = !enablePopup;
  if (enablePopup) {
    e.classList.add("active-bg");
  } else {
    e.classList.remove("active-bg");
  }
}

function ToggleWayPoints(e) {
  enableAddWayPoints = !enableAddWayPoints;
  control.options.lineOptions.addWaypoints = enableAddWayPoints;

  control.addTo(map);

  if (enableAddWayPoints) {
    e.classList.add("active-bg");
  } else {
    e.classList.remove("active-bg");
  }
}
function ToggleRemoveWayPoints(e) {
  control.createMarker = function (i, wp) {
    return null;
  };
}

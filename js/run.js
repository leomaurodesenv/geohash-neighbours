/** 
 * ----------------------------------------------------------------
 * Map
 * ----------------------------------------------------------------
 */
function initMapIframe() {
    let mapSource = OpenStreetMap.getMapSource(0, 0, 10, 10),
        mapIframe = OpenStreetMap.getIframe('100%', '300px', 'map', mapSource);
    let mapContainer = document.getElementById("mapContainer");
    
    mapContainer.innerHTML = "";
    mapContainer.appendChild(mapIframe);
}

// Map distance
const distanceMapping = {
    1: 20,
    2: 15,
    3: 10,
    4: 5,
    5: 3,
    6: 1,
    7: 0.5,
    8: 0.15,
    9: 0.05
};

function changeMapSrc(lat, lon, purePrecision) {
    let distance = distanceMapping[purePrecision],
        mapSource = OpenStreetMap.getMapSource(lat, lon, distance, distance);
    let mapIframe = document.getElementById("map");
    mapIframe.src = mapSource;
}


/** 
 * ----------------------------------------------------------------
 * Form
 * ----------------------------------------------------------------
 */
function getFormValues() {
    return {
        "latitude": parseFloat(document.getElementById("mapInputLatitude").value),
        "longitude": parseFloat(document.getElementById("mapInputLongitude").value),
        "precision": parseFloat(document.getElementById("mapInputSize").value)
    };
}

function formHandler() {
    let formValues = getFormValues(),
        geohash = Geohash.encode(formValues.latitude, formValues.longitude, formValues.precision),
        neighbours = Geohash.neighbours(geohash);
    // Processing values
    changeMapSrc(formValues.latitude, formValues.longitude, formValues.precision);
    document.getElementById("mapHash").innerHTML = geohash;
    document.getElementById("mapHashNW").innerHTML = neighbours.nw;
    document.getElementById("mapHashN").innerHTML = neighbours.n;
    document.getElementById("mapHashNE").innerHTML = neighbours.ne;
    document.getElementById("mapHashW").innerHTML = neighbours.w;
    document.getElementById("mapHashC").innerHTML = geohash;
    document.getElementById("mapHashE").innerHTML = neighbours.e;
    document.getElementById("mapHashSW").innerHTML = neighbours.sw;
    document.getElementById("mapHashS").innerHTML = neighbours.s;
    document.getElementById("mapHashSE").innerHTML = neighbours.se;
}


/** 
 * ----------------------------------------------------------------
 * Init
 * ----------------------------------------------------------------
 */
(function(){
    initMapIframe();
    formHandler();
})();
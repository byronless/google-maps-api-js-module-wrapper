/**
 * @param {string} url
 * @return {undefined}
 */
function attachScript(url) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = url;
    document.head.appendChild(script);
}

let cachedGoogle = null;

/**
 * @param {string} apiKey
 * @param {boolean=} loadDrawingLib
 * @param {boolean=} loadGeometryLib
 * @param {boolean=} loadPlacesLib
 * @param {boolean=} loadVisualisationLib
 * @param {boolean=} experimentalChannel
 * @return {Promise}
 */
export function loadGoogleMaps(apiKey, loadDrawingLib = false, loadGeometryLib = false, loadPlacesLib = false
    , loadVisualisationLib = false, experimentalChannel = false) {
    if (window.google) {
        return Promise.reject(new Error('Maps API is already loaded.'));
    }

    const libs = [];
    if (loadDrawingLib) libs.push('drawing');
    if (loadGeometryLib) libs.push('geometry');
    if (loadPlacesLib) libs.push('places');
    if (loadVisualisationLib) libs.push('visualization');

    const urlParams = [];
    if (libs.length > 0) urlParams.push(`libraries=${libs.join(',')}`);
    if (experimentalChannel) urlParams.push('v=3.exp');
    urlParams.push(`key=${apiKey}`);
    const initMapGlobFunName = 'initMap';
    urlParams.push(`callback=${initMapGlobFunName}`);
    return new Promise(resolve => {
        window[initMapGlobFunName] = () => {
            cachedGoogle = window.google;
            resolve();
        };

        attachScript(`https://maps.googleapis.com/maps/api/js?${urlParams.join('&')}`);
    });
}

export const google = {
    /**
     * @type {google.maps}
     * */
    get maps() {
        return cachedGoogle.maps;
    }
};

/**
 * @external google.maps
 * @see https://developers.google.com/maps/documentation/javascript/reference
 */
/**
 * @interface
 * @typedef {Object} LatLng
 * @property {number} lat
 * @property {number} lng
 */
/**
 * @class google.maps.Marker
 * @memberOf google.maps
 */
/**
 * @class google.maps.Map
 * @memberOf google.maps
 */
/**
 * @class google.maps.BoundBox
 * @memberOf google.maps
 */
/**
 * @class google.maps.Polyline
 * @memberOf google.maps
 */
/**
 * @class google.maps.LatLngBounds
 * @memberOf google.maps
 */
/**
 * @class google.maps.Point
 * @memberOf google.maps
 */
/**
 * @class google.maps.InfoWindow
 * @memberOf google.maps
 */

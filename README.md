# google-maps-api-js-module-wrapper

### Initialisation:
```JavaScript
import {loadGoogleMaps} from './modules/googeMapsLoader.js';

 loadGoogleMaps('AIzaSyCP3BMIPLiwVh3J2deo1K6pnwiTLSHzIpk').then(() => {
    // Code will run after map API loading
 });
 ```

### Using:
```JavaScript
import {google} from './modules/googeMapsLoader.js';

const mapCfg = {
    zoom: 4,
    center: {
        lat: 51.48,
        lng: 0
    }
};
new google.maps.Map(document.getElementById('map-view'), mapCfg);
```

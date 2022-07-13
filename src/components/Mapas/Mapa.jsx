import React from "react";
import GoogleMaps from 'simple-react-google-maps';

function Mapa() {
    const latitud = -34.635451985174036;
    const longitud = -58.36474557294668;
  return (
    <div className="container">
        <GoogleMaps
            apiKey={""}
            style={{height: "800px", width: "740px"}}
            zoom={15}
            center={{
                lat: latitud,
                lng: longitud
            }}
            markers={[
                {lat: latitud, lng: longitud}
            ]}
        />
    </div>
  )
}

export default Mapa
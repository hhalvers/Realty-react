import React from 'react'
import GoogleMapReact from 'google-map-react'
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker} from "@fortawesome/free-solid-svg-icons";

import '../css/map.css'

const LocationPin = ({ text }) => (
  <div className="pin">
    <FontAwesomeIcon icon={faMapMarker} color="red" size="3x"/>
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Our Properties</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC3n8MOQTZ1brQ9z89zxTqAQX1UkgMhvr4' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default Map

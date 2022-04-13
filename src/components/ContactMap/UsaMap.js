import React, { useState } from 'react';
import Usa from '@svg-maps/usa';
import { SVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';
import 'leaflet/dist/leaflet.css';

import { Icon } from 'leaflet';
import icon1 from './images/tires.svg';
import { statesData } from './data';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import { map } from 'lodash';
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconurl: require('leaflet/dist/images/marker-icon.png'),
  shadowurl: require('leaflet/dist/images/marker-shadow.png'),
});
const Container = styled.div`
  display: flex;
  padding-top: 5rem;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;
const mapContainer = styled.div`
  width: 50vh;
  height: 90vh;
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vh;
  height: 100%;
  height: 90vh;
`;
const covidIcon = new Icon({
  iconUrl: icon1,
  iconSize: [25, 25],
});

function UsaMap() {
  const [stateCode, setStateCode] = useState('');
  const [stateName, setStateName] = useState('');
  const [activeCovid, setActiveCovid] = useState(null);
  function onLocationClick(event) {
    setStateCode(event.target.id);
    setStateName(event.target.getAttribute('name'));
    // console.log(event.target);
    console.log('Id', event.target.id);
    console.log('Name', event.target.getAttribute('name'));
  }

  const position = [51.505, -0.09];
  return (
    <>
      {/* <MapContainer center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> */}
      {/* <Container>
        <mapContainer>
          <SVGMap
            className="svgmap"
            map={Usa}
            onLocationClick={onLocationClick}
          />
        </mapContainer>
        <ListContainer>
          <p>{stateName}</p>
          <p>{stateCode}</p>
        </ListContainer>
      </Container> */}

      <LeafletMap></LeafletMap>
    </>
  );
}

const LeafletMap = (props: any): any => {
  const mapPositions = [37.7749, -122.4194];

  return (
    <></>
    // <MapContainer
    //   className="map"
    //   center={[mapPositions[0], mapPositions[1]]}
    //   zoom={5}
    //   style={{ width: '100%', height: '900px' }}
    // >
    //   <TileLayer
    //     attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    //     url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
    //   />
    //   {map(props.data, (data, i) => {
    //     return (
    //       <Marker
    //         key={i}
    //         position={[data.latitude, data.longitude]}
    //         onMouseOver={(e: any) => {
    //           e.target.openPopup();
    //         }}
    //         onMouseOut={(e: any) => {
    //           e.target.closePopup();
    //         }}
    //       >
    //         <Popup>
    //           A pretty CSS3 popup. <br /> Easily customizable.
    //         </Popup>
    //       </Marker>
    //     );
    //   })}
    // </MapContainer>
  );
};

export default LeafletMap;

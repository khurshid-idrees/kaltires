import TiresWareHouse from '../../images/TireWarehouse.jpeg';
import Post from '../Post';
import ReactLoading from 'react-loading';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from 'react-leaflet';
import { statesData } from './data';
import Usa from '@svg-maps/usa';
import { CheckboxSVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';
import axios from 'axios';
import covidData from './data.json';
import { Icon, SVG } from 'leaflet';
import icon1 from './images/tires.svg';
import {} from './ContactMapElement';
import UsaMap from './UsaMap';
import { officeLists } from './office.js';
import Markerwhatever from './markerlong';
const covidIcon = new Icon({
  iconUrl: icon1,
  iconSize: [25, 25],
});
const Container = styled.div`
  display: flex;

  flex-direction: row;

  height: 50%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const OfficeList = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  height: 50%;
  overflow: auto;
  background: whitesmoke;
`;
const Heading = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 0.5rem;
  background: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;
  &:hover {
    background: #e5e5e5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    shadow: 0px 0px 5px #000000;

    size: 1.5rem;
    transition: all 300ms ease 0ms;
  }
  &:link {
    color: black;
    text-decoration: none;
  }
  &:visited {
    color: #5e5555;
  }
  img {
    margin-right: 1rem;
  }
  h1 {
    font-size: 1.5rem;
  }
`;
const OfficeHeading = styled.div`
  background: #0076c8;
  color: white;
  font-size: 2.5rem;
  padding: 1rem;
  font-weight: bold;
`;
const MapInside = styled.div`
  flex: 3;
  width: 100%;
  height: 50%;
  zindex: 8;
  @media screen and (max-width: 768px) {
    height: 40% !important;
  }
`;
const Address = styled.div`
  margin: 0.2rem;
`;
const position = [51.505, -0.09];
function FlyToStore(office) {
  // const [position, setPosition] = useState(null);
  const lat = office.geometry.coordinates[1];
  const lng = office.geometry.coordinates[0];
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      // setPosition(e.latlng);
      map.flyTo([lat, lng], 14, { duration: 3 });
    },
  });
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default function ContactMap() {
  const [posts, setPosts] = useState([]);
  const [done, setDone] = useState(undefined);
  const [post1, setPost1] = useState([]);
  const maaxstring = 200;
  const x = 0;

  const discription = [];

  if (done === true) {
    const desc = post1.desc;

    console.log(desc);
    for (let i = 1; i < 4; i++) {
      var init = maaxstring * i + 1;
      if (i === 1) {
        init = 0;
      }
      var trimmedString = desc.toString().substr(x + init, maaxstring * i);
      discription.push(trimmedString);
    }
  }

  const [isOpen, setIsOpen] = useState(false);

  const [office, setoffice] = useState(null);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const center = [40.63463151377654, -97.89969605983609];
  const position = [51.505, -0.09];

  // function DisplayPosition({ map }) {
  //   const [position, setPosition] = useState(map.getCenter())

  //   const onClick = useCallback(() => {
  //     map.setView(center, zoom)
  //   }, [map])

  //   const onMove = useCallback(() => {
  //     setPosition(map.getCenter())
  //   }, [map])

  //   useEffect(() => {
  //     map.on('move', onMove)
  //     return () => {
  //       map.off('move', onMove)
  //     }
  //   }, [map, onMove])

  //   return (
  //     <p>
  //       latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
  //       <button onClick={onClick}>reset</button>
  //     </p>
  //   )
  // }
  return (
    <>
      <Container id="ContactMap">
        <OfficeList>
          <OfficeHeading>Our Locations</OfficeHeading>
          {officeLists.map((eachData) => (
            <Heading
              key={eachData.id}
              href={`https://www.google.com/maps/place/${eachData.geometry.coordinates}`}
              target="_blank"
              // click={FlyToStore(Markerwhatever(eachData))}
              // eventHandlers={{
              //   click: (e) => {
              //     Markerwhatever(e);
              //   },
              // }}
            >
              <img src={icon1} alt="" width={25} />
              <h1>{eachData.properties.name}</h1>,
              <Address>{eachData.properties.state}</Address>
              <Address>{eachData.properties.ZipCode}</Address>
            </Heading>
          ))}
          <ul class="list"></ul>
        </OfficeList>
        <MapInside id="map">
          <MapContainer
            center={[41.383963586538215, -103.39861412458325]}
            zoom={5}
            scrollWheelZoom={true}
          >
            <TileLayer
              url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${'pk.eyJ1Ijoic3NvYW0iLCJhIjoiY2wwc2w5dG01MGVrczNsb3BpdzlpMTNpbiJ9.KmtZJcORKZMCerqGFGQUuQ'}`}
            />

            {officeLists.map((eachData) => (
              <Marker
                key={eachData.id}
                position={eachData.geometry.coordinates}
                eventHandlers={{
                  click: () => {
                    setoffice(eachData);
                  },
                  hover: () => {
                    setoffice(eachData);
                  },
                }}
                icon={covidIcon}
              />
            ))}

            {office && (
              <Popup
                position={[
                  office.geometry.coordinates[0],
                  office.geometry.coordinates[1],
                ]}
                onClose={() => {
                  setoffice(null);
                }}
              >
                <div>
                  <h2>{office.properties.name}</h2>
                  <p>
                    {office.properties.address}, {office.properties.state},{' '}
                    {office.properties.ZipCode}
                  </p>

                  <p>Phone: {office.properties.phone}</p>
                  <p>
                    email: <a>{office.properties.email}</a>
                  </p>
                </div>
              </Popup>
            )}
          </MapContainer>
        </MapInside>
      </Container>
      ;{/* <UsaMap></UsaMap> */}
    </>
  );
}

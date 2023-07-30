import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import React from 'react';

const YandexMap = () => (
  <YMaps>
          <Map
            width="400px"
            height="300px"
            defaultState={{
              center: [54.344423, 48.593629],
              zoom: 16,
            }}
            style={{
              width:"400px",
              height:"330px",
              borderRadius: "10px",
              overflow: "hidden"
            }}
          >
            <Placemark geometry={[54.345170, 48.594249]} />
          </Map>
  </YMaps>


);
export default YandexMap
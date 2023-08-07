import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import React from 'react';


const YandexMap = () => {
  return (
    <div className='yandexMap'>
        <YMaps
          enterprise
          query={{
            apikey: '86e0b3d2-fa19-4ce1-9877-378d5d8c2e12',
          }}
        >
        <Map
          defaultState={{
            center: [54.344423, 48.593629],
            zoom: 16,
          }}
          style={{width: "100%", height:"100%"}}
        >
          <Placemark geometry={[54.345170, 48.594249]} />
        </Map>
      </YMaps>
      </div>
  );
};

export default YandexMap
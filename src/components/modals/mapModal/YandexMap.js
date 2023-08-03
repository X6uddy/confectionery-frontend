import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import React from 'react';


const YandexMap = () => {
  return (
    <div className='yandexMap'>
        <YMaps>
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


// const YandexMap = () =>
//   (
//     <YMaps>
//             <Map
//               defaultState={{
//                 center: [54.344423, 48.593629],
//                 zoom: 16,
//               }}
//               style={mapStyle}
//             >
//               <Placemark geometry={[54.345170, 48.594249]} />
//             </Map>
//     </YMaps>
//   );
export default YandexMap
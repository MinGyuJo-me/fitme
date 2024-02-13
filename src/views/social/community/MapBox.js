import React, { useEffect } from 'react';

function MapBox() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=6a5e15de70e02e5170488cc321958391&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.9780),
          level: 3,
        };
        new window.kakao.maps.Map(mapContainer, options);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
}

export default MapBox;

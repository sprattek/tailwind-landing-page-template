import React, { useState, useEffect } from 'react';
import Proximiio from 'proximiio-js-library';
import mapboxgl from 'mapbox-gl';

function Features() {
	Proximiio.Auth.loginWithToken(
    'token'
  ).then((res) => {
    console.log('Logged in', res);
    const map = new Proximiio.Map({
      allowNewFeatureModal: false,
      zoomIntoPlace: false,
      defaultPlaceId: '6c553b5b-257e-4a30-bc0e-e5dca5623bbe',
      showRasterFloorplans: true,
      isKiosk: true,
      fitBoundsPadding: 100,
      minFitBoundsDistance: 50,
      kioskSettings: {
        coordinates: [-84.33523516, 33.87391534],
        level: 0,
      },
      mapboxOptions: {
        zoom: 18.5,
        bearing: 10,
        pitch: 40,
      },
    });
    map.getPoiClickListener().subscribe(poi => {
      map.findRouteByIds(poi.id, null);
    });
  });

	return (
		<section className='relative'>
			{/* Section background (needs .relative class on parent and next sibling elements) */}
			<div
				className='absolute inset-0 bg-gray-100 pointer-events-none mb-16'
				aria-hidden='true'
			></div>
			<div className='absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2'></div>

			<div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
				<div className='pt-12 md:pt-20'>
					{/* Section header */}
					<div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'>
						<h1 className='h2 mb-4'>Explore the map</h1>
						<p className='text-xl text-gray-600'>
							Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
							cupidatat.
						</p>
					</div>

					{/* Section content */}
					<div>
						{/* Content */}
						<div
							className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6'
							data-aos='fade-right'
						>
							<div id='proximiioMap' style={{height: '600px'}}></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Features;

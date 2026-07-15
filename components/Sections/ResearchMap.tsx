"use client";

import { useEffect, useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
  useMap,
} 

from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";


// -----------------------------
// Custom Icons
// -----------------------------

const hazardIcon = new L.Icon({

  iconUrl: "/icons/hazard.png",

  iconSize: [42, 42],

  iconAnchor: [21,42],

});


const forestIcon = new L.Icon({

  iconUrl: "/icons/forest.png",

  iconSize: [42,42],

  iconAnchor: [21,42],

});



// -----------------------------
// Research Locations
// -----------------------------

const locations = [

  {

    name:"Udayapur",

    position:[26.85,86.55],

    category:"hazard",

    description:
    "Landslide susceptibility mapping using GIS, Remote Sensing and Frequency Ratio method.",

    tools:
    "ArcGIS | QGIS | SRTM DEM | Remote Sensing"

  },


  {

    name:"Katari",

    position:[26.70,86.25],

    category:"hazard",

    description:
    "Field-based landslide inventory and terrain assessment.",

    tools:
    "GPS | GIS | Field Survey"

  },


  {

    name:"Hetauda",

    position:[27.42,85.03],

    category:"forest",

    description:
    "Forest inventory and community forestry assessment during internship.",

    tools:
    "Forest Inventory | GIS | Mapping"

  },


  {

    name:"Sagarnath",

    position:[26.98,85.65],

    category:"forest",

    description:
    "Forest management and natural resource monitoring research.",

    tools:
    "Remote Sensing | Spatial Analysis"

  }


];



// -----------------------------
// Nepal View
// -----------------------------

function NepalView(){

  const map = useMap();


  useEffect(()=>{


    map.fitBounds([

      [26.3,80.0],

      [30.5,89.0]

    ]);


  },[map]);


  return null;

}




// -----------------------------
// Main Component
// -----------------------------

export default function ResearchMap(){


const [nepalBoundary,setNepalBoundary] =
useState<any>(null);



// Load Nepal boundary

useEffect(()=>{


fetch("/geojson/nepal.json")

.then(res=>res.json())

.then(data=>setNepalBoundary(data));


},[]);



return (

<div className="relative h-[650px] w-full overflow-hidden rounded-3xl border shadow-xl">


{/* Floating Statistics Card */}

<div

className="
absolute
z-[1000]
top-5
left-5
rounded-2xl
bg-white/90
backdrop-blur
p-5
shadow-lg
w-64
"

>


<h3 className="text-lg font-bold">

Research Metrics

</h3>



<div className="mt-4 space-y-3 text-sm">


<div>

<span className="font-bold">
211+
</span>

<br/>

Landslides mapped

</div>



<div>

<span className="font-bold">
15+
</span>

<br/>

GIS & Remote Sensing tools

</div>



<div>

<span className="font-bold">
5
</span>

<br/>

Research locations

</div>



<div>

<span className="font-bold">
3+
</span>

<br/>

Field surveys

</div>



</div>


</div>





<MapContainer


center={[28.2,84]}


zoom={7}


className="h-full w-full"


scrollWheelZoom={true}



>


<NepalView />



{/* Satellite Imagery */}

<TileLayer


url="
https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}
"


/>





{/* Nepal Boundary */}

{

nepalBoundary &&

<GeoJSON


data={nepalBoundary}


style={{

color:"#ffffff",

weight:3,

fillColor:"#22c55e",

fillOpacity:0.10

}}


/>

}





{/* Research Markers */}


{

locations.map((site)=>(


<Marker


key={site.name}


position={
site.position as [number,number]
}


icon={

site.category==="hazard"

?

hazardIcon

:

forestIcon

}



>


<Popup>


<div className="space-y-2">


<h3 className="text-lg font-bold">

{site.name}

</h3>



<p className="text-sm">

{site.description}

</p>



<p className="text-xs text-gray-500">

{site.tools}

</p>



</div>


</Popup>



</Marker>


))

}



</MapContainer>



</div>


);


}
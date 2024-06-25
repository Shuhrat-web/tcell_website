'use client'
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
// import MarkerIcon from 'leaflet/dist/images/marker-icon.png'
import MarkerIcon from '/public/oi_map-marker.png'
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { ILLetMapProps } from './lib/types/IMapsTypes'

const LLetMap = ({markers}:ILLetMapProps) => {
    return (
        <MapContainer style={{ height: "500px" }} zoom={13} center={[38.5358, 68.7791]} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                markers.map((mark,i) => (
                    <Marker key={i} icon={
                        new L.Icon({
                            iconUrl: MarkerIcon.src,
                            iconRetinaUrl: MarkerIcon.src,
                            iconSize: [25, 25],
                            iconAnchor: [12.5, 41],
                            popupAnchor: [0, -41],
                            shadowUrl: MarkerShadow.src,
                            shadowSize: [41, 41],
                        })
                    } position={[+mark.lan, +mark.lon]}>
                        <Popup>
                            <div>
                                Адресс: {mark.ref_point}<br/>
                                Режим раоботы: {mark.works_from} до {mark.works_to}<br/>
                                Выходной: {mark.day_off}
                            </div>
                        </Popup>
                    </Marker>
                ))
            }
        </MapContainer>
    )
}

export default LLetMap
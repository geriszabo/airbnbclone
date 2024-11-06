"use client";
import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon, LatLngExpression } from "leaflet";
import { findCountryByCode } from "@/utils/countries";
import { Country } from "world-countries";
import { Title } from "./Title";
import { CardCountryFlagAndName } from "../card/CardCountryFlagAndName";

const iconUrl =
  "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const markerIcon = icon({
  iconUrl: iconUrl,
  iconSize: [20, 30],
});

export interface PropertyMapProps {
  countryCode: Country["cca2"];
}

const PropertyMap = ({ countryCode }: PropertyMapProps) => {
  const defaultLocation = [51.555, -0.01];
  const location = findCountryByCode(countryCode)?.location;
  return (
    <div className="mt-4">
    <div className="mb-4 ">
      <Title text="Where you will be staying" />
      <CardCountryFlagAndName countryCode={countryCode} />
    </div>
    <MapContainer
      scrollWheelZoom={false}
      zoomControl={false}
      className="h-[50vh] rounded-lg relative z-0"
      center={(location || defaultLocation)as LatLngExpression}
      zoom={7}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" />
      <Marker
        position={(location || defaultLocation)as LatLngExpression}
        icon={markerIcon}
      ></Marker>
    </MapContainer>
  </div>
  );
};

//used default export so ts would be satisfied with the dynamic import of this comp in the page.tsx
export default PropertyMap;

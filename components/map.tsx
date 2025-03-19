"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

interface MapProps {
  center: { lat: number; lng: number }
  zoom: number
}

export default function Map({ center, zoom }: MapProps) {
  const mapRef = useRef<L.Map | null>(null)
  const markerRef = useRef<L.Marker | null>(null)

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([center.lat, center.lng], zoom)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current)

      const bikeIcon = L.icon({
        iconUrl: "/bike-icon.png", // Make sure to add this image to your public folder
        iconSize: [38, 38],
        iconAnchor: [19, 38],
      })

      markerRef.current = L.marker([center.lat, center.lng], { icon: bikeIcon }).addTo(mapRef.current)
    } else {
      mapRef.current.setView([center.lat, center.lng], zoom)
      markerRef.current?.setLatLng([center.lat, center.lng])
    }
  }, [center, zoom])

  return <div id="map" style={{ height: "100%", width: "100%" }} />
}


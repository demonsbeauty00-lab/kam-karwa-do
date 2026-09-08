// Converts GPS coordinates into a full, written address.
// Uses OpenStreetMap's free Nominatim service — no API key or billing
// setup needed. If it's ever swapped for Google Maps' Geocoding API,
// only this function needs to change.

export async function reverseGeocode(latitude, longitude) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1&zoom=18`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Reverse geocoding failed");
  }

  const data = await response.json();

  if (!data || !data.display_name) {
    throw new Error("No address found for this location");
  }

  return data.display_name;
}

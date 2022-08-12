/// <reference types="@types/google.maps" />

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addmarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
      map: this.googleMap,
      // label: user.name,
    });

    marker.addListener("click", () => {
      const infowindow = new google.maps.InfoWindow({
        // ariaLabel: "1",
        content: mappable.markerContent(),
        maxWidth: 300,
        minWidth: 200,
      });
      infowindow.open(this.googleMap, marker);
    });
  }
}

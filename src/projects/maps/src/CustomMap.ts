// 用于想要在地图上展示的 Class
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private readonly googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.querySelector(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }
  addMapMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}

import { name, address } from "faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";
  constructor() {
    this.name = name.findName();
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude())
    };
  }
  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}

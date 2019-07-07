import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { key } from "./key";

// 初始化 Google Map
const newScript = document.createElement("script");
newScript.src = `https://maps.googleapis.com/maps/api/js?key=${key}`;
document.body.appendChild(newScript);
newScript.onload = () => {
  const map = new CustomMap("#map");
  const zzh = new User();
  const company = new Company();
  map.addMapMarker(zzh);
  map.addMapMarker(company);
};

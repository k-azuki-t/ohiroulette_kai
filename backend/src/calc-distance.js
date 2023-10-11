const RADIUS = 6371;  // 地球の半径（近似値）
const RADIAN = Math.PI / 180;

const calcDistance = (lat1, lng1, lat2, lng2) => {
  lat1 *= RADIAN;
  lng1 *= RADIAN;
  lat2 *= RADIAN;
  lng2 *= RADIAN;

  let distance = Math.acos(Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1) + Math.sin(lat1) * Math.sin(lat2));
  distance *= RADIUS;
  distance = Math.round(distance * 1000);  // メートルに変換して四捨五入

  return distance;
}

export default calcDistance;

import http from '../utils/http';
import RideRecord from '../models/RideRecord';

const url = process.env.REACT_APP_BASE_URL;

export const getRides = async () => {
  return (await http.get<RideRecord[]>(`${url}/rides`))
    .map((item) => new RideRecord(item));
}

export default {
  getRides,
};

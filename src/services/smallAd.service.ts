import http from '../utils/http';
import SmallAd from '../models/SmallAd';

const url = process.env.REACT_APP_BASE_URL;

export const getSmallAds = async () => {
  return (await http.get<SmallAd[]>(`${url}/small_ads`))
    .map((item) => new SmallAd(item));
}

export default {
  getSmallAds,
};

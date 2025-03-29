import http from '../utils/http';
import SmallAd from '../models/SmallAd';

const url = `${process.env.REACT_APP_BASE_URL}/small_ads`;

export const getSmallAds = async () => {
  const result = await http.get<SmallAd[]>(url);
  if (result) return result.map((item) => new SmallAd(item));
  return [];
};

export default {
  getSmallAds,
};

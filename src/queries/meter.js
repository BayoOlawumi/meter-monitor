import Axios from "axios";
import API_CONSTANT_MAP from "../services/uri";

export const fetchAllMeterIDs = async () => {
  const res = await Axios.get(`${API_CONSTANT_MAP.meter_details}`);
  return res.data;
};

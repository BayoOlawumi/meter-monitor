import Axios from "axios";
import API_CONSTANT_MAP from "../services/uri";

export const fetchAllMeterIDs = async () => {
  const res = await Axios.get(`${API_CONSTANT_MAP.meter_details}`);
  return res.data;
};

export const fetchAllMetersByState = async (id, stateName) => {
  const res = await Axios.get(
    `${API_CONSTANT_MAP.meter_details}?state=${stateName}`
  );
  return res.data;
};

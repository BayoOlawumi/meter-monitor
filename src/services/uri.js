const BASE_URL = "https://sergfuta.herokuapp.com";

const METERS_INFO = `${BASE_URL}/meters-info`;
const LATEST_DATA = `${BASE_URL}/latest-data`;

const API_CONSTANT_MAP = {
  meters_id: `${METERS_INFO}/`,
  meter_details: `${LATEST_DATA}/`,
};

export default API_CONSTANT_MAP;

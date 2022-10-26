const BASE_URL = "http://api.bloomloadanalysis.ng/";

const METERS_INFO = `${BASE_URL}/new-meters-info`;
const LATEST_DATA = `${BASE_URL}/latest-data`;

const API_CONSTANT_MAP = {
  meters_id: `${METERS_INFO}/`,
  meter_details: `${LATEST_DATA}/`,
};

export default API_CONSTANT_MAP;

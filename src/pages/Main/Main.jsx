import React, { useState } from "react";
import "./styles.scss";
import CircleCard from "../../components/CircleCard/CircleCard";
import { Modal, Button } from "react-bootstrap";
import { useQuery } from "react-query";
import { fetchAllMeterIDs } from "../../queries/meter";
import moment from "moment";

function Main() {
  const [modalState, setModalState] = useState({
    isVisible: false,
    meter_name: "",
    lastActiveTime: "",
    current: 0,
    voltage: 0,
    frequency: 0,
    power_factor: 0,
    energy: 0,
  });

  const { data } = useQuery("meter_ids", fetchAllMeterIDs, {
    refetchInterval: 5 * 60 * 1000,
  });

  const meterClickHandler = (meter) => {
    setModalState({
      ...modalState,
      isVisible: true,
      meter_name: meter.meter_id,
      lastActiveTime: meter.timestamp,
      ...meter,
    });
  };

  return (
    <div className="main container">
      <div className="main-header">
        <p>METER MONITOR</p>
        <div className="meters row">
          {data?.length > 0 ? (
            data.map((meter, index) => {
              return (
                meter.meter_id && (
                  <CircleCard
                    key={index}
                    name={meter.meter_id}
                    timestamp={meter.timestamp}
                    isWorking={true}
                    onClick={() => meterClickHandler(meter)}
                  />
                )
              );
            })
          ) : (
            <div>
              <p>Loading...</p>
            </div>
          )}
        </div>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={modalState.isVisible}
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              {modalState.meter_name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Latest info</h6>
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>last active time</th>
                  <th>
                    <p>current (A)</p>
                  </th>
                  <th>
                    <p>voltage (V)</p>
                  </th>
                  <th>
                    <p>frequency (Hz)</p>
                  </th>
                  <th>
                    <p>power factor</p>
                  </th>
                  <th>
                    <p>energy (kWh)</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {moment(modalState.lastActiveTime).format(
                      "dddd, MMMM Do YYYY, h:mm:ss a"
                    )}
                  </td>
                  <td>
                    <p>{modalState.current}</p>
                  </td>
                  <td>
                    <p>{modalState.voltage}</p>
                  </td>
                  <td>
                    <p>{modalState.frequency}</p>
                  </td>
                  <td>
                    <p>{modalState.power_factor}</p>
                  </td>
                  <td>
                    <p>{modalState.energy}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => setModalState({ ...modalState, isVisible: false })}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Main;

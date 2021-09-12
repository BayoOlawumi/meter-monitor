import React from "react";
import "./style.scss";
// import { useQuery } from "react-query";
// import { fetchAllMeterIDs } from "../../queries/meter";
import { useHistory } from "react-router-dom";
import BoxCard from "../../components/BoxCard/BoxCard";

const dummy = [
  {
    name: "Ondo",
  },
  {
    name: "Osun",
  },
  {
    name: "Adamawa",
  },
  {
    name: "Lagos",
  },
  {
    name: "Oyo",
  },
];

const Main = () => {
  const history = useHistory();
  // const { data } = useQuery("meter_ids", fetchAllMeterIDs, {
  //   refetchInterval: 5 * 60 * 1000,
  // });

  const cardClickHandler = (stateName) => {
    history.push(`meters/${stateName}`);
  };

  return (
    <>
      <div className="meters row">
        {dummy?.length > 0 ? (
          dummy.map((state, index) => {
            return (
              state.name && (
                <BoxCard
                  key={index}
                  name={state.name}
                  // timestamp={meter.timestamp}
                  isWorking={true}
                  onClick={() => cardClickHandler(state.name)}
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
    </>
  );
};

export default Main;

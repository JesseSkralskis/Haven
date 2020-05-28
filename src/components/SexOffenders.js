import React from "react";

import { useQuery } from "react-query";
import { connect } from "react-redux";
import { setOffenders } from "../actions/offenders";
import LoadingPage from "./LoadingPage";

// import { fetchSexOffenders } from "../utilities/apiCalls";

function SexOffenders({ zip, setOffenders }) {
  return (
    <div>
      {/* <ReactQueryDevtools /> */}
      <Offenders setOffenders={setOffenders} zip={zip} />
    </div>
  );
}
const fetchSexOffenders = async theZip => {

  const response = await fetch(
    `https://completecriminalchecks.com/api/json/?apikey=6s4122z013xlvtphrnuge19&search=radius&miles=2&center=${theZip}`,
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }
  );
  console.log(response);

  const json = await response.json();
  return json.person.map(person => ({
    sex: person.sex,
    dob: person.dob,
    address: person.address,
    work: person.work,
    height: person.height,
    weight: person.weight,
    eyes: person.eyes,
    id: person.id,
    name: person.full_name,
    crime: person.crime,
    lat: person.latitude,
    lng: person.longitude,
    photo: person.image
      ? person.image
      : "https://www.achievesuccesstutoring.com/wp-content/uploads/2019/05/no-photo-icon-22.jpg-300x300.png"
  }));
};

const Offenders = ({ zip, setOffenders }) => {
  const theZip = zip;
  const { status, error, data } = useQuery(theZip, fetchSexOffenders, {
    refetchOnWindowFocus: false,
    
    
  });
  if (status === "loading")
    return (
      <div className="offenders__loading-container">
        <div className="offenders__loading-wrapper">
          <LoadingPage />
        </div>
      </div>
    );
  if (status === "error")
    return <div className="offenders__errror">there has been an error</div>;
  setOffenders(data);
  return (
    <div className="offenders__container">
      <h2>
        There are {data.length} Offenders within a 2 mile radius of this
        property. Please check the Map for handcuff icons to get more
        information.
      </h2>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setOffenders: (lat, lon) => dispatch(setOffenders(lat, lon))
});

export default connect(undefined, mapDispatchToProps)(SexOffenders);

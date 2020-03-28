import React from "react";
import { ReactQueryDevtools } from "react-query-devtools";
import { useQuery } from "react-query";
import { HTML5_FMT } from "moment";
// import { fetchSexOffenders } from "../utilities/apiCalls";

export default function SexOffenders() {
  return (
    <div>
      <ReactQueryDevtools />
      <Offenders />
    </div>
  );
}
const fetchSexOffenders = async zip => {
  const response = await fetch(
    `https://completecriminalchecks.com/api/json/?apikey=6s4122z013xlvtphrnuge19&search=radius&miles=5&center=${zip}`,
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
    id: person.id,
    name: person.full_name,
    crime: person.crime,
    lat: person.latitude,
    lng: person.longitude,
    photo: person.image ? person.image : "no image"
  }));
};

const Offenders = () => {
  const zip = "90221";
  const { status, error, data } = useQuery(zip, fetchSexOffenders);
  if (status === "loading") return <div>...loading</div>;
  if (status === "error") return <div>there has been an error</div>;

  return (
    <div>
      {data.map(person => (
        <div>
          <h5>{person.name}</h5>
          <h6>{person.crime}</h6>
        </div>
      ))}
    </div>
  );
};

import React from "react";
import Results from "./Results";
import uuid from "uuid";
import TheMap from "./TheMap";
import Header from "./Header";

export default function ResMap({ apiData, cordinates, history }) {
  console.log(apiData);
  console.log(cordinates);

  return (
    <div>
     
      <Header />
      <div className="resmap__container">
        {apiData.length > 0 && (
          <div className="search__scrollbar-removal">
            <div className="search__results">
              {apiData.length > 0 &&
                apiData.map(property => <Results key={uuid()} {...property} />)}
            </div>
          </div>
        )}

        <div className="search__map">
          {apiData.length > 0 && (
            <TheMap
              history={history}
              cordinates={cordinates}
              key={uuid()}
              locationData={apiData}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// import React from 'react'

// export default function SearchResults() {
//     return (
//       <div>
//         <div className="search__scrollbar-removal">
//           <div className="search__results">
//             {apiData.length > 0 &&
//               apiData.map(property => (
//                 <Results
//                   key={property.id}
//                   address={property.address}
//                   id={property.id}
//                   latitude={property.lat}
//                   longitude={property.lon}
//                   photo={property.photo}
//                   price={property.price}
//                   type={property.type}
//                   zip={property.zip}
//                 />
//               ))}
//           </div>
//         </div>

//         <div className="search__map">
//           {apiData.length > 0 && <TheMap key={uuid()} locationData={apiData} />}
//         </div>
//       </div>
//     );
// }

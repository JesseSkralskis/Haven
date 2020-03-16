export const attomZip = zip => {
  fetch(
    `https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address?postalcode=${zip}&page=1&pagesize=100`,
    {
      headers: {
        Accept: "application/json",
        APIKey: "1648c7bc3a560078fd059319ec0a1d7c"
      }
    }
  )
    .then(res => res.json())
    .then(res => {
      return res.property.map(property => ({
        country: property.address.country,
        oneLine: property.address.oneLine,
        propId: property.identifier.obPropId
      }));
    });
};

export const test = num => {
  return num + 2;
};

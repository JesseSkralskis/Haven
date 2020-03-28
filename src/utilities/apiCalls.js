export const realtorSearch = async (city, state) => {
  try {
    const response = await fetch(
      `https://realtor.p.rapidapi.com/properties/list-for-sale?sort=relevance&radius=10&city=${city}&offset=0&limit=20&state_code=${state}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "realtor.p.rapidapi.com",
          "x-rapidapi-key": "72335bc7bcmsh9cc768e8c93a992p140efbjsnc1630856fdcb"
        }
      }
    );
    const res = await response.json();
    return res.listings.map(listing => ({
      propStatus: listing.prop_status,
      propId: listing.property_id,
      listId: listing.listing_id,
      type: listing.prop_type,
      lat: listing.lat,
      lon: listing.lon,
      photo: listing.photo,
      address: listing.address,
      price: listing.price
    }));
  } catch (err) {
    console.log(err);
  }
};

export const detailsSearch = async (propId, listId, propStatus) => {
  try {
    const response = await fetch(
      `https://realtor.p.rapidapi.com/properties/detail?listing_id=${listId}&prop_status=${propStatus}&property_id=${propId}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "realtor.p.rapidapi.com",
          "x-rapidapi-key": "72335bc7bcmsh9cc768e8c93a992p140efbjsnc1630856fdcb"
        }
      }
    );
    const res = await response.json();
    return {
      photos: res.listing.photos.map(photo => photo.href),
      propertyType: res.listing.raw_prop_type,
      price: res.listing.price,
      beds: res.listing.beds,
      baths: res.listing.baths,
      sqrft: res.listing.sqft,
      yearBuilt: res.listing.year_built,
      listingAgent: res.listing.agent ? res.listing.agent.name : "no realtor",
      email: res.listing.agent ? res.listing.agent.email : "",
      phoneNumber: res.listing.agent && res.listing.agent.phone ? res.listing.agent.phone1.number : "",
      photoCentered:
        res.listing.agent && res.listing.agent.photo
          ? res.listing.agent.photo.href
          : "https://www.achievesuccesstutoring.com/wp-content/uploads/2019/05/no-photo-icon-22.jpg-300x300.png",
      description: res.listing.description,
      loanAmount: res.listing.mortgage.estimate.loan_amount,
      rate: res.listing.mortgage.estimate.rate,
      term: res.listing.mortgage.estimate.term,
      monthlyPayment: res.listing.mortgage.estimate.monthly_payment,
      principal_interest: res.listing.mortgage.estimate.principal_and_interest,
      monthPropertyTax: res.listing.mortgage.estimate.monthly_property_taxes,
      monthlyHomeInsurance:
        res.listing.mortgage.estimate.monthly_home_insurance,
      totalPayment: res.listing.mortgage.estimate.total_payment,
      downPayment: res.listing.mortgage.estimate.down_payment,
      listingDateValue: res.listing.client_display_text.listing_date_value,
      addressNeighborhood:
        res.listing.client_display_text.address_with_neighborhood,
      propertyDisplayName:
        res.listing.client_display_text.prop_type_display_name
    };
  } catch (err) {
    console.log(err);
  }
};

export const schoolSearch = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://realtor.p.rapidapi.com/schools/list-nearby?lon=${lon}&lat=${lat}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "realtor.p.rapidapi.com",
          "x-rapidapi-key": "72335bc7bcmsh9cc768e8c93a992p140efbjsnc1630856fdcb"
        }
      }
    );
    const res = await response.json();
    return {
      schools: res.schools.map(school => school),
      districts: res.districts.map(district => district)
    };
  } catch (err) {
    console.log(err);
  }
};

export const fetchSexOffenders = async (zip) => {
  const response = await fetch(
    `https://completecriminalchecks.com/api/json/?apikey=6s4122z013xlvtphrnuge19&search=radius&miles=5&center=${zip}`
  );

  const json = await response.json();
  return json;
  
}

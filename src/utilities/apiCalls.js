export const realtorSearch = async (city, state) => {
  try {
    const response = await fetch(
      `https://realtor.p.rapidapi.com/properties/list-for-sale?sort=relevance&radius=10&city=${city}&offset=0&limit=20&state_code=${state}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "realtor.p.rapidapi.com",
          "x-rapidapi-key": `${process.env.REACT_APP_RAPID_API_KEY}`
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
      photo:
        listing && listing.photo
          ? listing.photo
          : "https://www.achievesuccesstutoring.com/wp-content/uploads/2019/05/no-photo-icon-22.jpg-300x300.png",
      address: listing.address,
      price: listing.price,
      sqftRaw: listing.sqft_raw,
      beds: listing.beds,
      baths: listing.baths,
      sqft: listing.sqft
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
          "x-rapidapi-key": `${process.env.REACT_APP_RAPID_API_KEY}`
        }
      }
    );
    const res = await response.json();
    return {
      photos:
        res.listing && res.listing.photo !== undefined
          ? res.listing.photos.map(photo => photo.href)
          : "https://www.achievesuccesstutoring.com/wp-content/uploads/2019/05/no-photo-icon-22.jpg-300x300.png",
      lat: res.listing ? res.listing.address.lat : "no listing",
      lng: res.listing ? res.listing.address.long : "no listing",
      zip: res.listing ? res.listing.address.postal_code : "no listing",
      propertyType: res.listing ? res.listing.raw_prop_type : "nolisting",
      price: res.listing ? res.listing.price : "nolisting",
      beds: res.listing ? res.listing.beds : "nolisting",
      baths: res.listing ? res.listing.baths : "nolisting",
      sqrft: res.listing ? res.listing.sqft : "nolisting",
      yearBuilt: res.listing ? res.listing.year_built : "nolisting",
      listingAgent:
        res.listing && res.listing.agent
          ? res.listing.agent.name
          : "no realtor",
      email: res.listing && res.listing.agent ? res.listing.agent.email : "",
      phoneNumber:
        res.listing && res.listing.agent && res.listing.agent.phone1
          ? res.listing.agent.phone1.number
          : "no number",
      photoCentered:
        res.listing && res.listing.agent && res.listing.agent.photo
          ? res.listing.agent.photo.href
          : "https://www.achievesuccesstutoring.com/wp-content/uploads/2019/05/no-photo-icon-22.jpg-300x300.png",
      description: res.listing ? res.listing.description : "nolisting",
      loanAmount: res.listing
        ? res.listing.mortgage.estimate.loan_amount
        : "nolisting",
      rate: res.listing ? res.listing.mortgage.estimate.rate : "nolisting",
      term: res.listing ? res.listing.mortgage.estimate.term : "nolisting",
      monthlyPayment: res.listing
        ? res.listing.mortgage.estimate.monthly_payment
        : "nolisting",
      principal_interest: res.listing
        ? res.listing.mortgage.estimate.principal_and_interest
        : "nolisting",
      monthPropertyTax: res.listing
        ? res.listing.mortgage.estimate.monthly_property_taxes
        : "nolisting",
      monthlyHomeInsurance: res.listing
        ? res.listing.mortgage.estimate.monthly_home_insurance
        : "nolisting",
      totalPayment: res.listing
        ? res.listing.mortgage.estimate.total_payment
        : "nolisting",
      downPayment: res.listing
        ? res.listing.mortgage.estimate.down_payment
        : "nolisting",
      listingDateValue: res.listing
        ? res.listing.client_display_text.listing_date_value
        : "nolisting",
      addressNeighborhood: res.listing
        ? res.listing.client_display_text.address_with_neighborhood
        : "nolisting",
      propertyDisplayName: res.listing
        ? res.listing.client_display_text.prop_type_display_name
        : "nolisting"
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
          "x-rapidapi-key": `${process.env.REACT_APP_RAPID_API_KEY}`
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

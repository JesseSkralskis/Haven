import React from "react";

export default function DetailsFinacial({ details, numeral }) {
  function insertDecimal(num) {
    return (num / 100).toFixed(2);
  }
  return (
    <div className="details__menuResults-financialContainer">
      <h5>
        Estimated Principle Interest:{" "}
        <span>{numeral(details.principal_interest).format("$0,0")}</span>
      </h5>
      <h5>
        {" "}
        Estimated Loan Amount:{" "}
        <span> {numeral(details.loanAmount).format("$0,0")}</span>{" "}
      </h5>
      <h5>
        {" "}
        Estimated Property Tax:{" "}
        <span>{numeral(details.monthPropertyTax).format("$0,0")}</span>
      </h5>
      <h5>
        {" "}
        Estimated Monthly Home Insurance:{" "}
        <span>{numeral(details.monthlyHomeInsurance).format("$0,0")}</span>
      </h5>
      <h5>
        {" "}
        Estimated Monthly Mortgage Payment:{" "}
        <span>{numeral(details.monthlyPayment).format("$0,0")}</span>
      </h5>
      <h5>
        {" "}
        Estimated Monthly Mortgage Insurance:{" "}
        <span> {numeral(details.monthlyMortgageInsurance).format("$0,0")}</span>
      </h5>
      <h5>
        {" "}
        Estimated Down Payment:{" "}
        <span>{numeral(details.downPayment).format("$0,0")}</span>
      </h5>
      <h5>
        {" "}
        How Long Property Been Listed: <span>{details.listingDateValue}</span>
      </h5>
      <h5>
        Estimated Mortgage Rate:{" "}
        <span>{numeral(insertDecimal(details.rate)).format("%")}</span>
      </h5>
      <h5>
        Estimated Term: <span>{details.term}</span> years
      </h5>
    </div>
  );
}

//    fetch('https://api.spotify.com/v1/me', {
//                     headers: {
//                         'Authorization': `Bearer ${token}`

//                     }

//                 }).then(response => response.json()
//                 ).then(jsonResponse => {

//                     userId = jsonResponse.id;
//                     console.log(userId);
export default () => {
    

    fetch(
        "https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address?postalcode=95076&page=1&pagesize=100",
        {
            headers: {
                Accept: "application/json",
                APIKey: "1648c7bc3a560078fd059319ec0a1d7c"
            }
        }
    ).then(response => {
        console.log(response);
        const jsonResponse = response.json();
        return jsonResponse;
    }).then((jsonresponse) => {
        console.log(jsonresponse);
        

    })
}
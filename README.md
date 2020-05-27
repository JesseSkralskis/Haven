<p style="color: red; font-weight: bold">>>>>>  gd2md-html alert:  ERRORs: 0; WARNINGs: 0; ALERTS: 7.</p>
<ul style="color: red; font-weight: bold"><li>See top comment block for details on ERRORs and WARNINGs. <li>In the converted Markdown or HTML, search for inline alerts that start with >>>>>  gd2md-html alert:  for specific instances that need correction.</ul>

<p style="color: red; font-weight: bold">Links to alert messages:</p><a href="#gdcalert1">alert1</a>
<a href="#gdcalert2">alert2</a>
<a href="#gdcalert3">alert3</a>
<a href="#gdcalert4">alert4</a>
<a href="#gdcalert5">alert5</a>
<a href="#gdcalert6">alert6</a>
<a href="#gdcalert7">alert7</a>

<p style="color: red; font-weight: bold">>>>>> PLEASE check and correct alert issues and delete this message and the inline alerts.<hr></p>



                    Haven

My partner and I are looking for property to buy and I noticed all the real estate sites have the usual search features, but I found myself wanting to know “how safe is the neighborhood”? I decided to build Haven a real estate site with all the usual features but with the added ability to check for offenders in every neighborhood so before a user buys a property they know if the neighborhood is safe for children.

Haven is a real estate web application that allows a user to type in a city and get all the resulting properties for sale in the area. These results are sorted on a google map based on their respective latitude and longitude coordinates, as well as a list with all the properties information.



<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/Untitled-document0.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/Untitled-document0.png "image_tooltip")


<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/Untitled-document1.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/Untitled-document1.png "image_tooltip")


When a user finds a property they are interested in they can either click on the popup from the map or on any area on the list.  This will lead them to a detailed page about that specific property that comes with many different options about information as well as a zoomed in view of the neighborhood on the interior Google Map, with an icon showing the exact location. This page Also has an array of pictures of the interior of the house and an overview of the property. 



<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/Untitled-document2.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/Untitled-document2.png "image_tooltip")


Now the user can choose from 3 different categories of information: realtor information, financial information or information about the neighborhood. If the user chooses the neighborhood button they get two new buttons, one for schools and one for offenders. Pushing schools will immediately show all the schools on the local map as well as a list of them in the view box. When  the user hovers over the icon a box pops up with all the information about that school. When the user chooses offenders, similar to the schools buttons,  icons will be placed on the map of all the predators within a two mile radius of the house and once again by hovering over the icon all the information about that offender will be given.   



<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/Untitled-document3.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/Untitled-document3.png "image_tooltip")


<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/Untitled-document4.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/Untitled-document4.png "image_tooltip")




<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/Untitled-document5.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/Untitled-document5.png "image_tooltip")


<p id="gdcalert7" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/Untitled-document6.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert8">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/Untitled-document6.png "image_tooltip")


**Technology**

I created Haven using React.js, Redux, and many different API’s including Google Maps, criminal background, and different real estate apis. 

For the autocomplete search feature I implemented the PlacesAutoComplete GeoCodeByAddress, and GetLatLng components for react from Google. My real estate Api needed a city and state code as the input so I created a function that would take the value of the autocomplete search feature and break it into the needed parameters for my Api request. When this function is executed automatically the real estate Api is requested by using the UseEffect hook which creates an array of properties with all the needed information including latitude and longitude for each property. Now that I had the latitude and longitude data I could map through them and place them on a map using the react GoogleMap component. So from the original search I now had all I needed for the Map portion with all the properties as well as a list of the properties with the overview information. Now I needed to have the user be able to click the property to get the more specific details involving the property. I accomplished this using another api call with the house id being the input parameter, but I also needed the user to be able to click on the map pop up as well to get the same information. This required me to lift state from a lower component so I decided to implement Redux so I could store state and actions to dispatch in a global way and use them throughout the application as desired. I then needed to implement another Map  that showed the specific neighborhood of the selected property and feed it different latitude and longitude coordinates based on what the user decided so that the different icons with their respective over hover popup info boxes could be displayed. To get these different latitude and longitudes I needed to have the onClick of the school button make the request to the school api and if the user chose the offender button a request to the crime api would to be made. When these responses were completed I could then take the data and use it for information to be displayed, as well as coordinates to be passed to the Map so the icons would appear on the map. 

I used SASS for styling taking advantage of the ability to use variables and nested css. All my layouts were mainly created using CSS Grid and Flex. I made the site responsive using the auto fill(minmax) feature of css grid. As well as @media queries.

For API  calls I used fetch with async await. I also wanted to learn how to use React Query so used it for a few requests as well. 

**Potential Features to Add**

I found some other crime API’s that aI thought could be beneficial to the application. One was a crime Api that displayed all crime as a heat map overlay. I was going to implement it but they wanted too much money to use their API. I also would like to add filter features where a user can choose different parameters like price range, square feet etc. and the app would only display the data within the given ranges. 
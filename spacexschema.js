const fetch = require("node-fetch");

const requestOptions = {
  method: "GET",

  redirect: "follow"
};

const {
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt
} = require("graphql");

//Launch type
const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    rocket: { type: RocketType }
  })
});

const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    lau: {
      type: GraphQLList(LaunchType),
      resolve(parent, args) {
        return fetch("https://api.spacexdata.com/v3/launches", requestOptions)
          .then(response => response.json())
          .then(res => {
            console.log(res);
            return res;
          })

          .catch(error => console.log(error));
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});

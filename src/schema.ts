export const schema = `
type WeatherStation {
  id: ID!
  station_name: String!
  temperature: Float!
  co2: Float!
  humidity: Float!
  noise: Float!
  pressure: Float!
}

type Query {
  weatherStations: [WeatherStation!]!
}
`;

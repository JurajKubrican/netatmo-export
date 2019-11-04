import { getWeatherStations } from './api'
import { IResolvers, WeatherStation } from './generated/graphql'

const facadeWeatherStation = (input: any): WeatherStation[] => {
  console.log();
  return input.body.devices.map((device: any) => ({
    id: device._id,
    station_name: device.station_name,
    temperature: device.dashboard_data.Temperature,
    co2: device.dashboard_data.CO2,
    humidity: device.dashboard_data.Humidity,
    noise: device.dashboard_data.Noise,
    pressure: device.dashboard_data.Pressure
  }));
};

export const resolvers: IResolvers = {
  Query: {
    weatherStations: async () => {
      return facadeWeatherStation(await getWeatherStations());
    }
  }
};

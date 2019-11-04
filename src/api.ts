import FormData from 'form-data'
import fetch from 'node-fetch'

export const getWeatherStations = async () => {
  const clientId = process.env.NETATMO_CLIENT_ID;
  const clientSecret = process.env.NETATMO_CLIENT_SECRET;
  const username = process.env.NETATMO_USERNAME;
  const password = process.env.NETATMO_PASSWORD;

  const formData = new FormData();
  formData.append("grant_type", "password");
  formData.append("client_id", clientId);
  formData.append("client_secret", clientSecret);
  formData.append("username", username);
  formData.append("password", password);

  const authResponse = await fetch("https://api.netatmo.com/oauth2/token", {
    method: "POST",
    body: formData
  });

  const { access_token } = await authResponse.json();

  const response = await fetch("https://api.netatmo.com/api/getstationsdata", {
    headers: {
      Authorization: "Bearer " + access_token
    }
  });

  return response.json();
};

import RequestService from "./RequestService";

const requestService = new RequestService();

export const makeGetRequest = async (url) => {
  const requestParameters = {
    type: "GET",
    url,
  };
  return await makeRequest(requestParameters);
};

export const makePostRequest = async (url, payload) => {
  const requestParameters = {
    type: "POST",
    url,
    payload,
  };
  return await makeRequest(requestParameters);
};

export const makeLoginRequest = async (url, payload) => {
  const requestParameters = {
    type: "POST",
    url,
    payload,
  };
  return await makeRequest(requestParameters);
};

const makeRequest = async (requestParameters) => {
  return requestService
    .createPromise(requestParameters)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return console.error(error);
    });
};

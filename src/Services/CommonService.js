import React, { Component } from "react";
import { makeGetRequest, makePostRequest } from "./Request";

class CommonService extends Component {
  getRouterAktuell = async () => {
    return await makeGetRequest("/ExcelOperationsEndPoints/GetSomeDataV2");
  };

  getZugangsdatenAktuell = async () => {
    return await makeGetRequest(
      "/ExcelOperationsEndPoints/GetSomeDataV4Pageging"
    );
  };

  authenticateReq = (payload) => {
    return makePostRequest("/Authenticate", payload);
  };
}

export const commonServiceModule = new CommonService();

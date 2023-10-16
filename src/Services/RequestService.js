import Service from "./BaseService";

class RequestService {
  constructor() {
    this.authInfo = localStorage.getItem("token") ?? null;
  }
  createPromise = async (requestParameters) => {
    let promise = new Promise(() => {});
    let service = new Service(this.authInfo);

    switch (requestParameters?.type) {
      case "POST":
        promise = service.post(
          requestParameters?.url,
          requestParameters?.payload
        );
        break;
      case "GET":
        promise = service.getService(requestParameters);
        break;
      //   case "PUT":
      //     promise = service.put(
      //       requestParameters?.url,
      //       requestParameters?.payload
      //     );
      //     break;

      //   case "DELETE":
      //     promise = service.delete(requestParameters?.url);
      //     break;
      //   case "UPLOAD":
      //     promise = service.upload(
      //       requestParameters?.url,
      //       requestParameters?.payload,
      //       requestParameters?.onUploadProgress
      //     );
      // break;
      default:
        break;
    }
    return promise;
  };
}

export default RequestService;

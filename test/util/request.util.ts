import * as request from "request";

type RequestMethod = "get" | "post" | "put" | "delete";

export class RequestUtil {
  constructor(private requestLib: typeof request = request) {}

  sendRequest(
    method: RequestMethod,
    url: string,
    options: request.CoreOptions = {},
  ) {
    return new Promise<request.Response>((resolve, reject) => {
      this.requestLib[method](
        {
          url,
          json: true,
          ...options,
        },
        (err, res) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(res);
        },
      );
    });
  }

  get(url: string, options?: request.CoreOptions) {
    return this.sendRequest("get", url, options);
  }

  post(url: string, body: any, options?: request.CoreOptions) {
    return this.sendRequest("post", url, {
      body,
      ...options,
    });
  }
}

const httprequest = async (url, method, params = {}, isMultipart) => {
  let options = {
    method,
  };

  if (!isMultipart) {
    options.headers = {
      "Content-Type": "application/json",
    };
  }
  switch (method) {
    case "GET":
      url += `?${new URLSearchParams(params).toString()}`;
      break;
    default:
      options.body = JSON.stringify(params);
      break;
  }
  return await (await fetch(url, options)).json();
};

export default httprequest;

const httprequest = async (url, method, params = {}, isMultipart) => {
  let options = {
    credentials: 'include',
    method,
  };

  switch (method) {
    case "GET":
      url += `?${new URLSearchParams(params).toString()}`;
      break;
    default:
      options.body = JSON.stringify(params);
      break;
  }

  if (!isMultipart) {
    options.headers = {
      "Content-Type": "application/json",
    };
  }

  if (isMultipart) {
    options.body = params;
  }
  return await (await fetch(url, options)).json();
};

export default httprequest;

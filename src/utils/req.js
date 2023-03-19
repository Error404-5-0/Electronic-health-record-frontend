const getToken = () => {
  if (localStorage.getItem("patientToken")) {
    return `patientToken=${localStorage.getItem("patientToken")}`;
  } else if (localStorage.getItem("doctorToken")) {
    return `doctorToken=${localStorage.getItem("doctorToken")}`;
  } else {
    return "";
  }
};
const httprequest = async (url, method, params = {}) => {
  let options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
    crediantials: "include",
  };
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

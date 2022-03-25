import { GET_VALUE_DOMAIN } from "../constants/constants";

export const GetValue = () => {
  const config = {
    method: "GET",
    redirect: "follow"
  };

  return fetch(GET_VALUE_DOMAIN, config)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return null;
      }
    })
    .catch((err) => err);
};

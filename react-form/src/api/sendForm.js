import axios from "axios";

const successResult = { ok: false, error: undefined };
const errorResult = { ok: false, error: "some error" };

export const sendFormMock = (data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const now = Date.now();
      resolve(now % 2 ? successResult : errorResult);
    }, 1000);
  });
};

export const sendForm = async (data) => {
  try {
    const res = await axios.post("backend-url/form", data);
    return { ok: res.ok, error: res.ok ? undefined : res.error };
  } catch (e) {
    return { ok: false, error: e };
  }
};

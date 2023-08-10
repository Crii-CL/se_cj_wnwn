<<<<<<< HEAD
const baseUrl =
  process.env.NODENV === "production" ? "" : "http://localhost:3001";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error ${res.status}`);
  }
};
=======
export default function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error${res.status}`);
}
>>>>>>> 7a00afbc5bdda987d39ed472acc3ae169bf45690

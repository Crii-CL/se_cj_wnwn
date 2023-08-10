export default function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error${res.status}`);
}

//GET the Data from API(RECEIVED)
export function getItemList() {
  return fetch("http://localhost:3333/list").than((data) => data.json());
}

//SET the Data from API(SEND)
export function setItem(item) {
  return fetch("http://localhost:3333/list", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ item }),
  }).then((data) => data.json());
}

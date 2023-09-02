const API_KEY = "sk-sz9n64dc68858abac1892";

export const getPlants = () => {
  return fetch(
    `https://perenual.com/api/species-list?page=1&key=${API_KEY}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Sorry server error plants...");
    }
  });
};

export const getIndoorPlants = () => {
  return fetch(
    `https://perenual.com/api/species-list?key=${API_KEY}&indoor=1`
  ).then((res) => {
    if(res.ok) {
      return res.json()
    } else {
      throw new Error("Sorry server error retrieving indoor plants...")
    }
  })
}

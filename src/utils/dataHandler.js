import axios from 'axios';

class DataHandler {
  async getData() {
   try {
     console.log("entered")
     const apiKey = 'cbf5f6b7-1b5b-4add-a089-1eff3393613b';
     const apiLink = 'https://api.harvardartmuseums.org/image?size=1&apikey='+apiKey
     const response = fetch(apiLink)
      .then(response => response.json())
      .then((responseJson) => {
        return responseJson.records[0].baseimageurl;
      })
   } catch(err) {
     console.log("Error fetching data -------", err);
   }
  }
}

const dataHandler = new DataHandler();

export default dataHandler;
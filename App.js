import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "",
      loaded: false,
    };
  }

  componentDidMount() {
    try {
     const apiKey = 'cbf5f6b7-1b5b-4add-a089-1eff3393613b';
     const response = fetch('https://api.harvardartmuseums.org/image?size=1&apikey='+apiKey)
      .then(response => response.json())
      .then((responseJson) => {
        imageLink = 'https://ids.lib.harvard.edu/ids/view/' + responseJson.records[0].imageid
        this.setState({link: imageLink, loaded: true});
        console.log("state is set", this.state.link, this.state.loaded, responseJson.records[0])
        return true;
      })
   } catch(err) {
     console.log("Error fetching data -------", err);
   }
  }

  render() {
    const { link, loaded } = this.state;

    console.log("state", this.state)
    if (loaded) {
      console.log("link", link)
      return(
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: link }} title="Image"/> 
        </View>
      );
    } else {
      return(
        <View style={styles.container}>
          <Text>Image Loading</Text>
        </View>
      );
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 500,
    height: 500,
  },
});

export default App;

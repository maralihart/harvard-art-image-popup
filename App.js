import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "",
      loaded: false,
      imageId: 0,
    };
  }

  render() {
    const { link, loaded } = this.state;
    if (loaded) {
      return(
        <View style={styles.container}>
          <Button onPress={this.removeImage} title="Remove Image" />
          <Image style={styles.image} source={{ uri: link }} title="Image"/> 
        </View>
      );
    } else {
      return(
        <View style={styles.container}>
          <Button onPress={this.generateImage} title="Generate Image" />
        </View>
      );
    }
  }

  generateImage = () => {
    const apiKey = 'cbf5f6b7-1b5b-4add-a089-1eff3393613b';
    const response = fetch('https://api.harvardartmuseums.org/image?size=1&apikey='+apiKey)
      .then(response => response.json())
      .then((responseJson) => {
        const imageId = responseJson.records[0].imageid
        const imageLink = 'https://ids.lib.harvard.edu/ids/view/' + imageId
        this.setState({link: imageLink, loaded: true, imageId: imageId});
        console.log("state is set", this.state.link, this.state.loaded, responseJson.records[0])
      }).catch(err => { console.log("Error fetching data -------", err) });
  }

  removeImage = () => {
    this.setState({loaded: false});
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

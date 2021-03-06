import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';


export default class Pin extends Component {
  render(){
    return(
      <View style={styles.PinContainer}>

        <View style={styles.PinHeader}>
          <View style={styles.UtilityNav}>
            <Image source={require('./util/icons/angle-pointing-to-left.png')} />
            <Image source={require('./util/icons/Heart.png')} />
            <Image source={require('./util/icons/paper-plane.png')} />
            <Image source={require('./util/icons/more.png')} />
          </View>
          <View style={styles.PinButtonContainer}>
            <View style={styles.PinButton}>

              <Text style={styles.PinButtonText}>Save</Text>
            </View>
          </View>
        </View>

        <View style={styles.PinContent}>
          <Text style={styles.ImagePlaceholder}>
            <Image
              style={{width: 360, height: 190}} source={require('./util/icons/maxresdefault.jpg')} />
          </Text>
        </View>

        <View style={styles.PinMeta}>
          <View style={styles.PinMetaTextContainer}>
            <Text style={styles.PinMetaText}>Saved from</Text>
            <Text style={[styles.PinMetaText, styles.TextBold]}>website.com</Text>
          </View>

          <View style={styles.PinButtonContainer}>
            <View style={[styles.PinButton, styles.UtilityButton]}>
              <Text style={[styles.PinButtonText, styles.UtilityButtonText]}>Visit</Text>
            </View>
          </View>
        </View>

        <View style={styles.PinUser}>
          <View style={styles.PinUserAvatar}>

          </View>
          <View style={styles.PinUserContainer}>
            <Text style={styles.PinUserText}>
              <Text style={styles.TextBold}>
                User Name
              </Text>
              <Text> saved to </Text>
              <Text style={styles.TextBold}>
                Space
              </Text>
            </Text>
            <Text style={styles.PinUserText}>Description Lorem Ipsum</Text>
          </View>
        </View>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  PinContainer: {
    flex: 1,
    alignSelf: 'stretch'
  },
  PinHeader: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flex: 1,
    padding: 8
  },
  UtilityNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  PinButton: {
    flexDirection: 'row',
    backgroundColor: 'red',
    padding: 6,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60

  },
  PinButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400'
  },
  PinButtonContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  PinContent: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,

  },
  ImagePlaceholder: {
    backgroundColor: 'red',
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 6,
  },
  PinMeta: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 16,
    paddingRight: 8,
    paddingBottom: 16,
    paddingLeft: 8
  },
  PinMetaTextContainer: {

  },
  UtilityButton: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60
  },
  UtilityButtonText: {
    color: 'black',
    fontWeight: '400'
  },
  PinUser: {
    flex: 5,
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 8
  },
  PinUserAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'black',
    marginRight: 8
  },
  TextBold: {
    fontWeight: 'bold'
  }
})

import React from 'react';
import {View, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';

import {Block, TextView, Button} from './components';
import {Colors} from './color';
const W = Dimensions.get('window').width;
const styles = StyleSheet.create({
  oval: {
    position: 'absolute',
    width: W + W / 2,
    height: W + W / 2,
    backgroundColor: Colors.gray,
    borderRadius: W + W / 2,
    alignSelf: 'center',
    top: -W * 0.8,
  },
  can: {
    // position: 'absolute',
    // alignSelf: 'center',
    marginTop: 100,
    // width: W,
  },
  shadow: {
    width: 10,
    height: 10,
    transform: [
      {
        scaleX: 2,
      },
    ],
    backgroundColor: 'rgba(0,0,0,0.25)',
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: '#000',
    shadowOffset: {height: 2, width: -4},
    borderRadius: 100,
  },
  container: {
    marginTop: 20,
    padding: 20,
  },
  desc: {
    lineHeight: 24,
    fontWeight: '400',
    marginTop: 5,
  },
  btnCan: {
    backgroundColor: Colors.gray1,
    padding: 10,
    borderRadius: 8,
  },
  imgCan: {
    tintColor: 'gray',
  },
  textCan: {
    color: 'gray',
    position: 'absolute',
    alignSelf: 'center',
    top: 30,
  },
  wrapCan: {
    alignItems: 'stretch',
  },
  btnBuyNow: {
    marginTop: 15,
  },
  flex: {
    flex: 1,
  },
});

const CanItem = ({size, isZoom, middle}) => {
  return (
    <Block
      middle
      centered
      shadow
      style={[
        styles.wrapCan,
        middle && {
          borderWidth: 2,
          borderColor: Colors.main_bold,
          marginHorizontal: 10,
          borderRadius: 8,
        },
      ]}>
      <Button
        style={[
          styles.btnCan,
          isZoom && {padding: 15, backgroundColor: Colors.button_fill},
        ]}
        shadow>
        <Image
          style={[
            styles.imgCan,
            isZoom && {tintColor: Colors.main_bold, transform: [{scale: 1.1}]},
          ]}
          source={require('./images/Can.png')}
        />
        <TextView
          style={[
            styles.textCan,
            isZoom && {top: 35, color: Colors.main_bold},
          ]}>
          {size}
        </TextView>
      </Button>
    </Block>
  );
};

const HomeScreen = () => {
  return (
    <ScrollView style={styles.flex}>
      <Block block color={Colors.main}>
        <Block style={styles.oval} />
        <Block>
          <Block style={styles.can} middle>
            <Image source={require('./images/pepsi.png')} />
            <Block style={[styles.shadow, {marginRight: 40, marginTop: 20}]}>
              <Block style={styles.shadow}>
                <Block style={styles.shadow}>
                  <Block style={styles.shadow} />
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
        <Block style={styles.container}>
          <TextView h3 color={Colors.white}>
            Classic Diet Pepsi
          </TextView>
          <TextView color={Colors.white} style={styles.desc}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no
          </TextView>
          <Block>
            <Block direction="row" justifyContent="space-between" middle>
              <Block>
                <TextView h3 color={Colors.white}>
                  $ 8.45
                </TextView>
              </Block>
              <Block direction="row">
                <CanItem size="S" />
                <CanItem size="M" middle isZoom />
                <CanItem size="L" />
              </Block>
            </Block>
          </Block>
          <Button
            style={styles.btnBuyNow}
            color={Colors.white}
            shadow
            padding={12}
            borderRadius={30}>
            <TextView center h5 color={Colors.main_bold}>
              Buy now
            </TextView>
          </Button>
        </Block>
      </Block>
    </ScrollView>
  );
};

export default HomeScreen;

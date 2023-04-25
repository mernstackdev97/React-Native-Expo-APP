import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../../components/_ui/Button';

const Home: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <View
        style={{
          width: '100%',
          height: 250,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* <Text style={styles.text}>LOGO</Text> */}
        <Image source={require('../../assets/logo.png')} style={{ width: '100%', height: 135 }} />
      </View>
      <Text style={styles.text}>Find Shift work to suit your lifestyle</Text>
      <View style={styles.buttonGroup}>
        <Button>Login as a Shiftseeker</Button>
        <Button addStyles={{ marginTop: 10 }}>Login as a Employer</Button>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#3f3f3f',
    paddingVertical: 50,
    paddingHorizontal: 60,
    marginHorizontal: 'auto',
  },
  text: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
  buttonGroup: {
    flex: 1,
    justifyContent: 'center',
  },
});

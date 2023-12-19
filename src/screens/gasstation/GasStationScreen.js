import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SearchInput } from '../../components';
import { SearchIcon,AddIcon } from '../../assets/svgs';
import { colors } from '../../utils/theme';
const GasStationScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Marker Title"
          description="Marker Description"
        />
      </MapView>

      <View style={styles.searchContainer}>
        <SearchInput
          placeholder="Search"
          icon={<SearchIcon />}
          inputMode="text"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
         <AddIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  searchContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
  },
  buttonContainer: {
    position: 'absolute',
    right: 16,
    bottom:20
  },
  button: {
    backgroundColor: colors.primaryColor, 
    padding: 10,
height:'54@',
width:'54@s',
borderRadius:50,

  },
});

export default GasStationScreen;

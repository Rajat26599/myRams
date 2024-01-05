import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, SectionList } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import Icon from 'react-native-vector-icons/FontAwesome';
// import FontAwesome from '@expo/vector-icons/FontAwesome';

import AllScreen from './screens/AllScreens';
import PayeeScreen from './screens/PayeeScreen';
import BillerScreen from './screens/BilllerScreen';
import NewPayeeScreen from './screens/NewPayeeScreen';

import AddContactMenu from './utils/AddContactMenu';

import colors from './colors';

const Stack = createNativeStackNavigator();
const Tab = createNativeStackNavigator();


const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Contacts"
          component={App}
        />
        <Stack.Screen 
          name="NewPayee"
          component={NewPayeeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function Home() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="All" component={AllScreen} />
      <Tab.Screen name="Payee" component={PayeeScreen} />
      <Tab.Screen name="Biller" component={BillerScreen} />
    </Tab.Navigator>
  );
}

const App = ({ navigation }) => {
  const [ tabs, setTabs ] = useState([
    { title: 'All', name: 'dollar', active: true },
    { title: 'Payee', name: 'user-o', active: false },
    { title: 'Biller', name: 'money', active: false },
  ]) 
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setIsMenuOpen(!isMenuOpen)}>
          <Text style={{fontSize:35}}>+</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, isMenuOpen]);

  useEffect(() => {
    const FontAwesome = require('@expo/vector-icons/FontAwesome');
  })

  const handleSetTabs = (title) => {
    var newTabs = [];
    for(var tab of tabs){
      if(tab.title==title) newTabs.push({...tab, active: true})
      else newTabs.push({...tab, active: false})
    }
    setTabs(newTabs);
    navigation.navigate(title);
  }

  return (
    <View style={styles.container}>
      <View style={styles.topNavbar}>
        {
          tabs.map((tab, index) => {
            return (
              <TouchableOpacity style={{...styles.tab, borderBottomWidth: tab.active?2:0}} key={index} onPress={() => handleSetTabs(tab.title)}>
                {/* <FontAwesome name={tab.name} size={20} color="black" /> */}
                <Text style={styles.tabTitle}>{tab.title}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
      <Home />
      
      {isMenuOpen && <AddContactMenu navigation={navigation} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNavbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightBlueBg,
    justifyContent: 'space-between',
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '33.33%',
    height: 60,
    borderBottomColor: colors.primary,
  },
  tabTitle: {
    fontSize: 15,
  },
  screens: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default MyStack;
import { View, StyleSheet, SectionList, SafeAreaView, Text } from 'react-native';
import colors from '../colors';

const PayeeScreen = () => {

    const DATA = [
      {
        title: 'Main dishes',
        data: ['Pizza', 'Burger', 'Risotto'],
      },
      {
        title: 'Sides',
        data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
      },
      {
        title: 'Drinks',
        data: ['Water', 'Coke', 'Beer'],
      },
      {
        title: 'Desserts',
        data: ['Cheese Cake', 'Ice Cream'],
      },
    ];
  
    const renderSeparator = () => {
      return <View style={{height:1, backgroundColor:colors.lightBlueBg}}></View>
    }
  
    return <SafeAreaView style={styles.mainScreenContainer}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.sectionItem}>
            <Text style={styles.sectionTitle}>{item}</Text>
            <Text style={styles.sectionSubTitle}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  }

  const styles = StyleSheet.create({
    mainScreenContainer: {
        backgroundColor: 'white',
    },
    sectionHeader: {
        backgroundColor: '#eee',
        paddingHorizontal: 20,
      },
      sectionTitle: {
        paddingHorizontal: 20,
        color: colors.primary,
        fontSize: 18,
      },
      sectionSubTitle: {
        paddingHorizontal: 20,
      },
      sectionItem: {
        paddingVertical: 20,
      }
  })

  export default PayeeScreen;
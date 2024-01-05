import { View, StyleSheet, SectionList, SafeAreaView, Text } from 'react-native';
import colors from '../colors';

const AllScreen = () => {
    const arr = ['Pizza', 'Burger', 'Risotto', 'French Fries', 'Onion Rings', 'Fried Shrimps', 'Water', 'Coke', 'Beer', 'Cheese Cake', 'Ice Cream']
    arr.sort();
    var DATA = [];
    var firstLetter = arr[0][0];
    var data = [];
    for(var item of arr){
        if(item[0]!=firstLetter){
            DATA.push({title:firstLetter, data:data});
            firstLetter = item[0];
            data = [];
        }
        data.push(item); 
    }

  
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

  export default AllScreen;
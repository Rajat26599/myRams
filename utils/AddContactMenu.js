import { View, SafeAreaView, Text, FlatList } from 'react-native';

const AddContactMenu = ({navigation}) => {
    return (
      <View style={{height:'50%', flexDirection:'column-reverse'}}>
      <SafeAreaView style={{height: 150, backgroundColor: 'white'}}>
        <Text style={{padding:10, color:'gray'}}>Add New Contact</Text>
        <FlatList
          data={[
            {key: '+ Add Payee'},
            {key: '+ Add Biller'},
          ]}
          renderItem={({item}) => <Text onPress={() => navigation.navigate('NewPayee')} style={{padding:10, fontSize:16, fontWeight:'bold', color:'gray'}}>{item.key}</Text>}
        />
      </SafeAreaView>
      </View>
    )
}

export default AddContactMenu;
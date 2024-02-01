import {
  StyleSheet,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import AppColors from '../../utils/colors';
import SectionTitle from '../../components/ui/sectionTitle';
import SectionDescription from '../../components/ui/sectionDescription';
import Button from '../../components/ui/button';
import {useNavigation} from '@react-navigation/native';
import {TABMENU} from '../../utils/routes';
import TabNavigator from '../../router/tabNavigator';

const SetUpPhoto = ({route}) => {
  const [photo, setPhoto] = useState(null);
  const navigation = useNavigation();
  const phone = route?.params?.phone;
  const name = route?.params?.name;
  const surname = route?.params?.surname;

  const userRegister = () => {
    const form = {
      name: name,
      surname: surname,
      photo: photo,
      phone: phone,
    };
    firestore()
      .collection('Users')
      .add(form)
      .then(() => {
        Alert.alert(
          'Başarılı',
          'Başarılı bir şekilde kaydınız oluşturulmustur',
        );
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {});
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SectionTitle text="Add your photo" />
        <SectionDescription text="Get more people to know you better." />
      </View>
      <View style={styles.body}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderStyle: 'dashed',
            borderColor: AppColors.Neutral.Gray,
            padding: 50,
            borderRadius: 100,
          }}>
          <Image
            style={{
              width: 30,
              height: 30,
              resizeMode: 'contain',
            }}
            source={require('../../assets/images/camera.png')}
          />
        </TouchableOpacity>
        <Text style={{marginVertical: 10, color: AppColors.Brand.Black}}>
          Upload
        </Text>
      </View>
      <View>
        <Button title="Next" size="medium" onPress={userRegister} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.Brand.White,
    padding: 30,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 3,
    paddingTop: 30,
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
});

export default SetUpPhoto;

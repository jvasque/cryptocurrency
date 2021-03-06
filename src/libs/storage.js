import {db} from './config'


export default class Storage{
  static instance = new Storage();

  store = async (key, value) => {

    const obj = {
      [key]:value
    }

    try {
      await db.collection('currencies').add(obj)
      return true;
    } catch (error) {
      console.log("storage error ", error);
      return false;
    }
  };

  get = async (key) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.log("storage error ", error);
      throw Error(error);
    }
  };

  multiGet = async (keys) => {
    try {
      return await AsyncStorage(keys);
    } catch (error) {
      console.log("Storage multiGet error", error);
      throw Error(error);
    }
  };

  getAllkey = async () => {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (error) {
      console.log("Storage getAllkey error", error);
      throw Error(error);
    }
  };
  remove = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.log("storager error ", error);
      return false;
    }
  };
}

import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (name: string, data: string) => {
  try {
    await AsyncStorage.setItem(name, data);
  } catch (e) {
    console.log("Error", e);
  }
};

export const getData = async (name: string) => {
  try {
    const response = await AsyncStorage.getItem(name);
    return response;
  } catch (error) {
    return error;
  }
};

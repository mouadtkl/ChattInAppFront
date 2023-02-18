/* eslint-disable no-console */
import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// hook for asyncstorage
const useStorage = (key, defaultValue) => {
  const [storageValue, updateStorageValue] = useState(defaultValue);

  const getStorageValue = useCallback(async () => {
    try {
      const storedVal = await AsyncStorage.getItem(key);
      const value = storedVal ? JSON.parse(storedVal) : defaultValue;
      updateStorageValue(value);
    } catch (e) {
      console.log('LOG_Async get Storage Value Failed', e);
    }
  }, [key, defaultValue]);

  async function updateStorage(newValue) {
    try {
      if (newValue === null) {
        await AsyncStorage.removeItem(key);
      } else {
        const value = JSON.stringify(newValue);
        await AsyncStorage.setItem(key, value);
      }
    } catch (e) {
      console.log('LOG_Async Update Storage Failed', e);
    } finally {
      updateStorageValue(newValue);
    }
  }

  useEffect(() => {
    getStorageValue();
  }, [getStorageValue]);

  return [storageValue, updateStorage];
};

export async function removeValue(key) {
  try {
    await AsyncStorage.removeItem(key);
    return { success: true };
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return { error: e };
  }
}

export async function saveValue(key, value) {
  try {
    if (value === null) {
      await removeValue(key);
      return { success: true };
    }
    await AsyncStorage.setItem(key, value);
    return { success: true };
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return { error: e };
  }
}

export async function saveMultiValues(data) {
  const mappedValues = data.map((v, i) => [i, v]);
  try {
    await AsyncStorage.multiSet(mappedValues);
    return { success: true };
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return { error: e };
  }
}

export async function getValue(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return false;
  }
}

export async function getMultiValues(keys) {
  let values;
  try {
    values = await AsyncStorage.multiGet(keys);
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return false;
  }

  const value: any = [];
  values.forEach((v) => {
    // eslint-disable-next-line prefer-destructuring
    value[v[0]] = v[1];
  });

  return value;
}

export async function removeMultiValues(keys) {
  try {
    await AsyncStorage.multiRemove(keys);
    return { success: true };
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return { error: e };
  }
}

export async function getAllKeys() {
  let keys: Array<String> = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
  }
  return keys;
}

export async function clearAll() {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
  }
}

export default useStorage;

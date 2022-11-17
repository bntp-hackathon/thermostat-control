import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const login = (email, password) => {
    axios
      .post(`https://192.168.10.55:7065/api/Auth/login`, {
        email,
        password,
      })
      .then((res) => {
        console.log(res);

        let userInfo = res.data;
        setUserInfo(userInfo);
        setUserToken(userInfo.token);

        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        AsyncStorage.setItem("userToken", userInfo.token);
      })
      .catch((e) => {
        console.log(`Login error ${e}`);
        console.log(e);
      });
    setUserToken("sdf");
    AsyncStorage.setItem("userToken", userToken);
  };

  const logout = () => {
    setUserToken(null);
    AsyncStorage.removeItem("userInfo");
    AsyncStorage.removeItem("userToken");
  };

  const isLoginIn = async () => {
    try {
      let userInfo = await AsyncStorage.getItem("userInfo");
      let userToken = await AsyncStorage.getItem("userToken");
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
        setUserToken(userToken);
      }
    } catch (e) {
      console.log(`isLogged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoginIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, userToken, userInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

import { Home } from "@screens/Home";
import theme from "@theme/index";
import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}

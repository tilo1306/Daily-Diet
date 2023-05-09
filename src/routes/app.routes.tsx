import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { NewMeat } from "@screens/NewMeal";
import { Statistic } from "@screens/Statistic";
import { Meal } from "@screens/Meal";
import { FeedbackPositive } from "@screens/FeedbackPositive";
import { FeedbackBad } from "@screens/FeedbackBad";
import { EditMeal } from "@screens/EditMeal";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="newMeat" component={NewMeat} />
      <Screen name="editMeal" component={EditMeal} />
      <Screen name="statistic" component={Statistic} />
      <Screen name="meal" component={Meal} />
      <Screen name="feedbackpositive" component={FeedbackPositive} />
      <Screen name="feedbackbad" component={FeedbackBad} />
    </Navigator>
  );
}

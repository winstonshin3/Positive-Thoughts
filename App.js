import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "./constants/styles";

import "react-native-url-polyfill/auto";

import WritingScreen from "./screens/WritingScreen";
import MyStoriesScreen from "./screens/MyStoriesScreen";
import MyStoryScreen from "./screens/MyStoryScreen";
import HttpsScreen from "./temp/HttpsScreen";
import StoriesContextProvider from "./store/stories-context";
import IconButton from "./UI/IconButton";
import FeedScreenOne from "./screens/FeedScreens/FeedScreenOne";
import FeedScreenTwo from "./screens/FeedScreens/FeedScreenTwo";
import FeedScreenThree from "./screens/FeedScreens/FeedScreenThree";
import FeedScreenFour from "./screens/FeedScreens/FeedScreenFour";
import FeedScreenFive from "./screens/FeedScreens/FeedScreenFive";
import CreditCounter from "./UI/CreditCounter";
import StoreScreen from "./screens/StoreScreen";

const Stack = createNativeStackNavigator();
const StoriesStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function TopTabNavigator() {
  return (
    <TopTab.Navigator
      sceneContainerStyle={{
        backgroundColor: GlobalStyles.colors.primary700,
      }}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 0 },
      }}
    >
      <TopTab.Screen name="FeedScreenOne" component={FeedScreenOne} />
      <TopTab.Screen name="FeedScreenTwo" component={FeedScreenTwo} />
      <TopTab.Screen name="FeedScreenThree" component={FeedScreenThree} />
      <TopTab.Screen name="FeedScreenFour" component={FeedScreenFour} />
      <TopTab.Screen name="FeedScreenFive" component={FeedScreenFive} />
    </TopTab.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.accent400 },
        contentStyle: { backgroundColor: GlobalStyles.colors.primary700 },
        headerTintColor: GlobalStyles.colors.accent500,
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.accent400,
          height: 60,
          paddingBottom: 5,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
    >
      <BottomTab.Screen
        name="StoreScreen"
        component={StoreScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart-outline" color={color} size={32} />
          ),
          headerRight: () => (
            <CreditCounter
              count={1000}
              style={{ marginRight: 5, width: 120 }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component={TopTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="earth-outline" color={color} size={32} />
          ),
          headerRight: () => (
            <CreditCounter
              count={1000}
              style={{ marginRight: 5, width: 120 }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Your Stories"
        component={MyStoriesScreen}
        options={({ navigation }) => ({
          /**
           * Note that this navigation works, b/c we wrapped the whole screenOptions as a function,
           * which enables us to use navigation (it is automatically given as a prop)
           */
          headerRight: () => (
            <IconButton
              icon="add"
              size={24}
              color={GlobalStyles.colors.accent500}
              onPress={() => {
                navigation.navigate("WritingScreen");
              }}
            />
          ),
          tabBarIcon: ({ color }) => (
            <Ionicons name="file-tray-full-outline" color={color} size={32} />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark-content" />
      <StoriesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary700 },
              contentStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTitleStyle: { color: GlobalStyles.colors.accent500 },
              headerTintColor: GlobalStyles.colors.accent500,
              headerShown: false,
            }}
          >
            <Stack.Screen name="Default" component={BottomTabNavigator} />
            <Stack.Screen
              name="MyStoryScreen"
              component={MyStoryScreen}
              options={{
                title: "My Story",
              }}
            />
            <Stack.Screen
              name="WritingScreen"
              component={WritingScreen}
              options={{ tabBarHideOnKeyboard: true }}
            />
            <Stack.Screen
              name="HttpsScreen"
              component={HttpsScreen}
              options={{ presentation: "modal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </StoriesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

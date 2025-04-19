import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { useState } from "react"; // For getting safe area padding on Android
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { theme } from "./../theme/index";

export default function Index() {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocation] = useState(["Dhaka", "Sherpur", "Mymensingh"]);
  const handleLocation = (loc:string) =>{
    console.log("Locations: ",{loc})
  }

  return (
    <View className="flex-1 relative bg-black">
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        source={require("../assets/images/bg.png")}
        className="absolute w-full h-full"
      />
      <SafeAreaView
        className="flex-1 z-50"
        style={{
          paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
        }}
      >
        <View className="relative px-4" style={{ height: "7%" }}>
          <View
            className="flex-row justify-end items-center rounded-full px-2"
            style={{
              backgroundColor: showSearch ? theme.bgwhite(0.2) : "transparent",
            }}
          >
            {showSearch ? (
              <TextInput
                placeholder="Search City"
                placeholderTextColor="#fff"
                className="pl-6 h-10 pb-2 flex-1 text-base text-white"
              />
            ) : null}

            <TouchableOpacity
              onPress={() => toggleSearch(!showSearch)}
              style={{ backgroundColor: theme.bgwhite(0.3) }}
              className="rounded-full p-3 m-1"
            >
              <Feather name="search" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          {locations.length > 0 && showSearch ? (
            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
              {locations.map((loc, index) => {
                let showBorder = index + 1 != locations.length;
                let borderClass = showBorder
                  ? "border-b-2 border-b-red-400"
                  : "";
                return (
                  <TouchableOpacity
                  onPress={ ()=> handleLocation(loc)}
                    key={index}
                    className={
                      "flex-row items-center border-0 p-3 px-4 mb-1" +
                      borderClass
                    }
                  >
                    <Feather
                      name="map-pin"
                      size={18}
                      color="black"
                      className="mr-2"
                    />
                    <Text className="text-2xl text-black ml-2">{loc}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
        <View className="mx-4 flex justify-around flex-1 mb-2">
          <Text className="text-white text-center text-2xl font-bold"> Sherpur, 
          <Text className="text-lg font-semibold text-gray-300"> Dhaka, Bangladesh </Text>
          </Text>
          <View className="flex-row justify-center">
            <Image 
            source={require('../assets/images/partlycloudy.png')} 
            className="w-52 h-52"/>  
          </View>
          <View className="space-y-2">
            <Text className="text-center font-bold text-white text-6xl ml-6"> 23&#176;

            </Text>
            <Text className="text-center text-white text-xl traccking-widset">Partialy Cloud
            </Text>
          </View>

          <View className="flex-row justify-between mx-4">
            <View className="flex-row space-x-2 items-center">
              <Image source={require('../assets/icons/wind.png')}
              className="h-6 w-6"
               />
               <Text className="text-white font-semibold text-base"> 22Km </Text>
            </View>


            <View className="flex-row space-x-2 items-center">
              <Image source={require('../assets/icons/drop.png')}
              className="h-6 w-6"
               />
               <Text className="text-white font-semibold text-base"> 22% </Text>
            </View>

            <View className="flex-row space-x-2 items-center">
              <Image source={require('../assets/icons/sun.png')}
              className="h-6 w-6"
               />
               <Text className="text-white font-semibold text-base"> 6.15 AM </Text>
            </View>

          </View>
        </View>



        <View className="mb-2 space-y-2">
          <View className="flex-row items-center mx-5 space-x-2">
          <Feather name="calendar" size={30} color="white" />
          <Text className="text-white text-base"> Daily Forecast</Text>
          </View>
<ScrollView horizontal
contentContainerStyle={{paddingHorizontal:15}}
showsHorizontalScrollIndicator={false}
>
  <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-2 mr-4 "style={{backgroundColor:theme.bgwhite(0.15)}}>
<Image source={require('../assets/images/heavyrain.png')} className="h-11 w-11"/>
<Text className="">

</text>
  </View>

</ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}

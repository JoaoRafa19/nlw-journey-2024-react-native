import { Slot } from "expo-router";

import '@/styles/global.css'
import { StatusBar, View } from "react-native";

import {
    useFonts,
    Inter_500Medium,
    Inter_400Regular,
    Inter_600SemiBold
} from "@expo-google-fonts/inter"
import { Loading } from "@/components/loading";

export default function Layout() {
    const [loaded, err] = useFonts({
        Inter_500Medium,
        Inter_400Regular,
        Inter_600SemiBold
    })

    if(!loaded){
        return <Loading/>
    }

    return (
        <View className="flex-1 bg-zinc-900">
            <StatusBar barStyle={"light-content"} backgroundColor={"transparent"} translucent />
            <Slot></Slot>
        </View>
    )
}
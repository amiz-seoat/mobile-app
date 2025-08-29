import { Stack } from "expo-router";
import { ClerkProvider } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InitialLayout from "@/components/InitialLayout";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}> 
  <SafeAreaProvider>
      <SafeAreaView style={{flex:1, backgroundColor: "black"}}> 
         <InitialLayout/>
      </SafeAreaView>
      </SafeAreaProvider>
    </ClerkProvider>
  )
}

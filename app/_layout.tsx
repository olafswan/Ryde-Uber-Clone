import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

// TODO next line(s) commented to fix the bug
// import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
// import { Slot } from 'expo-router'

// const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

// if (!publishableKey) {
//   throw new Error(
//     'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
//   )
// }



// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "Jakarta-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": require("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Jakarta-Regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
});

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // function RootLayoutNav() {
    //   return (
// TODO next line(s) commented to fix the bug
        // <ClerkProvider publishableKey={publishableKey}>
        //   <ClerkLoaded>
            <Stack>
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
              <Stack.Screen name="(root)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
// TODO next line(s) commented to fix the bug
        //   </ClerkLoaded>
        // </ClerkProvider>
      )
    }
//   );
// }

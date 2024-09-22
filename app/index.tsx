import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect } from "expo-router";
import { useAuth } from '@clerk/clerk-expo'


const Home = () => {

  // TODO next line(s) commented to fix the bug 1:37:07
  // const { isSignedIn } = useAuth()

  // if (isSignedIn) {
  //   return <Redirect href={'/(root)/(tabs)/home'} />
  // }

  return <Redirect href="/(auth)/welcome" />;
};

export default Home;

import { SafeAreaView } from "react-native-safe-area-context";
import { SignedIn, useUser } from '@clerk/clerk-expo'
import { Text } from 'react-native'

export default function Page() {
  const { user } = useUser()

  return (
    <SafeAreaView>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
      </SignedIn>
    </SafeAreaView>
  )
}
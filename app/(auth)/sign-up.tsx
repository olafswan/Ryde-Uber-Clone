import { ScrollView, Text, View, Image } from "react-native";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { useSignUp } from '@clerk/clerk-expo'
import ReactNativeModal from "react-native-modal";





const SignUp = () => {
  // TODO next line(s) commented to fix the bug
  // const { isLoaded, signUp, setActive } = useSignUp()



  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  // TODO next line(s) commented to fix the bug

  // const [verification, setVerification] = useState({
  //   state: "succes",
  //   error: "",
  //   code: "",
  // });

  const onSignUpPress = async () => {
  // TODO next line(s) commented to fix the bug
  //   if (!isLoaded) {
       return
     }

// TODO next line(s) commented to fix the bug
  //   try {
  //     await signUp.create({
  //       emailAddress: form.email,
  //       password: form.password,
  //     })

  //     await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
  //     setVerification({
  //       ...verification,
  //       state: "pending",
  //     });
  //   } catch (err: any) {
  //     // See https://clerk.com/docs/custom-flows/error-handling
  //     // for more info on error handling
  //     console.error(JSON.stringify(err, null, 2))
  //   }
  // }

  // const onPressVerify = async () => {
  //   if (!isLoaded) {
  //     return
  //   }

  //   try {
  //     const completeSignUp = await signUp.attemptEmailAddressVerification({
  //       code: verification.code,
  //     })

  //     if (completeSignUp.status === 'complete') {
  //       // TODO create a database user!

  //       await setActive({ session: completeSignUp.createdSessionId })
  //       setVerification({
  //         ...verification,
  //         state: "success",
  //       });
  //     } else {
  //       setVerification({
  //         ...verification,
  //         error: "Verification failed. Please try again.",
  //         state: "failed",
  //       });
  //     }
  //   } catch (err: any) {
  //     // See https://clerk.com/docs/custom-flows/error-handling
  //     // for more info on error handling
  //     setVerification({
  //       ...verification,
  //       error: err.errors[0].longMessage,
  //       state: "failed",
  //     });
  //   }
  // }


  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image
          source={images.signUpCar} className="z-0 w-full h-[250px]" />
           <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
          </View>
          <View className="p-5">

          <InputField
            label="Name"
            placeholder="Enter name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton
            title="Sign Up"
            onPress={onSignUpPress}
            className="mt-6"
          />

          <OAuth />

          <Link
            href="/sign-in"
            className="text-lg text-center text-general-200 mt-10"
          >
            Already have an account?{" "}
            <Text className="text-primary-500">Log In</Text>
          </Link>
            
          </View>

            {/* <ReactNativeModal isVisible={verification.state === "succes"}>
              <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
                <Image
                source={images.check}
                className="w-[110px] h-[110px] mx-auto my-5"
              />
              </View>
            </ReactNativeModal> */}
          </View>
    </ScrollView>
  );
};
export default SignUp;
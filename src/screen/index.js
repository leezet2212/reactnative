import React, { useState } from "react";
import {
    SafeAreaView,
    KeyboardAvoidingView,
    TextInput,
    ScrollView,
    Button,
    View,
    Image,
    Text,
    Linking,
    TouchableOpacity,
} from "react-native";
const Login = () => {
    const [text, setText] = useState("");
    const [passWork, setPassWork] = useState("");
    return (
        <SafeAreaView
            style={{
                flex: 1,
                height: "100%",
                justifyContent: "space-between",
                flexDirection: "column",
            }}
        >
            <KeyboardAvoidingView>
                <ScrollView>
                    <View style={{ padding: "10%", flex: 1 }}>
                        <View style={{ paddingVertical: "10%" }}>
                            <Image style={{ width: 300, height: 200 }} source={require('../../asset/rat.png')} />
                        </View>
                        <View style={{ padding: 10 }}>
                            <TextInput
                                style={{
                                    height: 40,
                                    borderColor: "black",
                                    backgroundColor: "white",
                                }}
                                placeholder="Username"
                                onChangeText={(newText) => setText(newText)}
                                defaultValue={text}
                            />
                        </View>
                        <View style={{ padding: 10 }}>
                            <TextInput
                                style={{ height: 40, backgroundColor: "white" }}
                                placeholder="Passwork"
                                onChangeText={(newText) => setPassWork(newText)}
                                defaultValue={passWork}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1, marginVertical: 20, marginHorizontal: 30 }}>
                        <Button title="Login" ></Button>
                        <TouchableOpacity
                            onPress={() => Linking.openURL("https://google.com.vn/")}
                        >
                            <View
                                style={{
                                    paddingVertical: 20,
                                    justifyContent: "center",
                                    alignContent: "center",
                                }}
                            >
                                <Text style={{ color: "#f59a23" }}> Create Account Login?</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={{flex: 1, backgroundColor:"red"}}>
                <Text>fkjuahsfi</Text>
          </View> */}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
export default Login;
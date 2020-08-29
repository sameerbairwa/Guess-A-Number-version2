import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/Colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageContatiner}>
          <Image
            fadeDuration={300}
            source={require("../assets/success.png")}
            // source={{
            //   uri:
            //     "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/12_03_2020_17_51_11_024219.webp?width=920&format=webp",
            // }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed
            <Text style={styles.highlight}> {props.roundsNumber} </Text>rounds
            to guess the Number{" "}
            <Text style={styles.highlight}>{props.userNumber}</Text>.
          </BodyText>
        </View>

        {/*<BodyText> Number was: {props.userNumber}</BodyText> */}
        <MainButton onPress={props.onReStart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContatiner: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
    //Dimensions.get("window").height < 400  ?16 : 20
  },
});

export default GameOverScreen;

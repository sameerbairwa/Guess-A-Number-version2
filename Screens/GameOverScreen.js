import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/Colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
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
          <Text style={styles.highlight}> {props.roundsNumber} </Text>rounds to
          guess the Number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>.
        </BodyText>
      </View>

      {/*<BodyText> Number was: {props.userNumber}</BodyText> */}
      <MainButton onPress={props.onReStart}>NEW GAME</MainButton>
    </View>
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
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 18,
  },
});

export default GameOverScreen;

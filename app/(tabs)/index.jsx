import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { Calendar } from "react-native-calendars";

const MyBand = () => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <>
      {/* AppBar Component */}
      <Appbar.Header>
        <Appbar.Content
          title="GrooveLab"
          subtitle="Welcome"
          titleStyle={{ fontSize: 28, fontWeight: "bold" }}
        />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>

      <View style={styles.container}>
        {/* Parent View wrapping the two Views */}
        <View style={styles.wrapper}>
          {/* First View with added content */}
          <View style={styles.box}>
            <Text style={styles.boxText}>Box 1</Text>
            <Text style={styles.subText}>
              This is some additional content in Box 1.
            </Text>
          </View>

          {/* Second View with added content */}
          <View style={styles.box}>
            <Text style={styles.boxText}>Box 2</Text>
            <Text style={styles.subText}>
              This is some additional content in Box 2.
            </Text>
          </View>
        </View>
        <View style={styles.wrapper}>
          {/* First View with added content */}
          <View style={styles.box}>
            <Text style={styles.boxText}>Box 3</Text>
            <Text style={styles.subText}>
              This is some additional content in Box 3.
            </Text>
          </View>

          {/* Second View with added content */}
          <View style={styles.box}>
            <Text style={styles.boxText}>Box 4</Text>
            <Text style={styles.subText}>
              This is some additional content in Box 4.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.headerText}>GrooveMate</Text>
      </View>

      <View style={styles.calendarContainer}>
        <Calendar
          // Specify the marking type and marking options
          markedDates={{
            [selectedDate]: {
              selected: true,
              marked: true,
              selectedColor: "blue",
            },
          }}
          // Handler which gets executed on day press
          onDayPress={(day) => {
            console.log("Selected day", day);
            setSelectedDate(day.dateString);
          }}
          // Month change handler
          onMonthChange={(month) => {
            console.log("Month changed", month);
          }}
          // Customize the header and calendar
          theme={{
            todayTextColor: "red",
            arrowColor: "blue",
            selectedDayBackgroundColor: "#00adf5",
            selectedDayTextColor: "#ffffff",
          }}
        />
      </View>
    </>
  );
};

export default MyBand;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    flexDirection: "column",
  },
  headerText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  wrapper: {
    flexDirection: "row", // Align children in a row
    justifyContent: "space-between", // Add space between the two boxes
  },
  box: {
    height: 100,
    width: "50%",
    backgroundColor: "#999999",
    margin: 10,
    padding: 20, // Added padding for content inside the box
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    fontSize: 18,
    color: "#ffffff",
  },
  subText: {
    fontSize: 12,
    color: "#cccccc",
  },
  calendarContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

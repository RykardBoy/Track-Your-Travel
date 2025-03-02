import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const StarRating = ({ rating, onRate }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent:"space-between" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity key={star} onPress={() => onRate(star)}>
          <FontAwesome
            name={star <= rating ? "star" : "star-o"}
            size={32}
            color={star <= rating ? "yellow" : "gray"}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default StarRating;

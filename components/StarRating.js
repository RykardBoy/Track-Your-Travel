import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const StarRating = ({ maxStars = 10, onRate }) => {
  const [rating, setRating] = useState(0);

  const handlePress = (star) => {
    setRating(star);
    if (onRate) onRate(star);
  };

  return (
    <View style={{ flexDirection: "row" }}>
      {Array.from({ length: maxStars }, (_, i) => (
        <TouchableOpacity key={i} onPress={() => handlePress(i + 1)}>
          <Icon
            name={i < rating ? "star" : "star-border"}
            size={30}
            color={i < rating ? "#FFD700" : "#ccc"}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default StarRating;

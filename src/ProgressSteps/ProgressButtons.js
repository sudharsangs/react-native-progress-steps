import React from 'react';
import { View } from 'react-native';

const ProgressButtons = props => (
  <View style={{ flexDirection: 'row', marginRight: 24, justifyContent: "flex-end", gap: 4, marginTop: 50 }}>
    <View style={{ bottom: 30 }}>{props.renderCancelButton()}</View>
    <View style={{ bottom: 30 }}>{props.renderPreviousButton()}</View>
    <View style={{ bottom: 30 }}>{props.renderNextButton()}</View>
  </View>
);

export default ProgressButtons;

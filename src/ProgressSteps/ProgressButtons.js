import React from 'react';
import { View } from 'react-native';

const ProgressButtons = props => (
  <View style={{ flexDirection: 'row', marginTop: 90 }}>
    <View style={{ position: 'absolute', left: 10, bottom: 30 }}>{props.renderCancelButton()}</View>
    <View style={{ position: 'absolute', left: 10, bottom: 30 }}>{props.renderPreviousButton()}</View>
    <View style={{ position: 'absolute', right: 10, bottom: 30 }}>{props.renderNextButton()}</View>
  </View>
);

export default ProgressButtons;

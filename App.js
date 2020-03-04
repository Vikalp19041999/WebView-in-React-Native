import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

export default class WebViewExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{
            uri:
              'https://www.cricbuzz.com/'
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
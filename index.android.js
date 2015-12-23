/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var GcmAndroid = require('react-native-gcm-android');

if (GcmAndroid.launchNotification) {
  console.log('GcmAndroid.launchNotification:', GcmAndroid.launchNotification);
  var notification = GcmAndroid.launchNotification;
  var info = JSON.parse(notification.info);
  GcmAndroid.createNotification({
    subject: info.subject,
    message: info.message,
    largeIcon: 'ic_launcher',
    autoCancel: true,
    ticker: 'new notification!',
  });
  GcmAndroid.stopService();
} else {
  var TestGcm = React.createClass({
    componentDidMount: function() {
      GcmAndroid.addEventListener('register', function(token){
        console.log('send gcm token to server', token);
      });
      GcmAndroid.addEventListener('notification', function(notification){
        console.log('receive gcm notification', notification);
        console.log('GcmAndroid.isForground', GcmAndroid.isForground);
        var info = JSON.parse(notification.data.info);
        if (!GcmAndroid.isForground) {
          GcmAndroid.createNotification({
            subject: info.subject,
            message: info.message,
            largeIcon: 'ic_launcher',
            autoCancel: true,
            ticker: 'new notification!',
          });
        }
      });
      GcmAndroid.requestPermissions();
    },
    render: function() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Shake or press menu button for dev menu
          </Text>
        </View>
      );
    }
  });

  var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

  AppRegistry.registerComponent('TestGcm', () => TestGcm);
}

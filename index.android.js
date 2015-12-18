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
import Notification from 'react-native-system-notification';

if (GcmAndroid.launchNotification) {
  var notification = GcmAndroid.launchNotification;
  var info = notification.info;
  console.log('sfdasdfasfsdafaasdfasdfasf11111-33');
  // GcmAndroid.createNotification();
  Notification.create({
    subject: info.subject,
    message: info.message,
    sound: 'default',
  });
  GcmAndroid.stopService();
  console.log('asdfhasufhkasdhf fsdaff4', GcmAndroid.launchNotification);
} else {

  // var GcmAndroid = require('react-native-gcm-android');

  var TestGcm = React.createClass({
    componentDidMount: function() {
      Notification.create({ subject: 'Hey', message: 'Yo! Hello world.' });
      GcmAndroid.addEventListener('register', function(token){
        console.log('send gcm token to server', token);
      });
      GcmAndroid.addEventListener('notification', function(notification){
        console.log('receive gcm notification', notification);
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
            To get started, edit index.android.js3
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

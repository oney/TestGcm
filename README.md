# TestGcm

* git clone
* npm install
* Must run `react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle`
* react-native run-android


### Send GCM notification
```shell
curl -X POST -H "Authorization: key=AIzaSyAwix-QqbNZBN_LvFhJD3wZOPXKjmtayUo" -H "Content-Type: application/json" -d '
{
  "data": {
    "info": {
      "subject": "Hello GCM2",
      "message": "Hello from the server side!"
    }
  },
  "to" : "GCM_TOKEN"
}' 'https://gcm-http.googleapis.com/gcm/send'
```

After running this project, you can get gcm token and place `GCM_TOKEN` of above code. Run this curl command in terminal to test gcm notification.

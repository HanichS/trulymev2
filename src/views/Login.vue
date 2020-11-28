<template lang="html">
  <div id="firebaseui-auth-container"></div>
</template>
<script>
import firebase from "firebase";
import * as firebaseui from "firebaseui";
var ui = new firebaseui.auth.AuthUI(firebase.auth());
export default {
  name: "login",
  props: ['navigateOnSuccess'],
  mounted() {
    if(!this.navigateOnSuccess)
      this.navigateOnSuccess = "/"

    var uiConfig = {
      signInSuccessUrl: this.navigateOnSuccess,
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };

    ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>
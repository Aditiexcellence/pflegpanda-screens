<template>
  <div>
    <b-container>
      <form>
        <h1>Login</h1>
        <mdb-input type="email" label="Email Address*" required/>
        <mdb-input type="Password" label="Password*"/>
        <b-button v-on:click="login">Login</b-button>
      </form>
      <center>
        <a @click="forgotPass">Forgot Password? Reset it!</a>
      </center>
      <center>
        <a @click="register">No Account yet? Register now!</a>
      </center>
    </b-container>
  </div>
</template>

<script>
import { mdbInput } from "mdbvue";
export default {
  name: "Login",
  components: {
    mdbInput
  },
  methods: {
    forgotPass: function() {
      this.$router.push("/forgot");
    },
    register: function() {
      this.$router.push("/registration");
    },
    login: function() {
      this.$router.push("/calender");
    }
  }
};
</script>

<style>
body {
  background-color: whitesmoke !important;
}
.btn-secondary {
  background-color: #00e6e6 !important;
}
.container {
  width: 50% !important;
  margin-top: 10%;
  background-color: white !important;
  padding: 4% !important;
}
a {
  text-decoration: underline !important;
  color: #007bff !important;
}
p {
  margin-top: 2% !important;
}
center {
  margin-top: 2%;
}
</style>

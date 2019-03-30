<template>
  <div>
    <b-container class="login">
      <form>
        <h1>Login</h1>
        <mdb-input type="email" label="E-mail Address*" required v-model="email"/>
        <mdb-input type="Password" label="Password*" v-model="password"/>
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
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
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
      if (this.email != "" && this.password != "") {
        this.$router.push("/calender");
      }
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
}
.login {
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

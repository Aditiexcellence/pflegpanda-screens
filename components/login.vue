<template>
  <div>
    <b-container>
      <b-form>
        <h1>Login</h1>Email Address*
        <b-form-input type="email" required class="background"></b-form-input>Password*
        <b-form-input type="password" required class="background"></b-form-input>
        <b-button>Login</b-button>
      </b-form>
      <center>
        <a v-bind:href="hreflink">Forgot Password? Reset it!</a>
      </center>
      <center>
        <a href="#">No Account yet? Register now!</a>
      </center>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
body {
  background-color: whitesmoke !important;
}
.background {
  background-color: #ffffb3 !important;
  border: none !important;
  border-bottom: 2px solid #ced4da !important;
  border-radius: 0 !important;
}
button {
  width: 100% !important;
  background-color: #00e6e6 !important;
  margin-top: 2% !important;
}
.container {
  width: 50% !important;
  margin-top: 10%;
  background-color: white !important;
  padding: 4% !important;
}
a {
  text-decoration: underline !important;
}
p {
  margin-top: 2% !important;
}
center {
  margin-top: 2%;
}
</style>

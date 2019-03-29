<template>
  <div>
    <b-container>
      <b-form>
        Email Address*
        <b-form-input type="email" required class="background"></b-form-input>
        <b-button>Reset Password</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Forgot"
};
</script>

<style>
body {
  background-color: whitesmoke !important;
}
.background {
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
</style>

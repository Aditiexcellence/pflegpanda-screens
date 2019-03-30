<template>
  <div>
    <b-container class="forgot">
      <b-form>
        <mdb-input type="email" label="E-mail Address*" required/>
        <b-button @click="reset">Reset Password</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { mdbInput } from "mdbvue";
export default {
  name: "Forgot",
  components: {
    mdbInput
  },
  methods: {
    reset: function() {
      this.$router.push("/");
    }
  }
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
}
.forgot {
  padding: 4% !important;
}
</style>

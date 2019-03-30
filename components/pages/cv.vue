<template>
  <div>
    <b-container class="cv">
      <b-form>
        <h1>My CV</h1>
        <p>
          When did you finish your professional education and
          when did you start to work as a freelancer?
        </p>
        <b-row>
          <b-col lg="6">
            <select class="mdb-select md-form background">
              <option value disabled selected>Professional Since</option>
            </select>
          </b-col>
          <b-col lg="6">
            <select class="mdb-select md-form background">
              <option value disabled selected>Freelancer Since</option>
            </select>
          </b-col>
        </b-row>

        <p>
          Where you have been empolyed before? Please add your
          employement history here
        </p>
        <center>
          <a class="atag" @click="showForm">Add additional employer</a>
        </center>
        <b-form class="formdesign" v-if="canShowform">
          <b-row class="backgrounddesign">
            <mdb-input type="text" label="Name of my Employer*"/>
          </b-row>
          <b-row class="backgrounddesign">
            <b-col lg="4">
              <mdb-input type="text" label="City" class="city"/>
            </b-col>
            <b-col lg="4">
              <select class="mdb-select md-form backgrounds">
                <option value disabled selected>From</option>
              </select>
            </b-col>
            <b-col lg="4">
              <select class="mdb-select md-form backgrounds">
                <option value disabled selected>Till</option>
              </select>
            </b-col>
          </b-row>
        </b-form>
        <b-button @click="save">Save</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { mdbInput } from "mdbvue";
export default {
  name: "Registration",
  components: {
    mdbInput
  },
  data: function() {
    return {
      canShowform: false
    };
  },
  methods: {
    save: function() {
      this.$router.push("/profile");
    },
    showForm: function() {
      this.canShowform = !this.canShowform;
    }
  }
};
</script>

<style>
body {
  background-color: whitesmoke !important;
}
.backgrounds {
  width: 100%;
  background-color: whitesmoke !important;
  border: none;
  border-bottom: 1px solid lightgrey;
}
button {
  width: 100% !important;
  background-color: #00e6e6 !important;
  border: none !important;
  padding: 0.9rem 0.75rem !important;
}
.container {
  width: 50% !important;
  margin-top: 4%;
  background-color: white !important;
}
.cv {
  padding: 3% !important;
}
.row {
  margin-top: 7%;
}
.collapse {
  display: block;
}
.formdesign {
  border: 1px solid;
  padding: 4%;
  background-color: whitesmoke;
}
.backgrounddesign {
  background-color: whitesmoke !important;
}
.md-form {
  width: 100%;
}
.city {
  margin-top: 6%;
}
</style>
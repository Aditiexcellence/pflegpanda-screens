<template>
  <div>
    <b-container class="single">
      <b-form>
        <h1>Signalment</h1>
        <b-row>
          <b-col lg="12">
            <select class="mdb-select md-form background">
              <option value disabled selected >Facilities</option>
            </select>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="12">
            <select class="mdb-select md-form background">
              <option value disabled selected >Additional Qualifications</option>
            </select>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <mdb-input type="text" label="Location" required/>
          </b-col>
          <b-col lg="6">
            <mdb-input type="text" label="Distance of work" required/>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="12">
            <select class="mdb-select md-form background">
              <option value disabled selected >Working Shifts</option>
            </select>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="12">
            <select class="mdb-select md-form background">
              <option value disabled selected >Remission of Pension Charges</option>
            </select>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6" class="sets">Driving License</b-col>
          <b-col lg="6" class="sets">
            <center>
              <label class="switch">
                <input type="checkbox" checked class="checked">
                <span class="slider round"></span>
              </label>
            </center>
          </b-col>
        </b-row>
        <hr class="hrwidth">
        <b-row>
          <b-col lg="6" class="sets">Own Car</b-col>
          <b-col lg="6" class="sets">
            <center>
              <label class="switch">
                <input type="checkbox" checked class="checked">
                <span class="slider round"></span>
              </label>
            </center>
          </b-col>
        </b-row>
        <hr class="hrwidth">
        <b-button v-on:click="save">Save</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { mdbInput } from "mdbvue";
export default {
  name: "Signalment",
  components: {
    mdbInput
  },
  methods: {
    save: function() {
      this.$router.push("/profile");
    }
  }
};
</script>

<style>
body {
  background-color: whitesmoke !important;
}
.background {
  width: 100%;
  background-color: white;
  color: gray !important;
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
.single {
  padding: 3% !important;
}
.row {
  margin-top: 7%;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 25px;
}
.checked {
  display: none;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.sets {
  margin-top: auto;
  margin-bottom: auto;
}
.slider:before {
  position: absolute;
  content: "";
  height: 21px;
  width: 26px;
  left: 6px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.hrwidth {
  margin-left: 2%;
  margin-right: 2%;
}
</style>
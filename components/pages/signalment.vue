<template>
  <div>
    <b-container>
      <b-form>
        <h1>Signalment</h1>
        <b-row>
          <b-col lg="12">
            Facilities
            <select class="background"></select>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="12">
            Additional Qualifications
            <select class="background"></select>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            Location
            <b-form-input type="text" required class="background"></b-form-input>
          </b-col>
          <b-col lg="6">
            Distance of work
            <b-form-input type="text" required class="background"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="12">
            Working Shifts
            <select class="background"></select>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="12">
            Remission of Pension Charges
            <select class="background"></select>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">Driving License</b-col>
          <b-col lg="6">
            <label class="switch">
              <input type="checkbox" checked>
              <span class="slider round"></span>
            </label>
          </b-col>
        </b-row>
        <hr>
        <b-row>
          <b-col lg="6">Own Car</b-col>
          <b-col lg="6">
            <label class="switch">
              <input type="checkbox" checked>
              <span class="slider round"></span>
            </label>
          </b-col>
        </b-row>
        <hr>
        <b-button>Save</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Signalment"
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
  border: none !important;
  padding: 0.9rem 0.75rem !important;
}
.container {
  width: 50% !important;
  margin-top: 4%;
  background-color: white !important;
  padding: 3% !important;
}
.row {
  margin-top: 7%;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}


.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
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
</style>
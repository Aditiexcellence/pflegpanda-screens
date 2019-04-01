<template>
  <div>
    <b-container>
      <b-form>
        <h1>My CV</h1>
        <p>
          When did you finish your professional education and
          when did you start to work as a freelancer?
        </p>
        <b-row>
          <b-col lg="6">
            Professional Since
            <select class="background"></select>
          </b-col>
          <b-col lg="6">
            Freelancer Since
            <select class="background"></select>
          </b-col>
        </b-row>

        <p>
          Where you have been empolyed before? Please add your
          employement history here
        </p>
        <center>
          <a
            class="atag"
            data-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="true"
            aria-controls="collapseExample"
          >Add additional employer</a>
        </center>
        <div class="collapse" id="collapseExample">
              <b-row>
                Name of my Employer*
                <b-form-input type="text" required class="background"></b-form-input>
              </b-row>
              <b-row>
                <b-col lg="4">
                  City
                  <b-form-input type="text" required class="background"></b-form-input>
                </b-col>
                <b-col lg="4">
                  From
                  <select class="background"></select>
                </b-col>
                <b-col lg="4">
                  Till
                  <select class="background"></select>
                </b-col>
              </b-row>
        </div>
        <b-button @click="save">Save</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Registration",
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
</style>
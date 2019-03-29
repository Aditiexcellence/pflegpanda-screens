<template>
  <div>
    <b-container>
      <h1>About Me</h1>
      <p>
        Tell eventhing about yourself that potential client should
        know about you!
      </p>
      <p class="design">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero
        eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
      <hr>
      <b-button>Save</b-button>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style>
body {
  background-color: whitesmoke !important;
}
.container {
  width: 50% !important;
  margin-top: 10%;
  background-color: white !important;
  padding: 4% !important;
}
p {
  margin-top: 3% !important;
}
button {
  width: 100% !important;
  background-color: #00e6e6 !important;
  border: none !important;
  padding: 0.9rem 0.75rem !important;
}
.design {
  color: lightgray;
}
hr {
  border: 1px solid lightgray !important;
}
</style>
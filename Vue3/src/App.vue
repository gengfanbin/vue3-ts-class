<template src="./App.html"></template>
<style lang="scss" src="./App.scss"></style>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
@Options({
  mounted() {
    console.log(this.$IS_TEST,'---IS_TEST')
  }
})
export default class App extends Vue {}
</script>

<template>
  <f7-page>

    <f7-navbar title="Page1" back-link="Back"></f7-navbar>


    <f7-block strong>
      <p>Here is Page1</p>
      <f7-button href="/page2/">page2</f7-button>
    </f7-block>

  </f7-page>
</template>

<script>
    export default {
        name: "back-link-bug"
    }
</script>

<style scoped>

</style>

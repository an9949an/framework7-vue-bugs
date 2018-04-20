<template>
  <f7-page>

    <f7-navbar title="App" back-link="Back"></f7-navbar>

    <f7-tabs animated routable>
      <f7-tab id="tab1"></f7-tab>
      <f7-tab id="tab2"></f7-tab>
      <f7-tab id="tab3"></f7-tab>
    </f7-tabs>

    <f7-toolbar tabbar labels>
      <f7-link href="./" text="tab1" tab-link route-tab-id="tab1"></f7-link>
      <f7-link href="./tab2/" text="tab2" tab-link route-tab-id="tab2"></f7-link>
      <f7-link href="./tab3/" text="tab3" tab-link route-tab-id="tab3"></f7-link>
    </f7-toolbar>

  </f7-page>
</template>
<script>
export default {}
</script>

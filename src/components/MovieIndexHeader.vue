<template>
  <Menu mode="horizontal" theme="dark" active-name="1">
    <router-link to="/">
    <menu-item name="1">
      <Icon type="ios-paper"></Icon>
      主页
    </menu-item>
    </router-link>
    <router-link to="/movieList">
    <menu-item name="2">
      <Icon type="ios-people"></Icon>
      电影
    </menu-item>
    </router-link>
  </Menu>
</template>
<script>
export default {

}
</script>

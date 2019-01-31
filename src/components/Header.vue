<template>
  <div class="header">
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">はじめてのPWA</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav class="ml-auto">

          <b-navbar-nav>
            <b-nav-item href="#">(1)はじめに</b-nav-item>
          </b-navbar-nav>

          <b-nav-item-dropdown text="(2)Service Worker" right>
            <b-dropdown-item><b-link :to="image_cache">キャッシュしてる</b-link></b-dropdown-item>
            <b-dropdown-item href="#">キャッシュしてない</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="(3)オフラインApps" right>
            <b-dropdown-item href="#">オンラインで動くところ</b-dropdown-item>
            <b-dropdown-item href="#">オフラインで動くところ</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-navbar-nav>
            <b-nav-item href="#">(4)プッシュ通知</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav>
            <b-nav-item href="#">(5)チュートリアル的なもの</b-nav-item>
          </b-navbar-nav>

        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: bold;
  color: white;
  background-color: red !important;
  .title {
    margin-left: 2rem;
    font-size: 2rem;
    margin: 0 auto;
  }
  ul {
    margin-left: auto;
  }
  li {
    margin-right: 1rem;
  }
}
</style>

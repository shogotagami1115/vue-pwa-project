<template>
  <div class="header-container">
    <div class="top-link">
      <nav>
        <router-link tag="p" to="/"><a>Vue.jsでPWAをつくった</a></router-link>
      </nav>
    </div>
    <div class="sub-links">
      <nav>
        <ul>
          <router-link tag="li" to="/about"><a>(1) はじめに</a></router-link>
          <router-link tag="li" to="/image_cache"><a>(2) キャッシュ</a></router-link>
          <router-link tag="li" to="/about"><a>(3) プッシュ通知</a></router-link>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: bold;
  background-color: #4285F4;
  padding-top: .5rem;
  padding-bottom: .1rem;
  box-shadow: 0 3px 6px rgba(0,0,0,0.2);
  .top-link {
    a {
      font-size: 2rem;
      text-decoration: none;
      color: white;
    }
  }
  .sub-links{
    padding-bottom: .5rem;
    ul {
      display: flex;
      justify-content: center;
      a {
        text-decoration: none;
        color: white;
        text-align: center;
        display: inline-block;
        margin-right: 5rem;
        font-size: 1.3rem;
      }
    }
  }
}
</style>

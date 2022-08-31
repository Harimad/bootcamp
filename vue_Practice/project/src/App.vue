<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding/string">String</router-link> |
    <router-link to="/databinding/html">Html</router-link> |
    <router-link to="/databinding/input">Input</router-link> |
    <router-link to="/databinding/select">Select</router-link> |
    <router-link to="/databinding/checkbox">Checkbox</router-link> |
    <router-link to="/databinding/radio">Radio</router-link> |
    <router-link to="/databinding/attr">Attribute</router-link> |
    <router-link to="/databinding/list">List</router-link> |
    <router-link to="/databinding/class">Class</router-link> |
    <router-link to="/databinding/style">Style</router-link>
    <br /><br />
    <router-link to="/event/click">Click</router-link> |
    <router-link to="/event/change">Change</router-link> |
    <router-link to="/event/key">Key</router-link> | <br /><br />
    <router-link to="/extra/if">If</router-link> |
    <router-link to="/extra/show">Show</router-link> | <br /><br />
    <router-link to="/extra/computed">Computed</router-link> |
    <router-link to="/extra/watch">Watch</router-link> | <br /><br />
    <router-link to="/extra/lifecycle">LifeCycleHook</router-link> |
    <br /><br />
    <router-link to="/reuse/page">Page</router-link> |
    <router-link to="/reuse/parent">Parent</router-link> |
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

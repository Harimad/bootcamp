<template>
  <!-- <nav>
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
    <router-link to="/reuse/list">List</router-link> |
    <router-link to="/reuse/slot">Slot</router-link> |
  </nav> -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" @click="goToMenu('/')">Harimad</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <!-- <a
            class="nav-link"
            :class="{ active: $route.path === '/' }"
            aria-current="page"
            @click="goToMenu('/')"
            >Home</a
          >
          <a
            class="nav-link"
            :class="{ active: $route.path === '/databinding/string' }"
            @click="goToMenu('/databinding/string')"
            >String</a
          >
          <a class="nav-link" @click="goToMenu('/databinding/html')">Html</a>
          <a class="nav-link" @click="goToMenu('/databinding/input')">Input</a>
          <a class="nav-link" @click="goToMenu('/databinding/select')"
            >Select</a
          >
          <a class="nav-link" @click="goToMenu('/databinding/checkbox')"
            >Checkbox</a
          >
          <a class="nav-link" @click="goToMenu('/databinding/radio')">Radio</a>
          <a class="nav-link" @click="goToMenu('/databinding/attr')"
            >Attribute</a
          >
          <a class="nav-link" @click="goToMenu('/databinding/list')">List</a>
          <a class="nav-link" @click="goToMenu('/databinding/class')">Class</a>
          <a class="nav-link" @click="goToMenu('/databinding/style')">Style</a>
          <a class="nav-link" @click="goToMenu('/event/click')">Click</a>
          <a class="nav-link" @click="goToMenu('/event/change')">Change</a>
          <a class="nav-link" @click="goToMenu('/event/key')">Key</a>
          <a class="nav-link" @click="goToMenu('/event/if')">If</a>
          <a class="nav-link" @click="goToMenu('/event/show')">Show</a>
          <a class="nav-link" @click="goToMenu('/event/computed')">Computed</a>
          <a class="nav-link" @click="goToMenu('/event/watch')">Watch</a>
          <a class="nav-link" @click="goToMenu('/event/lifecycle')"
            >LifeCycleHook</a
          >
          <a class="nav-link" @click="goToMenu('/reuse/page')">Page</a>
          <a class="nav-link" @click="goToMenu('/reuse/parent')">Parent</a>
          <a class="nav-link" @click="goToMenu('/reuse/list')">List</a>
          <a class="nav-link" @click="goToMenu('/reuse/slot')">Slot</a> -->
          <!-- <a class="nav-link" @click="goToMenu('/advanced/provide')">Provide</a> -->
          <!-- <a class="nav-link" @click="goToMenu('/advanced/customDirective')"
            >CustomDirective</a
          > -->
          <!-- <a class="nav-link" @click="goToMenu('/advanced/mixIn')">Mixin</a> -->
          <!-- <a class="nav-link" @click="goToMenu('/advanced/plugIn')">Plugin</a> -->
          <!-- <a class="nav-link" @click="goToMenu('/vuex/vuex')">Vuex</a> -->
          <!-- <a class="nav-link" @click="goToMenu('/vuex/login')">Login</a> -->
          <!-- <a class="nav-link" @click="goToMenu('/composition/setup')">Setup</a> -->
          <!-- <a class="nav-link" @click="goToMenu('/composition/ref')">Ref</a> -->
          <!-- <a class="nav-link" @click="goToMenu('/composition/func')">Func</a> -->
          <!-- <a class="nav-link" @click="goToMenu('/login/kakao')">Kakao</a> -->
          <!-- <a class="nav-link" @click="goToMenu('/login/main')">Main</a> -->
          <!-- <a class="nav-link" @click="goToMenu('/login/naver')">Naver</a> -->
          <a class="nav-link" @click="goToMenu('/module/postcode')">PostCode</a>
          <a class="nav-link" @click="goToMenu('/module/map')">Map</a>
          <a class="nav-link" @click="goToMenu('/module/map')">Map</a>
          <a class="nav-link" @click="goToMenu('/module/font')">Font</a>
          <a class="nav-link" @click="goToMenu('/module/calendar')">Calendar</a>
          <a class="nav-link" @click="goToMenu('/module/alert')">Sweetalert2</a>
          <a class="nav-link" @click="goToMenu('/module/loading')">Loading</a>
          <a class="nav-link" @click="goToMenu('/module/table')">Table</a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    goToMenu(path) {
      this.$router.push({ path: path })
    }
  }
}
</script>

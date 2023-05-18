<template>
  <div>
    <notifications></notifications>
    <router-view :key="$route.fullPath"></router-view>
    <ul class="list">
          <li><router-link class="routerLink" to="AI">AI</router-link></li>
    </ul>
</div>  
</template>

<script>
  export default {
    methods: {
      disableRTL() {
        if (!this.$rtl.isRTL) {
          this.$rtl.disableRTL();
        }
      },
      toggleNavOpen() {
        let root = document.getElementsByTagName('html')[0];
        root.classList.toggle('nav-open');
      }
    },
    mounted() {
      this.$watch('$route', this.disableRTL, { immediate: true });
      this.$watch('$sidebar.showSidebar', this.toggleNavOpen)
    }
  };
</script>

<style lang="scss"></style>

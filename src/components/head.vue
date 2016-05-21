<template>
  <h1><i class="icon ion-grid" @click='openMenu'></i><span v-link="{name: 'cart'}">123</span></h1> 
</template>

<script>
export default {
  methods: {
    openMenu () {
      this.$parent.menu.show = true
      this.$parent.mask = true
    }
  }
}
</script>
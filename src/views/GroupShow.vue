<template>
  <div>
    <h1>{{ name }}</h1>
    <p v-show="ifMissing">This group does not exist.</p>
    <p>Meets at {{ group.time }}</p>
  </div>
</template>

<script>
export default {
  props: {
    slug: {
      type: String
    }
  },
  computed: {
    ifMissing () {
      return !this.groups.filter(group => group.slug === this.slug).length
    },
    groups () {
      return this.$appData.groups
    },
    group () {
      return this.groups.filter(group => group.slug === this.slug)[0] || {}
    },
    name () {
      return this.group.name || '404 Error'
    }
  }
}
</script>

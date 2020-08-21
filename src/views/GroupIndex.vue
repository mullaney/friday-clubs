<template>
  <div>
    <h1>Friday Groups List</h1>
    <ul>
      <li v-for="group in groups" :key="group.slug">
        <router-link :to="{ name: 'Group', params: { slug: group.slug } }">
          {{ group.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    groups () {
      return this.$appData.groups
    }
  }
}
</script>

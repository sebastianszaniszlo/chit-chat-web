<template>
  <b-field class="search-bar">
    <b-autocomplete
      v-model="name"
      placeholder="Search"
      :keep-first="false"
      :open-on-focus="false"
      :data="filteredDataObj"
      field="user.first_name"
      @select="option => selected = option">
    </b-autocomplete>
  </b-field>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class SearchBar extends Vue {
  private searchText: string = '';
}
</script>
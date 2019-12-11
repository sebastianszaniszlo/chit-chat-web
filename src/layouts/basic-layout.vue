<template>
  <div class="section">
    <div class="columns">
      <div class="column">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BasicLayout extends Vue {}
</script>
<template>
  <div class="columns is-mobile is-gapless has-margin-bottom-0">
    <aside class="column is-narrow is-narrow-tablet aside">
      <sidebar />
    </aside>
    <div class="column">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sidebar from '@/components/sidebar/sidebar.vue';

@Component({
  components: {
    Sidebar,
  },
})
export default class AppLayout extends Vue {}
</script>
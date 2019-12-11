<template>
  <div class="avatar">
    <div class="initials">{{ initials }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Avatar extends Vue {
  @Prop() private firstName!: string;
  @Prop() private lastName!: string;

  private get initials(): string {
    return `${this.firstName[0]}${this.lastName[0]}`;
  }
}
</script>
<template>
  <nav class="sidebar is-fullheight">
    <avatar class="is-small has-margin-top-5 has-margin-bottom-5" :firstName="'Sebastian'" :lastName="'Szaniszlo'"/>
    <main-menu/>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Avatar from '@/components/sidebar/avatar.vue';
import MainMenu from '@/components/sidebar/menu.vue';

@Component({
  components: {
    Avatar,
    MainMenu,
  },
})
export default class Sidebar extends Vue {
}
</script>
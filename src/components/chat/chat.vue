<template>
  <layout>
    CHAT
  </layout>  
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import Layout from '@/layouts/app-layout.vue';

@Component({
  components: {
    HelloWorld,
    Layout,
  },
})
export default class Chat extends Vue {}
</script>

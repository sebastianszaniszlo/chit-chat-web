<template>
  <layout>
    <!-- <div class="chat"> -->
      <div class="columns is-gapless has-margin-bottom-0 is-fullheight chat">
        <chat-sidebar class="chat-sidebar"/>
        <div class="column is-four-fifths">
          CHAT GOES HERE
        </div>
      </div>
    <!-- </div> -->

  </layout>  
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Layout from '@/layouts/app-layout.vue';
import ChatSidebar from '@/components/chat/chat-sidebar.vue';

@Component({
  components: {
    Layout,
    ChatSidebar,
  },
})
export default class Chat extends Vue {}
</script>

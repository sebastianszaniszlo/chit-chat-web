<template>
  <layout>
    <div class="chat">
      <div class="columns is-gapless has-margin-bottom-0 is-fullheight">
        <div class="column is-one-fifth">
          <chat-sidebar/>
        </div>
        <div class="column is-four-fifths"><!-- has-padding-5 -->
          <chat-window class="has-padding-5"/>
        </div>
      </div>
    </div>
  </layout>  
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Layout from '@/layouts/app-layout.vue';
import ChatSidebar from '@/components/chat/chat-sidebar.vue';
import ChatWindow from '@/components/chat/chat-window.vue';

@Component({
  components: {
    Layout,
    ChatSidebar,
    ChatWindow,
  },
})
export default class Chat extends Vue {}
</script>

<template>
  <!-- <div class="chat-sidebar"> -->
    <div class="column is-one-fifth">
      <search-bar/>
      <chat-item class="chat-item" />
      <chat-item class="chat-item" />
      <chat-item class="chat-item" />
      <chat-item class="chat-item" />
      <chat-item class="chat-item" />
      <chat-item class="chat-item" />

    </div>
  <!-- </div>   -->
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SearchBar from '@/components/chat/search-bar.vue';
import ChatItem from '@/components/chat/chat-item.vue';

@Component({
  components: {
    SearchBar,
    ChatItem,
  },
})
export default class ChatSidebar extends Vue {}
</script>

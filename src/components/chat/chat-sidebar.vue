<template>
  <div class="chat-sidebar is-fullheight">
    <search-bar/>
    <chat-item/>
    <chat-item/>
    <chat-item/>
    <chat-item/>
    <chat-item/>
    <chat-item/>
    <chat-item/>
    <chat-item/>
    <chat-item/>
    <chat-item/>
  </div>
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

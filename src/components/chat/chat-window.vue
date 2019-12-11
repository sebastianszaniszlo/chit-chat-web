<template>
  <div class="chat-window">
    <message v-for="message in messages"
      :key="message.text"
      :text="message.text"
      :isSend="message.isSend"
      :isReceive="message.isReceive"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Avatar from '@/components/sidebar/avatar.vue';
import Message from '@/components/chat/message.vue';


@Component({
  components: {
    Avatar,
    Message,
  },
})
export default class ChatWindow extends Vue {
  private messages: Array<any> = [
    {
      text: 'Yo wassup',
      isSend: true,
      isReceive: false,
    },
    {
      text: 'How you doin?',
      isSend: false,
      isReceive: true,
    },
    {
      text: 'Busy day?',
      isSend: false,
      isReceive: true,
    },
  ];
}
</script>

<template>
  <!-- <div class="chat-item"> -->
    <div class="columns is-gapless is-vcentered has-margin-bottom-0">
      <div class="column">
        <avatar class="is-small" :firstName="'John'" :lastName="'Doe'"/>
      </div>
      <div class="column">
        <div>
          <strong>{{ from }}</strong>
          <div>{{ lastMessage }}</div>
        </div>
      </div>
      <div class="column has-text-centered">
        <div>
          <b-tag rounded type="is-danger">{{ newMessageCount }}</b-tag>
          <div>{{ lastMessageDate }}</div>
        </div>
      </div>      
    </div>
  <!-- </div>   -->
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Avatar from '@/components/sidebar/avatar.vue';

@Component({
  components: {
    Avatar,
  },
})
export default class ChatItem extends Vue {
  private from: string = 'John Doe';
  private newMessageCount: number = 2;
  private lastMessage: string = 'Hi there!';
  private lastMessageDate: string = '19:33';
}
</script>

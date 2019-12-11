<template>
  <div class="columns message has-margin-bottom-0"
    v-bind:class="{'is-send': isSend, 'is-receive': isReceive}">
    <div class="column is-narrow">
        <avatar class="is-small has-margin-0" :firstName="'John'" :lastName="'Doe'"/>
      </div>
    <div class="column">
      <div class="message-text has-padding-2"
        v-bind:class="{'is-send': isSend, 'is-receive': isReceive}">
        {{ text }}
      </div> 
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Avatar from '@/components/sidebar/avatar.vue';

@Component({
  components: {
    Avatar,
  },
})
export default class Message extends Vue {
  @Prop({ default: false }) private isSend!: boolean;
  @Prop({ default: false }) private isReceive!: boolean;
  @Prop({ default: '' }) private text!: string;


}
</script>

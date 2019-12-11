<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   
    <h3>Users</h3>
    <ul>
      <li v-for="user in users" :key="user._id">
        {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { User } from '@/shared/user';
import { UsersResponse } from '@/feathers/responses/users-response';

const userModule = namespace('users');

@Component
export default class HelloWorld extends Vue {
  @userModule.Getter('users') private users!: Array<User> ;
  @Prop() private msg!: string;

  private async mounted(): Promise<void> {
    await this.$store.dispatch('users/fetchUsersAsync');
  }
}
</script>
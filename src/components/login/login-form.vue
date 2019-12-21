<template>
  <div class="columns is-centered">
    <div class="column is-one-third">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title is-size-5">
            Login
          </p>
        </header>
        <div class="card-content">
          <b-field label="Email">
            <b-input type="email" v-model="email"></b-input>
          </b-field>
          <b-field label="Password">
            <b-input type="password" v-model="password" password-reveal></b-input>
          </b-field>
          <b-button type="is-primary" @click="login">Login</b-button>
        </div>
      </div>      
    </div>    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { AuthService } from '@/feathers/services/auth-service';
import { LoginRequest } from '@/feathers/requests/login-request';
import { FeathersError } from '@feathersjs/errors';

const authService = new AuthService();

@Component
export default class LoginForm extends Vue {
  private email: string | null = null;
  private password: string | null = null;

  private async login(): Promise<void> {
    const request: LoginRequest = {
      email: this.email!,
      password: this.password!,
    };

    try {
      await authService.loginAsync(request);
      this.$router.push({ name: 'chat' });
    } catch (e) {
      this.$buefy.snackbar.open({
        message: e.message,
        type: 'is-danger',
        position: 'is-top',
      });
    }
  }
}
</script>

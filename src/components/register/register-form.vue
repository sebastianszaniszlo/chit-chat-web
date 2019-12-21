<template>
  <div class="columns is-centered">
    <div class="column is-one-third">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title is-size-5">
            Register
          </p>
        </header>
        <div class="card-content">
          <b-field label="First name*">
            <b-input type="text" v-model="firstName"></b-input>
          </b-field>
          <b-field label="Last name*">
            <b-input type="text" v-model="lastName"></b-input>
          </b-field>
          <b-field label="Email*">
            <b-input type="email" v-model="email"></b-input>
          </b-field>
          <b-field label="Password*">
            <b-input type="password" v-model="password" password-reveal></b-input>
          </b-field>
          <b-field label="Repeat password*">
            <b-input type="password" v-model="repeatPassword" password-reveal></b-input>
          </b-field>
          <b-button type="is-primary" @click="register">Register</b-button>
        </div>
      </div>      
    </div>    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { AuthService } from '@/feathers/services/auth-service';
import { RegisterRequest } from '@/feathers/requests/register-request';
import { FeathersError } from '@feathersjs/errors';

const authService = new AuthService();

@Component
export default class RegisterForm extends Vue {
  private email: string | null = null;
  private password: string | null = null;
  private repeatPassword: string | null = null;
  private firstName: string | null = null;
  private lastName: string | null = null;

  private passwordsMatch(): boolean {
    return this.password === this.repeatPassword;
  }
  private async register(): Promise<void> {
    if (!this.passwordsMatch()) {
      this.$buefy.snackbar.open({
          message: `Passwords don't match, please try again`,
          type: 'is-danger',
          position: 'is-top',
        });

      return;
    }
    const request: RegisterRequest = {
      email: this.email!,
      password: this.password!,
      firstName: this.firstName!,
      lastName: this.lastName!,
    };

    try {
      this.$store.dispatch('users/registerUserAsync', request);
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

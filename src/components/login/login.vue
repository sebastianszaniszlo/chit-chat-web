<template>
  <layout>
      <login-form></login-form>
  </layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LoginForm from '@/components/login/login-form.vue';
import layout from '@/layouts/basic-layout.vue';

@Component({
  components: {
    layout,
    LoginForm,
  },
})
export default class Login extends Vue {}
</script>

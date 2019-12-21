<template>
  <layout>
    <register-form></register-form>
  </layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import RegisterForm from '@/components/register/register-form.vue';
import layout from '@/layouts/basic-layout.vue';

@Component({
  components: {
    layout,
    RegisterForm,
  },
})
export default class Register extends Vue {}
</script>

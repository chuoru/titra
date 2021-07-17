<script src="./Button.js"></script>
<template>
  <md-button :class="buttonClass" @click="onClick" :disabled="disable">{{
    buttonTitle
  }}</md-button>
</template>
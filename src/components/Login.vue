<template>
	<div class="login-container">
		<img src="../assets/logo.png">
		<h1>{{ msg }}</h1>
		<router-link tag="md-button" class="md-raised md-primary" to="/dashboard">Skip</router-link>		
	</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to VueRial'
    }
  }
}
</script>

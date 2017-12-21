<template>
	<div class="notfound-container">
		<h1>{{ msg }}</h1>
		<div class="text-center col-sm-6 col-sm-offset-3">
			<h2>You are lost.</h2>
			<h4>This page doesn't exist.</h4>
			<router-link tag="md-button" class="md-raised md-primary" to="/">Take me home.</router-link>
		</div>
	</div>
</template>

<script>
export default {
  name: 'NotFound',
  data () {
    return {
      msg: 'Something went wrong.'
    }
  }
}
</script>

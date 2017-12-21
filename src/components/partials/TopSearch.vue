<template>	
	<form novalidate @submit.stop.prevent="submit">
		<md-input-container>				
			<md-input placeholder="Search something.."></md-input>				
			<md-button class="md-icon-button md-primary">
				<md-icon>search</md-icon>
			</md-button>
		</md-input-container>
	</form>	
</template>

<script>
export default {
  name: 'topsearch'
}
</script>

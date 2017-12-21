<template>
	<div class="subcontent-wrapper">
		<h1>{{ msg }}</h1>
		<md-layout md-gutter>				
			<md-layout><top-customers /></md-layout>
			<md-layout><sales /></md-layout>
			<md-layout></md-layout>
		</md-layout>
		<md-layout md-gutter>
			<md-layout md-column md-gutter>
				<md-layout md-flex="20"></md-layout>
				<md-layout></md-layout>
			</md-layout>

			<md-layout md-column md-gutter>
				<md-layout md-flex="50"></md-layout>
				<md-layout></md-layout>
				<md-layout></md-layout>
			</md-layout>
		</md-layout>		
	</div>
</template>

<script>
import Sales from '../charts/Sales'
import TopCustomers from '../partials/TopCustomers'
export default {
  name: 'statistics',
  components: {
    Sales,
    TopCustomers
  },
  data () {
    return {
      msg: 'Statistics'
    }
  }
}
</script>

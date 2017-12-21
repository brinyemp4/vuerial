<template>
	<div class="child-container">
		<div class="sidebar-wrapper">
			<sidebar />
		</div>
		<router-view></router-view>		
	</div>
</template>

<script>
import Sidebar from './partials/Sidebar'
export default {
  name: 'dashboard',
  components: {
    Sidebar
  }
}
</script>

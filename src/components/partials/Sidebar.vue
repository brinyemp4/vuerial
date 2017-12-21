<template>
	<aside>
		<md-toolbar>
			<md-button class="md-icon-button" @click="toggleLeftSidenav">
			  <md-icon>menu</md-icon>
			</md-button>		
			
			<h2 class="md-title">VueRial</h2>
			<span style="flex: 1"></span>
			<top-search />
			<md-button class="md-icon-button">
				<md-icon>eject</md-icon>
			</md-button>
		
		</md-toolbar>

		<md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
			<sidebar-menu />
		</md-sidenav>
	</aside>
</template>

<script>
import SidebarMenu from './SidebarMenu'
import TopSearch from './TopSearch'
export default {
  name: 'sidebar',
  components: {
    SidebarMenu,
    TopSearch
  },
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    open (ref) {
    },
    close (ref) {
    }
  }
}
</script>

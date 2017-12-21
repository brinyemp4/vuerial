<template>
	<div class="menu">
		<md-toolbar md-theme="white">
			<user-avatar />			
		</md-toolbar>

		<md-list>
			<md-list-item md-expand-multiple>
				<md-icon>wc</md-icon>
				<span>Customer</span>

				<md-list-expand>
				<md-list>
					<md-list-item class="md-inset">List</md-list-item>					
				</md-list>
				</md-list-expand>
			</md-list-item>

			<md-list-item md-expand-multiple>
				<md-icon>transfer_within_a_station</md-icon>
				<span>Supplier</span>

				<md-list-expand>
				<md-list>
					<md-list-item class="md-inset">List</md-list-item>					
				</md-list>
				</md-list-expand>
			</md-list-item>

			<md-list-item md-expand-multiple>
				<md-icon>storage</md-icon>
				<span>Products</span>

				<md-list-expand>
				<md-list>
					<md-list-item class="md-inset">List</md-list-item>					
				</md-list>
				</md-list-expand>
			</md-list-item>
			
			<md-list-item md-expand-multiple>
				<md-icon>shopping_cart</md-icon>
				<span>Orders</span>

				<md-list-expand>
				<md-list>
					<md-list-item class="md-inset">List</md-list-item>					
				</md-list>
				</md-list-expand>
			</md-list-item>
			
			<md-list-item md-expand-multiple>
				<md-icon>show_chart</md-icon>
				<span>Invoices</span>

				<md-list-expand>
				<md-list>
					<md-list-item class="md-inset">List</md-list-item>					
				</md-list>
				</md-list-expand>
			</md-list-item>

			<md-list-item>
				<md-icon>eject</md-icon>
				<span>Signout</span>
			</md-list-item>
		</md-list>
	</div>
</template>

<script>
import UserAvatar from './UserAvatar'
export default {
  name: 'sidebarmenu',
  components: {
    UserAvatar
  }
}
</script>

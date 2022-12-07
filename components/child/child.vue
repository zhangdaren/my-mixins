<template>
	<view class="content">
		child
	</view>
</template>

<script>
	export default {
		options: {
			styleIsolation: 'apply-shared'
		},
		name: "child",
		data() {
			return {

			};
		},
		methods: {
			pageShow() {
				console.log("page show")
			},
			pageHide() {
				console.log("page hide======")
			}
		}
	}
</script>

<style>
	.content {
		background-color: azure;
	}
</style>

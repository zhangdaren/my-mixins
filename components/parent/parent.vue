<template>
	<view class="content">
		parent
		<slot></slot>
	</view>
</template>

<script>
	export default {
		unicomGroup: ['checkbox'],
		test(){
			console.log("测试成功")
		},
		options: {
			styleIsolation: 'apply-shared'
		},
		name: "parent",
		data() {
			return {

			};
		},
		beforeCreate() {
			const opt = this.$options
			console.log("beforeCreate this", this)
			console.log("beforeCreate this.$options", this.$options)
		},
		onPageShow() {
			console.log("onPageShow")
		},
		onPageHide() {
			console.log("onPageHide")
		},
		mounted() {
			this.$options.test()
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
		padding: 40px;
		background-color: coral;
	}
</style>

<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>

		<parent>
			<child></child>
		</parent>


		<view class="set-data" v-for="(item, index) in list" :key="index">
			<view class="text-area">
				<text class="title">{{item.name}}</text>
			</view>
		</view>

	</view>
</template>

<script>
	function safeStringify(node) {
		var cache = [];
		var str = JSON.stringify(node, function(key, value) {
			if (typeof value === 'object' && value !== null) {
				if (cache.indexOf(value) !== -1) {
					// 移除
					return;
				}
				// 收集所有的值
				cache.push(value);
			}
			return value;
		});
		cache = null; // 清空变量，便于垃圾回收机制回收
		return str
	}
	export default {
		data() {
			return {
				title: 'Hello',
				list: [{
						name: "lilei"
					},
					{
						name: "hanmeimei"
					},
				]
			}
		},
		onLoad() {
				console.log("this", this)
			console.log("clone", !!this.clone)
			console.log("handleDataset", !!this.handleDataset)
			console.log("escape2Html", !!this.escape2Html)
			console.log("html2Escape", !!this.html2Escape)
			console.log("parseEventDynamicCode", !!this.parseEventDynamicCode)
			console.log("getTabBar", !!this.getTabBar)
			console.log("setData", !!this.setData)
			console.log("getRelationNodes", !!this.getRelationNodes)
			
			this.setData({
				"list[0].name":"new name"
			})
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>

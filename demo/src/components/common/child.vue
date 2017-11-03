<template>
	<div>
		<div class="child">shunzizhan</div>
		<div class="child2">{{message}}</div>
		<button  id="myclick" v-on:click="changeMsg()">更新文本</button >
	</div>
</template>

<script src='./child'></script>
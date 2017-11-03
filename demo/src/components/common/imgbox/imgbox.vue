<style src="./imgbox.less" lang="less"></style>
<template>
<div>
	<div class="imgbox-warp">
		<img id="myimage" class="main" src="./img/main.jpg" alt="">

		<img id="card-a" class="part" src="./img/200_180_50_50.png" alt="">
		<img id="card-b" class="part b" src="./img/410_20_65_30.png" alt="">
	</div>
	<ul class="imglist-warp">
    <li class="item_click" name="list-a" @click="resetStyle('list-a_1','card-a')"><img id="list-a_1" src="./img/200_180_50_50.png" data-x="200" data-y="180" alt="">
      <p>测试一</p>
    </li>
    <li class="item_click" name="list-b" @click="resetStyle('list-a_2','card-a')"><img id="list-a_2" src="./img/200_180_50_50_2.png" data-x="200" data-y="180" alt="">
      <p>测试二</p>
    </li>
  </ul>
  <ul class="imglist-warp hide">
    <li class="item_click" name="list-b"><img id="list-b_1" src="./img/410_20_65_30.png" data-x="410" data-y="20" alt="">
      <p>测试一</p>
    </li>
    <li class="item_click" name="list-b"><img id="list-b_2" src="./img/410_20_65_30_2.png" data-x="410" data-y="20" alt="">
      <p>测试二</p>
    </li>
  </ul>
</div>
</template>

<script src='./imgbox'></script>
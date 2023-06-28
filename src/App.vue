<template>
	<div class="wrapper">
		<p-header />
		<router-view />
		<p-footer />
	</div>
</template>

<style lang="scss"></style>
<script setup lang="ts">
import PHeader from "@/components/PHeader.vue";
import PFooter from "@/components/PFooter.vue";
</script>

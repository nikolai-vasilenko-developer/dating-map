<template>
	<button
		class="btn btn_hover"
		type="button"
		:class="{
			'btn_use-background': !noBackground,
			'btn_no-background': noBackground,
			'btn_use-small': noBackground,
			'btn_use-shadow': useShadow,
		}"
		:disabled="disabled"
	>
		<slot />
	</button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
	disabled?: boolean;
	noBackground?: boolean;
	useShadow?: boolean;
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss"></style>

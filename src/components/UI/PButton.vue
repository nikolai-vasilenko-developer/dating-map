<template>
	<button class="btn" :disabled="disabled">
		<slot />
	</button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
	disabled?: boolean;
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss"></style>

<template>
	<div class="input">
		<div class="input__icon" v-if="icon">
			<component :is="icon" />
		</div>
		<input
			type="text"
			class="input__input"
			:placeholder="placeholder"
			:value="value"
			@input="$emit('update:value', $event.target.value)"
		/>
	</div>
</template>

<script setup lang="ts">
import { Component, defineProps } from "vue";

interface Props {
	value: string;
	placeholder?: string;
	icon?: Component;
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss"></style>

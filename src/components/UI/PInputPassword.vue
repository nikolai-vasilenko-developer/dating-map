<template>
	<div class="input">
		<div class="input__icon" v-if="icon">
			<component :is="icon" />
		</div>
		<input
			:type="typeInput"
			class="input__input"
			:placeholder="placeholder"
			:value="value"
			@input="$emit('update:value', $event.target.value)"
		/>
		<eye-icon
			class="input__manage-password"
			:class="{ 'input__manage-password__view': isText }"
			@click="changeType"
		/>
	</div>
</template>

<script setup lang="ts">
import { Component, computed, defineProps, Ref, ref } from "vue";
import EyeIcon from "@/components/icons/EyeIcon.vue";

interface Props {
	value: string;
	placeholder?: string;
	icon?: Component;
}

const props = defineProps<Props>();

type InputType = "password" | "text";

const typeInput: Ref<InputType> = ref("password");
const changeType = () => {
	if (typeInput.value === "text") {
		typeInput.value = "password";
	} else {
		typeInput.value = "text";
	}
};

const isText = computed(() => {
	return typeInput.value === "text";
});
</script>

<style scoped lang="scss"></style>

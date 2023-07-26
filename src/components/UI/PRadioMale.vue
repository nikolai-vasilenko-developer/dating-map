<template>
	<div
		class="sex-radio-button sex-radio-male"
		:class="{ 'sex-radio-button_active': isActive }"
		@click="updateSex"
	>
		<img
			src="../../assets/images/male.png"
			height="36"
			width="36"
			alt="male"
		/>
	</div>
</template>

<script setup lang="ts">
import { Sex } from "@/tools/Entities";
import { computed, defineEmits, defineProps } from "vue";

interface Props {
	modelValue: Sex;
}

const props = defineProps<Props>();

const emit = defineEmits<{
	(e: "update:model-value", sex: Sex): void;
}>();

const isActive = computed(() => {
	return props.modelValue === Sex.male;
});

const updateSex = () => {
	emit("update:model-value", Sex.male);
};
</script>

<style scoped lang="scss"></style>

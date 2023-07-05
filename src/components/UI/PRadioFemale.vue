<template>
	<div
		class="sex-radio-button"
		:class="{ 'sex-radio-button_active': isActive }"
		@click="updateSex"
	>
		<img
			src="../../assets/images/female.png"
			height="36"
			width="36"
			alt="female"
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
	return props.modelValue === Sex.female;
});

const updateSex = () => {
	emit("update:model-value", Sex.female);
};
</script>

<style scoped lang="scss"></style>

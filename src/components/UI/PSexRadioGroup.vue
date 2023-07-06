<template>
	<div class="form-register__item sex-radio">
		<p-radio-male :model-value="sex" @update:model-value="updateSex" />
		<p-radio-female :model-value="sex" @update:model-value="updateSex" />
	</div>
</template>

<script setup lang="ts">
import PRadioMale from "@/components/UI/PRadioMale.vue";
import PRadioFemale from "@/components/UI/PRadioFemale.vue";
import { Sex } from "@/tools/Entities";
import { defineProps, defineEmits } from "vue";

interface Props {
	sex: Sex;
}

const props = defineProps<Props>();

const emit = defineEmits<{
	(e: "update:sex", sex: Sex): void;
}>();

const updateSex = (sex: Sex) => {
	emit("update:sex", sex);
};
</script>

<style scoped lang="scss"></style>

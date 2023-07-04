<template>
	<div class="modal" v-if="visible">
		<div class="modal__content" v-click-outside="cancel">
			<slot></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

interface Props {
	visible: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits(["cancel", "update:visible"]);

const cancel = (): void => {
	console.log("Отмена", props.visible);
	emit("cancel");
	emit("update:visible", false);
};
</script>

<style scoped lang="scss">
.modal {
	background: #1d0b23d9;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.modal__content {
	padding: 50px 45px;
	background: #1c0a22;
	border-radius: 50px;
	box-shadow: 0 0 3px #8b5d9a;
}
</style>

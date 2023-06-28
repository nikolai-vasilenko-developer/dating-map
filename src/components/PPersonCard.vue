<template>
	<div class="person-card">
		<div class="person-card__image-container">
			<img
				class="person-card__image"
				:src="image"
				alt="Человек номер 1"
			/>
		</div>
		<div class="person-card__person-info">
			<div class="person-card__person">
				<span class="person-card__person-name"> {{ name }}, </span>
				<span class="person-card__person-age">{{ age }}</span>
				<span class="person-card__person-status">
					{{ status ? "Онлайн" : "Оффлайн" }}
				</span>
			</div>
			<div class="person-card__location">
				<span class="person-card__location-icon"></span>
				<span class="person-card__location-name"> {{ location }} </span>
			</div>
		</div>
		<div class="person-card__btn">
			<p-button>Поприветствовать</p-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import PButton from "@/components/UI/PButton.vue";
import { defineProps } from "vue";

interface Props {
	image: string;
	name: string;
	age: number;
	status: boolean;
	location_icon: string | null;
	location: string;
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss"></style>

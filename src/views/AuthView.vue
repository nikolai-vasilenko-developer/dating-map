<template>
	<div class="auth-view">
		<div class="auth-view__background-center"></div>
		<div class="auth-view__background-left"></div>
		<div class="auth-view__background-right"></div>
		<div class="container">
			<div class="auth-view__header">
				<h2 class="auth-view__header-text">Знакомства без преград</h2>
				<p class="auth-view__header-desc">
					Для современного мира сплочённость команды профессионалов
					однозначно фиксирует необходимость системы обучения кадров,
					соответствующей насущным потребностям.
				</p>
			</div>
			<transition name="fade">
				<form class="auth-view__form form" action="#">
					<input
						type="text"
						class="form__element input"
						placeholder="Введите электронную почту"
						v-model.trim="formField.email"
					/>
					<input
						type="password"
						class="form__element input"
						placeholder="Введите пароль"
						v-model.trim="formField.password"
					/>
					<p-button>Войти</p-button>
					<small class="auth-view__forgot-pass"
						>Я не помню пароль</small
					>
				</form>
			</transition>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PButton from "@/components/UI/PButton.vue";

const formField = ref({
	email: null,
	password: null,
});
</script>

<style scoped lang="scss"></style>

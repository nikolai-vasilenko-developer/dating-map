<template>
	<p-modal v-model:visible="isShow">
		<h3>Я не помню пароль</h3>
		<small>
			Введи свой email и мы вышлем тебе инструкции по изменению пароля
		</small>
		<p-input
			v-model:value.trim="email"
			:icon="MessageIcon"
			placeholder="Введите свой email"
		/>
		<p-button>Запросить новый пароль</p-button>
	</p-modal>
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
					<p-input
						class="form__element"
						v-model:value.trim="formField.email"
						placeholder="Введите электронную почту"
						:icon="MessageIcon"
					/>
					<p-input-password
						class="form__element"
						v-model:value.trim="formField.password"
						placeholder="Введите пароль"
						:icon="PasswordIcon"
					/>
					<p-button use-shadow>Войти</p-button>
					<small class="auth-view__forgot-pass" @click="show">
						Я не помню пароль
					</small>
				</form>
			</transition>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PButton from "@/components/UI/PButton.vue";
import PInput from "@/components/UI/PInput.vue";
import MessageIcon from "@/components/icons/MessageIcon.vue";
import PasswordIcon from "@/components/icons/PasswordIcon.vue";
import PInputPassword from "@/components/UI/PInputPassword.vue";
import PModal from "@/components/UI/PModal.vue";
import useShow, { useShowType } from "@/composable/useShow";

const formField = ref({
	email: "",
	password: "",
	test: "",
});

const email = ref("");

const { isShow, show }: useShowType = useShow();
</script>

<style scoped lang="scss"></style>

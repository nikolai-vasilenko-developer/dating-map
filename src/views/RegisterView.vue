<template>
	<div class="container">
		<main class="register-view">
			<h2 class="register-view__title">Создай новый аккаунт</h2>
			<small class="register-view__title-small">
				Присоединяйся к сообществу из 518 млн человек!
			</small>
			<form class="form-register">
				<p-input
					:icon="UserIcon"
					class="form-register__item"
					v-model:value="formField.name"
					placeholder="Ваше имя"
				/>
				<small>Дата рождения</small>
				<div class="form-register__item birthday-input">
					<p-input
						class="birthday-input__day birthday-input__item"
						v-model:value="formField.day"
						placeholder="День"
					/>
					<p-input
						class="birthday-input__month birthday-input__item"
						v-model:value="formField.month"
						placeholder="Месяц"
					/>
					<p-input
						class="birthday-input__year birthday-input__item"
						v-model:value="formField.year"
						placeholder="Год"
					/>
				</div>
				<p-sex-radio-group
					class="form-register__item"
					v-model:sex="formField.sex"
				/>
				<p-input
					:icon="MessageIcon"
					class="form-register__item"
					v-model:value="formField.email"
					placeholder="Введите электронную почту"
				/>
				<p-input-password
					:icon="PasswordIcon"
					class="form-register__item"
					v-model:value="formField.password"
					placeholder="Введите пароль"
				/>
				<p-button class="form-register__item">Создать аккаунт</p-button>
			</form>
		</main>
	</div>
</template>

<script setup lang="ts">
import PInput from "@/components/UI/PInput.vue";
import { computed, ref } from "vue";
import PInputPassword from "@/components/UI/PInputPassword.vue";
import PButton from "@/components/UI/PButton.vue";
import MessageIcon from "@/components/icons/MessageIcon.vue";
import PasswordIcon from "@/components/icons/PasswordIcon.vue";
import UserIcon from "@/components/icons/UserIcon.vue";
import { Sex } from "@/tools/Entities";
import PRadioMale from "@/components/UI/PRadioMale.vue";
import PRadioFemale from "@/components/UI/PRadioFemale.vue";
import PSexRadioGroup from "@/components/UI/PSexRadioGroup.vue";

const formField = ref({
	name: "",
	day: "",
	month: "",
	year: "",
	sex: Sex.male,
	email: "",
	password: "",
});

const validate = computed(() => {
	return (
		formField.value.name &&
		formField.value.day &&
		formField.value.month &&
		formField.value.year &&
		formField.value.sex &&
		formField.value.email &&
		formField.value.password
	);
});
</script>

<style scoped lang="scss">
.register-view {
	width: 380px;
	margin: 65px auto 115px auto;
}

.register-view__title {
	text-align: center;
	font-size: 32px;
	font-weight: 500;
	line-height: 150%;
	margin-bottom: 10px;
}

.form-register__item {
	margin: 10px 0;
}

.birthday-input {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.birthday-input__day,
.birthday-input__year {
	flex: 1;
}

.birthday-input__month {
	flex: 2;
}

.birthday-input__item {
	margin-right: 5px;

	&:last-child {
		margin-right: 0;
	}
}

.register-view__title-small {
	margin-bottom: 20px;
}

small {
	display: inline-block;
	margin-top: 10px;
	text-align: center;
	color: #925fa4;
	cursor: pointer;
}
</style>

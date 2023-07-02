<template>
	<header>
		<div class="container">
			<div class="header">
				<h1 class="header__logo">
					<img
						class="header__logo-img"
						src="@/assets/icons/logo.svg"
						alt="Логотип знакомств"
					/>
					<span class="header__logo-txt">Znakomst.com</span>
				</h1>
				<div class="header__registration">
					<span class="header__registration-text"
						>Впервые здесь?</span
					>
					<p-button no-background>Регистрация</p-button>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import PButton from "@/components/UI/PButton.vue";
</script>

<style scoped lang="scss"></style>

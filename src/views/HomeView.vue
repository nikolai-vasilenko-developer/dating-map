<template>
	<section class="home-view">
		<div class="container">
			<section class="home-view__section">
				<h3>Топ для знакомств</h3>
				<p-carousel>
					<div
						class="carousel__item"
						v-for="user in usersTop"
						:key="user.id"
					>
						<p-person-card
							:image="user.image"
							:location_icon="user.location_icon"
							:name="user.name"
							:location="user.location"
							:age="user.age"
							:status="user.status"
						/>
					</div>
				</p-carousel>
			</section>
			<section class="home-view__section">
				<h3>Ищу парня</h3>
				<p-carousel>
					<div
						class="carousel__item"
						v-for="user in usersMans"
						:key="user.id"
					>
						<p-person-card
							:image="user.image"
							:location_icon="user.location_icon"
							:name="user.name"
							:location="user.location"
							:age="user.age"
							:status="user.status"
						/>
					</div>
				</p-carousel>
			</section>
			<section class="home-view__section">
				<h3>Мужчины</h3>
				<p-carousel>
					<div
						class="carousel__item"
						v-for="user in usersWomans"
						:key="user.id"
					>
						<p-person-card
							:image="user.image"
							:location_icon="user.location_icon"
							:name="user.name"
							:location="user.location"
							:age="user.age"
							:status="user.status"
						/>
					</div>
				</p-carousel>
			</section>
		</div>
	</section>
</template>

<script lang="ts" setup>
import PPersonCard from "@/components/PPersonCard.vue";
import { ref } from "vue";
import { v4 } from "uuid";
import PCarousel from "@/components/PCarousel.vue";

const usersTop = ref([
	{
		id: v4(),
		image: "http://192.168.0.76:8080/img/person-1.aaadba91.png",
		name: "Николай",
		age: 22,
		status: false,
		location_icon: null,
		location: "Россия",
	},
	{
		id: v4(),
		image: "http://192.168.0.76:8080/img/person-1.aaadba91.png",
		name: "Николай",
		age: 22,
		status: false,
		location_icon: null,
		location: "Россия",
	},
	{
		id: v4(),
		image: "http://192.168.0.76:8080/img/person-1.aaadba91.png",
		name: "Николай",
		age: 22,
		status: false,
		location_icon: null,
		location: "Россия",
	},
	{
		id: v4(),
		image: "http://192.168.0.76:8080/img/person-1.aaadba91.png",
		name: "Николай",
		age: 22,
		status: false,
		location_icon: null,
		location: "Россия",
	},
	{
		id: v4(),
		image: "http://192.168.0.76:8080/img/person-1.aaadba91.png",
		name: "Николай",
		age: 22,
		status: false,
		location_icon: null,
		location: "Россия",
	},
	{
		id: v4(),
		image: "http://192.168.0.76:8080/img/person-1.aaadba91.png",
		name: "Николай",
		age: 22,
		status: false,
		location_icon: null,
		location: "Россия",
	},
	{
		id: v4(),
		image: "http://192.168.0.76:8080/img/person-1.aaadba91.png",
		name: "Николай",
		age: 22,
		status: false,
		location_icon: null,
		location: "Россия",
	},
]);
const usersMans = ref([
	{
		id: v4(),
		image: "http://192.168.0.76:8080/img/person-1.aaadba91.png",
		name: "Николай",
		age: 22,
		status: false,
		location_icon: null,
		location: "Россия",
	},
	{
		id: v4(),
		image: "http://192.168.0.76:8080/img/person-1.aaadba91.png",
		name: "Николай",
		age: 22,
		status: false,
		location_icon: null,
		location: "Россия",
	},
	{
		id: v4(),
		image: "http://192.168.0.76:8080/img/person-1.aaadba91.png",
		name: "Николай",
		age: 22,
		status: false,
		location_icon: null,
		location: "Россия",
	},
	{
		id: v4(),
		image: "http://192.168.0.76:8080/img/person-1.aaadba91.png",
		name: "Николай",
		age: 22,
		status: false,
		location_icon: null,
		location: "Россия",
	},
	{
		id: v4(),
		image: "http://192.168.0.76:8080/img/person-1.aaadba91.png",
		name: "Николай",
		age: 22,
		status: false,
		location_icon: null,
		location: "Россия",
	},
	{
		id: v4(),
		image: "http://192.168.0.76:8080/img/person-1.aaadba91.png",
		name: "Николай",
		age: 22,
		status: false,
		location_icon: null,
		location: "Россия",
	},
	{
		id: v4(),
		image: "http://192.168.0.76:8080/img/person-1.aaadba91.png",
		name: "Николай",
		age: 22,
		status: false,
		location_icon: null,
		location: "Россия",
	},
]);
const usersWomans = ref([
	{
		id: v4(),
		image: "http://192.168.0.76:8080/img/person-1.aaadba91.png",
		name: "Николай",
		age: 22,
		status: false,
		location_icon: null,
		location: "Россия",
	},
	{
		id: v4(),
		image: "http://192.168.0.76:8080/img/person-1.aaadba91.png",
		name: "Николай",
		age: 22,
		status: false,
		location_icon: null,
		location: "Россия",
	},
	{
		id: v4(),
		image: "http://192.168.0.76:8080/img/person-1.aaadba91.png",
		name: "Николай",
		age: 22,
		status: false,
		location_icon: null,
		location: "Россия",
	},
	{
		id: v4(),
		image: "http://192.168.0.76:8080/img/person-1.aaadba91.png",
		name: "Николай",
		age: 22,
		status: false,
		location_icon: null,
		location: "Россия",
	},
	{
		id: v4(),
		image: "http://192.168.0.76:8080/img/person-1.aaadba91.png",
		name: "Николай",
		age: 22,
		status: false,
		location_icon: null,
		location: "Россия",
	},
	{
		id: v4(),
		image: "http://192.168.0.76:8080/img/person-1.aaadba91.png",
		name: "Николай",
		age: 22,
		status: false,
		location_icon: null,
		location: "Россия",
	},
	{
		id: v4(),
		image: "http://192.168.0.76:8080/img/person-1.aaadba91.png",
		name: "Николай",
		age: 22,
		status: false,
		location_icon: null,
		location: "Россия",
	},
]);
</script>

<style lang="scss" scoped>
.home-view__section {
	margin-bottom: 50px;
}
</style>

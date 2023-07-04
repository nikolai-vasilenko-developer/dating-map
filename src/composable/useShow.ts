import { Ref, ref } from "vue";

export type useShowType = {
	hide: () => void;
	show: () => void;
	toggle: () => void;
	isShow: Ref<boolean>;
};
export default function (isShowStart = false): useShowType {
	const isShow: Ref<boolean> = ref(isShowStart);
	const toggle = (): void => {
		isShow.value = !isShow.value;
	};
	const show = (): void => {
		isShow.value = true;
	};

	const hide = (): void => {
		isShow.value = false;
	};

	return {
		isShow,
		toggle,
		show,
		hide,
	};
}

export const clickEvent = (event: any, to: any, push: any) => {
	const contentPusher: any = document.getElementById("content-pusher");
	contentPusher.classList.remove("animateIn");
	contentPusher.classList.add("animateOut");
	setTimeout(() => contentPusher.classList.add("animateIn"), 300);
	event.preventDefault();
	setTimeout(() => push(to), 300);
};

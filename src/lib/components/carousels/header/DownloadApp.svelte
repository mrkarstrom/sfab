<script>
	import Card1Countdown from '$lib/components/carousels/header/Card1Countdown.svelte';
	import Card3 from '$lib/components/carousels/header/Card3.svelte';
	import Card4 from '$lib/components/carousels/header/Card4.svelte';
	import Card2 from '$lib/components/carousels/header/Card2.svelte';
	import { Swipe, SwipeItem } from 'svelte-swipe';

	const swipeConfig = {
		autoplay: false,
		showIndicators: false,
		transitionDuration: 1500,
		defaultIndex: 0
	};
	let SwipeComp;
	let n = 0;

	function nextSlide() {
		if (n <= 2) {
			n++;
		} else {
			n = 0;
		}
		SwipeComp.goTo(n);
	}

	function prevSlide() {
		if (n >= 1) {
			n--;
		} else {
			n = 3;
		}
		SwipeComp.goTo(n);
	}
</script>

<div
	id="spacer"
	class="w-full h-[50px] flex justify-center items-center 
					lg:h-[200px]"
>
	<div
		class="hidden items-center justify-center drop-shadow-xl w-[880px] 
				md:h-[400px] 
				md:w-[850px]
				lg:flex
				lg:h-[400px] 
				lg:w-[950px] 
				lg:-translate-y-[200px]
				"
	>
		<!-- Left Arrow Box -->
		<button
			id="left-arrow-box"
			class="justify-center h-[90%] w-[70px] bg-secondary rounded-lg z-10"
			on:click={prevSlide}
		>
			<div class="flex items-center justify-center h-full w-full">
				<!-- arrow-left-svgrepo-com -->
				<svg
					width="2.5rem"
					class="bounce-left"
					viewBox="0 0 64 64"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					stroke="#000000"
					><polyline points="20 24 12 32 20 40" /><line x1="52" y1="32" x2="12" y2="32" /></svg
				>
			</div>
		</button>

		<!-- Carousel start -->
		<div
			class="w-[600px] h-[500px] 
					lg:w-[810px] lg:h-full "
		>
			<Swipe {...swipeConfig} bind:this={SwipeComp}>
				<!-- Slide 1 Start -->
				<SwipeItem>
					<Card1Countdown />
				</SwipeItem>
				<!-- Slide1 End -->
				<!-- Slide 2 Start -->
				<SwipeItem>
					<Card2 />
				</SwipeItem>
				<!-- Slide2 End -->

				<!-- Slide 3 Start -->
				<SwipeItem>
					<Card3 />
				</SwipeItem>
				<!-- Slide3 End -->

				<!-- Slide 4 Start -->
				<SwipeItem>
					<Card4 />
				</SwipeItem>
				<!-- Slide4 End -->
			</Swipe>
		</div>
		<!-- Carousel end -->

		<!-- Right Arrow Box -->

		<button
			id="right-arrow-box"
			class="justify-center h-[90%] w-[70px] bg-secondary rounded-lg z-10"
			on:click={nextSlide}
		>
			<div class="flex items-center justify-center h-full w-full">
				<svg
					width="2.5rem"
					class="bounce-right"
					viewBox="0 0 64 64"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					stroke="#000000"
					><polyline points="44 40 52 32 44 24" /><line x1="52" y1="32" x2="12" y2="32" /></svg
				>
			</div>
		</button>
	</div>
</div>

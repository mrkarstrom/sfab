<script>
	import LinkbarHero from '$lib/components/LinkbarHero.svelte';
	import ArrowDown from '$lib/components/ArrowDown.svelte';
</script>

<div
	class="backdrop flex flex-col items-center justify-center w-full bg-no-repeat bg-cover bg-center m-0 p-0 overflow-x-hidden lg:relative sm:h-[800px]"
	style="background-image: url('https://yesweb.se/sfab/img/mockup/hero-couple.png')"
>
	<LinkbarHero />
	<div class="box flex flex-col mt-48 items-center justify-center">
		<h4 class="mb-1 text-white uppercase">Be the change</h4>
		<h1 class="mb-10 text-white font-['Steelfish'] uppercase ">Slowfashion</h1>
		<ArrowDown --arrowColor="white" --circleColor="white" />
	</div>
</div>

<style>
	:root {
		--hero-lines: '#fff';
	}

	/* Online */
	@font-face {
		font-family: 'Steelfish';
		src: url('steelfish-rg.otf');
		color: #000;
	}
</style>

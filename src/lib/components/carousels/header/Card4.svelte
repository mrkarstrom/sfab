<script>
	import { currentLanguage } from '$lib/stores/langStore.js';
	import languages from '$lib/lang/languages.json';
</script>

<div
	id="container-box4"
	class="h-full w-[810px] gap-0 grid grid-rows-1 grid-cols-3 content-center "
>
	<div
		id="left-box-part"
		class="bg-white flex flex-col items-center justify-between w-full h-full rounded-lg lg:pt-24 lg:pb-6 lg:rounded-lg"
	>
		<h6 class="hidden text-center w-32 whitespace-wrap pt-14 lg:flex">
			{languages.downloadApp.card4.text1[$currentLanguage]}
		</h6>
		<button
			id="join-button"
			class="has-pointer-events bg-accent flex items-center justify-center h-10 w-60 rounded-md uppercase text-primary hover:bg-black hover:text-white transition duration-300 hover:ease-in-out"
		>
			<h5>{languages.downloadApp.card4.button[$currentLanguage]}</h5>
		</button>
	</div>
	<div class="h-full w-full col-start-2 col-span-2 items-center overflow-y-hidden">
		<img src="images/large/active/Card4-image.jpeg?raw=true" alt="" />
	</div>
</div>

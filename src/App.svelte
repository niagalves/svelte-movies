<script>
	import router from 'page';
	import Home from './pages/Home.svelte';
	import About from './pages/About.svelte';

	let page;

	router('/', () => page = Home);
	router('/sobre', () => page = About);

	router.start();
</script>

<main>
	<svelte:component this={page} />
</main>

<style>
	
</style>
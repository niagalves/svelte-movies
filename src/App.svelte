<script>
	import router from 'page';
  import Header from './components/Header.svelte';

	import Home from './pages/Home.svelte';
	import About from './pages/About.svelte';

	let page;

	router('/', () => page = Home);
	router('/sobre', () => page = About);

	router.start();
</script>

<main>
  <Header />
	<svelte:component this={page} />
</main>

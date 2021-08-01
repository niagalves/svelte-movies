<script>
	import router from 'page';
  import Header from './components/Header.svelte';
	import Home from './pages/Home.svelte';
  import Details from './pages/Details.svelte';

	let page;

	router('/', () => page = Home);
  router('/:id', () => page = Details);

	router.start();
</script>

<main>
  <Header />
	<svelte:component this={page} />
</main>

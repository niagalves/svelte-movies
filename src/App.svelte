<script>
	import router from 'page';
  import Header from './components/Header.svelte';

	import Home from './pages/Home.svelte';

	let page;

	router('/', () => page = Home);

	router.start();
</script>

<main>
  <Header />
	<svelte:component this={page} />
</main>

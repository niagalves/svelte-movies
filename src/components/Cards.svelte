<script>
  import { onMount } from 'svelte';
  import { getMovies } from '../service/movies.services';
  import Pagination from './Pagination.svelte';
  import Loader from './Loader.svelte';

  let page = 1;
  let data;
  let items;
  let loader = false;

  function initMount() {
    onMount(async () => {
      loader = true;
      data = await getMovies(page);
      items = data.results;
      if (data) {
        loader = false;
      }
	  });
  }

  async function updatePage(param) {
    loader = true;
    if (param === 'next') {
      page += 1;
    } else {
      page -= 1;
    }
    data = await getMovies(page);
    items = data.results;
    window.scrollTo(0, 0);
    if (data) {
      loader = false;
    }
  }

  initMount();
</script>

<Loader loader={loader} />
<div class="cards">
  <div class="cards-list">
    {#if data}
      {#each items as item}
        <div class="cards-details">
          <a href={`/${item.id}`} title={item.original_title}>
            <img src={`https://image.tmdb.org/t/p/w1280/${item.poster_path}`} alt={item.original_title} />
          </a>
        </div>
    	{/each}
    {/if}
  </div>
</div>
<Pagination page={page} handlePage={updatePage} />

<style lang="scss">
  .cards {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .cards-list {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .cards-details {
        width: 300px;
        height: 450px;
        margin: 15px;
        a {
          cursor: pointer;
        }
        img {
          max-width: 100%;
          width: 100%;
          border-radius: 10px;
        }
        @media(max-width: 1024px) {
          width: 250px;
          height: 380px;
        }
        @media(max-width: 768px) {
          width: 180px;
          height: 280px;
        }
      }
    }
  }
</style>

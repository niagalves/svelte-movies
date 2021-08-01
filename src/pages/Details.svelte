<script>
  import { onMount } from 'svelte';
  import get from '../service/movies.services';
  import Loader from '../components/Loader.svelte';
  import Search from '../components/Search.svelte';

  const body = document.body;
  const id = location.pathname.replace(/[^\d]+/g,'') || '';

  let data;
  let item;
  let loader = false;

  function renderBg(id) {
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = 'cover';
    body.style.backgroundImage = `linear-gradient(to right, rgba(19, 38, 47, 0.925) 0%, rgba(9, 28, 37, 0.925) 100%), ${id && (`url(http://image.tmdb.org/t/p/w1280//${id}`)})`;
    body.style.height = '100vh';
    body.style.backgroundPosition = 'top';
  }

  function initMount() {
    onMount(async () => {
      if (id) {
        loader = true;
        data = await get(id, 'unique');
        item = data;
        if (data) {
          loader = false;
          renderBg(item.backdrop_path);
        }
      } else {
        window.location.href = '/';
      }
    });
  }

  initMount();
</script>

<Loader loader={loader} />
{#if item}
  <section class="details container-padding">
    <div class="container">
      <Search />
      <div class="box-details">
        <div>
          <img src={`https://image.tmdb.org/t/p/w1280//${item.poster_path}`} alt={item.title} />
        </div>
        <div class="desc">
          <h1>{item.title}</h1>
          <p>
            {item.overview}
          </p>
          <ul>
            <li>
              {#if item.genres}
              <div>
                <b>Genres:</b>
                {#each item.genres as gender}
                  <span>
                    {gender.name}
                  </span>
                {/each}
              </div>
              {/if}
            </li>
            <li>
              <div>
                <b>Vote average:</b>
                <span>{item.vote_average}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="scss">
  .details {
    margin-top: 40px;
    .box-details {
      margin-top: 40px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      @media(max-width: 1190px) {
          display: flex;
          justify-content: center;
        }
      img {
        border-radius: 10px;
        width: 400px;
      }
      .desc {
        margin-left: 30px;
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        flex-direction: column;
        h1 {
          font-size: 35px;
          font-weight: var(--is-600);
          text-transform: uppercase;
          color: var(--is-secondary);
        }
        p {
          font-size: 18px;
          color: var(--is-light);
          max-width: 800px;
          width: 100%;
        }
        ul {
          list-style-type: none;
          padding-left: 0;
          li {
            margin-bottom: 30px;
            div {
              b {
                color: var(--is-secondary);
                font-weight: var(--is-600);
                font-size: 16px;
                display: block;
                margin-bottom: 15px;
              }
              span + span {
                margin-left: 5px;
              }
              span {
                background-color: var(--is-secondary);
                color: var(--is-light);
                padding: 5px;
                border-radius: 10px;
                font-weight: var(--is-600);
              }
            }
          }
        }
      }
    }
  }
</style>

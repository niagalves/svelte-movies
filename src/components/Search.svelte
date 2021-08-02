<script>
  import { findMovie } from '../service/movies.services';

  let query = '';
  let items;
  let data;
  let timer;
  let error = false;

  const debounce = v => {
    if (v) {
      clearTimeout(timer);
      timer = setTimeout(async () => {
        query = v;
        data = await findMovie(query);
        if (data.results.length === 0) {
          return error = true;
        }
        error = false;
        items = data.results;
      }, 1000);
    }
	}

  const redirect = (id) => {
    window.location.href = `/${id}`;
  };
</script>

<div class="search">
  <div class="row">
    <input
      type="text"
      bind:value={query}
      on:keyup={({ target: { value } }) => debounce(value)}
      name="search"
      id="search"
      placeholder="Search movie..."
      autocorrect="off"
      autocomplete="off"
    />
  </div>
  <div class="list">
    {#if items}
      <ul>
        {#each items as item}
          <li>
            <span on:click="{redirect(item.id)}" title={item.original_title}>
              <div class="details">
                <img src={item.poster_path ? `https://image.tmdb.org/t/p/w1280/${item.poster_path}` : 'https://via.placeholder.com/35x52'} alt={item.original_title} />
                <span>{item.original_title}</span>
              </div>
              <div>
                <span>{item.release_date.substring(0, 4) || ''}</span>
              </div>
            </span>
          </li>
        {/each}
      </ul>
    {/if}
    {#if error}
      <ul>
        <li>
          <span>
            <div class="details">
              <span>Not results found...</span>
            </div>
          </span>
        </li>
      </ul>
    {/if}
  </div>
</div>

<style lang="scss">
  ::-webkit-input-placeholder {
    font-style: italic;
    font-weight: var(--is-300);
  }
  :-ms-input-placeholder {
    font-style: italic;
    font-weight: var(--is-300);
  }
  ::placeholder {
    font-style: italic;
    font-weight: var(--is-300);
  }

  .search {
    .row {
      display: flex;
      justify-content: center;
      align-items: center;
      input {
        width: 700px;
        font-size: 1rem;
        border-radius: 10px;
        outline: none;
        padding: .65rem;
        border-color: transparent;
      }
    }
    .list {
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      width: 100%;
      z-index: 9;
      border-color: transparent;
      -webkit-box-shadow: 0 0 20px 0 rgba(0,0,0,.75);
      -moz-box-shadow: 0 0 20px 0 rgba(0,0,0,.75);
      box-shadow: 0 0 20px 0 rgba(0,0,0,.75);
      @media(max-width: 768px) {
        width: 560px;
      }
      ul {
        margin: 0;
        padding: 0;
        li {
          padding: 5px;
          border-bottom: 1px solid #979797;
          span {
            cursor: pointer;
            text-decoration: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
            font-weight: var(--is-600);
            color: var(--is-primary);
            .details {
              display: flex;
              align-items: center;
              img {
                width: 35px;
                margin-right: 10px;
              }
            }
          }
        }
      }
      max-height: 300px;
      overflow: auto;
      background-color: var(--is-light);
      max-width: 714px;
      border-radius: 15px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
</style>

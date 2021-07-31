<script>
import Pagination from './Pagination.svelte';

</script>

<div class="cards">
  <div class="cards-list">
    <div class="cards-details">
      <a href="/" title="titulo do filme">
        <img src="http://image.tmdb.org/t/p/w1280//7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" alt="titulo do filme" />
      </a>
    </div>
    <div class="cards-details">
      <a href="/" title="titulo do filme">
        <img src="http://image.tmdb.org/t/p/w1280//7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" alt="titulo do filme" />
      </a>
    </div>
    <div class="cards-details">
      <a href="/" title="titulo do filme">
        <img src="http://image.tmdb.org/t/p/w1280//7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" alt="titulo do filme" />
      </a>
    </div>
    <div class="cards-details">
      <a href="/" title="titulo do filme">
        <img src="http://image.tmdb.org/t/p/w1280//7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" alt="titulo do filme" />
      </a>
    </div>
  </div>
</div>
<Pagination />

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
        img {
          max-width: 100%;
          width: 100%;
          border-radius: 10px;
        }
        @media(max-width: 1024px) {
          width: 250px;
        }
        @media(max-width: 768px) {
          width: 180px;
        }
      }
    }
  }
</style>

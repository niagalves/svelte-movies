<script>
  const github = 'statics/img/github.png';
  const instagram = 'statics/img/instagram-new.png';

  const redirect = () => {
    window.location.href = '/';
  };

</script>

<header class="container-padding">
  <nav class="container">
    <div class="title-page">
      <span on:click="{redirect}" title="Home page">
        <strong>Svelte</strong>
        <span>Movies</span>
      </span>
    </div>
    <div>
      <ul>
        <li>
          <a href="https://github.com/niagalves/svelte-movies" title="Github" rel="noopener noreferrer" target="_blank">
            <img src={github} alt="Github" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/niagalves/" title="Instagram" rel="noopener noreferrer" target="_blank">
            <img src={instagram} alt="Instagram" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</header>

<style lang="scss">
  header {
    -webkit-box-shadow: 0 0 20px 0 rgba(0,0,0,.75);
    -moz-box-shadow: 0 0 20px 0 rgba(0,0,0,.75);
    box-shadow: 0 0 20px 0 rgba(0,0,0,.75);
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      .title-page {
        font-weight: var(--is-600);
        font-size: 25px;
        span {
          outline: none;
          text-decoration: none;
          cursor: pointer;
          strong {
            color: var(--is-light);
          }
          span {
            color: var(--is-secondary);
          }
        }
      }
      ul {
        list-style-type: none;
        display: flex;
        li + li {
          margin-left: 10px;
        }
      }
    }
  }
</style>

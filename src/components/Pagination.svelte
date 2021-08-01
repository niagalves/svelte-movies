<script>
  export let handlePage;
  export let page = 1;
</script>

<div class="pagination">
  <ul>
    <li>
      <span tabindex={page <= 1 ? -1 : 1} class={page <= 1 && ('disabled')} on:click={handlePage('prev')}>
        Previous
      </span>
    </li>
    <li>
      <span on:click={handlePage('next')}>
        Next
      </span>
    </li>
  </ul>
</div>

<style lang="scss">
  .pagination {
    margin-top: 30px;
    margin-bottom: 30px;
    .disabled {
      opacity: .2;
      pointer-events: none;
    }
    ul {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      list-style-type: none;
      li + li {
        margin-left: 10px;
      }
      li {
        span {
          background-color: var(--is-light);
          border-radius: 10px;
          padding: 10px;
          color: var(--is-primary);
          font-weight: var(--is-600);
          cursor: pointer;
          transition: 1s ease-out;
        }
      }
    }
  }
</style>

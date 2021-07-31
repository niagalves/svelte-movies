<script>
</script>

<div class="pagination">
  <ul>
    <li>
      <span>
        Previous
      </span>
    </li>
    <li>
      <span>
        Next
      </span>
    </li>
  </ul>
</div>

<style lang="scss">
  .pagination {
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

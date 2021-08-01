<script>
</script>

<div class="search">
  <div class="row">
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Search movie..."
      autocorrect="off"
      autocomplete="off"
  />
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
        border-radius: 15px;
        outline: none;
        padding: .65rem;
      }
    }
  }
</style>

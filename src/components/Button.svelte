<script>
  export let type = 'default';
  export let size = 'middle';

  let className = '';
	export { className as class };

</script>

<button
  class:primary={type === 'primary'}
  class:default={type === 'default'}
  class:small={size === 'small'}
  class:middle={size === 'middle'}
  class={className}
  on:click
>
  <span><slot /></span>
</button>

<style>
  button {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    touch-action: manipulation;
    height: 38px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 2px;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border-color: #d9d9d9;
  }
  .primary {
    color: #fff;
    background-color: #2e60f8;
    box-shadow: 0 2px 4px 0 #c1ccea;
    transition: none;
  }
  .primary:hover {
    background-color: #1f7df8;
    color: white;
  }

  .default {
    border: 1px solid #d4dbea;
  }
  .default:hover {
    border: 1px solid #97a5c7;
  }

  .middle {
    min-width: 100px;
    line-height: 38px;
    height: 38px;
  }
  .small {
    min-width: 60px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
  }
</style>

<script>
  import './App.css';
  // import { Button } from '~/components';

  import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';

  onMount(async() => {
    console.log('onMount');
    var bg = new Image();
    bg.src = 'https://assets.shoplazza.com/oss/operation/4e4d470ad447cd5834378067be5c0547.jpg';
    bg.onload = () => {
      var bgDom = document.getElementById('bg');
      bgDom.style['background-image'] = `url(${bg.src})`;
      bgDom.style['opacity'] = '1';
    };
  });

  onDestroy(() => {
    console.log('onDestroy');
  });

  beforeUpdate(() => {
    console.log('beforeUpdate');
  });

  afterUpdate(() => {
    console.log('afterUpdate');
  });
</script>

<main class="container">
  <div id="bg" class="container_bg" />
  <div class="container_mask" />
  <div class="text-[#30354D] tw-z-10">所念皆心河!</div>
  <!-- <Button>btn</Button> -->
</main>

<style lang="scss">
  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #333;
    display: flex;
    align-items: center;
    justify-content: center;

    &_bg {
      position: absolute;
      height: 100%;
      width: 100%;
      opacity: 0;
      background-position: center 0;
      background-repeat: no-repeat;
      background-size: cover;
      transition: opacity 500ms ease-in-out;
    }

    &_mask {
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
</style>

<script>
  import "./app.css";

  import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";

  let visible = false;
  onMount(() => {
    console.log("onMount");
  });

  onDestroy(() => {
    console.log("onDestroy");
  });

  beforeUpdate(() => {
    console.log("beforeUpdate");
  });

  afterUpdate(() => {
    console.log("afterUpdate");
    setTimeout(() => {
      visible = true;
    }, 1000);
  });
</script>

<main class="container">
  <div class="container_bg" style={visible ? "opacity: 1" : ""} />
  <div class="container_mask" />
  <div class="text-[#30354D] tw-z-10">Hello world!</div>
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
      background-image: url("./assets/bg.jpeg");
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

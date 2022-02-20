<script>
  import './App.css';
  // import { Button } from '~/components';

  import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';

  onMount(async () => {
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
  <div class="text-[#30354D] tw-z-10 tw-p-4 tw-flex tw-flex-col tw-items-center tw-overflow-auto tw-w-full tw-h-full">
    所念皆心河!<br /><br /> 你眨了下眼睛<br />像夜空 闪烁的恒星<br />为我所有不安<br />找到了 指引<br /><br />我呢喃了一句<br
    />晚风里 出走的心绪<br />为你每次试探<br />捎去了 回应<br /><br />所念皆星河 辗转里反侧<br />你占领每个 永恒的片刻<br
    />无垠的宇宙 浩瀚的选择<br />你是最亮那颗<br /><br />所爱如月色 触手而不得<br />将温柔的梦 都投射<br />你眼里有我
    对这世间的<br />吝啬<br /><br />你返航的轨迹<br />是所有 等待的意义<br />绕过多少周期<br />从未曾 离心<br /><br
    />多遥远的距离<br />都不抵 内心的亲密<br />更多更详尽歌词 在 <br />周旋每段关系<br />认出你 身影<br /><br
    />所念皆星河 辗转里反侧<br />你占领每个 永恒的片刻<br />无垠的宇宙 浩瀚的选择<br />你是最亮那颗<br /><br
    />所爱如月色 触手而不得<br />将温柔的梦 都投射<br />你眼里有我 对这世间的<br />吝啬<br /><br />所念皆星河 辗转里反侧<br
    />你占领每个 永恒的片刻<br />无垠的宇宙 浩瀚的选择<br />你是最亮那颗<br /><br />所爱如月色 触手而不得<br
    />将温柔的梦 都投射<br />你眼里有我 对这世间的<br />吝啬<br /><br />茫茫的星河 终点是你的<br />身侧<br />
  </div>
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

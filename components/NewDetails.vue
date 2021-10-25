<template>
  <section>
    <div>
      <div class="row discountN">
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 discountN2" v-for="coin in coins1" :key="coin.id">
          <div class="imgTe">
            <img :src="require('~/assets/images/img/' + coin.link)" alt="vchain" />
          </div>
          <h1>{{ coin.faName }}<span class="forSpace">{{ coin.engName }}</span></h1>
          <div>
            <a class="wantDis" href="#">دریافت کد تخفیف</a>
          </div>
          <div>
            <a href="#">بیشتر بدانید</a>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="row discountN">
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 discountN2" v-for="coin in coins2" :key="coin.id">
          <div class="imgTe">
            <img :src="require('~/assets/images/img/' + coin.link)" alt="vchain" />
          </div>
          <h1>{{ coin.faName }}<span class="forSpace">{{ coin.engName }}</span></h1>
          <div>
            <a class="wantDis" href="#">دریافت کد تخفیف</a>
          </div>
          <div>
            <a href="#">بیشتر بدانید</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      coins1: [
        {
          id: 1,
          engName: 'VeChain',
          faName: 'وی چین',
          link: 'vchain.png',
        },
        {
          id: 2,
          engName: 'Cardano',
          faName: 'کاردانو',
          link: 'cardano.png',
        },
        {
          id: 3,
          engName: 'Dogecoin',
          faName: 'چیلیز',
          link: 'doge.png',
        },
        {
          id: 4,
          engName: 'Chiliz',
          faName: 'چیلیز',
          link: 'chiliz.png',
        },
      ],
      coins2: [
        {
          id: 5,
          engName: 'Tron',
          faName: 'ترون',
          link: 'tron.png',
        },
        {
          id: 6,
          engName: 'Shiba',
          faName: 'شیبا',
          link: 'shiba.png',
        },
        {
          id: 7,
          engName: 'Bittorrent',
          faName: 'بیت تورنت',
          link: 'bittorent.png',
        },
        {
          id: 8,
          engName: 'Polygon',
          faName: 'پلی گان',
          link: 'polygon.png',
        },
      ]
    }
  }
}
</script>
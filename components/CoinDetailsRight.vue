<template>
  <section>
    <div v-for="coin in coins" :key="coin.id">
      <div class="row maincont maincont-right">
        <div class="col-lg-5 col-md-5 col-sm-3 col-xs-12">
          <div class="maincont-log">
            <img :src="require('../assets/images/' + coin.link)" alt="dogecoin" />
            <button class="getOff" href="#" @click="$emit('toggle-mod', coin.target)"><img class="percen" src="../assets/images/percent.svg" alt="percen" />دریافت کد تخفیف {{ coin.title }}</button>
          </div>
        </div>
        <div class="col-lg-7  col-md-7 col-sm-9 col-xs-12">
          <div class="maincont-title">
            <h1>{{ coin.title }}</h1>
            <hr>
            <p>{{ coin.description }}</p>
            <div class="GOR">
              <div class="gor-mar">
                <img class="percen" src="../assets/images/percent.svg" alt="percen" />
              </div>
              <div>
                <button class="getOffRes" @click="$emit('toggle-mod', coin.target)">دریافت کد تخفیف {{ coin.title }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row maincont maincont-right maincont-dis">
        <div class="col-lg-5 col-md-5 col-sm-3 col-xs-12">
          <div class="maincont-log">
            <img :src="require('../assets/images/' + coin.picLink)" alt="dogecoin" />
            <button class="getOff" @click="$emit('toggle-mod', coin.tar)"><img class="percen" src="../assets/images/percent.svg" alt="percen" />دریافت کد تخفیف {{ coin.tit }}</button>
          </div>
        </div>
        <div class="col-lg-7  col-md-7 col-sm-9 col-xs-12">
          <div class="maincont-title">
            <h1>{{ coin.tit }}</h1>
            <hr>
            <p>{{ coin.des }}</p>
            <div class="GOR">
              <div class="gor-mar">
                <img class="percen" src="../assets/images/percent.svg" alt="percen" />
              </div>
              <div>
                <button class="getOffRes" href="#" @click="$emit('toggle-mod', coin.tar)">دریافت کد تخفیف {{ coin.tit }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row maincont maincont-left">
        <div class="col-lg-7  col-md-7 col-sm-9 col-xs-12">
          <div class="maincont-title">
            <h1>{{ coin.tit }}</h1>
            <hr>
            <p>{{ coin.des }}</p>
            <div class="GOR">
              <div class="gor-mar">
                <img class="percen" src="../assets/images/percent.svg" alt="percen" />
              </div>
              <div>
                <button class="getOffRes" href="#" @click="$emit('toggle-mod', coin.tar)">دریافت کد تخفیف {{ coin.tit }}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-5 col-sm-3 col-xs-12">
          <div class="maincont-log">
            <img :src="require('../assets/images/' + coin.picLink)" alt="dogecoin" />
            <button class="getOff" @click="$emit('toggle-mod', coin.tar)"><img class="percen" src="../assets/images/percent.svg" alt="percen" />دریافت کد تخفیف {{ coin.tit }}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  emits:['toggle-mod'],
  data() {
    return {
      coins: [
        {
          id: 1,
          title: 'Ve-Chain',
          description: 'ارز Ve-Chain',
          target: 'VET',
          link: 'vechain.png',
          picLink: 'cardano.png',
          idd: 2,
          tit: 'Cardano',
          des: 'ارز Cardano',
          tar: 'ADA'
        },
        {
          id: 3,
          title: 'Chiliz',
          description: 'ارز Chiliz',
          target: 'CHZ',
          link: 'chiliz.png',
          picLink: 'dogecoin.png',
          idd:4,
          tit: 'Dogecoin',
          des: 'ارز Dogecoin',
          tar: 'DOGE'
        },
      ]
    }
  },
}
</script>
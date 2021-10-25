<template>
  <section>
    <div v-for="coin in coins" :key="coin.id">
      <div class="row maincont maincont-right">
        <div class="col-lg-5 col-md-5 col-sm-3 col-xs-12">
          <div class="maincont-log">
            <img src="../assets/images/dogecoin.png" alt="dogecoin" />
            <a class="getOff" href="#" @click="$emit('toggle-mod', coin.target)"><img class="percen" src="../assets/images/percent.svg" alt="percen" />دریافت کد تخفیف Cardano</a>
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
                <a class="getOffRes" href="#" @click="$emit('toggle-mod', coin.target)">دریافت کد تخفیف Cardano</a>
              </div>
            </div>
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
          target: 'VET'
        },
        {
          id: 2,
          title: 'Cardano',
          description: 'ارز Cardano',
          target: 'ADA'
        },
        {
          id: 3,
          title: 'Chiliz',
          description: 'ارز Chiliz',
          target: 'CHZ'
        },
        {
          id:4,
          title: 'Dogecoin',
          description: 'ارز Dogecoin',
          target: 'DOGE'
        }
      ]
    }
  },
}
</script>
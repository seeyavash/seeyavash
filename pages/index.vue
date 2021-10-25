<template>
  <div class="container">
    <header>
      <div class="mainnav">
        <div class="row">
          <div class="navbar flex">
            <div class="col-lg-8 col-md-7 col-sm-6 col-xs-6">
              <nav class="toppest">
                <ul>
                  <li><a href="#">سوالات متداول</a></li>
                  <li><a href="#">قوانین و مقررات</a></li>
                  <li><a href="#">تماس با ما</a></li>
                </ul>
              </nav>
              <hr class="first">
            </div>
            <div class="col-lg-4 col-md-5 col-sm-6 col-xs-6">
              <nav class="auth">
                <ul>
                  <li><a href="#">ورود</a></li>
                  <li><p>|</p></li>
                  <li><a href="#">ثبت نام</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="drop col-sm-4 col-xs-4" @click="setActive">          
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"/></svg>  
            <svg height="24" version="1.1" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><g transform="translate(0 -1028.4)"><path d="m8.4062 1041.1c-2.8856 1.3-4.9781 4-5.3437 7.3 0 1.1 0.8329 2 1.9375 2h14c1.105 0 1.938-0.9 1.938-2-0.366-3.3-2.459-6-5.344-7.3-0.649 1.3-2.011 2.3-3.594 2.3s-2.9453-1-3.5938-2.3z" fill="#2c3e50"/><path d="m17 4a5 5 0 1 1 -10 0 5 5 0 1 1 10 0z" fill="#34495e" transform="translate(0 1031.4)"/><path d="m12 11c-1.277 0-2.4943 0.269-3.5938 0.75-2.8856 1.262-4.9781 3.997-5.3437 7.25 0 1.105 0.8329 2 1.9375 2h14c1.105 0 1.938-0.895 1.938-2-0.366-3.253-2.459-5.988-5.344-7.25-1.1-0.481-2.317-0.75-3.594-0.75z" fill="#34495e" transform="translate(0 1028.4)"/></g></svg>    
          </div>
          <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4">
            <img class="logopng" src="~/assets/images/Arzypto_logo.png" />
          </div>
          <div class="col-lg-10 col-md-10 navbar flex dif">
            <nav>
              <ul>
                <li><a href="#">خانه</a></li>
                <li><a href="#">خرید و فروش</a></li>
                <li><a href="#">ارز ها</a></li>
                <li><a href="#">محصولات</a></li>
                <li><a href="#">وبلاگ</a></li>
                <li><a href="#">آموزش</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="dropnav" :class="{ 'active': isVisibleMobileMenu }">
        <ul>
          <li><a href="#">ورود</a></li>
          <li><a href="#">ثبت نام</a></li>
          <li><a href="#">سوالات متداول</a></li>
          <li><a href="#">قوانین و مقررات</a></li>
          <li><a href="#">تماس با ما</a></li>
          <li><a href="#">خانه</a></li>
          <li><a href="#">خرید و فروش</a></li>
          <li><a href="#">ارز ها</a></li>
          <li><a href="#">محصولات</a></li>
          <li><a href="#">وبلاگ</a></li>
          <li><a href="#">آموزش</a></li>
        </ul>
      </div>
    </header>
    <section>
      <div class="row">
        <div class="col-lg-6 col-md-5 col-sm-7 col-xs-12">
          <div class="showcase-text showcase">
            <h1>تخفیف ویژه</h1>
            <h4>8 ارز سودآور در سال 2021</h4>
            <p>با یک تخفیف ویژه وارد بازار پر سود ارز های دیجیتال شوید</p>
            <div class="getflex">
              <div class="ta-center">
                <a class="btn" href="#">چطور ؟</a>
              </div>
              <div class="ta-center dotted">
                <svg xmlns="http://www.w3.org/2000/svg" width="74" height="14" viewBox="0 0 74 14">
                  <g id="Group_9949" data-name="Group 9949" transform="translate(-1442 -709)">
                    <circle id="Ellipse_96" data-name="Ellipse 96" cx="7" cy="7" r="7" transform="translate(1502 709)" fill="#e1e1e1"/>
                    <circle id="Ellipse_97" data-name="Ellipse 97" cx="7" cy="7" r="7" transform="translate(1472 709)" fill="#e1e1e1"/>
                    <circle id="Ellipse_98" data-name="Ellipse 98" cx="7" cy="7" r="7" transform="translate(1442 709)" fill="#e1e1e1"/>
                </g></svg>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-7 col-sm-5 col-xs-12 imag">
          <img class="blue" src="~/assets/images/bgShape.png" alt="blue" />
          <img class="bg" src="~/assets/images/bg.png" alt="blue" />
        </div>
      </div>
    </section>
    <section>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mou">
        <img class="mouse" src="~/assets/images/mouse.svg" alt="mouse" />
      </div>
    </section>
    <section>
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 percents">
          <div class="discont">
            <div class="per30">
              <div class="per30-icon">
                <img class="newPercen" src="../assets/images/percent.svg" alt="percen" />
              </div>
              <div>
                <h1>30000 تومان تخفیف کارمزد</h1>
              </div>
              <div class="per30-icon">
                <img class="newPercen" src="../assets/images/percent.svg" alt="percen" />
              </div>
            </div>
            <h2>یکی از ارز های زیر را برای کد تخفیف انتخاب کنید</h2>
            <h3>کد تخفیف فقط برای یکی از ارزها قابل استفاده می باشد.</h3>
          </div>
        </div>
      </div>
    </section>
    <new-details></new-details>
    <section>
      <div class="row maincont mainc">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="maincont-heading">
            <h1>8 ارز دیجیتال که حتما باید بخریم</h1>
          </div>
        </div>
      </div>
    </section>
    <ModalVu v-if="modalVisible">
      <template v-slot:head>
        <div class="hide">
          <a href="#" @click="toggleFalse">x</a>
        </div>
        <div class="modall">
          <p>برای دریافت کد تخفیف، لطفا شماره موبایل خود را وارد کنید</p>
        </div>
      </template>
      <template v-slot:body>
        <div class="formm">
          <form @submit.prevent="submitNum">
            <input class="inputNum" type="text" v-model="nowInput" />
            <div class="butt">
              <button class="butts" type="submit">ثبت شماره</button>
            </div>
          </form>
        </div>
      </template>
    </ModalVu>
    <ModalVu v-if="otpVis">
      <template v-slot:head>
        <div class="hide">
          <a href="#" @click="toggleFalse">x</a>
        </div>
        <div class="modall">
          <p>کد یکبار مصرف را وارد کنید</p>
        </div>
      </template>
      <template v-slot:body>
        <div class="formm">
          <form @submit.prevent="submitOTP">
            <input class="inputNum" type="text" v-model="otpInput" />
            <p class="req">رمز یکبار مصرف الزامی میباشد.</p>
            <a class="reqq" @click="editNum" href="#">اصلاح شماره موبایل</a>
            <timer class="reqq" :seconds="retryAfter" @onFinish="onFinish"></timer>
            <div class="butt">
              <button v-if="rightBut" class="butts" type="submit">ثبت کد</button>
              <button v-if="!rightBut" class="butts" type="button" @click="resendReq">ارسال مجدد</button>
            </div>
          </form>
        </div>
      </template>
    </ModalVu>
    <CoinDetails @toggle-mod="toggleMod" />
  </div>
</template>

<script>
import ModalVu from '~/components/ModalVu';
import axios from 'axios'
import CoinDetails from '~/components/CoinDetails';
import timer from '~/components/timer';
import NewDetails from '~/components/NewDetails';

export default {
  components:{
    ModalVu,
    CoinDetails,
    timer,
    NewDetails
  },
  data() {
    return {
      isVisibleMobileMenu: false,
      modalVisible: false,
      nowInput: '',
      username: '',
      otpVis: false,
      otp: '',
      otpInput: '',
      coinTarget: '',
      retryAfter: '',
      rightBut: true,
    }
  },
  methods: {
    setActive() {
      this.isVisibleMobileMenu = !this.isVisibleMobileMenu
    },
    toggleMod(coin) {
      this.modalVisible = !this.modalVisible;
      this.coinTarget = coin;
    },
    toggleFalse() {
      this.modalVisible = false;
      this.otpVis = false;
    },
    submitNum() {
      this.username = this.nowInput;
      axios.post('/api/campaign/register', {
        username: this.username,
        utm: 'wBKi',
      }).then(res => {
        this.modalVisible= false;
        this.otpVis= true
        this.retryAfter = res.data.meta.data.retry_after;
      }).catch(e => {
        console.log(e)
      })

      this.nowInput = '';
    },
    editNum() {
      this.modalVisible=true;
      this.otpVis=false;
    },
    onFinish() {
      this.rightBut= false;
    },
    resendReq() {
      axios.post('/api/campaign/register', {
        username: this.username,
        utm: 'wBKi',
      }).then(res => {
        this.modalVisible= false;
        this.otpVis= true;
        this.retryAfter = res.data.meta.data.retry_after;
      }).catch(e => {
        console.log(e)
      })
    },
    submitOTP() {
      axios.post('/api/campaign/checkOtp', {
        username: this.username,
        otp: this.otpInput,
        utm: 'wBKi',
      }).then(res => {
        axios.post('/api/campaign/sendCode', {
          username: this.username,
          coin: this.coinTarget
        })
      }).catch(e => console.log(e))
    }
  }
}
</script>

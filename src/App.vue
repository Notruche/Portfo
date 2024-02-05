<template>
<div>
  <div class="navbar row container-fluid" 
  style="background-image: url('/images/TITRES/fond.png'); background-size: contain">
        <div class="col-4 hasimage p-4">
          <router-link to="/">
            <img src="/images/TITRES/ameliepecot.png" alt="" style="padding-left: 5%;">
          </router-link>
        </div>
        <div class="col-5"></div>
        <div class="col-3 row hasimage py-4">
            <div class="col-3 hasimage d-flex flex-column justify-content-center align-items-center">
              <router-link to="/about">
                <img src="/images/TITRES/contact.png" alt="" class="align-middle">
              </router-link>
            </div>
            <div class="col-3 hasimage d-flex flex-column justify-content-center align-items-center">
              <a href="https://www.instagram.com/pekolio/" target="blank">
                <img src="/images/TITRES/insta.png" alt="" class="align-middle">
              </a>
            </div>
            <div class="col-3 hasimage d-flex flex-column justify-content-center align-items-center">
              <a href="https://www.twitch.tv/gribouillos" target="blank">
                <img src="/images/TITRES/twitch.png" alt="" class="align-middle">
              </a>
            </div>
            <div class="col-3 hasimage d-flex flex-column justify-content-center align-items-center">
              <a href="https://ko-fi.com/gribouillos/" target="blank">
                <img src="/images/TITRES/shop.png" alt="" class="align-middle">
              </a>
            </div>
        </div>
    </div>

  <router-view></router-view>
</div>
</template>

<script>
export default {
  data() {
    return {
      i: 0
    };
  },
  methods: {   
  },
  created: function() {
  }
};
</script>


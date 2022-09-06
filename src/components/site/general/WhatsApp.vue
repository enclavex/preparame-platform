<template>
  <div id="wpp-container">
    <a id="wpp" target="_blank" :href="whatsAppLink"
      ><q-icon class="site-whatsapp-doubts" name="mdi-whatsapp"></q-icon>
      Dúvidas? Manda aqui!</a
    >
  </div>
</template>

<script>
export default {
  data() {
    return { whatsAppLink: "" };
  },
  mounted() {
    const mobile = window.mobileAndTabletCheck();

    if (mobile) {
      this.whatsAppLink = "https://wa.me/5511953399384"
    } else {
      this.whatsAppLink = "https://web.whatsapp.com/send?phone=+5511953399384"
    }
  },
};
</script>

<style>
#wpp-container a {
  z-index: 999999;
  position: fixed;
  font-family: "Nunito", sans-serif;
  right: -240px;
  transition: 0.5s;
  padding: 15px;
  width: 300px;
  text-decoration: none;
  font-size: 1.3rem;
  color: white;
  border-radius: 35px 0 0 35px;
}

#wpp-container a:hover {
  right: 0px;
}

#wpp {
  top: 90%;
  font-family: "Nunito", sans-serif;
  background-color: #4caf50;
}

.site-whatsapp-doubts {
  font-size: 2.4rem;
}
</style>

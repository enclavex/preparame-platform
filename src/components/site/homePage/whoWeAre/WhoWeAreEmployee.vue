<template>
  <div class="who-we-are-employee-container">
    <div class="who-we-are-employee">
      <img class="who-we-are-employee-image" :src="imgURL(employee.img)" alt />
    </div>
    <div class="who-we-are-employee-name">{{ employee.name }}</div>
    <div class="who-we-are-employee-desc">{{ employee.function }}</div>
  </div>
</template>

<script>
export default {
  props: ["employee"],
  methods: {
    imgURL: function (pathName) {
      var images = require.context(
        "../../../../assets/imgs/",
        false,
        /\.png$/
      );

      return images(`./${pathName}.png`);
    },
  },
};
</script>

<style>
.who-we-are-employee-container {
  margin: 10px;
  width: 250px;
}

.who-we-are-employee {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.who-we-are-employee-image {
  height: 25vh;
  width: 25vh;
}

.who-we-are-employee-name {
  position: relative;
  text-align: center;
  width: 80%;
  height: 30px;
  line-height: 25px;
  margin: 10px auto 0 auto;
  border-radius: 15px;
  color: #15aa7c;
  font-family: "nunito", sans-serif;
  font-weight: 700;
  font-size: 1.6em;
}

.who-we-are-employee-desc {
  font-family: "nunito", sans-serif;
  color: #667998;
  text-align: center;
  height: 3vh;
  font-size: 1.2em;
}
</style>

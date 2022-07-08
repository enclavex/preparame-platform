<template>
  <div class="who-we-are-employee-container">
    <div class="who-we-are-employee">
      <img class="who-we-are-employee-image" src="../../../../assets/imgs/employee1.jpg" alt>
    </div>
    <div class="who-we-are-employee-name">Lucy Nunes</div>
    <div class="who-we-are-employee-desc">CEO</div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .who-we-are-employee-container {
    margin: 10px;
  }

  .who-we-are-employee {
    display: flex;
    flex-direction: column;
  }

  .who-we-are-employee-image {
    border-radius: 50%;
    background-color: #15aa7c;
    height: 30vh;
    width: 30vh;
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

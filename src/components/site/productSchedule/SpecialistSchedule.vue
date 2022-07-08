<template>
  <div class="specialist-schedule">
    <img class="specialist-schedule-image" src="https://www.prepara.me/assets/img/lucy.png" alt>
    <div class="specialist-schedule-info">
      <div class="specialist-schedule-info-name">Lucy Nunes</div>
      <div class="specialist-schedule-info-bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        laboriosam quis hic illum voluptatum possimus, voluptas fugit est quia, labore, eligendi itaque. Optio
        necessitatibus reiciendis adipisci quas labore esse. Autem?</div>
      <div class="specialist-schedule-info-bio-full-link">
        <a>Ver Perfil Completo</a>
      </div>
    </div>
    <div class="specialist-schedule-calendar">
      <h3>Selecione um dia e horário disponível</h3>
      <div class="specialist-schedule-calendar-days-container">
        <div class="specialist-schedule-calendar-days-container-prior">
          <q-icon name="mdi-chevron-double-left" class="specialist-schedule-icon" />
        </div>
        <div class="specialist-schedule-calendar-day">
          <div class="specialist-schedule-calendar-day-date">
            <div class="specialist-schedule-calendar-week-day">sex</div>
            <div class="specialist-schedule-calendar-month-day">23 Dez</div>
          </div>
          <div class="specialist-schedule-calendar-hours-container">
            <div class="specialist-schedule-calendar-hour">08:00</div>
            <div class="specialist-schedule-calendar-hour">09:00</div>
            <div class="specialist-schedule-calendar-hour">10:00</div>
            <div class="specialist-schedule-calendar-hour">11:00</div>
            <div class="specialist-schedule-calendar-hour">15:00</div>
          </div>
        </div>
        <div class="specialist-schedule-calendar-day">
          <div class="specialist-schedule-calendar-day-date">
            <div class="specialist-schedule-calendar-week-day">seg</div>
            <div class="specialist-schedule-calendar-month-day">01 Jan</div>
          </div>
          <div class="specialist-schedule-calendar-hours-container">
            <div class="specialist-schedule-calendar-hour">08:00</div>
            <div class="specialist-schedule-calendar-hour">09:00</div>
            <div class="specialist-schedule-calendar-hour">10:00</div>
            <div class="specialist-schedule-calendar-hour">11:00</div>
            <div class="specialist-schedule-calendar-hour">15:00</div>
          </div>
        </div>
        <div class="specialist-schedule-calendar-day">
          <div class="specialist-schedule-calendar-day-date">
            <div class="specialist-schedule-calendar-week-day">ter</div>
            <div class="specialist-schedule-calendar-month-day">02 Jan</div>
          </div>
          <div class="specialist-schedule-calendar-hours-container">
            <div class="specialist-schedule-calendar-hour">08:00</div>
            <div class="specialist-schedule-calendar-hour">09:00</div>
            <div class="specialist-schedule-calendar-hour">10:00</div>
            <div class="specialist-schedule-calendar-hour">11:00</div>
            <div class="specialist-schedule-calendar-hour">15:00</div>
          </div>
        </div>
        <div class="specialist-schedule-calendar-day">
          <div class="specialist-schedule-calendar-day-date">
            <div class="specialist-schedule-calendar-week-day">qua</div>
            <div class="specialist-schedule-calendar-month-day">03 Jan</div>
          </div>
          <div class="specialist-schedule-calendar-hours-container">
            <div class="specialist-schedule-calendar-hour">08:00</div>
            <div class="specialist-schedule-calendar-hour">09:00</div>
            <div class="specialist-schedule-calendar-hour">10:00</div>
            <div class="specialist-schedule-calendar-hour">11:00</div>
            <div class="specialist-schedule-calendar-hour">15:00</div>
          </div>
        </div>
        <div class="specialist-schedule-calendar-day">
          <div class="specialist-schedule-calendar-day-date">
            <div class="specialist-schedule-calendar-week-day">qui</div>
            <div class="specialist-schedule-calendar-month-day">04 Jan</div>
          </div>
          <div class="specialist-schedule-calendar-hours-container">
            <div class="specialist-schedule-calendar-hour">08:00</div>
            <div class="specialist-schedule-calendar-hour">09:00</div>
            <div class="specialist-schedule-calendar-hour">10:00</div>
            <div class="specialist-schedule-calendar-hour">11:00</div>
            <div class="specialist-schedule-calendar-hour">15:00</div>
          </div>
        </div>
        <div class="specialist-schedule-calendar-days-container-next">
          <q-icon name="mdi-chevron-double-right" class="specialist-schedule-icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style>
.specialist-schedule {
  height: auto;
  width: 80%;
  min-width: 950px;
  border-radius: 5px;
  -webkit-box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.32);
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.32);
  margin: 40px auto 40px auto;
  display: flex;
  flex-direction: row;
}

.specialist-schedule-image {
  padding: 30px;
  height: 300px;
  margin: auto 0;
}

.specialist-schedule-info-name {
  font-size: 2rem;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  color: #0922bc;
}

.specialist-schedule-info-bio {
  font-size: 1.1rem;
  font-family: "Nunito", sans-serif;
  font-weight: 100;
  color: #667998;
}

.specialist-schedule-info-bio-full-link a {
  font-size: 0.9rem;
  font-family: "Nunito", sans-serif;
  color: #0922bc;
  cursor: pointer;
}

.specialist-schedule-info {
  width: 50%;
  height: 80%;
  margin: auto 0;
}

.specialist-schedule-calendar-days-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 90%;
}

.specialist-schedule-calendar-day {
  width: 18%;
  height: 90%;
}

.specialist-schedule-calendar-days-container-next,
.specialist-schedule-calendar-days-container-prior {
  line-height: 40px;
  padding: 0 5px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  height: 40px;
  transition: all 0.2s ease;
}

.specialist-schedule-calendar-days-container-next:hover,
.specialist-schedule-calendar-days-container-prior:hover {
  color: #fff;
  background-color: #667998;
}

.specialist-schedule-calendar-day-date {
  background-color: #f1f1f1;
  color: #667998;
  width: 95%;
  text-align: center;
  height: 40px;
  line-height: 20px;
  font-size: 0.9rem;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  border-radius: 5px;
}

.specialist-schedule-calendar-week-day {
  font-weight: 700;
}

.specialist-schedule-calendar-month-day {
  color: #667998;
  font-size: 0.7rem;
}

.specialist-schedule-calendar-hour {
  color: #000;
  width: 93%;
  text-align: center;
  height: 30px;
  line-height: 30px;
  font-size: 0.9rem;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  margin: 6px auto;
  border-radius: 5px;
  background: linear-gradient(45deg, #081fa922, #0a24c922);
  cursor: pointer;
  transition: all 0.2s ease;
  color: #0a24c9;
}

.specialist-schedule-calendar-hour:hover {
  background: linear-gradient(45deg, #081fa999, #0a24c999);
  color: #fff;
}

.specialist-schedule-calendar {
  font-size: 0.8rem;
  color: #667998;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  width: 30%;
  min-width: 300px;
  text-align: center;
  margin: auto;
}

.specialist-schedule-calendar h3 {
  font-size: 1.2rem;
  line-height: 4vh;
}

.specialist-schedule-icon {
  font-size: 1.2rem;
}

@media (orientation: portrait) {
  .specialist-schedule {
    height: auto;
    width: 95%;
    min-width: unset;
    flex-direction: column;
  }

  .specialist-schedule-info-name {
    font-size: 1.6rem;
    text-align: center;
  }

  .specialist-schedule-info {
    width: 90%;
    height: auto;
    margin: 0 auto;
  }

  .specialist-schedule-info-bio-full-link {
    text-align: center;
    margin: 20px 0;
  }

  .specialist-schedule-info-bio-full-link a {
    font-size: 1.4rem;
  }

  .specialist-schedule-image {
    height: 200px;
    width: 200px;
    margin: 0 auto;
  }

  .specialist-schedule-calendar {
    font-size: 1rem;
    width: 98%;
    margin: 0;
  }

  .specialist-schedule-calendar>h3 {
    margin: 0 0 20px 0;
  }
}
</style>

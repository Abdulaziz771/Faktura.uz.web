<template>
    <div id="videlessons">
        <div id="head-page-title">
            <headerComponent></headerComponent>
            <div class="page-title">
                <div class="page-title-block">
                    <h1>{{ updates[1].title }}</h1>
                </div>
            </div>
        </div>
        <div id="page-body">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-8">
                        <div class="post-body">
                            <img :src="updates[1].img" class="w-100">
                            <div class="update-text">
                                <div></div>
                                <h4>Уважаемые коллеги, представляем вам список изменений и улучшений в обновлении версия 1.6.5. Перед изпользованием перечисленных функций, просим вас очистить кеш браузера.</h4>
                                <div class="pt-5"></div>
                                <div class="update-points" v-for="(material, index) in materials" :key="index">
                                    <img :src="material.img" class="w-100">
                                    <p>
                                        {{ material.text }}
                                    </p>
                                </div>
                            </div>
                            <hr>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 sidebar">
                        <div class="position-sticky headroom-sticky" style="top: 0">
                            <div class="post-title">
                                <span> ОБНОВЛЕНИЯ </span>
                            </div>
                            <div class="recent-updates">
                                <router-link :to="{ name: recentUpdate.route }" v-for="(recentUpdate, index) in updates" :key="index" class="d-flex">
                                    <img :src="recentUpdate.img">
                                    <div class="recent-text position-relative">
                                        <h5>{{ recentUpdate.title }}</h5>
                                        <span class="date">{{ recentUpdate.data }}</span>
                                    </div>
                                </router-link>
                            </div>
                            <div class="pb-5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footerComponent></footerComponent>
    </div>
</template>

<script>
import headerComponent from "../../components/headerComponent"
import footerComponent from "../../components/footerComponent"

let updates = require('../../updatesBase')

export default {
  name: 'update-system-1',
  data() {
      return {
          updates,
          materials: [
              {
                  img: require('../../assets/img/update-1-material.jpg.png'),
                  text: "✅ Показ реквизитов филиала если документ отправляется филиалом;"
              },
              {
                  img: require('../../assets/img/update-1-material-1.jpg.png'),
                  text: "✅ Отображение сотрудников филиала если документ отправляется из филиала (Руководитель, Гл. Бухгалтер, Товар отпустил);"
              },
              {
                  img: require('../../assets/img/update-1-material-2.jpg.png'),
                  text: "✅ Упрощение процесса восстановления пароля;"
              }
          ]
      }
  },
  components: {
      headerComponent,
      footerComponent
  }
}
</script>

<style>

#videlessons #head-page-title {
    background-image: url("../../assets/img/hero-bg-4.jpg");
}

.post-body {
    padding: 30px;
}

.update-points {
    width: 80%;
    background: #f4f4f4;
    padding: 16px;
    margin-bottom: 45px;
    border-radius: 10px;
}

.recent-text {
    padding: 0 13px;
}

.recent-text .date {
    font-size: 12px;
    color: #9e9e9e;
}

.recent-text h5 {
    font-size: 17px;
    color: dimgrey;
        line-height: 14px;
}

.recent-text h5 {
    font-size: 17px;
    color: dimgrey;
}

.recent-updates .d-flex:hover .recent-text h5 {
    color: #7dc102;
}

.update-text {
    color: #6f6f6f;
    padding-top: 20px;
}

.update-points p {
    font-weight: 600;
    padding-top: 15px;
    color: #818181;
}

.recent-updates img {
    width: 115px;
}

.recent-updates a:hover {
    text-decoration: none;
}

.sidebar .post-title {
    border-bottom: 3px solid #3c566f;
    padding-top: 30px;
}

.sidebar .post-title span{
    background: #3c566f;
    color: white;
    font-size: 14px;
    padding: 7px 10px;
    position: relative;
    bottom: 2px;
    font-weight: 600;
}

.recent-updates .d-flex {
    margin-top: 20px;
    cursor: pointer;
}


</style>

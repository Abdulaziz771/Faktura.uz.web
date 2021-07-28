<template>
  <div class="1cNewPage">
    <div id="head-page-title">
      <headerComponent></headerComponent>
      <div class="page-title">
        <div class="page-title-block">
          <h1>Модули</h1>
          <h5>Необходимые модули для работы в 1С системе</h5>
        </div>
      </div>
    </div>

    <section id="blog">
      <div class="CardPage1C">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div v-on:click="handlerCard($event)" class="Cards1c">
                <div class="front_card">
                  <div class="images1c">
                    <img src="../assets/img/logo-1cPage.png" alt="Image_1c" />
                  </div>
                  <div class="textPage1c">
                    <div class="cardsText d-flex">
                      <h4 class="pt-4">
                        {{
                          translation.translate("CardPage1C", "CardPageTitle")
                        }}
                      </h4>
                      <h3 class="pt-4">Faktura 1C</h3>
                    </div>
                    <div class="cardsText d-flex">
                      <h4>
                        {{
                          translation.translate(
                            "CardPage1C",
                            "CardPageDiscription"
                          )
                        }}
                      </h4>
                      <h3>Бухгалтерия, Хозрасчет, редакция 1.3</h3>
                    </div>
                    <div class="cardsText d-flex">
                      <h4 class="pb-3">
                       Версия:
                      </h4>
                      <h3 class="pb-3">3.6</h3>
                    </div>
                  </div>
                  <div class="btnDiscription d-flex justify-content-center">
                    <a
                      href="https://faktura.uz/recources/Faktura_uz_Module_3.6_fat.zip"
                      download="Бухгалтерия, Хозрасчет, редакция 1.3.zip"
                      class="docs-creator"
                      ><button class="btn-backCard">Скачать</button></a
                    >
                    <button class="btn btnCards1C" type="button">
                      Подробнее
                    </button>
                  </div>
                </div>
                <div class="back_card">
                  <div class="d-flex justify-content-center">
                    <span class="span_backCard"
                      >Список обновлений в ЭДО версия 3.6</span
                    >
                  </div>

                  <p class="TexBackCard">
                    1. Возможность сохранять несколько документов ( массовое
                    сохранение)<br>
                    2. Фильтр улучшился <br>
                    3. Возможность отправки Договора и Доверенности<br>
                    4. Отправка платежных поручений FakturaPay (Банкклиент) а
                    также появилась возможность сохранять истории ( для Ипак
                    йули )<br>
                    5. Введены новые дополнения для импорта данных
                    контрагента<br>
                    6. Исправлена ошибка при отправке акт-сверки xml
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div v-on:click="handlerCard($event)" class="Cards1c">
                <div class="front_card">
                  <div class="images1c">
                    <img src="../assets/img/logo-1cPage.png" alt="Image_1c" />
                  </div>
                  <div class="textPage1c">
                    <div class="cardsText d-flex">
                      <h4 class="pt-4">
                        {{
                          translation.translate("CardPage1C", "CardPageTitle")
                        }}
                      </h4>
                      <h3 class="pt-4">Faktura 1C</h3>
                    </div>
                    <div class="cardsText d-flex">
                      <h4>
                        {{
                          translation.translate(
                            "CardPage1C",
                            "CardPageDiscription"
                          )
                        }}
                      </h4>
                      <h3>Бухгалтерия, Хозрасчет, редакция 1.3</h3>
                    </div>
                    <div class="cardsText d-flex">
                      <h4 class="pb-3">
                       Версия:
                      </h4>
                      <h3 class="pb-3">3.5</h3>
                    </div>
                  </div>
                  <div class="btnDiscription d-flex justify-content-center">
                    <a
                      href="https://faktura.uz/recources/Faktura_uz_Module_3.5_fat.zip"
                      download="Faktura_uz_ЭДО_Версия_3_5_Толстый.zip"
                      class="docs-creator"
                      ><button class="btn-backCard">Скачать</button></a
                    >
                    <button class="btn btnCards1C" type="button">
                      Подробнее
                    </button>
                  </div>
                </div>
                <div class="back_card">
                  <div class="d-flex justify-content-center">
                    <span class="span_backCard"
                      >Список обновлений в ЭДО версия 3.5</span
                    >
                  </div>
                
                  <p class="TexBackCard">
                    1. Добавлена функция отправки акт сверки <br>
                    2. В Faktura.uz API появилась возможность добавления контента документа в формате JSON <br>
                    3. Сохранение контента документа в формате HTML или JSON  <br>
                    4. Улучшился фильтр входящих документов  <br>
                    5 Решились проблемы связанные с отправкой документа "Возврат товаров" <br>
                    6. Добавление классификационного кода <br>
                    7. Добавилась льгота  <br>
                    8. Изменения дизайна формы
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div v-on:click="handlerCard($event)" class="Cards1c">
                <div class="front_card">
                  <div class="images1c">
                    <img src="../assets/img/logo-1cPage.png" alt="Image_1c" />
                  </div>
                  <div class="textPage1c">
                    <div class="cardsText d-flex">
                      <h4 class="pt-4">
                        {{
                          translation.translate("CardPage1C", "CardPageTitle")
                        }}
                      </h4>
                      <h3 class="pt-4">Faktura 1C</h3>
                    </div>
                    <div class="cardsText d-flex">
                      <h4>
                        {{
                          translation.translate(
                            "CardPage1C",
                            "CardPageDiscription"
                          )
                        }}
                      </h4>
                      <h3>Бухгалтерия, Хозрасчет, редакция 1.3</h3>
                    </div>
                    <div class="cardsText d-flex">
                      <h4 class="pb-3">
                        Версия:
                      </h4>
                      <h3 class="pb-3">3.4</h3>
                    </div>
                  </div>
                  <div class="btnDiscription d-flex justify-content-center">
                    <a
                      href="https://faktura.uz/recources/Faktura_uz_Module_3.4_fat.zip"
                      download="Faktura_uz_ЭДО_Версия_3_4_Толстый.zip"
                      class="docs-creator"
                      ><button class="btn-backCard">Скачать</button></a
                    >
                    <button class="btn btnCards1C" type="button">
                      Подробнее
                    </button>
                  </div>
                </div>
                <div class="back_card">
                  <div class="d-flex justify-content-center">
                    <span class="span_backCard"
                      >Список обновлений в ЭДО версия 3.4</span
                    >
                  </div>
                  <p class="TexBackCard">
                    1. Добавлена отправка документов типа "Возврат товаров"
                    <br />
                    2. Добавлена отправка доверенности (Роуминг и Внутри
                    faktura.uz) <br />
                    3. Расширились возможности сохранения отправленных
                    документов <br />
                    4. Оптимизировалась отправка документов в филиалы. <br />
                    5. Решена ошибка (баг) при выборе документов, в категории
                    "отказанные" и "удаленные". <br />
                    6. Обновлены статусы, в категориях "отказанные" и
                    "удаленные". <br />
                    7. Добавлен Fulldelete в категории "удаленные". <br />
                    8. Добавлена отправка документов с кодом по единому
                    классификатору. <br />
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div v-on:click="handlerCard($event)" class="Cards1c">
                <div class="front_card">
                  <div class="images1c">
                    <img src="../assets/img/logo-1cPage.png" alt="Image_1c" />
                  </div>
                  <div class="textPage1c">
                    <div class="cardsText d-flex">
                      <h4 class="pt-4">
                        {{
                          translation.translate("CardPage1C", "CardPageTitle")
                        }}
                      </h4>
                      <h3 class="pt-4">Faktura 1C</h3>
                    </div>
                    <div class="cardsText d-flex">
                      <h4>
                        {{
                          translation.translate(
                            "CardPage1C",
                            "CardPageDiscription"
                          )
                        }}
                      </h4>
                      <h3>Бухгалтерия, Хозрасчет, редакция 1.3</h3>
                    </div>
                    <div class="cardsText d-flex">
                      <h4 class="pb-3">
                        Версия:
                      </h4>
                      <h3 class="pb-3">3.3</h3>
                    </div>
                  </div>
                  <div class="btnDiscription d-flex justify-content-center">
                    <a
                      href="https://faktura.uz/recources/Faktura_uz_Module_3.3_fat.zip"
                      download="Faktura_uz_ЭДО_Версия_3_3_Толстый.zip"
                      class="docs-creator"
                      ><button class="btn-backCard">Скачать</button></a
                    >
                    <button class="btn btnCards1C" type="button">
                      Подробнее
                    </button>
                  </div>
                </div>
                <div class="back_card">
                  <div class="d-flex justify-content-center">
                    <span class="span_backCard"
                      >Список обновлений в ЭДО версия 3.3</span
                    >
                  </div>
                  <p class="TexBackCard">
                    1. Добавлена фильтрация документов <br />
                    2. Создание счет-фактуры 2020 (Стандартный, Дополнительный,
                    Возмещение расходов, Без оплаты, Исправленный)
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div v-on:click="handlerCard($event)" class="Cards1c">
                <div class="front_card">
                  <div class="images1c">
                    <img src="../assets/img/logo-1cPage.png" alt="Image_1c" />
                  </div>
                  <div class="textPage1c">
                    <div class="cardsText d-flex">
                      <h4 class="pt-4">
                        {{
                          translation.translate("CardPage1C", "CardPageTitle")
                        }}
                      </h4>
                      <h3 class="pt-4">Faktura 1C</h3>
                    </div>
                    <div class="cardsText d-flex">
                      <h4>
                        {{
                          translation.translate(
                            "CardPage1C",
                            "CardPageDiscription"
                          )
                        }}
                      </h4>
                      <h3>Управление торговлей, редакция 11</h3>
                    </div>
                    <div class="cardsText d-flex">
                      <h4 class="pb-3">
                       Версия:
                      </h4>
                      <h3 class="pb-3">3.5</h3>
                    </div>
                  </div>
                  <div class="btnDiscription d-flex justify-content-center">
                    <a
                      href="https://faktura.uz/recources/Faktura_uz_ЭДО_Версия_3_5_Тонкий.zip"
                      download="Faktura_uz_ЭДО_Версия_3_5_Тонкий  .zip"
                      class="docs-creator"
                      ><button class="btn-backCard">Скачать</button></a
                    >
                    <button class="btn btnCards1C" type="button">
                      Подробнее
                    </button>
                  </div>
                </div>
                <div class="back_card">
                  <div class="d-flex justify-content-center">
                    <span class="span_backCard"
                      >Список обновлений в ЭДО версия 3.5</span
                    >
                  </div>

                  <p class="TexBackCard">
                    1. Возможность сохранять несколько документов ( массовое
                    сохранение)<br>
                    2. Фильтр улучшился <br>
                    3. Возможность отправки Договора и Доверенности<br>
                    4. Отправка платежных поручений FakturaPay (Банкклиент) а
                    также появилась возможность сохранять истории ( для Ипак
                    йули )<br>
                    5. Введены новые дополнения для импорта данных
                    контрагента<br>
                    6. Исправлена ошибка при отправке акт-сверки xml
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div v-on:click="handlerCard($event)" class="Cards1c">
                <div class="front_card">
                  <div class="images1c">
                    <img src="../assets/img/logo-1cPage.png" alt="Image_1c" />
                  </div>
                  <div class="textPage1c">
                    <div class="cardsText d-flex">
                      <h4 class="pt-4">
                        {{
                          translation.translate("CardPage1C", "CardPageTitle")
                        }}
                      </h4>
                      <h3 class="pt-4">Faktura 1C</h3>
                    </div>
                    <div class="cardsText d-flex">
                      <h4>
                        {{
                          translation.translate(
                            "CardPage1C",
                            "CardPageDiscription"
                          )
                        }}
                      </h4>
                      <h3>Управление торговлей, редакция 11</h3>
                    </div>
                    <div class="cardsText d-flex">
                      <h4 class="pb-3">
                       Версия:
                      </h4>
                      <h3 class="pb-3">3.4.1</h3>
                    </div>
                  </div>
                  <div class="btnDiscription d-flex justify-content-center">
                    <a
                      href="https://faktura.uz/recources/Faktura_uz_ЭДО_Версия_3_4_1 Тонкий.zip"
                      download="Faktura_uz_ЭДО_Версия_3_4_1 Тонкий.zip"
                      class="docs-creator"
                      ><button class="btn-backCard">Скачать</button></a
                    >
                    <button class="btn btnCards1C" type="button">
                      Подробнее
                    </button>
                  </div>
                </div>
                <div class="back_card">
                  <div class="d-flex justify-content-center">
                    <span class="span_backCard"
                      >Список обновлений в ЭДО версия 3.4.1</span
                    >
                  </div>
                
                  <p class="TexBackCard">
                    1. Добавлена функция отправки акт сверки <br>
                    2. В Faktura.uz API появилась возможность добавления контента документа в формате JSON <br>
                    3. Сохранение контента документа в формате HTML или JSON  <br>
                    4. Улучшился фильтр входящих документов  <br>
                    5 Решились проблемы связанные с отправкой документа "Возврат товаров" <br>
                    6. Добавление классификационного кода <br>
                    7. Добавилась льгота  <br>
                    8. Изменения дизайна формы
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div v-on:click="handlerCard($event)" class="Cards1c">
                <div class="front_card">
                  <div class="images1c">
                    <img src="../assets/img/logo-1cPage.png" alt="Image_1c" />
                  </div>
                  <div class="textPage1c">
                    <div class="cardsText d-flex">
                      <h4 class="pt-4">
                        {{
                          translation.translate("CardPage1C", "CardPageTitle")
                        }}
                      </h4>
                      <h3 class="pt-4">Faktura 1C</h3>
                    </div>
                    <div class="cardsText d-flex">
                      <h4>
                        {{
                          translation.translate(
                            "CardPage1C",
                            "CardPageDiscription"
                          )
                        }}
                      </h4>
                      <h3>Управление торговлей, редакция 11</h3>
                    </div>
                    <div class="cardsText d-flex">
                      <h4 class="pb-3">
                        Версия:
                      </h4>
                      <h3 class="pb-3">3.3</h3>
                    </div>
                  </div>
                  <div class="btnDiscription d-flex justify-content-center">
                    <a
                      href="https://faktura.uz/recources/Faktura_uz_ЭДО_Версия_3_3_Тонкий.zip"
                      download="Faktura_uz_ЭДО_Версия_3_3_Тонкий.zip"
                      class="docs-creator"
                      ><button class="btn-backCard">Скачать</button></a
                    >
                    <button class="btn btnCards1C" type="button">
                      Подробнее
                    </button>
                  </div>
                </div>
                <div class="back_card">
                  <div class="d-flex justify-content-center">
                    <span class="span_backCard"
                      >Список обновлений в ЭДО версия 3.3</span
                    >
                  </div>
                  <p class="TexBackCard">
                    1. Добавлена отправка документов типа "Возврат товаров"
                    <br />
                    2. Добавлена отправка доверенности (Роуминг и Внутри
                    faktura.uz) <br />
                    3. Расширились возможности сохранения отправленных
                    документов <br />
                    4. Оптимизировалась отправка документов в филиалы. <br />
                    5. Решена ошибка (баг) при выборе документов, в категории
                    "отказанные" и "удаленные". <br />
                    6. Обновлены статусы, в категориях "отказанные" и
                    "удаленные". <br />
                    7. Добавлен Fulldelete в категории "удаленные". <br />
                    8. Добавлена отправка документов с кодом по единому
                    классификатору. <br />
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div v-on:click="handlerCard($event)" class="Cards1c">
                <div class="front_card">
                  <div class="images1c">
                    <img src="../assets/img/logo-1cPage.png" alt="Image_1c" />
                  </div>
                  <div class="textPage1c">
                    <div class="cardsText d-flex">
                      <h4 class="pt-4">
                        {{
                          translation.translate("CardPage1C", "CardPageTitle")
                        }}
                      </h4>
                      <h3 class="pt-4">Faktura 1C</h3>
                    </div>
                    <div class="cardsText d-flex">
                      <h4>
                        {{
                          translation.translate(
                            "CardPage1C",
                            "CardPageDiscription"
                          )
                        }}
                      </h4>
                      <h3>Управление торговлей, редакция 11</h3>
                    </div>
                    <div class="cardsText d-flex">
                      <h4 class="pb-3">
                        Версия:
                      </h4>
                      <h3 class="pb-3">3.1</h3>
                    </div>
                  </div>
                  <div class="btnDiscription d-flex justify-content-center">
                    <a
                      href="https://faktura.uz/recources/Faktura_uz_ЭДО_Версия_3_1_Тонкий.zip"
                      download="Faktura_uz_ЭДО_Версия_3_1_Тонкий.zip"
                      class="docs-creator"
                      ><button class="btn-backCard">Скачать</button></a
                    >
                    <button class="btn btnCards1C" type="button">
                      Подробнее
                    </button>
                  </div>
                </div>
                <div class="back_card">
                  <div class="d-flex justify-content-center">
                    <span class="span_backCard"
                      >Список обновлений в ЭДО версия 3.1</span
                    >
                  </div>
                  <p class="TexBackCard">
                    1. Добавлена фильтрация документов <br />
                    2. Создание счет-фактуры 2020 (Стандартный, Дополнительный,
                    Возмещение расходов, Без оплаты, Исправленный)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="row">
      <div
        class="col-12 col-md-6 thecard text-center card-1"
        :class="{ flipOverCard: card1 }"
        @click="card1 = !card1"
      >
        <div class="card-flip front">
          <ClockIcon />
          <h4>
            {{ translation.translate("landingPageHome", "benefirBadSide1") }}
          </h4>
        </div>
        <div class="card-flip back">
          <ClockIcon />
          <h4>
            {{ translation.translate("landingPageHome", "benefirGoodSide1") }}
          </h4>
        </div>
      </div>
    </div>
    <footerComponent></footerComponent>
  </div>
</template>

<script>
import headerComponent from "../components/headerComponent";
import footerComponent from "../components/footerComponent";
import translate from "./../translation/translate";

export default {
  name: "1cPage",
  data() {
    return {
      translation: translate,
    };
  },
  methods: {
    handlerCard(event) {
      console.dir(event.target);
      let cardStyle = event.currentTarget.style;
      if (cardStyle.transform || event.target.innerText == "Скачать") {
        cardStyle.transform = "";
      } else {
        cardStyle.transform = "rotateY(180deg)";
      }
    },
  },
  components: {
    headerComponent,
    footerComponent
  }
}
</script>

<style scoped>

#head-page-title {
    background-image: url("../assets/img/hero-bg-4.jpg");
}

.CardPage1C .Cards1c .images1c img {
  width: 60px;
  height: 30px;
}

.CardPage1C .Cards1c {
  width: 100%;
  height: 285px;
  margin: 20px 0;
  background-image: linear-gradient(
    rgb(255, 238, 0),
    rgba(255, 166, 0, 0.671),
    rgb(255, 238, 0)
  );
  border: Blue, Red, Yellow;
  border-radius: 12px;
  box-shadow: 0 0 6px grey;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.Cards1c .back_card,
.Cards1c .front_card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.Cards1c .back_card {
  transform: rotateY(180deg);
}

.CardPage1C .Cards1c .textPage1c .cardsText h4 {
  width: 100px;
  font-size: 20px;
  color: #5c5c5c;
  font-weight: 700;
}

.CardPage1C .Cards1c .textPage1c .cardsText h3 {
  padding-left: 10px;
  font-size: 20px;
  color: red;
  font-weight: 700;
}

.CardPage1C .Cards1c .btnDiscription .btnCards1C {
  color: #5c5c5c;
  font-size: 20px;
  font-weight: 500;
  background: none;
  border: none;
  padding: 2px 10px;
  margin: 16px 20px 0px 20px;
}

.CardPage1C .Cards1c .btnDiscription{
  margin-top: 20px;
}

.CardPage1C .Cards1c .btnDiscription .btnCards1C:hover {
  text-decoration: underline;
  text-decoration-color: red;
}

.CardPage1C .Cards1c .btnDiscription .btnCards1C:focus {
  box-shadow: none !important;
}

/* back */

.CardPage1C .Cards1c p {
  font-size: 12px;
}

.span_backCard {
  margin: auto;
  color: red;
  font-weight: 600;
}

.TexBackCard {
  margin-top: 10px;
  color: rgb(59, 59, 59);
  font-size: 12px !important;
  font-weight: 600;
}

.btn-backCard {
  background: red;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 2px 50px;
  margin-top: 20px;
  box-shadow: 0 0 8px red;
  transition: 250ms;
}
.btn-backCard:hover {
  box-shadow: 0 0 12px red;
}

@media (max-width: 550px) {
    .CardPage1C .Cards1c{
      height: 320px;
    }
}
@media (max-width: 400px) {
    .CardPage1C .Cards1c{
      height: 400px;
    }

    .CardPage1C .Cards1c .btnDiscription{
      flex-wrap: wrap;
    }
}

</style>

<template>
    <div id="videlessons">
        <div id="head-page-title">
            <headerComponent></headerComponent>
            <div class="page-title">
                <div class="page-title-block">
                    <h1>{{ translation.translate('header','documentation') }}</h1>
                </div>
            </div>
        </div>
        <div id="page-body">
            <div class="container pt-5 pb-5">
                <div class="hpanel blog-article-box">
                <div class="panel-heading">
                    <h4>О документе</h4>
                    <p>Просьба сообщить об обнаруженных ошибках и пожеланиях авторам. Система в настоящий момент претерпевает множество крупных и мелких изменений,&nbsp;–&nbsp;данный документ не может отразить все новое в Faktura.uz. Поэтому могут быть различия в&nbsp;системе и руководстве пользователя, в таких случаях реальность превалирует.</p>
                    <p>Бахтиёр Арипов<br> Ташкент, 12.04.2017 г.<br> <span style="color: rgb(128, 128, 128);"><a href="mailto:info@faktura.uz" style="color: rgb(128, 128, 128);">info@faktura.uz</a></span></p>
                    <div class="panel-body" style="text-align: justify;">
                        <h2>Содержание</h2>
                        <ol>
                            <li>
                            <a href="#getstarted">Начало работы</a>
                            <ol>
                                <li><a href="#eimzo">Специальный модуль e-imzo</a></li>
                                <li>
                                    <a href="#cert">Сертификат ЭЦП</a>
                                    <ol>
                                        <li><a href="#addscenario">Упрощенный сценарий работы в системе</a></li>
                                        <li><a href="#addPO">Дополнительное ПО</a></li>
                                    </ol>
                                </li>
                                <li><a href="#register">Регистрация в системе</a></li>
                                <li><a href="#activate">Активация вашей учетной записи</a></li>
                                <li><a href="#gettingstarted">Заполнение реквизитов</a></li>
                                <li><a href="#invite">Приглашение партнеров</a></li>
                            </ol>
                            </li>
                            <li><a href="#interface">Интерфейс системы</a></li>
                            <li>
                            <a href="#sisfunction">Функционал системы</a>
                            <ol>
                                <li><a href="#storing">Хранение документов</a></li>
                                <li><a href="#bin">Как работает корзина?</a></li>
                                <li><a href="#verify">Проверка подписей на документах</a></li>
                            </ol>
                            </li>
                            <li><a href="#terms">Термины и определения</a></li>
                        </ol>
                        <section id="getstarted">
                            <h2>Начало работы</h2>
                            <p>Мы предлагаем для облегчения понимания работы системы представить, что Фактура.уз моделирует оборот и обработку бумажных документов. В системе есть папки (разделы)&nbsp;<em>входящие, исходящие, черновики,&nbsp;</em>электронные документы также можно&nbsp;“выбросить” в “корзину” и восстановить. Так что, навряд-ли мы сможем сломать какие-то парадигмы, революционных отличий от систем документооборота, электронной почты Фактура.уз не имеет, все тоже самое, но под новым соусом.</p>
                            <p>Видео уроки работы с системой. Файлы хранятся на mover.uz (TASIX) и на youtube.com.</p>
                            <p><strong>Что конкретно нужно для работы в системе?</strong></p>
                            <ol>
                            <li>Специальный модуль e-imzo для работы с ЭЦП.</li>
                            <li>Сертификат ЭЦП узбекского образца, выданный налоговой службой вам и вашим партнерам.</li>
                            <li>Регистрация в системе, ваша и ваших партнеров.</li>
                            </ol>
                        </section>
                        <section id="eimzo">
                            <h2>Специальный модуль e-imzo</h2>
                            <p>Так как система сертификатов ЭЦП разработанная у нас в Узбекистане специфична, а ведущие разработчики программного обеспечения, в том числе Microsoft, Mozilla, Google и другие не спешат внедрять модули работы с узбекскими алгоритмами в свои софтверные пакеты, мы предлагаем пока работать с нашей системой посредством установки модуля работы с ЭЦП e-imzo (ссылка выше).&nbsp;Файл хранится в сети TAS-IX.</p>
                            <p>Надеемся, использование спецсредств для работы с системой Фактура.уз не вызовет больших трудностей, так как бухгалтеры предприятий уже несколько лет сдают отчеты в госорганы с помощью узбекского стандарта сертификатов ЭЦП.</p>
                            <h3>Дополнительные шаги по установке для браузера Firefox</h3>
                            <ul>
                            <li>Установите/Обновите браузер пользователя до самой последней версии.</li>
                            <li>Откройте адрес https://127.0.0.1:64443 и нажмите «Я понимаю риск», а затем кнопку «Добавить исключение».</li>
                            </ul>
                        </section>
                        <section id="cert">
                            <h2>Сертификат ЭЦП</h2>
                            <p>Система&nbsp;«Faktura.uz» использует сертификаты ЭЦП, выданные Государственным налоговым комитетом Узбекистана. Дополнительная информация по адресу&nbsp;https://soliq.uz/uz/interactive/elektron_raqamli_imzo/</p>
                            <h3>Упрощенный сценарий работы в системе</h3>
                            <p>Нам как-то задали вопрос, как работает система. Мы кратко ответили следующим образом, думаем, это будет полезно всем:</p>
                            <p><strong><em>Вопрос: </em></strong><em>как&nbsp; используя ваш ресурс я могу заключить договор с юр.лицом удаленно</em><br> <em>и принять от него платеж за свои услуги?</em></p>
                            <p><strong><em>Ответ:</em></strong></p>
                            <p><em>Обе компании должны зарегистрироваться в системе:</em></p>
                            <ul>
                            <li><em>заполнить регистрационные данные (ИНН, код банка и т. п.);</em></li>
                            <li><em>активировать адрес электронной почты;</em></li>
                            <li><em>загрузить сертификаты ЭЦП;</em></li>
                            <li><em>подписать оферту, высылаюмую системой.</em></li>
                            </ul>
                            <p><em>После полноценной регистрации и принятия условий оферты системы, одна из сторон через меню&nbsp;Новый документ&nbsp;загружает окончательный вариант документа, в Вашем случае договора, вводит данные контрагента (поиск по ИНН или названию фирмы) и нажимает кнопку&nbsp;Подписать и отправить.&nbsp;Контрагент получает договор и, если согласен, также подписывает договор. После этого подписанный тремя сторонами (двумя контрагентами и самой системой) &nbsp;договор перемещается в папку&nbsp;Архив.</em></p>
                            <p><em>Также можете просмотреть видео уроки на нашем сайте.</em></p>
                            <p><em>В подписанном с помощью сертификатов ЭЦП документе Вы указали номер договора и дату. Ссылаясь на эти данные плательщик заполняет форму банковского перевода и перечисляет исполнителю деньги. В последствии вы можете передавать через Фактура.уз также и счет-фактуры и акты выполнения.</em></p>
                            <h3>Дополнительное ПО</h3>
                            <p>Для просмотра документов в формате pdf мы рекомендуем установить на компьютере соответствующее ПО, к примеру, Adobe Acrobat Reader. Подписанные документы, сертификаты и сами электронно-цифровые подписи хранятся в zip архивах. Для просмотра и распаковки этих архивов Вам понадобятся дополнительные программы для работы с zip архивами, если они уже не установлены в вашей системе.</p>
                        </section>
                        <section id="register">
                            <h2>Регистрация в системе</h2>
                            <p>Процесс регистрации в системе очень простой и легкий. Чтобы сделать процесс регистрации более простым и удобным для наших пользователей, мы предусмотрели два способа регистрации. Вы можете зарегистрироваться в системе через свой сертификат или заполнить требуемые поля вручную.</p>
                            <p>Чтобы зарегистрироваться в системе, перейдите на страницу <a href="http://app.faktura.uz/Account/Register">app.faktura.uz/Account/Register</a>. Или перейдите на нашу веб-страницу, затем нажмите кнопку регистрации, чтобы перейти на страницу регистрации. На странице регистрации вы увидите форму, в которой вам необходимо указать данные своей организации, а также данные для входа в свою учетную запись.</p>
                            <div class="well well-lg">
                            <h5 class="font-bold">ПРИМЕЧАНИЕ:</h5>
                            <p>Перед использованием нашей системы убедитесь, что на вашем компьютере установлена последняя версия E-imzo. Также, для работы E-imzo, на вашем компьютере должна быть установлена по крайней мере седьмая версия Java.</p>
                            </div>
                            <p>Далее дана пошаговая инструкция регистрации в системе.</p>
                            <p><strong>(1)</strong> В браузере зайдите на&nbsp;адрес&nbsp;https://app.faktura.uz/account/register</p>
                            <p><strong>(2)</strong> Загрузится форма, в которой необходимо заполнить все требуемые поля <span style="color: rgb(128, 128, 128);">(указаны звездочкой:&nbsp;<strong>*</strong> )</span>.</p>
                            <p><img src="../assets/img/Registration_form.jpg" alt="" width="440" height="414" class="alignnone wp-image-367"></p>
                            <h3>Зарегистрируйтесь, используя свой сертификат</h3>
                            <p>Чтобы зарегистрироваться с использованием сертификата, нажмите на флажок «<strong>Регистрация c помощью ЭЦП</strong>»<strong>.</strong></p>
                            <p><img src="../assets/img/reg-with-cert.jpg" alt="" class="alignnone wp-image-367"></p>
                            <p>Затем выберите сертификат из раскрывающегося списка.</p>
                            <p>Как только вы выберете свой сертификат, следующие поля будут автоматически заполнены данными вашего сертификата:</p>
                            <ul>
                            <li>ИНН организации.</li>
                            <li>Название организации.</li>
                            <li>Фамилия.</li>
                            <li>Имя.</li>
                            <li>Отчество.</li>
                            </ul>
                            <div class="alert alert-info"><i>Вышеуказанные поля могут быть изменены из настроек в системе.</i></div>
                            <p>Вам нужно будет указать следующие поля вручную:</p>
                            <ul>
                            <li>Адрес электронной почты (email).</li>
                            <li>Пароль.</li>
                            <li>Пароль повторно.</li>
                            <li>Номер мобильного телефон.</li>
                            </ul>
                            <p>Чтобы закончить процесс регистрации, вы должны поставить галочку на флажок “<strong>Я ознакомился и полностью принимаю условия публичной оферты</strong>”, чтобы согласиться с Публичной офертой.</p>
                        </section>
                        <section id="activate">
                            <h2>Активация вашей учетной записи</h2>
                            <p>Следующий этап, это активация аккаунта. Зайдите на адрес электронной почты, который вы указали при регистрации. Вам должно было уже прийти письмо от системы Faktura.uz со ссылкой для активации. Если письма нет, то подождите немного или проверьте папку “Спам” в разделах&nbsp;вашей электронной почты.</p>
                            <p>Откройте письмо и нажмите кнопку <strong>«Подтвердить адрес и зарегистрироваться!»</strong> в следующем сообщении:</p>
                            <p><img src="../assets/img/activate-account.jpg" class="alignnone wp-image-367"></p>
                            <p>Система активирует вашу учетную запись (аккаунт).</p>
                            <p><img src="../assets/img/sucessfully-activate.jpg" width="700" class="alignnone wp-image-367"></p>
                            <p>После активации аккаунта, зайдите в систему по адресу https://app.faktura.uz.</p>
                        </section>
                        <section id="gettingstarted">
                            <h2>Заполнение реквизитов и добавление ЭЦП сертификата</h2>
                            <p>Следующий шаг, это добавление вашего сертификата ЭЦП и заполнение всех банковских и организационных реквизитов вашей компании. Убедитесь, что вы установили все требуемые модули и что сертификат (два файла или один файл) находится в корневом каталоге какого-либо жесткого диска.</p>
                            <p>Заполните банковские реквизиты вашей компании:</p>
                            <p><img src="../assets/img/add-account-number.jpg" width="700" class="alignnone wp-image-367"></p>
                            <ul>
                            <li>Введите номер счета.</li>
                            <li>Введите код МФО своего банка.</li>
                            <li>Название банка будет выводиться автоматически в соответствии с кодом МФО, который вы предоставили.</li>
                            </ul>
                            <p><em>Специальный счёт</em> является необязательным полем. Если у вас нет этого счёта,&nbsp;пропустите данное поле.</p>
                            <p>Затем заполните следующие поля и выгрузите свой сертификат:</p>
                            <ul>
                            <li>Код по ОКОНХ</li>
                            <li>Код по ОКЭД</li>
                            <li>Страна</li>
                            <li>Область</li>
                            <li>Район</li>
                            <li>Улица</li>
                            <li>Дом</li>
                            <li>Индекс</li>
                            </ul>
                            <p><img src="../assets/img/rekviziti.jpg"></p>
                            <h3>Загрузка сертификата</h3>
                            <p>Для загрузки сертификата, нажмите ссылку в сообщении с предупреждением о необходимости сертификата или через меню настроек системы. Выберите нужный файл с сертификатом&nbsp;и сохраните.</p>
                            <p>Начиная с августа 2016 г., центр регистрации ключей при ГНК Узбекистана начал переход на новый вид сертификатов с расширением pfx. Если установлен специальный модуль e-imzo, система сама запросит пароль для данного типа сертификатов.</p>
                            <h2>Подписание Публичной оферты</h2>
                            <p>После этого, чтобы использовать все функции в системе вам необходимо подписать оферту.</p>
                            <p>Чтобы подписать оферту, щелкните ссылку в предупреждающем сообщении или перейдите в папку «Входящие» и найдите документ соглашения.</p>
                            <p><img src="../assets/img/alerts.jpg"></p>
                            <p>Откройте документ, прочитайте и нажмите кнопку «Подписать и отправить».</p>
                            <p><img src="../assets/img/sign-offer.jpg"></p>
                            <p>После нажатия кнопки «Подписать и отправить» появится всплывающее окно. Вы должны выбрать свой сертификат в раскрывающемся списке этого всплывающего окна.</p>
                            <p><img src="../assets/img/sign-popup.jpg" width="416" height="377"></p>
                        </section>
                        <section id="invite">
                            <h2>Приглашение партнеров</h2>
                            <p>В случае, если ваши бизнес-партнеры (контрагенты) еще не зарегистрированы в системе Фактура.уз, вы можете пригласить их стать участниками системы. В данный момент для этого нужно выбрать линк “пригласите” на странице Новый документ/Документ.</p>
                            <p><img src="../assets/img/invite-1.jpg"></p>
                            <p>Введите контактную информацию и нажмите «Отправить приглашение».</p>
                            <p><img src="../assets/img/invite-2.jpg"></p>
                        </section>
                        <section id="interface">
                            <h2>Интерфейс системы</h2>
                            <p>Основной интерфейс для взаимодействия с системой электронного документооборта Фактура.уз это веб браузер.</p>
                            <p>Интерфейс прост и удобен в использовании. Панель меню спроектирована таким образом, чтобы пользователь может легко найти то, что он ищет.</p>
                            <p><img src="../assets/img/menu.jpg"></p>
                        </section>
                        <section id="sisfuntion">
                            <h2>Функционал системы</h2>
                            <p>Неотправленный документ сперва создается в папке <strong>“Черновики”</strong>, потом, после отправки контрагенту, перемещается в папку <strong>“Исходящие”</strong>, при ответе контрагента, перемещается в папку <strong>“Входящие”</strong>, а если документ подписан обеими сторонами, то в папку <strong>“Архив”</strong>. Можно отправить как подписанную версию документа, так и неподписанную, для ознакомления.</p>
                            <p>Документы, которые отправляются для согласования другому сотруднику компании, находятся в папке «Согласование»</p>
                            <p><img src="../assets/img/agreement.jpg"></p>
                        </section>
                        <section id="storing">
                            <h2>Хранение документов</h2>
                            <p>Система планирует хранить подписанные документы в течение определенного в Публичной оферте периода. Тем не менее, мы настоятельно просим также сохранять архивы подписанных документов на ваших собственных компьютерах. Это необходимо делать из-за следующих соображений.</p>
                            <ul>
                            <li>Фактура.уз не является системой хранения данных. Если у вас есть подписанный электронный документ, то он будет храниться только ограниченный период времени, не говоря уже о размере дискового пространства, выделяемого отдельному участнику системы. При превышении лимита или срока хранения, документ будет автоматически удален. Так что, вам необходимо заблаговременно разработать и строго придерживаться процедур хранения электронных документов на собственных ресурсах.</li>
                            <li>Возможны форс-мажорные обстоятельства, поэтому создавайте резервные копии данных.</li>
                            <li>У каждой фирмы свой порядок хранения документов, кто-то сортирует по проектам, кто-то по годам и так далее. Но, в системе Фактура.уз, все подписанные донные хранятся в одной папке “Архив”, это вызовет неудобство после достижения определенного объема. Поэтому, старайтесь с самого начала сохранять документа у себя и сортировать согласно вашей схеме.</li>
                            </ul>
                            <p>Подписанный электронный документ хранится вместе с сопутствующей служебной информацией внутри архивного файла формата&nbsp;<em>ZIP</em>. Также, для просмотра документов, вам потребуется программа поддерживающая формат <em>PDF</em>, такая как Adobe Acrobat Reader или другая.</p>
                        </section>
                        <section id="bin">
                            <h2>Как работает корзина?</h2>
                            <h3>Восстановление документов из корзины</h3>
                            <p>В корзину могут попасть четыре варианта документов согласно наличию электронно-цифровой подписи.</p>
                            <table>
                            <tbody>
                                <tr>
                                    <td>(А) Документ <span style="text-decoration: underline;">без чьей-либо подписи</span></td>
                                    <td>(Б) Документ с собственной подписьюно <span style="text-decoration: underline;">без подписи контрагента</span></td>
                                </tr>
                                <tr>
                                    <td>(В) Документ <span style="text-decoration: underline;">без собственной подписи</span>но с подписью контрагента</td>
                                    <td>(Г) Документ с собственной подписьюи подписью контрагента</td>
                                </tr>
                            </tbody>
                            </table>
                            <div class="alert alert-info">
                            <p>Вариант (В) не может быть восстановлен из корзины. Если контрагент выслал вам уже подписанный документ, но вы отказались подписать и удалили его, вы не сможете восстановить его из корзины, хотя вы можете просмотреть содержание данного документа.</p>
                            </div>
                            <h3>Можно ли удалить из корзины?</h3>
                            <p>Да, вы можете удалить документы из корзины. В зависимости от статуса документа, система и контрагент могут иметь свои копии.</p>
                        </section>
                        <section id="verify">
                            <h2>Проверка подписей на документах</h2>
                            <p>Для проверки архива содержащего документ и ЭЦП, пожалуйста, воспользуйтесь следующей ссылкой:</p>
                            <p>https://app.faktura.uz/document/verify</p>
                            <p>Данная ссылка также продублирована на информационном сайте faktura.uz и по адресу системы&nbsp;– app.faktura.uz.</p>
                        </section>
                        <section id="terms">
                            <h2>Термины и определения</h2>
                            <p>Для уверенной работы с системой нужно определиться с некоторыми терминами. Ниже приведен список определений, актуальная таблица приведена в Оферте системы.</p>
                            <table>
                            <tbody>
                                <tr>
                                    <td style="text-align: left;"><strong>UTC</strong></td>
                                    <td>всемирное координированное время (англ. Coordinated Universal Time, UTC) — стандарт, по которому общество регулирует часы и время;</td>
                                </tr>
                                <tr>
                                    <td><strong>Аккаунт (аccount),&nbsp;</strong> <strong>учетная запись</strong></td>
                                    <td>это совокупность данных и реквизитов о Заказчике или Контрагенте;</td>
                                </tr>
                                <tr>
                                    <td><strong>Договор оферты,&nbsp; Договор, Публичная&nbsp; оферта</strong></td>
                                    <td>Публичная оферта между Исполнителем и Заказчиком, который заключается посредством акцепта оферты в оговоренном порядке или договор между Исполнителем и Заказчиком, который заключается в бумажном или электронном виде с использованием ЭЦП;</td>
                                </tr>
                                <tr>
                                    <td><strong>Доставка электронного документа</strong></td>
                                    <td>факт и время поступления электронного документа в личный кабинет либо на адрес электронной почты Заказчика или Контрагента;</td>
                                </tr>
                                <tr>
                                    <td><strong>Закрытый (секретный) ключ</strong></td>
                                    <td>последовательность символов, соответствующая открытому ключу, известная только подписывающему лицу и предназначенная для создания ЭЦП в электронном документе – ключ электронной подписи;</td>
                                </tr>
                                <tr>
                                    <td><strong>Интернет-провайдер</strong></td>
                                    <td>организация, предоставляющая услуги доступа к сети Интернет и иные связанные с Интернетом услуги;</td>
                                </tr>
                                <tr>
                                    <td><strong>Комплект электронных документов</strong></td>
                                    <td>понятие комплекта документов используется для исчисления стоимости услуг – подробная информация на&nbsp;странице тарифов;</td>
                                </tr>
                                <tr>
                                    <td><strong>Контрагент</strong></td>
                                    <td>юридическое или физическое лицо с кем у Заказчика установлены партнерские и/или договорные отношения, и кому Заказчик направляет электронные документы, представленные Исполнителю для оказания последним услуг по настоящему Договору;</td>
                                </tr>
                                <tr>
                                    <td><strong>Личный кабинет</strong></td>
                                    <td>раздел для зарегистрированных пользователей, в котором находятся все основные инструменты, необходимые для работы с сайтом Исполнителя. После прохождения регистрации, Заказчик становится авторизованным пользователем сайта Исполнителя;</td>
                                </tr>
                                <tr>
                                    <td><strong>Неформализованный&nbsp; документ</strong></td>
                                    <td>тип документов в информационной системе «Faktura.uz», предназначенный для передачи между Заказчиком и Контрагентом электронных документов, которые нельзя отнести к формализованным документам;</td>
                                </tr>
                                <tr>
                                    <td><strong>Оператор связи</strong></td>
                                    <td>предприятие, оказывающее услуги связи на основании соответствующей лицензии;</td>
                                </tr>
                                <tr>
                                    <td><strong>Открытый (публичный) ключ</strong></td>
                                    <td>последовательность символов, соответствующая закрытому ключу, доступная любому пользователю информационной системы и предназначенная для подтверждения подлинности ЭЦП в электронном документе – ключ проверки электронной подписи;</td>
                                </tr>
                                <tr>
                                    <td><strong>Отправление электронного документа</strong></td>
                                    <td>факт и время отправки электронного документа, которое не может быть отменено отправителем электронного документа;</td>
                                </tr>
                                <tr>
                                    <td><strong>Подтверждение подлинности ЭЦП</strong></td>
                                    <td>положительный результат проверки принадлежности электронной цифровой подписи владельцу закрытого ключа ЭЦП и отсутствия искажений информации в электронном документе;</td>
                                </tr>
                                <tr>
                                    <td><strong>Протокол действий&nbsp; участников электронного документооборота</strong></td>
                                    <td>электронный документ, сгенерированный системой в определённом формате, фиксирующий некие произошедшие события, в том числе подтверждающий прохождение процедуры проверки ЭЦП участников документооборота;</td>
                                </tr>
                                <tr>
                                    <td><strong>Регламент</strong></td>
                                    <td>совокупность правил, определяющих порядок работы информационной системы «Faktura.uz», являющаяся неотъемлемой частью настоящего Договора – <strong>Приложением №1;</strong></td>
                                </tr>
                                <tr>
                                    <td><strong>Сертификат ключа&nbsp; ЭЦП</strong></td>
                                    <td>сертификат открытого ключа (сертификат ЭЦП, сертификат ключа подписи, сертификат ключа проверки электронной подписи) — цифровой или бумажный документ, подтверждающий соответствие между открытым ключом и информацией, идентифицирующей владельца ключа. Содержит информацию о владельце ключа, сведения об открытом ключе, его назначении и области применения, а также название центра регистрации ключей ЭЦП, выдавшего данный сертификат;</td>
                                </tr>
                                <tr>
                                    <td><strong>Система, Информационная система, ИС, Сервис,&nbsp; «Faktura.uz», «Фактура.уз»</strong></td>
                                    <td>совокупность аппаратно-программных средств, торговых знаков, доменных адресов, организационно-юридических документов в электронном, бумажном и ином виде, а также услуг и товаров, используемых/ предоставляемых/связанных с информационной системой электронного документооборота «Faktura.uz»; организация которая определяет правила работы «Faktura.uz», осуществляет управление «Faktura.uz», и которая является информационным посредником – ООО «Space Online Genesis», оказывающее на договорной основе услуги, связанные с оборотом электронных документов, в том числе по доставке электронных документов отправителя, хранению электронных документов и др. (статьи №12, 14 и 16 Закона Республики Узбекистан «Об электронном документообороте»);</td>
                                </tr>
                                <tr>
                                    <td><strong>Служба штампов&nbsp; времени</strong></td>
                                    <td>доверенный сервис, который создаёт штампы времени для того, чтобы подтвердить, что данные существовали на определенный момент времени;</td>
                                </tr>
                                <tr>
                                    <td><strong>Участники электронного документооборота, Участники</strong></td>
                                    <td>Заказчик, Исполнитель и Контрагент, осуществляющие обмен информацией в электронной форме в информационной системе “Faktura.uz”.</td>
                                </tr>
                                <tr>
                                    <td><strong>Формализованный документ</strong></td>
                                    <td>электронные документы в информационной системе «Faktura.uz», имеющие строго фиксированные формы соответствующие требованиям, рекомендациям, актам законодательства и Государственно Налогового Комитета Республики Узбекистан с типом «счёт-фактура», «товарная накладная» или «акт приёмки-сдачи работ (услуг)»;</td>
                                </tr>
                                <tr>
                                    <td><strong>Хеш-код</strong></td>
                                    <td>результат обработки неких данных хеш-функцией. Данный хеш-код используется для проверки целостности данных и их идентификации. В свою очередь, хеш-функция отвечает за преобразование входной последовательности данных произвольного размера в выходную последовательность фиксированного размера – хеш-код;</td>
                                </tr>
                                <tr>
                                    <td><strong>Центр регистрации&nbsp; ключей (ЦРК)</strong></td>
                                    <td>юридическое лицо, прошедшее государственную регистрацию в специально уполномоченном органе и выполняющее функции по созданию и выдаче сертификатов ключей проверки ЭЦП, а также иные функции, предусмотренные Законом Республики Узбекистан «Об электронной цифровой подписи»;</td>
                                </tr>
                                <tr>
                                    <td><strong>Штамп времени</strong></td>
                                    <td>информация в электронной форме, которая связывает представление данных и текущий момент времени, представляя доказательства существования данных на указанный момент времени. Под представлением данных понимается значение хеш-функции, полученной от электронного документа;</td>
                                </tr>
                                <tr>
                                    <td><strong>Электронная цифровая подпись&nbsp; (ЭЦП)</strong></td>
                                    <td>подпись в электронном документе, полученная в результате специальных преобразований информации данного электронного документа с использованием закрытого ключа и позволяющая при помощи связанного открытого ключа установить отсутствие искажения информации в электронном документе и идентифицировать владельца закрытого ключа. ЭЦП равнозначна собственноручной подписи в бумажном документе и имеет одинаковую с ним юридическую силу;</td>
                                </tr>
                                <tr>
                                    <td><strong>Электронный документ</strong></td>
                                    <td>документ (договор, счет-фактура, акт, письмо или иной документ, предназначенный для передачи информации), зафиксированный в электронной форме, имеющий все или некоторые реквизиты электронного документа, позволяющие его идентифицировать. Электронный документ приравнивается к документу на бумажном носителе и имеет одинаковую с ним юридическую силу в случае его подписания с помощью закрытых ключей участников электронного документооборота;</td>
                                </tr>
                                <tr>
                                    <td><strong>Электронный документооборот</strong></td>
                                    <td>совокупность процессов по формированию, приему, отправке и доставке электронных документов через информационную систему «Faktura.uz» в соответствующих форматах и согласно требованиям Регламента для совершения сделок, осуществления расчетов, обмена официальной и неофициальной переписки.</td>
                                </tr>
                            </tbody>
                            </table>
                        </section>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <footerComponent></footerComponent>
    </div>
</template>

<script>
import headerComponent from "../components/headerComponent"
import footerComponent from "../components/footerComponent"

import translate from './../translation/translate'

export default {
  name: 'other-projects',
  data() {
      return {
        translation: translate
      }
  },
  components: {
      headerComponent,
      footerComponent,
  },
  metaInfo() {
        return { 
            title: "Руководство по пользованию СЭД Faktura",
            meta: [
                { name: 'description', content:  'Руководство по пользованию системы электронного документооборота Faktura. ⏩  Установка модуля работы с электронной цифровой подписью(эцп) Eimzo. ⏩  Отправление электронных договоров и счет фактур.'},
            ]
        }
    },
}
</script>

<style>


#videlessons #head-page-title {
    background-image: url("../assets/img/hero-bg-4.jpg");
}

</style>

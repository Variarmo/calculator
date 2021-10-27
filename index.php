<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>calc</title>
        <link rel="stylesheet" type="text/css" href="./style.css">
        <script src="products.js"></script>
    </head>

    <body class="body">

        <div class="left-menu">
            <div class="left-menu__category" data-id="light-box">
                <a href="#light-box">Световые короба</a>
                <div class="selected-options" id="left-menu__light-box"></div>
            </div>

            <div class="left-menu__category" data-id="light-letters">
                <a href="#light-letters">Световые буквы</a>
                <div class="selected-options" id="left-menu__light-letters"></div>
            </div>

            <div class="left-menu__category" data-id="plaques">
                <a href="#plaques">Таблички</a>
                <div class="selected-options" id="left-menu__plaques" ></div>
            </div>

            <div class="left-menu__category" data-id="metal-frame">
                <a href="#metal-frame">Металлокаркас</a>
                <div class="selected-options" id="left-menu__metal-frame"></div>
            </div>

            <div class="left-menu__category" data-id="mobile-structures">
                <a href="#mobile-structures">Мобильные конструкции</a>
                <div class="selected-options" id="left-menu__mobile-structures"></div>
            </div>

            <div class="left-menu__category" data-id="printing">
                <a href="#printing">Печать</a>
                <div class="selected-options" id="left-menu__printing"></div>
            </div>

            <div class="left-menu__category" data-id="cutting">
                <a href="#cutting">Резка</a>
                <div class="selected-options" id="left-menu__cutting"></div>
            </div>

            <div class="left-menu__category" data-id="special-equipment">
                <a href="#special-equipment">Спецтехника</a>
                <div class="selected-options" id="left-menu__special-equipment"></div>
            </div>

            <div class="left-menu__category" data-id="mounting">
                <a href="#mounting">Монтаж</a>
                <div class="selected-options" id="left-menu__mounting"></div>
            </div>

            <div class="left-menu__category" data-id="delivery">
                <a href="#delivery">Доставка</a>
                <div class="selected-options" id="left-menu__delivery"></div>
            </div>

            <div class="left-menu__category" data-id="design">
                <a href="#design">Дизайн</a>
                <div class="selected-options" id="left-menu__design"></div>
            </div>

            <div class="left-menu__category" data-id="lighting-engineering">
                <a href="#lighting-engineering">Светотехника</a>
                <div class="selected-options" id="left-menu__lighting-engineering"></div>
            </div>

            <div class="left-menu__category" data-id="trade-software">
                <a href="#trade-software">Торговое оборудование</a>
                <div class="selected-options" id="left-menu__trade-software"></div>
            </div>

            <div class="left-menu__category" data-id="polygrahy">
                <a href="#polygrahy">Полиграфия</a>
                <div class="selected-options" id="left-menu__polygrahy"></div>
            </div>

            <div class="left-menu__category" data-id="auto-branding">
                <a href="#auto-branding">Брендирование автомобилей</a>
                <div class="selected-options" id="left-menu__auto-branding"></div>
            </div>

            <div class="left-menu__category" data-id="reward">
                <a href="#reward">Вознаграждение</a>
                <div class="selected-options" id="left-menu__reward"></div>
            </div>

            <div class="left-menu__category" data-id="advance">
                <a href="#advance">Аванс за изготовление вывески</a>
                <div class="selected-options" id="left-menu__advance"></div>
            </div>

            <div class="left-menu__category" data-id="surcharge">
                <a href="#surcharge">Доплата за изготовления вывески</a>
                <div class="selected-options" id="left-menu__surcharge"></div>
            </div>

        </div>

        <div class="right-block">

            <div class="right-block__category" id="light-box">
                <h5>Световые короба</h5>
            </div>

            <div class="right-block__category" id="light-letters">
                <h5>Световые буквы</h5>
            </div>

            <div class="right-block__category" id="plaques">
                <h5>Таблички</h5>

            </div>

            <div class="right-block__category" id="metal-frame">
                <h5>Металлокаркас</h5>
            </div>

            <div class="right-block__category" id="mobile-structures">
                <h5>Мобильные конструкции</h5>
            </div>

            <div class="right-block__category" id="printing">
                <h5>Печать</h5>
            </div>

            <div class="right-block__category" id="cutting">
                <h5>Резка</h5>
            </div>

            <div class="right-block__category" id="special-equipment">
                <h5>Спецтехника</h5>
            </div>

            <div class="right-block__category" id="mounting">
                <h5>Монтаж</h5>
            </div>

            <div class="right-block__category" id="delivery">
                <h5>Доставка</h5>
            </div>

            <div class="right-block__category" id="design">
                <h5>Дизайн</h5>
            </div>

            <div class="right-block__category" id="lighting-engineering">
                <h5>Светотехника</h5>
            </div>

            <div class="right-block__category" id="trade-software">
                <h5>Торговое оборудование</h5>
            </div>

            <div class="right-block__category" id="polygrahy">
                <h5>Полиграфия</h5>
            </div>

            <div class="right-block__category" id="auto-branding">
                <h5>Брендирование автомобилей</h5>
            </div>

            <div class="right-block__category" id="reward">
                <h5>Вознаграждение</h5>
            </div>

            <div class="right-block__category" id="advance">
                <h5>Аванс за изготовление вывески</h5>
            </div>

            <div class="right-block__category" id="surcharge">
                <h5>Доплата за изготовления вывески</h5>
            </div>

            <div class="right-block__footer">
                <div class="right-block__footer-result">
                    <p>Общая сумма: &nbsp</p>
                    <span id="result-sum">0</span>
                </div>

                <a class="right-block__footer-btn popup-open" id="open-chek" >Далее</a>
            </div>

        </div>

        <div class="popup-fade">
            <div class="popup">
                <a class="popup-close" id="closer" href="#"><img src="https://img.icons8.com/material-outlined/24/204477/multiply--v1.png"/></a>
                <p class="check__title">Общий счет:</p>

                <div id="popup-check">

                </div>

                <div class="check-result">К оплате: &nbsp<span id="popup-result-sum"></span></div>

                <div class="popup_btn-wrap">
                    <a class="popup_btn popup-close">Назад</a>
                    <a id="make_order" class="popup_btn">Олатить</a>
                </div>
            </div>
        </div>

    <script src="//api.bitrix24.com/api/v1/"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="./jquery.inputmask.js"></script>
    <script src="./script.js"></script>
    <script type="text/javascript">
        /* динамческое формирование списка товаров*/
        let PHP_REQUEST = <?php echo(json_encode($_REQUEST)) ?>;
                //console.log("PHP_REQUEST", PHP_REQUEST);
                if (PHP_REQUEST.PLACEMENT_OPTIONS) {PHP_REQUEST.PLACEMENT_OPTIONS = JSON.parse(PHP_REQUEST.PLACEMENT_OPTIONS)}

                BX24.callMethod('placement.unbind', {PLACEMENT: "CRM_DEAL_DETAIL_TAB"}, function(result) {
                    BX24.callMethod('placement.bind', {
                        HANDLER: "https://calculator.goreally.ru/index.php",
                        PLACEMENT: "CRM_DEAL_DETAIL_TAB",
                        TITLE: "Калькулятор",
                        DESCRIPTION: "Калькулятор"
                    }, function(result) {
                        console.log("result", result)
                    })
                });

        $(document).on('click', '#make_order', function(){
            BX24.callMethod("crm.deal.productrows.get", {id: PHP_REQUEST.PLACEMENT_OPTIONS.ID}, function(result) {
                let productrows = result.answer.result;
                $('.check__position').each(function(){
                    let product_title = $(this).find('.check__position-name').html();
                    let product_quantity = $(this).find('.check__position-qt').html();
                    let product_total_price = $(this).find('.check__position-price').html();
		    let product_price = parseFloat(product_total_price) / parseFloat(product_quantity);
		    console.log(product_price);
                    productrows.push(
                            {
                                'PRODUCT_NAME': product_title,
                                'QUANTITY': product_quantity,
                                'PRICE': product_price
                            }
                        );
                });
                console.log(productrows);
                BX24.callMethod("crm.deal.productrows.set", {id: PHP_REQUEST.PLACEMENT_OPTIONS.ID, rows: productrows}, function(result) {
                    console.log("productrows.set", result)
                });
                setTimeout(window.location.href = "https://pervyyreklamnyy.bitrix24.ru/crm/deal/details/" + PHP_REQUEST.PLACEMENT_OPTIONS.ID + '/', 5000);
            });
        });
    </script>
    </body>
</html>

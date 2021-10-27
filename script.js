products.forEach( product =>  {
    let parentBlock = document.getElementById( product.parentBlock );
    let parentBlockName = product.parentBlock
    let blockId = product.blockId
    let name = product.name
    let formulaType = product.formulaType
    let price = product.price
    let units = product.units
    let inputname = product.inputname
    let materials = product.materials
    let additions = product.additions
    let optionBlock, matType, matPrice, matCode, selectBlock = "" , matBlock = "",  additionsBlock = "" ;


    switch(formulaType) {
        case 'comp':
            optionBlock = "<div class='category_option_wrap'>\n" +
                "    <input id='" + blockId + "-chek'\n" +
                "           class='category_option'\n" +
                "           type='checkbox'\n" +
                "           name='" + parentBlockName + "'\n" +
                "           data-block='" + blockId + "'\n" +
                "           value='" + name + "'>\n" +
                "\n" +
                "    <label class='checkbox-label' for='" + blockId + "-chek'>" + name + "</label>\n" +
                "\n" +
                "    <div id='" + blockId + "' class='category_option__parameters'>\n" +
                "        <p>Цена за <span id='" + blockId + "_units'>" + units + "</span> - <span id='" + blockId + "_price'>" + price + " </span></p>\n" +
                "\n" +
                "        <div class='parameters-wrap'>\n" +
                "            <div class='parameter-input-wrap'>\n" +
                "                <label class='parameter-label' for='" + blockId + "_width'>Ширина</label>\n" +
                "                <input class='parameter' type='text' id='" + blockId + "_width' name='" + blockId + "'>\n" +
                "            </div>\n" +
                "            <div class='parameter-input-wrap'>\n" +
                "                <label class='parameter-label' for='" + blockId + "_height'>Высота</label>\n" +
                "                <input class='parameter' type='text' id='" + blockId + "_height' name='" + blockId + "'>\n" +
                "            </div>\n" +
                "            <div class='parameter-input-wrap' >\n" +
                "                <label class='parameter-label' for='" + blockId + "_count'>Количество</label>\n" +
                "                <input class='parameter' type='text' id='" + blockId + "_count' name='" + blockId + "' value='1'>\n" +
                "            </div>\n" +
                "\n   <div class='parameter-chek-wrap'>" +
                        "<input id='" + blockId + "_luv' class='parameter-dop-chek parameter' type='checkbox' name='" + blockId + "' value='люверсы'/>" +
                        "<label for='" + blockId + "_luv'>Люверсы</label>"+
                        "<input id='" + blockId + "_glue' class='parameter-dop-chek parameter' type='checkbox' name='" + blockId + "' value='проклейка'/>" +
                        "<label for='" + blockId + "_glue'>Проклейка</label>"+
                    "</div>" +
                "  </div>\n" +
                "\n" +
                "        <p class='option__cost'> Стоимость: <span id='" + blockId + "_cost' data-formula='comp'></span></p>\n" +
                "\n" +
                "    </div>\n" +
                "</div>\n";

            break;

        case 'complex':
            if(materials){
                materials.forEach( el => {
                    matType = el.materialType;
                    matCode = el.matCode;
                    matPrice = el.price;

                    if(Array.isArray(matPrice)){

                        selectBlock += "<option id='" + matCode + "__name' " +
                            "data-price1='" + matPrice[0] + "'" +
                            "data-price2='" + matPrice[1] + "'" +
                            "data-price3='" + matPrice[2] + "'" +
                            "data-price4='" + matPrice[3] + "'" +
                            "value='" + matCode + "'>" + matType + "</option>";
                    } else {
                        selectBlock += "<option id='" + matCode + "__name' data-price1='" + matPrice[0] + "' value='" + matCode + "'>" + matType + "</option>";
                        }
                })
            }

            optionBlock = "<div class='category_option_wrap'>\n" +
                "    <input id='" + blockId + "-chek'\n" +
                "           class='category_option with-select'\n" +
                "           type='checkbox'\n" +
                "           name='" + parentBlockName + "'\n" +
                "           data-block='" + blockId + "'\n" +
                "           value='" + name + "'>\n" +
                "\n" +
                "    <label class='checkbox-label' for='" + blockId + "-chek'>" + name + "</label>\n" +
                "\n" +
                "    <div id='" + blockId + "' class='category_option__parameters'>\n" +
                        "<select id='"+ blockId +"__material-select' class='category_option__select-mat' date-block='" + blockId + "'>" + selectBlock + "</select>"+ matBlock +
                "        <div class='parameters-wrap'>\n" +
                "            <div class='parameter-input-wrap'>\n" +
                "                <label class='parameter-label' for='" + blockId + "_lenght'>Длина</label>\n" +
                "                <input class='parameter' type='text' id='" + blockId + "_lenght' data-changeprice='1' name='" + blockId + "'>\n" +
                "            </div>\n" +
                " <p>Цена за <span id='" + blockId + "_units'>" + units + "</span> - <span id='" + blockId + "_price'></span></p>\n" +
                        "  </div>\n" +
                "\n" +
                "        <p class='option__cost'> Стоимость: <span id='" + blockId + "_cost' data-formula='complex'></span></p>\n" +
                "\n" +
                "    </div>\n" +
                "</div>\n";

            break;

        case 'compplus':
            if (materials) {
                materials.forEach( el => {
                    matType = el.materialType;
                    matCode = el.matCode;
                    matPrice = el.price;

                    selectBlock += "<option id='" + matCode + "__name' data-price1='" + matPrice + "' value='" + matCode + "'>" + matType + "</option>";
                })
            }

            if(additions){
                additions.forEach( add => {
                    let addCode = add.addCode
                    let addName = add.name
                    let addPrice = add.price

                    additionsBlock += "<div class='parameter-dop-chek-wrap' id='" + blockId + addCode + "-wrap'>" +
                        "<input id='" + blockId + addCode + "' class='parameter-dop-chek parameter "+ blockId +"__dop-parametr' type='checkbox' name='" + blockId + "' value='" + addName + "'/>" +
                        "<label for='" + blockId + addCode + "'>" + addName + "</label>" +
                        "<p>Цена: <span id='" + blockId + addCode + "_price'>" + addPrice + "</span></p>" +
                        "            <div class='parameter-input-wrap dop-parameter-count' >\n" +
                        "                <label class='parameter-label' for='" + blockId + addCode + "_count'>Количество</label>\n" +
                        "                <input class='parameter' type='text' id='" + blockId + addCode + "_count' name='" + blockId + "'>\n" +
                        "            </div>\n" +
                        "</div>"
                })
            }


            optionBlock = "<div class='category_option_wrap'>\n" +
                "    <input id='" + blockId + "-chek'\n" +
                "           class='category_option with-select'\n" +
                "           type='checkbox'\n" +
                "           name='" + parentBlockName + "'\n" +
                "           data-block='" + blockId + "'\n" +
                "           value='" + name + "'>\n" +
                "\n" +
                "    <label class='checkbox-label' for='" + blockId + "-chek'>" + name + "</label>\n" +
                "\n" +
                "    <div id='" + blockId + "' class='category_option__parameters'>\n" +
                "<select id='"+ blockId +"__material-select' class='category_option__select-mat' date-block='" + blockId + "'>" + selectBlock + "</select>"+ matBlock +
                "        <div class='parameters-wrap'>\n" +
                "            <div class='parameter-input-wrap'>\n" +
                "                <label class='parameter-label' for='" + blockId + "_width'>Ширина</label>\n" +
                "                <input class='parameter' type='text' id='" + blockId + "_width' name='" + blockId + "'>\n" +
                "            </div>\n" +
                "            <div class='parameter-input-wrap'>\n" +
                "                <label class='parameter-label' for='" + blockId + "_height'>Высота</label>\n" +
                "                <input class='parameter' type='text' id='" + blockId + "_height' name='" + blockId + "'>\n" +
                "            </div>\n" +
                "            <div class='parameter-input-wrap' >\n" +
                "                <label class='parameter-label' for='" + blockId + "_count'>Количество</label>\n" +
                "                <input class='parameter' type='text' id='" + blockId + "_count' name='" + blockId + "' value='1'>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "\n" +
                "               <p>Цена за <span id='" + blockId + "_units'>" + units + "</span> - <span id='" + blockId + "_price'>" + price + "</span></p>\n" +
                "           <div class='parameter-chek-wrap'>" + additionsBlock + "</div>"+
                "        <p class='option__cost'> Стоимость: <span id='" + blockId + "_cost' data-formula='compplus'></span></p>\n" +
                "\n" +
                "   </div>\n" +
                " </div>\n" +
                "</div>\n";

            break;

        case 'whp':
        case 'wh2p':
            optionBlock = "<div class='category_option_wrap'>\n" +
                "    <input id='" + blockId + "-chek'\n" +
                "           class='category_option'\n" +
                "           type='checkbox'\n" +
                "           name='" + parentBlockName + "'\n" +
                "           data-block='" + blockId + "'\n" +
                "           value='" + name + "'>\n" +
                "\n" +
                "    <label class='checkbox-label' for='" + blockId + "-chek'>" + name + "</label>\n" +
                "\n" +
                "    <div id='" + blockId + "' class='category_option__parameters'>\n" +
                "        <p>Цена за <span id='" + blockId + "_units'>" + units + "</span> - <span id='" + blockId + "_price'>" +  price + " </span></p>\n" +
                "\n" +
                "        <div class='parameters-wrap'>\n" +
                "            <div class='parameter-input-wrap'>\n" +
                "                <label class='parameter-label' for='" + blockId + "_width'>Ширина</label>\n" +
                "                <input class='parameter' type='text' id='" + blockId + "_width' name='" + blockId + "'>\n" +
                "            </div>\n" +
                "            <div class='parameter-input-wrap'>\n" +
                "                <label class='parameter-label' for='" + blockId + "_height'>Высота</label>\n" +
                "                <input class='parameter' type='text' id='" + blockId + "_height' name='" + blockId + "'>\n" +
                "            </div>\n" +
                "            <div class='parameter-input-wrap' >\n" +
                "                <label class='parameter-label' for='" + blockId + "_count'>Количество</label>\n" +
                "                <input class='parameter' type='text' id='" + blockId + "_count' name='" + blockId + "' value='1'>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "\n" +
                "        <p class='option__cost'> Стоимость: <span id='" + blockId + "_cost' data-formula='" + formulaType + "'></span></p>\n" +
                "\n" +
                "    </div>\n" +
                "</div>\n";

            break;

        case 'atxp':
            optionBlock = "<div class='category_option_wrap'>\n" +
                "    <input id='" + blockId + "-chek'\n" +
                "           class='category_option'\n" +
                "           type='checkbox'\n" +
                "           name='" + parentBlockName + "'\n" +
                "           data-block='" + blockId + "'\n" +
                "           value='" + name + "'>\n" +
                "\n" +
                "    <label class='checkbox-label' for='" + blockId + "-chek'>" + name + "</label>\n" +
                "\n" +
                "    <div id='" + blockId + "' class='category_option__parameters'>\n" +
                "        <p>Цена за <span id='" + blockId + "_units'>" + units + "</span> - <span id='" + blockId + "_price'>" +  price + "</span></p>\n" +
                "\n" +
                "        <div class='parameters-wrap'>\n" +
                "            <div class='parameter-input-wrap'>\n" +
                "                <label class='parameter-label' for='" + blockId + "_width'>" + inputname +"</label>\n" +
                "                <input class='parameter' type='text' id='" + blockId + "_width' name='" + blockId + "'>\n" +
                "            </div>\n" +
                "            <div class='parameter-input-wrap'>\n" +
                "                <label class='parameter-label' for='" + blockId + "_count'>Количество</label>\n" +
                "                <input class='parameter' type='text' id='" + blockId + "_count' name='" + blockId + "'>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "\n" +
                "        <p class='option__cost'> Стоимость: <span id='" + blockId + "_cost' data-formula='atxp'></span></p>\n" +
                "\n" +
                "    </div>\n" +
                "</div>\n";

            break;

        case 'free':
            optionBlock = "<div class='category_option_wrap'>\n" +
                "    <input class='category_option'\n" +
                "           type='checkbox'\n" +
                "           id='" + blockId + "-chek'\n" +
                "           name='" + parentBlockName + "'\n" +
                "           data-block='" + blockId + "'\n" +
                "           value='" + name + "'>\n" +
                "    <label class='checkbox-label' for='" + blockId + "-chek'>" + name + "</label>\n" +
                "\n" +
                "    <div id='" + blockId + "' class='category_option__parameters'>\n" +
                "        <div class='parameter-input-wrap'>\n" +
                "            <label class='parameter-label label_cost' for='" + blockId + "_price'>Цена: </label>\n" +
                "            <input class='parameter-long parameter' type='text' id='" + blockId + "_price' name='" + blockId + "' data-formula='free'>\n" +
                "        </div>\n" +
                "        <div class='parameter-input-wrap' >\n" +
                "                <label class='parameter-label' for='" + blockId + "_count'>Количество</label>\n" +
                "                <input class='parameter' type='text' id='" + blockId + "_count' name='" + blockId + "' value='1'>\n" +
                "        </div>\n" +
                "        <p class='option__cost'> Стоимость: <span id='" + blockId + "_cost' data-formula='free'></span></p>\n" +
                "    </div>\n" +
                "</div>";
            break;

        default:
            console.log("неизвестное поле " + name);
            break;
    }

    parentBlock.innerHTML += optionBlock;

});

$(document).ready(function() {

    $("#light-box").show();
    $(".category_option__parameters").hide();
    $(".dop-parameter-count").hide();

    //показ определенной категории
    $(".left-menu__category").click(function () {
        $(".right-block__category").hide();
        let category = $(this).attr("data-id");
        $("#"+category).show();
    });

    //показ и скрытие окна с выбранными опциями в левом меню
    let showSelected = function (cat){
        let el = cat.children().length;
        if(el > 0) {
            cat.show(200);
        } else {
            cat.hide(200);
        }
    }

    //добавление опции в сделку
    $('.category_option').on('click', function(){
        let chek = $(this).prop("checked");
        let elemid = $(this).attr("data-block");

        let category = $(this).attr("name");
        let option = $(this).attr("data-block");
        let optionName = $(this).val();
        let leftMenuCat = $("#left-menu__" + category);
        let material = ""

        if( $(this).hasClass('with-select') ){

            let matprop = $("#"+ option +"__material-select option:selected").val();
            let matname = $("#"+ option +"__material-select option:selected").text();
            material = "<span id='" + matprop + "_dop' class='left-menu-category__mat-tipe'>, " + matname + "</span>";

            let p = $("#"+ option +"__material-select option:selected").attr('data-price1');
            $("#" + option + "_price").text(p)
        }

        if (chek==true){

            $("#"+elemid).show(200);

            leftMenuCat.append("" +
                "<div id='seleted__" + option + "' class='select-option-wrap'>" +
                    "<p class='select-option__name'>" + optionName + material + "</p> <p class='select-option__sum'></p> <p class='select-option__cost'></p></div>"
            );

            showSelected(leftMenuCat);
        } else {

            $("#"+elemid).hide(200);
            $("#seleted__" + option).remove();

            $("#"+elemid).children('input').each(function() {
                $(this).val('');
            });

            showSelected(leftMenuCat);
            resutlSum();
        }

    });

    //расчёт стоимости опции
    let calcSum = function(block) {

        let costBlock = $("#" + block + "_cost");
        let formulaType = costBlock.attr("data-formula");
        let p = parseFloat($("#" + block + "_price").text());
        let units = $("#"+ block + "_units").text();
        let showMenu = $("#seleted__" + block);
        let cost = p;
        let w,h,freeP,addLuv,addGlue,ar,prm,l;
        let c = 1;

        //получение переменных
        switch(formulaType){

            case "compplus" :
            case "comp" :
            case "whp" :
            case "wh2p" :
                h = parseFloat($("#" + block + "_height").val());
                w = parseFloat($("#" + block + "_width").val());
                c = parseFloat($("#" + block + "_count").val());
                break;
            case "free" :
                c = parseFloat($("#" + block + "_count").val());
                freeP= parseFloat($("#" + block + "_price").val());
                break;
            case "complex" :
                l = parseFloat($("#" + block + "_lenght").val());
                break;
            case "atxp" :
                w = parseFloat($("#" + block + "_width").val());
                c = parseFloat($("#" + block + "_count").val());
                break;
            default:
                console.log("неопределенная формула");
                break
        }

        //расчет по формуле
        switch(formulaType) {
            case "comp" :
                let luv = $("#"+block+"_luv").prop("checked");
                let glue = $("#"+block+"_glue").prop("checked");

                ar = w*h;
                prm = (w+h)*2;

                addLuv = prm*36;
                addGlue = prm*40;

                if (luv==true && glue==false){

                    cost = (ar*p+addLuv)*c;

                } else if (luv==false && glue==true){

                    cost = (ar*p+addGlue)*c;

                } else if (luv==true && glue==true){

                    cost = (ar*p+addGlue+addLuv)*c;

                } else if (luv==false && glue==false){
                    cost = (ar*p)*c;
                }

                if(cost > 0){
                    showMenu.children('.select-option__sum').text(c + " штук ");
                    showMenu.children('.select-option__cost').text(cost);
                    costBlock.text(cost);
                    resutlSum();
                }

                break;

            case "whp" :
                cost = w*h*p*c;

                if(cost > 0){
                    showMenu.children('.select-option__sum').text(c + " штук");
                    showMenu.children('.select-option__cost').text(cost);
                    $("#"+block+"_cost").text(cost);
                    resutlSum();
                }

                break;

            case "atxp" :
                cost = w*p*c;

                if(cost > 0 && isNaN(w) == false && isNaN(p) == false){
                    showMenu.children('.select-option__sum').text(c + " штук");
                    showMenu.children('.select-option__cost').text(cost);
                    $("#"+block+"_cost").text(cost);
                    resutlSum();
                }

                break;

            case "wh2p" :

                cost = (w + h)*2*p*c;

                if(isNaN(w) == false && isNaN(h) == false){
                    showMenu.children('.select-option__sum').text(c + " штук");
                    showMenu.children('.select-option__cost').text(cost);
                    costBlock.text(cost);
                    resutlSum();
                }

                break;

            case "free" :
                cost = c*freeP;

                if(cost > 0 && isNaN(freeP) == false && isNaN(c) == false) {
                    showMenu.children('.select-option__sum').text(c + " штук");
                    showMenu.children('.select-option__cost').text(cost);
                    costBlock.text(cost);
                    resutlSum();
                }

                break;

            case "complex" :

                cost = l*p;

                if(cost > 0 && isNaN(l) == false && isNaN(p) == false){
                    showMenu.children('.select-option__sum').text(l + " штук");
                    showMenu.children('.select-option__cost').text(cost);
                    costBlock.text(cost);
                    resutlSum();
                }
                break;

            case "compplus" :
                let dop = $("." + block + "__dop-parametr");
                let dopProp, dopPropPrice, dopPropCount, dopPropCost
                let addCount = 0;

                dop.each(function () {

                    if($(this).prop("checked")) {
                        dopProp = $(this).attr('id')
                        dopPropPrice = $("#" + dopProp + "_price").text()
                        dopPropCount = $("#" + dopProp + "_count").val()
                        dopPropCost = dopPropPrice*dopPropCount

                        addCount += dopPropCost
                    }
                })

                if(addCount>0){
                    cost = c*w*h*p+addCount;
                } else {
                    cost = c*w*h*p;
                }

                if(cost > 0  && isNaN(w) == false && isNaN(h) == false && isNaN(p) == false){
                    showMenu.children('.select-option__sum').text(c + " штук");
                    showMenu.children('.select-option__cost').text(cost);
                    $("#"+block+"_cost").text(cost);
                    resutlSum();
                }

                break;

            default:

                console.log("неопределенная формула");

                break;
        }

    };

    //добавление доп опций
    $('.parameter-dop-chek').on('click', function(){

        let block = $(this).attr("name");
        let prop = $(this).attr("id");
        let leftMenuOp = $("#seleted__" + block).children('.select-option__name');
        let name = $(this).val();

        if( $(this).prop("checked")==true ){

            leftMenuOp.append("<span id='" + prop + "_dop'>, " + name + "</span>");

            $("#" + prop + "-wrap").addClass('dop-chek-open');
            $("#" + prop + "-wrap").children('.dop-parameter-count').show(200);

        } else {
            $("#" + prop + "_dop").remove();
            $("#" + prop + "-wrap").removeClass('dop-chek-open');
            $("#" + prop + "-wrap").children('.dop-parameter-count').hide(200);
        }

        calcSum(block);
    });


    //изменение селекта
    $(".category_option__select-mat").change(function () {
        let block = $(this).attr("date-block");
        let l = $("#" + block + "_lenght").val()
        let prop = $("#"+ block +"__material-select option:selected").val();
        let name = $("#"+ block +"__material-select option:selected").text();
        let leftMenuOp = $("#seleted__" + block).children('.select-option__name');
        let p;

        leftMenuOp.children(".left-menu-category__mat-tipe").remove();
        leftMenuOp.append("<span id='" + prop + "_dop' class='left-menu-category__mat-tipe'>, " + name + "</span>");


        if( l && l < 80 ){
            p = $("#"+ block +"__material-select option:selected").attr('data-price1');
        } else if ( l && l < 300) {
            p = $("#"+ block +"__material-select option:selected").attr('data-price2');
        } else if ( l && l < 800) {
            p = $("#"+ block +"__material-select option:selected").attr('data-price3');
        } else if ( l && l > 800) {
            p = $("#"+ block +"__material-select option:selected").attr('data-price4');
        } else {
            p = $("#"+ block +"__material-select option:selected").attr('data-price1');
        }

        $("#" + block + "_price").text(p)

        calcSum(block);
    });


        //изменение параметров опции
    $(".parameter").change(function() {
        let block = $(this).attr("name");


        if( $(this).attr("data-changeprice")){
            let l = $(this).val();
            let prop = $("#"+ block +"__material-select option:selected").val();
            let name = $("#"+ block +"__material-select option:selected").text();
            let leftMenuOp = $("#seleted__" + block).children('.select-option__name');
            let p;

            leftMenuOp.children(".left-menu-category__mat-tipe").remove();
            leftMenuOp.append("<span id='" + prop + "_dop' class='left-menu-category__mat-tipe'>, " + name + "</span>");

            if( l && l < 80 ){
                p = $("#"+ block +"__material-select option:selected").attr('data-price1');
            } else if ( l && l < 300) {
                p = $("#"+ block +"__material-select option:selected").attr('data-price2');
            } else if ( l && l < 800) {
                p = $("#"+ block +"__material-select option:selected").attr('data-price3');
            } else if ( l && l > 800) {
                p = $("#"+ block +"__material-select option:selected").attr('data-price4');
            } else {
                p = $("#"+ block +"__material-select option:selected").attr('data-price1');
            }

            $("#" + block + "_price").text(p)

        }

        calcSum(block);
    });

    //рассчет общей суммы
    let resutlSum = function (){

        let sum = 0;

        $(".select-option__cost").each(function() {
          let position = parseFloat($(this).text());
            if(isNaN(position) == false ) {
                sum += position;
            }
        });

        if(isNaN(sum) == false ) {
            $("#result-sum").text( sum );
        } else {
            $("#result-sum").text("0");
        }

    }


    // Клик по ссылке "Закрыть".
    $('.popup-close').click(function() {
        $(this).parents('.popup-fade').fadeOut();
        return false;
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').fadeOut();
        }
    });

    $('.popup-fade').click(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();
        }
    });

    //ормирование чека для перехода к оплате
    $('#open-chek').click(function() {

        $("#popup-check").empty();
        $(".check__title").text("Общий счет:");
        $("#make_order").show();
        $(".check-result").show();

        $('.category_option').each(function() {

            let sel = $(this).prop("checked");

            if(sel==true){
                let option = $(this).attr("data-block");
                let name = $("#seleted__" + option).children('.select-option__name').text();
                let check = $("#popup-check");
                let pr = parseFloat($("#" + option + "_cost").text());
                let qt = parseFloat($("#" + option + "_count").val()) || 1;

                //проверяем что все поля заполнены верно
                if(isNaN(qt) == true || isNaN(pr) == true) {

                   $(".check__title").text("Кажется, не все поля заполненны, проверьте ещё раз!");
                   $("#make_order").hide();
                   $(".check-result").hide();

                   return false;
                };
                //вывод в чек
                check.append("<div class='check__position'><p class='check__position-name'>"+ name + "</p><p class='check__position-qt'>" + qt + "</p><p class='check__position-price'>" + pr + "</p></div>");

            } else { }

        });

        let sum = $("#result-sum").text();

        if(sum > 0){
           $("#popup-result-sum").text(sum);
        } else {
           $(".check__title").text("Товары не добавлены!");
           $("#make_order").hide();
           $(".check-result").hide();
        }

        $('.popup-fade').fadeIn();
        return false;

    });

});


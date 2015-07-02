var app = angular.module('store', []).controller('StoreController', function ($scope) {

    $scope.shops = [
        {name: "Розетка", id: 1, href: "http://rozetka.com.ua/", category: "Універсальні магазини", phone:"(0-800) 503-808", showSave:true},
        {name: "Алло", id: 2, href: "http://allo.ua/", category: "Універсальні магазини", phone:"(0-800) 300 100", showSave:true},
        {name: "Мобіллак", id: 3, href: "http://www.mobilluck.com.ua/", category: "Універсальні магазини", phone:"+38 (067) 626-23-99", showSave:true},
        {name: "Фокстрот", id: 4, href: "http://www.foxtrot.com.ua/", category: "Універсальні магазини", phone:"+38 (050) 385-05-85", showSave:true},
        {name: "Фотомаг", id: 5, href: "http://fotomag.com.ua/", category: "Універсальні магазини", phone:"(0-800)-300-222", showSave:true},
        {name: "Рост", id: 6, href: "http://rost.kh.ua/", category: "Продуктові магазини", phone:"+38 (050) 203-30-40", showSave:true},
        {name: "Амбар", id: 7, href: "http://www.ambar.ua/", category: "Продуктові магазини", phone:"+38 (099) 016-23-29", showSave:true},
        {name: "Копійка", id: 8, href: "http://kopeyka.od.ua/", category: "Продуктові магазини", phone:"+38 (050) 492-19-24", showSave:true},
        {name: "Таврія", id: 9, href: "http://www.tavriav.ua/", category: "Продуктові магазини", phone:"+38 (050) 415-87-35", showSave:true},
        {name: "Обжора", id: 10, href: "http://produkty24.com.ua/", category: "Продуктові магазини", phone:"(048) 777-2-111", showSave:true},
        {name: "Диво меблі", id: 11, href: "http://divo-mebli.com.ua/", category: "Мебельні магазини", phone:"+38 (050) 251-50-85", showSave:true},
        {name: "Мебторг", id: 12, href: "http://mebtorg.com/", category: "Мебельні магазини", phone:"+38 (066) 946-37-75", showSave:true},
        {name: "Українські меблі", id: 13, href: "http://ukrainskimebli.kh.ua/", category: "Мебельні магазини", phone:"+38 (050) 195-63-12", showSave:true},
        {name: "Софіно", id: 14, href: "http://sofino.ua/", category: "Мебельні магазини", phone:"(0-800) 303-300", showSave:true},
        {name: "Ваша мебель", id: 15, href: "http://vashamebel.in.ua/", category: "Мебельні магазини", phone:"+38 (050) 853-9-222", showSave:true}
    ];

    this.magazine = $scope.shops;

    $scope.currentCategory = null;
    $scope.canLink = true;
    $scope.showPhone = true;
    $scope.showCreate = false;
    $scope.showRemove = false;

    function setCurrentCategory(category) {
        $scope.currentCategory = category;
        $scope.showCreate=true;
        if (category == 'theBest') {
            $scope.canLink = false;
            $scope.showPhone = false;
            $scope.showCreate = false;
            $scope.showRemove = true;
        }
        else {
            $scope.canLink = true;
            $scope.showPhone = true;
            $scope.showRemove = false;
        }
        return $scope.currentCategory;
    }

    $scope.setCurrentCategory = setCurrentCategory;

    function getChosenMagazine(magChosen) {
        magChosen.showSave = false;
        var obj =
        {name:magChosen.name, phone:magChosen.phone, category:'theBest', href:magChosen.href, showSave:false};
        $scope.shops.push(obj);
    }

    $scope.getChosenMagazine = getChosenMagazine;

    function removeChosenShop(shop) {
        for (var i = 0; i < $scope.shops.length; i++) {
            if (shop == $scope.shops[i]) {
                $scope.shops.splice(i, 1);
                return 0;
            } else
            if (shop.name == $scope.shops[i].name)
            {
                $scope.shops[i].showSave = true;
            }

        }

    }

    $scope.removeChosenShop = removeChosenShop;

    function resetCreateForm() {
        $scope.shop = {
            name: '',
            href: '',
            category: $scope.currentCategory
        };
    }

    function shouldShowCreating() {
        return $scope.currentCategory;
    }

    function startCreating() {
        $scope.isCreating = true;
        resetCreateForm();
    }

    $scope.shouldShowCreating = shouldShowCreating;
    $scope.startCreating = startCreating;

    function createShop(shop) {

        var obj = new Object();
        obj.id = $scope.shops.length;
        obj.name = shop.name;
        obj.href = shop.href;
        obj.showSave = true;
        obj.category = $scope.currentCategory;
        $scope.shops.push(obj);
    }
    $scope.createShop = createShop;

});
(function() {
  'use strict';

  angular.module('shop')
  .controller('InventoryController', InventoryController);

  InventoryController.$inject = ['InventoryService'];

  function InventoryController(InventoryService) {
    let vm = this;
    vm.newItem = {};
    vm.sortType = 'price'; //sets the default sort type
    vm.sortReverse = false; //sets the default sort order
    vm.inventory = InventoryService.getAllItems();

   /*
    * Gets price of items by subtracting the discount from original price then
    * adding the tax by multiplying the result by 1.0575
    * @param {Object} item Price before tax
    * @return {Number} Price after tax is applied
    */
    vm.getPrice = function getPrice(item) {
      let discountPrice = item.price - item.discount;
      let finalPrice = discountPrice * 1.0575;
      return finalPrice;
    };


    vm.changeSort = function changeSort(sortField){
      vm.sortType = sortField;
      vm.sortReverse = !vm.sortReverse;
    };

    vm.addItem = function addItem(item) {
      console.log('This is to add an item in addItem controller');
      InventoryService.addNewItem(item);
      vm.addNewItem = {};
    };
  }



}());

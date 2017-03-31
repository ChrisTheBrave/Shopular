(function() {
  'use strict';

  angular.module('shop').factory('InventoryService', InventoryService);

  function InventoryService() {

    let items = JSON.parse(localStorage.getItem('items')) || [];


    /**
    * Add item to database
    * @param {Object} item The item to add with name, price, quantity, color, discount
    * @return {void}
    */
    function addNewItem(item) {

      if(typeof(item) !== 'object' || typeof(item.name) !== 'string' || item.name.length < 1) {
        return;
      }
      // console.log('This is the addNewItem service', item);
      item.price = Number(item.price);
      if(Number.isNaN(item.price) || item.price < 0.01) {
        return;
      }
      item.quantity = Number(item.quantity);
      if (Number.isNaN(item.quatity) || item.quantity < 0) {
        return;
      }
      item.discount = Number(item.discount);
      if (Number.isNaN(item.discount) || item.discount < 0) {
        return;
      }
      // if(typeof(item.color) !== 'string' || item.color === '' || item.color.length ===0 || !item.color) {
      //   item.color.value = null);
      // }

      items.push({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        color: item.color,
        discount: item.discount
      });

      localStorage.setItem('items', angular.toJson(items));

    }
    /**
    * Gets arrays with item objects
    *
    * @return {Object} Returns items
    */
    function getAllItems() {
      return items;
    }
    return {
      addNewItem: addNewItem,
      getAllItems: getAllItems
    };

  }
}());

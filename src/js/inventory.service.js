(function() {
  'use strict';

  angular.module('inventory').factory('InventoryService', InventoryService);

  function InventoryService() {

    let items = JSON.parse(localStorage.getItem('items')) || [];


    /**
     * Add item to database
     * @param {Object} item The item to add with name, price, quantity, color, discount
     * @return {void}
     */
    function addNewItem(item) {
      console.log('This is the addNewItem service', item);
      items.push({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        color: item.color,
        discount: item.discount
      });

      localStorage.setItem('items', angular.toJson(items));

    }

      function getAllItems() {
        return items;
      }
      return {
        addNewItem: addNewItem,
        getAllItems: getAllItems
      };

  }

}());

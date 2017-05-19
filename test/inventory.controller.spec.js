(function() {
  'use strict';

  let expect = chai.expect;

  describe('inventory controller', function() {
    let InventoryController;
    let mockInventoryService = {};

    beforeEach(module('shop'));

    beforeEach(module(function($provide) {
      $provide.value('InventoryService', mockInventoryService);
    }));

    beforeEach(inject(function($controller) {
      mockInventoryService.getAllItems = function getAllItems() {
        return [
          {name: 'laptop', price: 1000, discount: 300, color: 'grey', quantity: 10}
        ];
      };
      mockInventoryService.addItem = function addItem(argOne) {
        mockInventoryService.addItem.numTimesCalled++;
        return;
      };
      mockInventoryService.addNewItem = function addItem(argOne) {
        mockInventoryService.addItem.numTimesCalled++;
        return;
      };
      mockInventoryService.addItem.numTimesCalled = 0;


      InventoryController = $controller('InventoryController');
    }));

    it('should call addItem when adding', function() {
      expect(mockInventoryService.addItem.numTimesCalled).to.equal(0);
      InventoryController.addItem({});
      expect(mockInventoryService.addItem.numTimesCalled).to.equal(1);
    });
    it('should get the price of an item', function functionName() {
      let item = {
        price: 5,
        discount: 2
      };
      let expectedValue = 3.1725;
      expect(InventoryController.getPrice(item)).to.be.closeTo(expectedValue, 0.001);
    });
  });
}());

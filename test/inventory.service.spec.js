(function() {
  'use strict';

  let expect = chai.expect;

  describe('inventory service', function() {
    let InventoryService;

    beforeEach(module('shop'));

    beforeEach(inject(function(_InventoryService_) {
      InventoryService = _InventoryService_;

    }));

    afterEach(function () {
      localStorage.removeItem('items');
    });

    it('should add 1 + 1', function() {
      let result = (1+1);
      expect(result).to.equal(2);
    });

    it('it should give the user an array of items', function() {
      let result = InventoryService.getAllItems();
      expect(result).to.be.an('array');
    });

    it('should be able to add an item with the correct info', function () {
      expect(InventoryService.getAllItems().length).to.equal(0);
      let now = Date.now();
      InventoryService.addNewItem({
        name: 'baby' + now,
        price: 4,
        quantity: 3,
        color: 'red',
        discount: 2
      });
      let items = InventoryService.getAllItems();
      expect(items[0].name).to.equal('baby' + now);
      expect(items[0].price).to.equal(4);
      expect(items[0].quantity).to.equal(3);
      expect(items[0].color).to.equal('red');
      expect(items[0].discount).to.equal(2);
    });

    it('should not add an item if the price is below one cents', function() {
      expect(InventoryService.getAllItems().length).to.equal(0);
      let now = Date.now();
      InventoryService.addNewItem({
        name: 'baby' + now,
        price: 0,
        quantity: 3,
        color: 'red',
        discount: 2
      });
      let items = InventoryService.getAllItems();
      expect(items.length).to.equal(0);
    });
  });

}());

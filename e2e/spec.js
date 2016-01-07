describe('SKY TEST App', function() {

    beforeEach(function() {
        browser.get('http://localhost:3000');
    });
    it('should have a title "SKY TEST"', function() {
        expect(browser.getTitle()).toEqual('SKY TEST');
    });
    it('should list 3 customers', function() {
        var customers = element.all(by.repeater('customer in vm.customers'));
        expect(customers.count()).toEqual(3);
    });
    it('should load product selection page when a customer is selected',function () {
        loadProductSelectionPage();
        var title = element(by.id('title')).getText();
        expect(title).toBe('Product selection');
    });
    it('should load 2 categories',function () {
        loadProductSelectionPage();
        var categories = element.all(by.repeater('item in vm.categories'));
        expect(categories.count()).toEqual(2);
    });
    it('should basket be updated when customer select 2 products',function () {
        loadProductSelectionPage();
        addTwoProductsToBasket();
        var basket = element.all(by.repeater('item in vm.basket'));
        expect(basket.count()).toEqual(2);
    });
    it('should customer be taken to confirmation page when customer chooses to checkout',function () {
        loadProductSelectionPage();
        addTwoProductsToBasket();
        checkoutOrder();
        var confirmationTitle = element(by.id('title')).getText();
        expect(confirmationTitle).toBe('Confirmation order');
    });

    function loadProductSelectionPage() {
        var customer = element(by.repeater('customer in vm.customers').row(1));
        customer.click();
    }
    function addTwoProductsToBasket() {
        var product = element(by.repeater('product in item.products').row(0));
        product.click();
        product = element(by.repeater('product in item.products').row(1));
        product.click();
    }
    function checkoutOrder() {
        var checkout = element(by.id('btnCheckout'));
        checkout.click();
    }
});

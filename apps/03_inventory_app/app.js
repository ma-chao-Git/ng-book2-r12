/// <reference path="../node_modules/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require("angular2/angular2");
var Product = (function () {
    function Product(sku, name, image_url, department, price) {
        this.sku = sku;
        this.name = name;
        this.image_url = image_url;
        this.department = department;
        this.price = price;
    }
    return Product;
})();
var ProductImage = (function () {
    function ProductImage() {
    }
    ProductImage = __decorate([
        angular2_1.Component({
            selector: 'product-image',
            inputs: ['product']
        }),
        angular2_1.View({
            template: "\n        <img class=\"product-image\" [src]=\"product.image_url\">\n    "
        })
    ], ProductImage);
    return ProductImage;
})();
var ProductDepartment = (function () {
    function ProductDepartment() {
    }
    ProductDepartment = __decorate([
        angular2_1.Component({
            selector: 'product-department',
            inputs: ['product']
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor, angular2_1.NgIf],
            template: "\n        <div class=\"product-department\">\n            <span *ng-for=\"#name of product.department; #i=index\">\n                <a href=\"#\">{{ name }}</a>\n                <span>{{ i < product.department.length -1 ? '>' : '' }}</span>\n            </span>\n        </div>\n    "
        })
    ], ProductDepartment);
    return ProductDepartment;
})();
var PriceDisplay = (function () {
    function PriceDisplay() {
    }
    PriceDisplay = __decorate([
        angular2_1.Component({
            selector: 'price-display',
            inputs: ['price']
        }),
        angular2_1.View({
            template: "<div class=\"price-display\">${{ price }}</div>"
        })
    ], PriceDisplay);
    return PriceDisplay;
})();
var ProductRow = (function () {
    function ProductRow() {
        this.click = new angular2_1.EventEmitter();
    }
    ProductRow.prototype.clicked = function () {
        this.click.next(this.product);
    };
    ProductRow = __decorate([
        angular2_1.Component({
            selector: 'product-row',
            inputs: ['product'],
            outputs: ['click']
        }),
        angular2_1.View({
            directives: [ProductImage, ProductDepartment, PriceDisplay],
            template: "\n        <div class=\"product-row cf\" (click)=\"clicked()\">\n            <product-image [product]=\"product\"></product-image>\n            <div class=\"product-info\">\n                <div class=\"product-sku\">SKU #{{ product.sku }}</div>\n                <div class=\"product-name\">{{ product.name }}</div>\n                <product-department [product]=\"product\"></product-department>\n            </div>\n            <price-display [price]=\"product.price\"></price-display>\n        </div>\n    "
        })
    ], ProductRow);
    return ProductRow;
})();
var ProductList = (function () {
    function ProductList() {
        this.click = new angular2_1.EventEmitter();
    }
    ProductList.prototype.click = function (product) {
        this.click.next(product);
    };
    ProductList = __decorate([
        angular2_1.Component({
            selector: 'product-list',
            inputs: ['productList: products', 'name'],
            outputs: ['click']
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor, ProductRow],
            template: "\n        <div class=\"product-list\">\n            <product-row *ng-for=\"#product of productList\" [product]=\"product\" (click)=\"clicked(product)\">\n            </product-row>\n        </div>\n    "
        })
    ], ProductList);
    return ProductList;
})();
var InventoryApp = (function () {
    function InventoryApp() {
        this.products = [];
        this.products.push(new Product('104544-2', 'Nykee Running Shoes', 'http://media.kohls.com.edgesuite.net/is/image/kohls/1811809?wid=882&hei=882&op_sharpen=1', ['Men', 'Shoes', 'Running Shoes'], 109.99));
        this.products.push(new Product('187611-0', 'South Face Jacket', 'https://climbinggearreviewsuk.files.wordpress.com/2013/05/the-north-face-anti-matter-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99));
        this.products.push(new Product('443102-9', 'Addidas Active Hat', 'http://i.ebayimg.com/00/s/NDI5WDUwMA==/z/bUYAAOxycmBSsRxU/$_35.JPG?set_id=2', ['Men', 'Accessories', 'Hats'], 29.99));
    }
    InventoryApp.prototype.productClicked = function (product) {
        alert('Product clicked: ' + product.name);
    };
    InventoryApp = __decorate([
        angular2_1.Component({
            selector: 'inventory-app'
        }),
        angular2_1.View({
            directives: [ProductList],
            template: "\n        <div class=\"inventory-app\">\n            <product-list [products]=\"products\" (click)=\"productClicked($event)\">\n            </product-list>\n        </div>\n    "
        })
    ], InventoryApp);
    return InventoryApp;
})();
angular2_1.bootstrap(InventoryApp);
//# sourceMappingURL=app.js.map
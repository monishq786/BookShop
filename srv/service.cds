using my.bookshop as my from '../db/datamodel';

service CatalogService {
    // entity Books as projection on my.Books;
    // entity Authors as projection on my.Authors;
    // entity Orders as projection on my.Orders;
    // entity OrderItems as projection on my.OrderItems;
    entity Categories as projection on my.Categories;
    entity Cources as projection on my.Cources;
}
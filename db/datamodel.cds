using {managed,Language} from '@sap/cds/common';
namespace my.bookshop;

type String50 : String(50);

entity Categories {
  key id : UUID;
  name : String50;
  description:String(100);
  Cources : Association to many Cources on Cources.category = $self;
}

entity Cources : managed {
  category : Association to Categories;
  key course_id: UUID;
      course_name: String50;
      price : String(10);
      language : Language
}
// entity Books : cuid {
  
//       title  : String;
//       author : Association to Authors;
//       stock  : Integer;
// }

// entity Authors {
//   key ID    : Integer;
//       name  : String;
//       books : Association to many Books
//                 on books.author = $self;
// }

// entity Book_Owner : cuid {
//   ownerName : String;
// }

// entity Book_Subject : managed {
//   subjectType : String;
// }

// aspect Address : {
//   StreetNo : String;
//   City     : String;
//   Town     : String;

// }

// entity Customer : Address {
//   name : String;
// }

// entity Suplier : Address {
//   companyName : String;
// }

// entity Orders : cuid {
//   customer : String;
//   items : Composition of many OrderItems on items.parent = $self;
// }

// entity OrderItems : cuid {
//    parent : Association to Orders;
//    product : String 
// }

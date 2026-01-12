namespace my.bookshop;

entity Books {
  key ID : Integer;
  title  : String;
  author : Association to Authors;
  stock  : Integer;
}

entity Authors {
  key ID : Integer;
  name   : String;
  books  : Association to many Books on books.author = $self;
}
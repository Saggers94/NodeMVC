// const products = [];
const fs = require("fs");
const path = require("path");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  // "readFile" is an async function because of which we have to use the callback "cb" function to get our products
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      // "fileContent" would be retrieved as a text but to return it as an array you have to parse it with "JSON.parse(fileContent)"
      cb(JSON.parse(fileContent));
      //   products.push(this);
    }
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  // Method in the class
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  // fs.readFile(p, (err, fileContent) => {
  //   let products = [];
  //   if (!err) {
  //     products = JSON.parse(fileContent);
  //   }
  // TO make sure below "this" refers to a class we have to use an arrow function
  //   products.push(this);
  //   fs.writeFile(p, JSON.stringify(products), (err) => {
  //     console.log(err);
  //   });
  //   //   console.log(data);
  // });
  //   }

  // "static" keyword will make sure that i can call this method directly on the class and
  // not on the instantiated object
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};

class employee {
  constructor(id, fullname, basesalary, productquantity) {
    this.id = id;
    this.fullname = fullname;
    this.productquantity = 50;
    this.basesalary = basesalary;
    this.productquantity = productquantity;
  }
  get getid() {
    return this.id;
  }
  set setid(id) {
    this.id = id;
  }
  get getfullname() {
    return this.fullname;
  }
  set setfullname(fullname) {
    this.fullname = fullname;
  }
  get getproductquanlity() {
    return this.productquanlity;
  }
  set setproductquanlity(productquanlity) {
    this.productquanlity = productquanlity;
  }
  get getbasesalary() {
    return this.basesalary;
  }
  set setbasesalary(basesalary) {
    this.basesalary = basesalary;
  }
}
export default employee;

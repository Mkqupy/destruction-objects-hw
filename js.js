// 1
const user = {
    name: "Anna",
    hobby: "paiting",
    premium: true,
  };
  
  user.mood = "happy";
  user.hobby = "skydiving";
  user.premium = false;
  
  for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
  }

  
  // 2
  const countProps = (user) => {
    return Object.keys(user).length;
  };
  
  console.log(countProps(user));

  
  // 3
  const employees = {
    Kate: 12,
    Lili: 9,
    Maks: 10,
    Stiv: 11,
  };
  
  const findBestEmployee = (arrayObject) => {
    let count = 0;
    let name = "";
  
    for (const key in arrayObject) {
      if (arrayObject[key] > count) {
        name = key;
        count = arrayObject[key];
      }
    }
  
    return name;
  };
  
  console.log(findBestEmployee(employees));
  
  // 6
  const products = [
    { name: "vershkoveMaslo", price: 90, quantity: 2 },
    { name: "hlib", price: 20, quantity: 1 },
    { name: "orange", price: 60, quantity: 3 },
  ];
  const calculateTotalPrice = (allProdcuts, productName) => {
    let totalPrice = 0;
  
    for (const product of allProdcuts) {
      if (productName == product.name) {
        totalPrice += product.price * product.quantity;
      }
    }
    return totalPrice;
  };
  console.log(calculateTotalPrice(products, "hlib"));
  
  // 4
  const employees2 = {
    Anna: 12000,
    Sasha: 9000,
    Artur: 10000,
    Dima: 11000,
  };
  
  const countTotalSalary = (employees) => {
    totalSalary = 0;
    for (const Salary in employees) {
      totalSalary += employees[Salary];
    }
    return totalSalary;
  };
  
  console.log(countTotalSalary(employees2));
  
  // 5
  const getAllPropValues = (arr, prop) => {
    let qq = [];
    for (const iterator of arr) {
      qq.push(iterator[prop]);
    }
    return qq;
  };
  
  console.log(getAllPropValues(products, "name"));
//   



const {name, hobby, premium, mood} = user;

console.log(name);
console.log(hobby);
console.log(premium);
console.log(mood);


const {Kate, Lili, Maks, Stiv} = employees;

console.log(Kate);
console.log(Lili);
console.log(Maks);
console.log(Stiv);



const {Anna, Sasha, Artur, Dima} = employees2;

console.log(Anna);
console.log(Sasha);
console.log(Artur);
console.log(Dima);


// 7
const account = {
  balance: 0,
  transactions: [],

  };
  
const deposit = (sum) => {
    if (sum > 0) {
      account.balance += sum;
      console.log(`Ви внесли ${sum} грн. Ваш баланс: ${account.balance} грн.`);
    } else {
      console.log('Невірна сума для внесення.');
    }
  };

const withdraw = (sum) => {
    if (sum > 0 && sum <= account.balance) {
      account.balance -= sum;
      console.log(`Ви зняли ${sum} грн. Ваш баланс: ${account.balance} грн.`);
    } else {
      console.log('Невірна сума для зняття або недостатньо коштів на рахунку.');
    }
  }

deposit(1000);
withdraw(300);
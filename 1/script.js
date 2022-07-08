// 1

const response = {
  data: [
    {
      username: "samuel",
      is_active: true,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
    {
      username: "john",
      is_active: false,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
    {
      username: "peter",
      is_active: false,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
  ],
  meta: {
    paging: {
      current: 1,
      next: 2,
      prev: null,
      total: 14,
      per_page: 3,
    },
  },
};

const {
  data: [{ is_active: isActive }],
  meta: {
    paging: { total }
  }
} = response;

// console.log(total);
// console.log(response.meta.paging.total);

// 2

const user = {
  name: "gabriel",
  surname: "brown",
  age: 17,
  height: 178,
};

const { name, surname, ...parameters } = user;

console.log( parameters );

// 3

const max = (a, b) => {
  return a > b ? a : b;
};
const advancedMax = (...numbers) => {
  let max = 0;

  numbers.forEach((num) => {
    if (num > max) {
      max = max;
    }
  });
 
  return max;
};

console.log(advancedMax(8, 10, 22));

// 4

// const createMessage = (author, text, reciever, time) => {
//   return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
// };
// const message = createMessage("Peter", "Hello", "Sam", new Date());

const createMessage = ({
  author = "Guest",
  text,
  reciever,
  time = new Date()
}) => {
  return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
};

const message = createMessage({
  reciever: "John",
  text: "Hi!",
});

console.log(`message`, message);
// 5
let regexp = /\w[\d]\w/gi

let str = "x1y 722a 333 a123v1n a55555a qwe1 1zxc";

let match = str.match(regexp);

console.log(match)
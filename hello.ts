interface Person {
  name: string
}

function sayHello(p: Person) {
  return `Hello, ${p.name}!`;
}

const newPerson: Person = { name: 'Thiago' }

console.log(sayHello(newPerson));
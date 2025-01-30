interface User {
  name: String,
  age: number
}

function ageCal(user1 :User, user2 :User) {
  return user1.age+user2.age;
}

const age = ageCal({name: "Harsh", age: 21}, {name: "Jasmine", age: 19});
// console.log(age);


// PICK --> Let's you pick the properties from the another interface or types to the other interface or type.

interface Admin{
  id: string,
  name: string,
  age: number,
  email: string,
  password: string,
}

type UpdatedProps = Pick<Admin, 'name' | 'age' | 'email'>

type UpdatedPropsOptional = Partial<UpdatedProps>

function updateUser(UpdatedProps:UpdatedPropsOptional) {
  
}

// ReadOnly --> This will creates the object or the data to be ReadOnly mode means it's content can't be change.

type Person = {
  /* readonly */name: string;
  age: number;
}

const user : Readonly<Person> = {
  name: "John",
  age: 55
}

// This line will show error.

// user.age = 25; 

//===========================================================================

//Record

type Man = Record<string, number>

const users: Man = {
  "har@sh" : 21,
  "jaz@dhami" : 37

}

//===========================================================================

// Map
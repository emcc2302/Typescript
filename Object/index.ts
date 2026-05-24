type User = {
  id: number;
  name: string;
  email: string;
};

async function getUser() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  const data: User = await response.json();

  console.log(data.name);
  console.log(data.email);
}

getUser();
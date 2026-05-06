async function fetchUsers() {
 
  try {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }


    const data = await response.json();
    console.log('User List:', data);
    
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}
fetchUsers();
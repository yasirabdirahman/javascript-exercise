
async function fetchuser() {
    console.log("start fetching data")
    const fetchuser = await fetch('./data.json')
    const data = await fetchuser.json()
    console.log("Fetched Data:", data);
    console.log("Data fetching complete. This message runs after data is fetched.");
    
}
fetchuser()
console.log("This message runs immediately and is not blocked.")

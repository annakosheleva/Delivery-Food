const renderItems = (data) => {
    console.log(data);
}

fetch('https://delivery-food-61298-default-rtdb.firebaseio.com/db/partners.json')
    .then((response) => response.json())
    .then((data) => {
        renderItems(data);
    })
    .catch((error) => {
        console.log(error);
    })
document.getElementById("btn").addEventListener("click", generateCat); //se le asigna el evento al boton

async function generateCat() {
    const url = `https://api.thecatapi.com/v1/images/search?api_key=live_h9Hjk3C1h82x5GW47PgY5VHDHxWQKXXWIX5Gc8dkx65Jxy9BdKZdo1kMHNqEMGRx`; 
    const container = document.getElementById("container");

    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Ocurrió un error');
      }
      return response.json();
    })
    .then(data => {
      assignedCat(data);
    })
    .catch(error => {
      console.error('Ocurrió un error:', error);
      container.innerHTML += '<p>The kitten ran away!</p>';
    });
}

function assignedCat(cat) {
    const container = document.getElementById("container");
    container.innerHTML = `
    <div class="cat">
        <h3>Your assigned cat is...</h3>
        <img src="${cat[0].url}" alt="Your assigned cat" id="assignedCat">
    </div>
    `;
}

const url = 'https://jsonplaceholder.typicode.com/posts'


async function fetchData() {
    try {
        const response = await fetch(url)
        
        if (response.status !== 200){
            console.log('Server Error')
            throw new Error('Server Error: Unable to fetch posts');
        } else {
            const data = await response.json()
            console.log('Success',data)
            displayData(data);
        }
    } catch(error) {
        console.log(error)
        displayError('An error ocurred while fetching data', error);
    }
}

function displayData(data){
    const dataContainer = document.getElementById('data-container');

    data.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('post');
      const user = document.createElement('h3');
      user.classList.add('user');
      user.textContent = (`User: ${item.userId}`);
      div.appendChild(user);
      const title = document.createElement('h4');
      title.classList.add('title');
      title.textContent = item.title;
      div.appendChild(title);
      const body = document.createElement('p');
      body.classList.add('body');
      body.textContent = item.body;
      div.appendChild(body);
      dataContainer.appendChild(div);
    });

}

function displayError(error){
    const errorContainer = document.getElementById('error-container');
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error');
    const errorText = document.createElement('p');
    errorText.textContent = error;
    errorDiv.appendChild(errorText);
    errorContainer.appendChild(errorDiv);
    
}



fetchData();
// Function to fetch a joke from the Joke API

async function fetchJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        document.getElementById('joke').innerHTML = `<strong>${data.setup}</strong><br>${data.punchline}`;
    } catch (error) {
        console.error('Error fetching joke:', error);
        document.getElementById('joke').innerText = 'Failed to load joke.';
    }
}

// Event listener for new joke button
document.getElementById('new-joke-button').addEventListener('click', fetchJoke);

fetchJoke();

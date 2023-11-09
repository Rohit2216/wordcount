const form = document.getElementById('wordCountForm');
const tableBody = document.querySelector('#wordCountTable tbody');
const updateModal = document.getElementById('updateModal');
const updatedUrlInput = document.getElementById('updatedUrlInput');
const updateButton = document.getElementById('updateButton');

async function fetchData() {
try {
const response = await fetch('https://word-1miz.onrender.com/api/wordcount');
const data = await response.json();
tableBody.innerHTML = '';
data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${item.url}</td>
        <td>${item.wordCount}</td>
        <td>
            <button type="button" class="edit-button" onclick="editWordCount('${item._id}', '${item.url}')">Edit</button>
            <button type="button" class="delete-button" onclick="deleteWordCount('${item._id}')">Delete</button>
        </td>
    `;
    tableBody.appendChild(row);
});
} catch (error) {
console.error(error);
}
}


form.addEventListener('submit', async function (event) {
    event.preventDefault();
    const url = document.getElementById('urlInput').value;
    try {
        await fetch('https://word-1miz.onrender.com/api/wordcount', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: url })
        });
        fetchData();
        document.getElementById('urlInput').value = '';
    } catch (error) {
        console.error(error);
    }
});

async function editWordCount(id, url) {
    updatedUrlInput.value = url;
    updateModal.style.display = 'block';

    updateButton.onclick = async function () {
        const updatedUrl = updatedUrlInput.value;
        if (updatedUrl.trim() === '') {
            alert('URL cannot be empty.');
            return;
        }

        try {
            await fetch(`https://word-1miz.onrender.com/api/wordcount/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url: updatedUrl })
            });
            fetchData();
            updateModal.style.display = 'none';
        } catch (error) {
            console.error(error);
        }
    };
}

async function deleteWordCount(id) {
    const confirmDelete = confirm('Are you sure you want to delete this entry?');
    if (confirmDelete) {
        try {
            await fetch(`https://word-1miz.onrender.com/api/wordcount/${id}`, {
                method: 'DELETE'
            });
            fetchData();
        } catch (error) {
            console.error(error);
        }
    }
}

// Close the update modal if the close button or outside the modal is clicked
window.onclick = function (event) {
    if (event.target === updateModal) {
        updateModal.style.display = 'none';
    }
};

fetchData();
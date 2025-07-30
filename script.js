    const form = document.getElementById('uploadForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
        // Backend returned error JSON with message
        throw new Error(data.detail || 'Unknown error');
        }

        resultDiv.innerHTML = `<p>File uploaded: <a href="${data.url}" target="_blank">${data.filename}</a></p>`;
    } catch (error) {
        resultDiv.textContent = 'Upload failed: ' + error.message;
    }
    });

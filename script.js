function chunkStringAndDisplay() {
    const stringInput = document.getElementById('stringInput').value;
    const chunkLength = parseInt(document.getElementById('chunkLengthInput').value);

    if (!stringInput) {
        alert('Please enter a valid string.');
        return;
    }

    if (isNaN(chunkLength) || chunkLength <= 0) {
        alert('Please enter a positive integer for the chunk length.');
        return;
    }

    const result = chunkString(stringInput, chunkLength);
    document.getElementById('chunksResult').innerText = JSON.stringify(result);
}

function chunkString(str, length) {
    if (!str) {
        return [];
    }

    const chunks = [];
    for (let i = 0; i < str.length; i += length) {
        chunks.push(str.slice(i, i + length));
    }

    return chunks;
}

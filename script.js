function stringChop(str, size) {
    if (!str) return [];
    
    const chunks = [];
    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.slice(i, i + size));
    }
    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);

if (isNaN(size) || size <= 0) {
    alert("Please enter a valid chunk size.");
} else {
    alert(JSON.stringify(stringChop(str, size)));
}

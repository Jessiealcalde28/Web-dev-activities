function convert() {
    const phpAmount = parseFloat(document.getElementById('php').value);
    const usdAmount = parseFloat(document.getElementById('usd').value);
    const cnyAmount = parseFloat(document.getElementById('cny').value);
    const euroAmount = parseFloat(document.getElementById('euro').value);
    const yenAmount = parseFloat(document.getElementById('yen').value);

    
    alert(`Conversion results:
    PHP: ${phpAmount}
    US Dollar: ${usdAmount}
    Chinese Yuan: ${cnyAmount}
    Euro: ${euroAmount}
    Japanese Yen: ${yenAmount}`);
}

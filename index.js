function addVectors() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);
  
    const resultX = x1 + x2;
    const resultY = y1 + y2;
  
    document.getElementById('result').innerHTML = `Vector Addition Result: (${resultX}, ${resultY})`;
  }
  
  function subtractVectors() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);
  
    const resultX = x1 - x2;
    const resultY = y1 - y2;
  
    document.getElementById('result').innerHTML = `Vector Subtraction Result: (${resultX}, ${resultY})`;
  }
  
  function dotProduct() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);
  
    const result = x1 * x2 + y1 * y2;
  
    document.getElementById('result').innerHTML = `Dot Product Result: ${result}`;
  }

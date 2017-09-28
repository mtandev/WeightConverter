document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', function(e){
  document.getElementById('output').style.visibility = 'visible';
  let lbs = e.target.value;
  document.getElementById('gramsOutput').innerHTML = Math.round(lbs/0.0022046);
  document.getElementById('kgOutput').innerHTML = Math.round(lbs/2.2046);
  document.getElementById('ozOutput').innerHTML = Math.round(lbs*16);
});
document.getElementById('output').style.visibility = 'hidden';
document.getElementById('fatInput').addEventListener('input', function(e){
  document.getElementById('output').style.visibility = 'visible';
  let fat = e.target.value;
  document.getElementById('gramsOutput').innerHTML = Math.round(lbs/0.0022046);
  document.getElementById('kgOutput').innerHTML = Math.round(lbs/2.2046);
  document.getElementById('ozOutput').innerHTML = Math.round(lbs*16);
});

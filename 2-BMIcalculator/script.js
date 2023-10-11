
const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value)
//this use case gives you empty value


form.addEventListener('submit', function(e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');


  if( height === '' || height<0 || isNaN(height) )
  {
    results.innerHTML= `please give the apropriate height ${height}`;
  }
  else if( weight === '' || weight<0 || isNaN(weight) )
  {
    results.innerHTML= `please give the apropriate height ${weight}`;
  }

  else 
  {
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    //show the result
    results.innerHTML = `<span>${bmi}</span` };
    

});
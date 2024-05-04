# Projects related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1
```JavaScript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    body.style.backgroundColor = e.target.id;  // this line can be used instead of the following if conditions
    /*if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }*/
  });
});
```

## Project 2
```JavaScript

const form = document.querySelector('form')

//if we do this here then we will get empty variables
//const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit' , function(e){
  e.preventDefault() ;

  const height = parseInt(document.querySelector('#height').value) //the value which we will get in through this will be in string hence we will have to convert it to int hence use parseInt
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height) /*instead of using != NaN use isNaN function instead*/){
    results.innerHTML = `Please give a valid height ${height}` ;
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}` ;
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>` ;
  }
})
```
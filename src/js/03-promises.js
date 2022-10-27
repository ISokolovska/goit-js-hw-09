import Notiflix from 'notiflix';
const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const formDelay = event.target.delay.value;
  const formStep = event.target.step.value;
  const formAmount = event.target.amount.value;
  let delay = +formDelay;

  for (let i = 1; i <= Number(formAmount); i++) {
    createPromise(i, delay)
      .then(data => {
        // console.log(data);
        Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${data}ms`);
      })
      .catch(data => {
        Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${data}ms`);
      });
    delay += +formStep;
  }
}
const response = fetch('google.com');
response.data;
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        // console.log(delay);
        resolve(delay);
      } else {
        // Reject
        // console.log(delay);
        reject(delay);
      }
    }, delay);
  });

  return promise;
}

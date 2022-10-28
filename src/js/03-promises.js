import Notiflix from 'notiflix';
const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const formDelay = event.target.delay.value;
  const formStep = event.target.step.value;
  const formAmount = event.target.amount.value;
  let delay = Number(formDelay);

  for (let i = 1; i <= Number(formAmount); i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        // console.log(data);
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += Number(formStep);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        // console.log(delay);
        resolve({ position, delay });
      } else {
        // Reject
        // console.log(delay);
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

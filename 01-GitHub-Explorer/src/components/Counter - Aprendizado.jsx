import React from 'react';

//Isso não terá efeito pois o React não fica monitorando o valor das variáveis para renderizar a página novamente.

export function Counter() {
  let counter = 0;

  function increment() {
    counter += 1;
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>Increment</button>
    </div>
  );
}
import React, { useState } from 'react';

/* Imutabilidade - Não podemos alterar o conteúdo da variavel, e sim dar um novo valor para essa variavel

const usuarios = ['caioceretta', 'thiagoma', 'brunog']

Em um mundo "normal", para adicionar um novo, nós utilizariamos um push e adicionariamos um item novo no array com o push

O problema disso é que estamos alterando uma informação na memória, alterando para um novo valor dentro desse vetor,
estamos realizando uma mutação no valor original da variável usuários

Em um mundo em que existe a imutabilidade, que é um conceito que existe no estado do react, nós não fazemos isso, caso
queiramos adicionar um novo valor ao final do array, iremos criar um novo array, copiando o que já temos dentro de usuários
utilizando, geralmente , o spread operator, nesse caso seria ...usuarios e adicionar no final o novo valor que queremos,
dessa maneira abaixo

const novosUusarios = [...usuarios, 'alexsoares']

ao invés de alterar um valor da memória, nós criamos um novo espaço na memoria, contendo a informação já salva na memória
e um valor novo, pois isso garante uma melhor performance dentro do react, pois fica muito mais fácil do react entender
as novas informações, pois é mais fácil ele entender novas informações dentro de uma nova variável do que comparar com a
variável que ja tinhamos armazenados na memória 

Quando usamos esse setCounter, nós não estamos incrementando ou decrementando o valor de counter, e sim criando uma nova
variável counter, digamos assim, por isso não podemos passar o valor de counter como counter++ ou counter += 1, e sim o
setCounter com o counter + 1

*/

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>Increment</button>
    </div>
  );
}
import React from 'react';
export function Home() {
  return <h1 style={{textAlign: 'center'}}> Seja Bem Vindo a Página Inicial</h1>;
}

export function About() {
  return <h1>Sobre Nós</h1>;
}

export function Contact() {
  return <h1>Entre em Contato</h1>;
}

export function NotFound() {
  return <h1 style={{color: 'red'}}>Erro 404: Página não encontrada</h1>;
}
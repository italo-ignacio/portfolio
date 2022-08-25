import React from "react";
import HeaderProject from "../../../../components/HeaderProject";
import Carousel from "../../components/Carousel";
import { H2, P } from "./styled";

const images = [
  { url: "/projects/Cryptography1.png", width: 519, height: 719 },
  { url: "/projects/Cryptography2.png", width: 519, height: 719 },
];

export default function Cryptography() {
  return (
    <div id="top">
      <HeaderProject />
      <Carousel
        images={images}
        elements={
          <>
            <h1>
              <a>Criptografia em python</a>
            </h1>
            <br />
            <br />
            <h3></h3>
            <h2>
              Programa para criptografar e descriptografar qualquer mensagem ou
              palavra
            </h2>
            <br />
            <br />
            <br />

            <h2>
              <br />
              <br />
              <a
                href="https://github.com/italo-ignacio/criptografia-python"
                target="blank"
              >
                GitHub do projeto
              </a>
              <br />
              <br />
            </h2>
          </>
        }
      />
      <P>
        <H2>Código do projeto</H2>
        <p>{cod}</p>
      </P>
    </div>
  );
}

const space = <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>;

const cod = (
  <>
    import os
    <br />
    import time
    <br />
    tic = 1 <br />
    a =1 <br />
    veri=1 <br />
    <br />
    while True: <br />
    {space}if tic ==1: <br />
    <br />
    {space}
    {space}if a == 1: <br />
    {space}
    {space}
    {space}co = input("Digite um numero inteiro para a base da cifra (1 a
    5000)\nDigite&gt; ") <br />
    {space}
    {space}
    {space}try: <br />
    {space}
    {space}
    {space}
    {space}if int(co)&gt; 5000 or int(co) &lt;= 0: <br />
    {space}
    {space}
    {space}
    {space}
    {space}veri = 2 <br />
    {space}
    {space}
    {space}
    {space}else: <br />
    {space}
    {space}
    {space}
    {space}
    {space}veri = 1 <br />
    {space}
    {space}
    {space}except: <br />
    {space}
    {space}
    {space}
    {space}veri = 2 <br />
    {space}
    {space}if veri == 1: <br />
    {space}
    {space}
    {space}
    {space}try: <br />
    {space}
    {space}
    {space}
    {space}
    {space}cod = int(co) *222 <br />
    {space}
    {space}
    {space}
    {space}
    {space}print("\n") <br />
    <br />
    {space}
    {space}
    {space}
    {space}
    {space}op = input('Digite 1 para criptogafar sua mensagem\nDigite 2 para
    descriptogafar sua mensagem\nDigite 3 para voltar\nDigite&gt; ') <br />
    {space}
    {space}
    {space}
    {space}
    {space}if op =="1": <br />
    {space}
    {space}
    {space}
    {space}
    {space}
    {space}tic =5 <br />
    {space}
    {space}
    {space}
    {space}
    {space}
    {space}a=1 <br />
    {space}
    {space}
    {space}
    {space}
    {space}elif op=="2": <br />
    <br />
    {space}
    {space}
    {space}
    {space}
    {space}
    {space}tic =3 <br />
    {space}
    {space}
    {space}
    {space}
    {space}
    {space}a=1 <br />
    {space}
    {space}
    {space}
    {space}
    {space}elif op =="3": <br />
    {space}
    {space}
    {space}
    {space}
    {space}
    {space}os.system('cls' if os.name == 'nt' else 'clear')
    <br />
    {space}
    {space}
    {space}
    {space}
    {space}
    {space}a=1 <br />
    {space}
    {space}
    {space}
    {space}
    {space}
    {space}tic=1 <br />
    {space}
    {space}
    {space}
    {space}
    {space}else: <br />
    {space}
    {space}
    {space}
    {space}
    {space}
    {space}a=2 <br />
    {space}
    {space}
    {space}
    {space}
    {space}
    {space}tic =1 <br />
    {space}
    {space}
    {space}
    {space}
    {space}
    {space}os.system('cls' if os.name == 'nt' else 'clear') <br />
    {space}
    {space}
    {space}
    {space}except: <br />
    {space}
    {space}
    {space}
    {space}
    {space}tic=1 <br />
    {space}
    {space}else: <br />
    {space}
    {space}
    {space}tic=1 <br />
    <br />
    {space}if tic == 2: <br />
    {space}
    {space}rep = input('Desaja retornar? (S/N)&gt;') <br />
    {space}
    {space}if rep.upper() == ('N'): <br />
    <br />
    {space}
    {space}
    {space}print("-------------------------------------------------------"){" "}
    <br />
    {space}
    {space}
    {space}print(" Foi bom enquanto durou\n") <br />
    {space}
    {space}
    {space}time.sleep(1) <br />
    {space}
    {space}
    {space}print("\n") <br />
    {space}
    {space}
    {space}print(" 3\n") <br />
    {space}
    {space}
    {space}time.sleep(1/2) <br />
    {space}
    {space}
    {space}print("\n") <br />
    {space}
    {space}
    {space}print(" 2\n") <br />
    {space}
    {space}
    {space}time.sleep(1/2) <br />
    {space}
    {space}
    {space}print("\n") <br />
    {space}
    {space}
    {space}print(" 1\n") <br />
    {space}
    {space}
    {space}time.sleep(1/2) <br />
    {space}
    {space}
    {space}print("\n") <br />
    {space}
    {space}
    {space}print(" ADEUS!!!\n") <br />
    {space}
    {space}
    {space}time.sleep(1.5) <br />
    {space}
    {space}
    {space}break <br />
    {space}
    {space}elif rep.upper() == ('S'): <br />
    {space}
    {space}
    {space}os.system('cls' if os.name == 'nt' else 'clear') <br />
    {space}
    {space}
    {space}tic = 1 <br />
    {space}
    {space}else: <br />
    {space}
    {space}
    {space}tic = 2 <br />
    <br />
    {space}if tic ==3: <br />
    {space}
    {space}print("--------------- Descriptografar a Mensagem
    ----------------\n") <br />
    {space}
    {space}menssagem = input('Mensagem a ser Descriptografada &gt; ') <br />
    {space}
    {space}try: <br />
    {space}
    {space}
    {space}if menssagem == "": <br />
    {space}
    {space}
    {space}
    {space}print("\n\n") <br />
    {space}
    {space}
    {space}
    {space}tic = 3 <br />
    {space}
    {space}
    {space}else: <br />
    {space}
    {space}
    {space}
    {space}
    print("\n") <br />
    {space}
    {space}
    {space}
    {space}
    print('Mensagem Descriptografada &gt; ') <br />
    {space}
    {space}
    {space}
    {space}
    print("\n") <br />
    {space}
    {space}
    {space}
    {space}
    for i in range(len(menssagem)):
    <br />
    {space}
    {space}
    {space}
    {space}
    {space}print(chr(ord(menssagem[i]) - cod),end='') <br />
    {space}
    {space}
    {space}
    {space}
    tic = 2 <br />
    {space}
    {space}
    {space}
    {space}
    print("\n") <br />
    {space}
    {space}except: <br />
    {space}
    {space}
    {space}
    tic=4 <br />
    <br />
    {space}if tic == 4: <br />
    {space}
    {space}
    print("\n") <br />
    {space}
    {space}print("Não foi possivel descriptografar a mensagem\n") <br />
    {space}
    {space}
    res = input('Deseja tentar novamente? (S/N)&gt; ') <br />
    {space}
    {space}
    print("\n") <br />
    {space}
    {space}if res.upper() == "S": <br />
    {space}
    {space}
    {space}
    tic=3 <br />
    {space}
    {space}elif res.upper()=="N": <br />
    {space}
    {space}
    {space}
    tic=2 <br />
    {space}
    {space}
    else: <br />
    {space}
    {space}
    {space}
    tic=4 <br />
    <br />
    {space}if tic ==5: <br />
    {space}
    {space}print("\n") <br />
    {space}
    {space}
    print("----------------- Criptografar a Mensagem -----------------\n"){" "}
    <br />
    {space}
    {space}
    mensagem = input('Mensagem a ser Criptografada &gt; ') <br />
    {space}
    {space}
    print("\n") <br />
    {space}
    {space}
    try: <br />
    {space}
    {space}
    {space}
    if mensagem=="": <br />
    {space}
    {space}
    {space}
    {space}
    tic = 5 <br />
    {space}
    {space}
    {space}else: <br />
    {space}
    {space}
    {space}
    {space}print('Mensagem Criptografada &gt; ') <br />
    {space}
    {space}
    {space}
    {space}print("\n") <br />
    {space}
    {space}
    {space}
    {space}for i in range(len(mensagem)): <br />
    {space}
    {space}
    {space}
    {space}
    {space}
    print(chr(ord(mensagem[i]) + cod), end='') <br />
    <br />
    {space}
    {space}
    {space}
    {space}tic =3 <br />
    {space}
    {space}
    {space}
    {space}
    print("\n") <br />
    {space}
    {space}
    {space}
    {space}
    print("\n") <br />
    {space}
    {space}
    except: <br />
    {space}
    {space}
    {space}
    {space}
    tic = 6 <br />
    <br />
    {space}if tic == 6: <br />
    {space}
    {space}
    print("Não foi possivel criptografar a mensagem\n") <br />
    {space}
    {space}
    res = input('precione ENTER para tentar novamente') <br />
    {space}
    {space}
    tic=5 <br />
  </>
);

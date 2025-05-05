
import React from "react";

export default function ListaAnimais() {
  const animais = [
    {
      nome: "Totó",
      especie: "Macho",
      idade: "6",
      raca: "Vira-lata",
      castrado: "Não",
      vacinaRaiva: "Não",
      vacinaVirus: "Não",
      responsavel: "Raimunda",
      telefone: "61 989001234",
    },
    {
      nome: "Bole",
      especie: "Macho",
      idade: "7",
      raca: "Vira-lata",
      castrado: "Não",
      vacinaRaiva: "Não",
      vacinaVirus: "Não",
      responsavel: "Etapa A, Lj ACESSORIZE",
      telefone: "",
    },
  ];

  return (
    <div style={{ flex: 1 }}>
      {animais.map((animal, idx) => (
        <div key={idx} style={{ border: "1px solid gray", padding: 10, marginBottom: 10 }}>
          <strong>{animal.nome}</strong><br />
          Espécie: {animal.especie}<br />
          Idade: {animal.idade}<br />
          Raça: {animal.raca}<br />
          Castrado: {animal.castrado}<br />
          Vacina Raiva: {animal.vacinaRaiva}<br />
          Vacina Vírus: {animal.vacinaVirus}<br />
          Responsável: {animal.responsavel}<br />
          Telefone: {animal.telefone}
        </div>
      ))}
    </div>
  );
}

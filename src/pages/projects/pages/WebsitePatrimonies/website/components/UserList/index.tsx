import Link from "next/link";
import React from "react";
import { PrimaryContainer } from "./styled";

export default function UserList({ name, patrimonies, id, isSelected }) {
  return (
    <Link href={`/projects/patrimonies/home/?userId=${id}`}>
      <PrimaryContainer selected={isSelected}>
        <div>{name}</div>
        <div>{patrimonies}</div>
      </PrimaryContainer>
    </Link>
  );
}

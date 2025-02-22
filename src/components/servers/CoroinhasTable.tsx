import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  createColumnHelper,
  flexRender,
  type SortingState,
} from '@tanstack/react-table';

// Tipos básicos
interface Coroinha {
  id: number;
  nome: string;
  acolito: boolean;
  sub_acolito: boolean;
  disponibilidade_dias: string[];
  disponibilidade_locais: string[];
}

interface CoroinhasTableProps {
  coroinhas: Coroinha[];
  onUpdate: () => void;
}

export function CoroinhasTable({ coroinhas, onUpdate }: CoroinhasTableProps) {
  console.log('CoroinhasTable renderizando:', coroinhas);
  
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Coroinhas</h1>
      </div>
      <div className="bg-white rounded-lg shadow">
        {/* Aqui será implementada a nova tabela */}
      </div>
    </div>
  );
}
import React from 'react';

function EnderecoList({ enderecos, onEdit, onDelete }) {
  return (
    <div>
      <h2>Lista de Endereços</h2>
      <ul>
        {enderecos.map((endereco) => (
          <li key={endereco.id}>
            <p><strong>Logradouro:</strong> {endereco.logradouro}</p>
            <p><strong>Número:</strong> {endereco.numero}</p>
            <p><strong>Complemento:</strong> {endereco.complemento}</p>
            <p><strong>Bairro:</strong> {endereco.bairro}</p>
            <p><strong>Cidade:</strong> {endereco.cidade}</p>
            <p><strong>UF:</strong> {endereco.uf}</p>
            <p><strong>CEP:</strong> {endereco.cep}</p>

            {endereco.cliente && (
              <>
                <h4>Dados do Cliente</h4>
                <p><strong>Nome:</strong> {endereco.cliente.nome}</p>
                <p><strong>Telefone:</strong> {endereco.cliente.telefone}</p>
              </>
            )}

            <button onClick={() => onEdit(endereco.id)}>Editar</button>
            <button onClick={() => onDelete(endereco.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EnderecoList;

const MessageResponse = [
  {
    status: 404,
    message: "Contate o administrador do sistema",
  },
  {
    status: 200,
    message: "Solicitação realizada com sucesso",
  },
  {
    status: 400,
    message: "Tente realizar a operação novamente",
  },
  {
    status: 500,
    message: "Não foi possível realizar a consulta, verifique os dados",
  },
];

export const functionMessage = (status: number) => {
  return {
    status,
    message: MessageResponse.filter((item) => item.status === status)[0]
      .message,
    error: status !== 200,
  };
};

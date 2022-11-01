const demandas = [
  {
    id: 1,
    name: "Desenvolvimento 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Sequi iure dolore temporibus maiores libero sed cupiditate animi eligendi placeat.",
    progress: {
      status: "Encerrado",
      total: 65,
      step: [
        {
          modify: "Modificação tal que foi feita",
          author: "Guilherme",
          finish: {
            period: "meses",
            time: 3,
          },
          date: "21 de set, 2021",
        },
        {
          modify: "Modificação tal que foi feita",
          author: "Guilherme",
          finish: {
            period: "meses",
            time: 3,
          },
          date: "21 de set, 2021",
        },
        {
          modify: "Modificação tal que foi feita",
          author: "Guilherme",
          finish: {
            period: "meses",
            time: 3,
          },
          date: "21 de set, 2021",
        },
      ],
    },
    author: ["Fulano de tal 1", "Fulano de tal 2", "Fulano de tal 3"],
    updated: "12/2021",
    priority: "Alta",
    budget: {
      value: 2500.0,
      createdAt: "25 de set, 2021",
      cityApplied: "Santa Helena",
      area: "Gestão Pública" ,
      finish: {
        period: "meses",
        time: 3,
      },
      numberInvolved: 6,
    },
    objective: {
      general: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure minima esse quaerat numquam voluptatum fugiat deserunt,officia, ratione nihil recusandae sint obcaecati eum odit,assumenda maiores voluptates quis facilis porro.Lorem ipsumdolor sit amet consectetur adipisicing elit.Iure minimaesse quaerat numquam voluptatum fugiat deserunt, officia,ratione nihil recusandae sint obcaecati eum odit, assumendamaiores voluptates quis facilis porro.Officia, rationenihil recusandae sint obcaecati eum odit, assumenda maioresvoluptates quis facilis porro.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.Officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis.",
        "Lorem ipsum dolor sit am et consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.Officia, ratione nihil recusandae sint obcaecati eum .",
      ],
      specific: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.",
      ],
    },
  },
  {
    id: 2,
    name: "Desenvolvimento 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Sequi iure dolore temporibus maiores libero sed cupiditate animi eligendi placeat.",
    progress: {
      status: "Recebendo Proposta",
      total: 65,
      step: [
        {
          modify: "Modificação tal que foi feita",
          author: "Guilherme",
          finish: {
            period: "meses",
            time: 3,
          },
          date: "21 de set, 2021",
        },
        {
          modify: "Modificação tal que foi feita",
          author: "Guilherme",
          finish: {
            period: "meses",
            time: 3,
          },
          date: "21 de set, 2021",
        },
        {
          modify: "Modificação tal que foi feita",
          author: "Guilherme",
          finish: {
            period: "meses",
            time: 3,
          },
          date: "21 de set, 2021",
        },
      ],
    },
    author: ["Fulano de tal 1", "Fulano de tal 2", "Fulano de tal 3"],
    updated: "12/2021",
    priority: "Alta",
    budget: {
      value: 2500.0,
      createdAt: "25 de set, 2021",
      cityApplied: "Santa Helena",
      area: ["Agricola"],
      finish: {
        period: "meses",
        time: 3,
      },
      numberInvolved: 6,
    },
    objective: {
      general: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure minima esse quaerat numquam voluptatum fugiat deserunt,officia, ratione nihil recusandae sint obcaecati eum odit,assumenda maiores voluptates quis facilis porro.Lorem ipsumdolor sit amet consectetur adipisicing elit.Iure minimaesse quaerat numquam voluptatum fugiat deserunt, officia,ratione nihil recusandae sint obcaecati eum odit, assumendamaiores voluptates quis facilis porro.Officia, rationenihil recusandae sint obcaecati eum odit, assumenda maioresvoluptates quis facilis porro.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.Officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.Officia, ratione nihil recusandae sint obcaecati eum .",
      ],
      specific: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.",
      ],
    },
  },
  {
    id: 3,
    name: "Desenvolvimento 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Sequi iure dolore temporibus maiores libero sed cupiditate animi eligendi placeat.",
    progress: {
      status: "Em execução",
      total: 65,
      step: [
        {
          modify: "Modificação tal que foi feita",
          author: "Guilherme",
          finish: {
            period: "meses",
            time: 3,
          },
          date: "21 de set, 2021",
        },
        {
          modify: "Modificação tal que foi feita",
          author: "Guilherme",
          finish: {
            period: "meses",
            time: 3,
          },
          date: "21 de set, 2021",
        },
        {
          modify: "Modificação tal que foi feita",
          author: "Guilherme",
          finish: {
            period: "meses",
            time: 3,
          },
          date: "21 de set, 2021",
        },
      ],
    },
    author: ["Fulano de tal 1", "Fulano de tal 2", "Fulano de tal 3"],
    updated: "12/2021",
    priority: "Média",
    budget: {
      value: 2500.0,
      createdAt: "25 de set, 2021",
      cityApplied: "Santa Helena",
      area: ["Agricola"],
      finish: {
        period: "meses",
        time: 3,
      },
      numberInvolved: 6,
    },
    objective: {
      general: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure minima esse quaerat numquam voluptatum fugiat deserunt,officia, ratione nihil recusandae sint obcaecati eum odit,assumenda maiores voluptates quis facilis porro.Lorem ipsumdolor sit amet consectetur adipisicing elit.Iure minimaesse quaerat numquam voluptatum fugiat deserunt, officia,ratione nihil recusandae sint obcaecati eum odit, assumendamaiores voluptates quis facilis porro.Officia, rationenihil recusandae sint obcaecati eum odit, assumenda maioresvoluptates quis facilis porro.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.Officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.Officia, ratione nihil recusandae sint obcaecati eum .",
      ],
      specific: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.",
      ],
    },
  },
  {
    id: 4,
    name: "Desenvolvimento 5",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Sequi iure dolore temporibus maiores libero sed cupiditate animi eligendi placeat.",
    progress: {
      status: "Recebendo Proposta",
      total: 65,
      step: [
        {
          modify: "Modificação tal que foi feita",
          author: "Guilherme",
          finish: {
            period: "meses",
            time: 3,
          },
          date: "21 de set, 2021",
        },
        {
          modify: "Modificação tal que foi feita",
          author: "Guilherme",
          finish: {
            period: "meses",
            time: 3,
          },
          date: "21 de set, 2021",
        },
        {
          modify: "Modificação tal que foi feita",
          author: "Guilherme",
          finish: {
            period: "meses",
            time: 3,
          },
          date: "21 de set, 2021",
        },
      ],
    },
    author: ["Fulano de tal 1", "Fulano de tal 2", "Fulano de tal 3"],
    updated: "12/2021",
    priority: "Baixa",
    budget: {
      value: 2500.0,
      createdAt: "25 de set, 2021",
      cityApplied: "Mundo Novo",
      area: "Sustentabilidade",
      finish: {
        period: "meses",
        time: 3,
      },
      numberInvolved: 6,
    },
    objective: {
      general: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure minima esse quaerat numquam voluptatum fugiat deserunt,officia, ratione nihil recusandae sint obcaecati eum odit,assumenda maiores voluptates quis facilis porro.Lorem ipsumdolor sit amet consectetur adipisicing elit.Iure minimaesse quaerat numquam voluptatum fugiat deserunt, officia,ratione nihil recusandae sint obcaecati eum odit, assumendamaiores voluptates quis facilis porro.Officia, rationenihil recusandae sint obcaecati eum odit, assumenda maioresvoluptates quis facilis porro.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.Officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.Officia, ratione nihil recusandae sint obcaecati eum .",
      ],
      specific: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima esse quaerat numquam voluptatum fugiat deserunt, officia, ratione nihil recusandae sint obcaecati eum odit, assumenda maiores voluptates quis facilis porro.",
      ],
    },
  },

];

export default demandas;

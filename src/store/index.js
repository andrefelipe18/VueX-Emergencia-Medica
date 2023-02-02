import { createStore } from 'vuex'

export default createStore({
  state: {
    titulo: '## Emergencias médicas ##',
    equipe: {
      enfermeiro: '',
      socorrista: '',
      medico: '',
      carro: '',
      telefone: '',
      kitDeReanimacao: '',
    },
    equipes: [],
    enfermeiros: [],
    socorristas: [],
    medicos: [],
    equipamentos: {
      carros: [],
      telefones: [],
      kitsDeReanimacao: []
  }
  },
  getters: {
    totalEnfermeiros(state) {
      return state.enfermeiros.length
    },
    socorristasPorTurno(state){ //closure 
      return (turno) => {
        if(turno == 'todos') {
          return state.socorristas
        }
        return state.socorristas.filter(socorrista => socorrista.turno == turno)
      }
    },
    totalSocorristas(state) {
      return state.socorristas.length
    },
    totalSocorristasPorTurno(state, getters) {
     return(turno) => {
        return getters.socorristasPorTurno(turno).length
     }
    }
  },
  mutations: {
    setItemEquipe: (state, dadosEnviados) => {
      let t = dadosEnviados.tipo
      let dados = dadosEnviados.dados
      
      if(t == 'enfermeiros') { state.equipe.enfermeiro = dados.nome }
      if(t == 'socorristas') { state.equipe.socorrista = dados.nome }
      if(t == 'medicos') { state.equipe.medico = dados.nome }
      if(t == 'carros') { state.equipe.carro = dados.placa }
      if(t == 'telefones') { state.equipe.telefone = dados.telefone }
      if(t == 'kits-de-reanimacao') { state.equipe.kitDeReanimacao = dados.kit }
    },
    setEnfermeiros: (state, dados) => {
      state.enfermeiros = dados
    },
    setSocorristas: (state, dados) => {
      state.socorristas = dados
    },
    setMedicos: (state, dados) => {
      state.medicos = dados
    },
    setEquipamentos: (state, dados) => { 
      state.equipamentos.carros = dados.carros
      state.equipamentos.telefones = dados.telefones
      state.equipamentos.kitsDeReanimacao = dados.kitsDeReanimacao
    },
    setEquipe: (state, dadosEnviados) => {
      state.equipes.push(dadosEnviados)
      state.equipe = {}
    }
  },
  actions: {
    fetchEquipamentos: (context) => { 
      //Requisição para equipamentos
      let urlEquipamentos = 'http://localhost:3000/equipamentos'
      fetch(urlEquipamentos)
      .then(response => response.json())
      .then(data => {
        //Chamando a mutation
        context.commit('setEquipamentos', data)
      })
      .catch(error => console.log(error))
    },
    fetchProfissionais: (context) => {
      //Requisição para enfermeiros
      let urlEnfermeiros = 'http://localhost:3000/enfermeiros'
      fetch(urlEnfermeiros)
      .then(response => response.json())
      .then(data => {
        //Chamando a mutation
        context.commit('setEnfermeiros', data)
      })
      .catch(error => console.log(error))

      //Requisição para socorristas
      let urlSocorristas = 'http://localhost:3000/socorristas'
      fetch(urlSocorristas)
      .then(response => response.json())
      .then(data => {
        //Chamando a mutation
        context.commit('setSocorristas', data)
      })
      .catch(error => console.log(error))

      //Requisição para médicos
      let urlMedicos = 'http://localhost:3000/medicos'
      fetch(urlMedicos)
      .then(response => response.json())
      .then(data => {
        //Chamando a mutation
        context.commit('setMedicos', data)
      })
      .catch(error => console.log(error))
    },
  },
  modules: {
  }
})

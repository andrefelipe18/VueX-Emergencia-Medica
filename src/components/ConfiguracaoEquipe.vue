<template>
  <div>
    <div class="row">
      <div class="col">
        <h5 :class="corTitulo"><i class="bi-boxes me-2  "></i>{{ tituloCustomizadoLocal }}</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <p>Enfermeiro: <span class="spanI"> {{ enfermeiro }}</span></p>
        <p>Socorrista: <span class="spanI"> {{ socorrista }}</span></p>
        <p>Médico: <span class="spanI">{{ medico }}</span></p>
        <p>Carro: <span class="spanI">{{ carro }}</span></p>
        <p>Telefone: <span class="spanI">{{ telefone }}</span></p>
        <p>Kit de reanimação: <span class="spanI">{{ kitDeReanimacao }}</span></p>
      </div>
      <div class="col-4 text-center">
        <div class="row">
          <div class="col">
            <img class="img-fluid" :src="require('@/assets/ambulancias/indefinida.png')">
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <button type="button" class="btn btn-primary">Montar equipe</button>
          </div>
        </div>              
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'ConfiguracaoEquipe',
    data: () => ({
      titulo: 'Configuração da equipe'
    }),
   computed: 
    {
      ...mapState({
      enfermeiro: state => state.equipe.enfermeiro,
      socorrista: state => state.equipe.socorrista,
      medico: state => state.equipe.medico,
      carro: state => state.equipe.carro,
      telefone: state => state.equipe.telefone,
      kitDeReanimacao: state => state.equipe.kitDeReanimacao,
      tituloCustomizadoLocal(state){
        return `${this.titulo} -- ${state.equipe.carro}`
      }
    }),
    corTitulo(){
      return this.tituloCustomizadoLocal.length > 20 ? 'text-danger' : 'text-success'
    }
    }
}
</script>
<style scoped>
.spanI {
  font-weight: bold;
  color: #007bff;
}
</style>
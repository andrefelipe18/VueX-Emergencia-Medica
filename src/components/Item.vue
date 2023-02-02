<template>
    <div class="row">
        <!-- Profissionais -->
        <div class="col-1" v-if="dados.id" v-text="'ID: ' + dados.id"></div>
        <div class="col-3" v-if="dados.nome" v-text="'Nome: ' + dados.nome"></div>
        <div class="col-3" v-if="dados.turno" v-text="'Turno: ' + dados.turno"></div>
        <div class="col-3" v-if="dados.escala" v-text="'Escala: ' + dados.escala"></div>
        <!-- Equipamentos -->
        <div class="col-3" v-if="dados.placa" v-text="dados.placa"></div>
        <div class="col-5" v-if="dados.telefone" v-text="dados.telefone"></div>
        <div class="col-3" v-if="dados.kit" v-text="dados.kit"></div>
        <div class="col">
            <i class="bi-check2-square point" @click="adicionarItemEquipe"></i>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'Item',
    props: {
        dados: Object,
        tipo: String
    },
    methods: {
        ...mapMutations({
          setItemEquipe: 'setItemEquipe'
        }),

        adicionarItemEquipe(){
            

            let item = {
                tipo: this.tipo,
                dados: this.dados
            }

            //this.$store.commit('setItemEquipe', item)
           /* this.$store.commit({
                type: 'setItemEquipe', // nome da mutation
                item: item // valor que será passado para a mutation
            }) */

            this.setItemEquipe(item)
        },
        
    }
}
</script>
<style scoped>
.point {
    cursor: pointer;
}
</style>
<template>
    <div>
        <div v-if="tipo == 'socorristas'">
            <select class="form-control form-control-sm" v-model="turno">
                <option value="todos" selected>Todos</option>
                <option value="manhã">Manhã</option>
                <option value="tarde">Tarde</option>
                <option value="noite">Noite</option>
            </select>
        </div>
        <item 
        v-for="(item, indice) in itens" 
        :key="indice"
        :dados="item"
        :tipo="this.tipo"/>
        <div class="" v-if="tipo == 'socorristas'">
        Total: {{ totalSocorristasPorTurno(turno) }}
        </div>
    </div>
</template>

<script>
import Item from '@/components/Item.vue'
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
export default {
    name: 'ListaItens',
    components: { 
        Item
    },
    data() {
        return {
            turno: 'todos'
        }
    },
    props: {
        tipo: String
    },
    computed: {
        ...mapState({
            enfermeiros: state => state.enfermeiros,
            medicos: state => state.medicos,
            carros: state => state.equipamentos.carros,
            telefones: state => state.equipamentos.telefones,
            kitsDeReanimacao: state => state.equipamentos.kitsDeReanimacao
        }),
        ...mapGetters({
            totalSocorristasPorTurno: 'totalSocorristasPorTurno',
            socorristasPorTurno: 'socorristasPorTurno'
        }),
        itens() {
            switch (this.tipo) {
                case 'enfermeiros':
                    return this.enfermeiros
                case 'socorristas':
                    return this.socorristasPorTurno(this.turno)
                case 'medicos':
                    return this.medicos
                case 'carros':
                    return this.carros
                case 'telefones':
                    return this.telefones
                case 'kits-de-reanimacao':
                    return this.kitsDeReanimacao
                default:
                    return []
            }
        }
    }
}
</script>
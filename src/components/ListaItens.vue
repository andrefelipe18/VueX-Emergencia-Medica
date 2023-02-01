<template>
    <div>
        Lista Itens {{ tipo }}
        <br>
        <item />
    </div>
</template>

<script>
import Item from '@/components/Item.vue'
import { mapState } from 'vuex'

export default {
    name: 'ListaItens',
    components: { 
        Item
    },
    props: {
        tipo: String
    },
    computed: {
        ...mapState({
            enfermeiros: state => state.equipe.enfermeiros,
            socorristas: state => state.equipe.socorristas,
            medicos: state => state.equipe.medicos,
        })
    }
}
</script>''
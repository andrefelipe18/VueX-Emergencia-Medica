<script>
import Equipe from './Equipe.vue';
import { mapState } from 'vuex'
export default {
    name: 'ListaEquipesComponent',
    components: {
        Equipe
    },
    computed: {
     ...mapState(['equipes'])   
    }
}   
</script>
<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="(equipe, indice) in equipes" :key="indice">
                <equipe :dados="equipe"></equipe>
                <hr>
            </li>
        </ul>
        
    </div>
</template>
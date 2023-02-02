<template>
    <div>
        <div class="row">
            <div class="col">
                <h5><i class="bi-clipboard-check me-2"></i>Equipes montadas</h5>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <lista-equipes-component />
            </div>
        </div>
    </div>
</template>

<script>
import ListaEquipesComponent from './ListaEquipesComponent.vue';

export default {
    name: 'Equipes',
    components: {
        ListaEquipesComponent
    },
    computed: {
        
    }
}
</script>
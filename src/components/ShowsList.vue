<template>

    <!-- List of shows -->
    <div :key="show.id" v-for="show in shows">

        <Show :show="show" />

    </div>

</template>

<script>

    import Show from './Show';

    export default {

        name: 'Shows',

        components: { 
            
            Show,
            
        },

        props: {

            shows: Array,

        },

    }

</script>
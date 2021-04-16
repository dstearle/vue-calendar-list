<template>

    <!-- List of shows -->
    <div :key="show.id" v-for="show in filteredShowsList">

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

        data(){

            return {

                // Current index for the shows list
                currentIndex: 0,
                // The limit of viewable shows
                limit: 5,

            }

        },

        computed:{

            // Paginates the list
            filteredShowsList(){

                return this.limit ? this.shows.slice(this.currentIndex, this.limit) : this.shows

            }

        }

    }

</script>
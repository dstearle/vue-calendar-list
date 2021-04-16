<template>

    <!-- List of shows -->
    <div :key="show.id" v-for="show in filteredShowsList">

        <Show :show="show" />

    </div>

    <div class="text-center mt-8">

        <div class="inline-flex">

            <!-- Newer Button -->
            <button 
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" 
                @click="newer()"
                v-show="this.currentIndex > 4"
            >
                Newer
            </button>

            <!-- Older Button -->
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" @click="older()">
                Older
            </button>

        </div>

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

        data() {

            return {

                // Current index for the shows list
                currentIndex: 0,
                // The limit of viewable shows
                limit: 5,

            }

        },

        computed: {

            // Paginates the list
            filteredShowsList(){

                return this.limit ? this.shows.slice(this.currentIndex, this.limit) : this.shows

            }

        },

        methods: {

            // Method for showing older shows in the list
            older() {

                this. limit += 5;
                this.currentIndex += 5;

            },

            // Method for showing newer shows in the list
            newer() {

                this. limit -= 5;
                this.currentIndex -= 5;

            },

        }

    }

</script>
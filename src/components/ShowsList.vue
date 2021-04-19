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
            <button 
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" 
                @click="older()"
                v-show="this.boola"
            >
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
                // The length of the shows array
                showsLength: parseInt(this.shows.length),
                // Determins if 'Older' button is visible
                boola: true,

            }

        },

        computed: {

            // Paginates the list
            filteredShowsList(){

                return this.limit ? this.shows.slice(this.currentIndex, this.limit) : this.shows

            },

        },

        methods: {

            // Method for showing older shows in the list
            older() {

                this. limit += 5;
                this.currentIndex += 5;
                this.boolaToggle();

            },

            // Method for showing newer shows in the list
            newer() {

                this. limit -= 5;
                this.currentIndex -= 5;
                this.boolaToggle();

            },

            // Shows or hides the 'Older' button
            boolaToggle(){

                // If the current index is at the end of the array then hide the 'Older' button
                if(this.currentIndex === (this.showsLength - 5 )) { return this.boola = false }
                if(this.currentIndex === (this.showsLength - 4 )) { return this.boola = false }
                if(this.currentIndex === (this.showsLength - 3 )) { return this.boola = false }
                if(this.currentIndex === (this.showsLength - 2 )) { return this.boola = false }
                if(this.currentIndex === (this.showsLength - 1 )) { return this.boola = false }

                // Else will show the 'Older' Button
                else { return this.boola = true }

            }

        }

    }

</script>
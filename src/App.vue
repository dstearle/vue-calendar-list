<template>

    <div class="container">

        <!-- Header -->
        <Header />

        <!-- Shows List -->
        <ShowsList :shows="shows" :showsLength="showsLength" />

    </div>

</template>

<script>

    import { db } from '@/main';
    import Header from './components/Header.vue';
    import ShowsList from './components/ShowsList';

    export default {

        name: 'App',

        components: {

            Header,
            ShowsList,

        },

        data() {

            return {

                // The array for shows
                shows: [],
                // The length of the shows array
                showsLength: 0,

            }

        },

        mounted() {

            this.getEvents();

        },

        methods: {

            // Connects to firebase
            async getEvents() {

                // The snapshot of the data collection
                let snapshot = await db.collection('calEvent').get();

                // Array to hold the data retrieved from firebase
                let eventsArray = [];

                // Foreach loop for the data in the firestore
                snapshot.forEach(doc => {

                    // The data stored in firebase, except the id
                    let appData = doc.data();

                    // Sets the id to the retrieved data
                    appData.id = doc.id;

                    // Pushes the retrieved data to the events array
                    eventsArray.push(appData);

                });

                // Sorts the eventsArray by the date
                const sortedArray = eventsArray.sort(function(a,b) { 

                    return new Date(a.date).getTime() - new Date(b.date).getTime() 

                });

                // Sets the data to the calendar 
                this.shows = sortedArray;

                // The lenght of the shows array
                this.showsLength = eventsArray.length;

            },

        },

    }

</script>

<style>

    .container {
        background-color: #1a1a1a;
        max-width: 500px;
        margin: 30px auto;
        overflow: auto;
        min-height: 300px;
        padding: 30px;
    }

</style>

<template>

    <div class="container">

        <!-- Header -->
        <Header />

        <!-- Shows List -->
        <ShowsList :shows="shows" />

    </div>

</template>

<script>

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

                shows: [],

            }

        },

        created() {

            this.shows = [

                {
                    id:1,
                    name: 'Ozzy Ozbourne',
                    type: 'Solo',
                    dayOfWeek: 'SAT',
                    day: '24',
                    month: 'OCT',
                    time: '12:00am to 2:00am',
                },

                {
                    id:2,
                    name: 'Korn',
                    type: 'Band',
                    dayOfWeek: 'FRI',
                    day: '23',
                    month: 'SEPT',
                    time: '10:00pm to 11:00pm',
                },

                {
                    id:3,
                    name: 'Alice in Chains',
                    type: 'Band',
                    dayOfWeek: 'THUR',
                    day: '22',
                    month: 'AUG',
                    time: '9:00pm to 11:30pm',
                },

            ]

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

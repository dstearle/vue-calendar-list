<template>

    <div class="container">

        <!-- Header -->
        <Header />

    </div>

</template>

<script>

    import Header from './components/Header.vue'

    export default {

        name: 'App',

        components: {

            Header,

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

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

</style>

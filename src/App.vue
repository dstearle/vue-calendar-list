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

                {
                    id:4,
                    name: 'Scott Weiland',
                    type: 'Solo',
                    dayOfWeek: 'THUR',
                    day: '22',
                    month: 'AUG',
                    time: '12:00am to 2:00am',
                },

                {
                    id:5,
                    name: 'Guns N Roses',
                    type: 'Band',
                    dayOfWeek: 'WED',
                    day: '16',
                    month: 'JUL',
                    time: '10:00pm to 11:00pm',
                },

                {
                    id:6,
                    name: 'Fleetwood Mac',
                    type: 'Band',
                    dayOfWeek: 'TUES',
                    day: '15',
                    month: 'JUN',
                    time: '9:00pm to 11:30pm',
                },

                {
                    id:7,
                    name: 'Daft Punk',
                    type: 'Band',
                    dayOfWeek: 'THUR',
                    day: '14',
                    month: 'MAR',
                    time: '9:00pm to 11:30pm',
                },

                {
                    id:8,
                    name: 'Joe Schmoe',
                    type: 'Solo',
                    dayOfWeek: 'MON',
                    day: '14',
                    month: 'APR',
                    time: '9:00pm to 11:30pm',
                },

                {
                    id:9,
                    name: 'Ozzy Ozbourne',
                    type: 'Solo',
                    dayOfWeek: 'SAT',
                    day: '24',
                    month: 'OCT',
                    time: '12:00am to 2:00am',
                },

                {
                    id:10,
                    name: 'Korn',
                    type: 'Band',
                    dayOfWeek: 'FRI',
                    day: '23',
                    month: 'SEPT',
                    time: '10:00pm to 11:00pm',
                },

                {
                    id:11,
                    name: 'Alice in Chains',
                    type: 'Band',
                    dayOfWeek: 'THUR',
                    day: '22',
                    month: 'AUG',
                    time: '9:00pm to 11:30pm',
                },

                // {
                //     id:12,
                //     name: 'Scott Weiland',
                //     type: 'Solo',
                //     dayOfWeek: 'THUR',
                //     day: '22',
                //     month: 'AUG',
                //     time: '12:00am to 2:00am',
                // },

                // {
                //     id:13,
                //     name: 'Guns N Roses',
                //     type: 'Band',
                //     dayOfWeek: 'WED',
                //     day: '16',
                //     month: 'JUL',
                //     time: '10:00pm to 11:00pm',
                // },

                // {
                //     id:14,
                //     name: 'Guns N Roses',
                //     type: 'Band',
                //     dayOfWeek: 'WED',
                //     day: '16',
                //     month: 'JUL',
                //     time: '10:00pm to 11:00pm',
                // },

                // {
                //     id:15,
                //     name: 'Guns N Roses',
                //     type: 'Band',
                //     dayOfWeek: 'WED',
                //     day: '16',
                //     month: 'JUL',
                //     time: '10:00pm to 11:00pm',
                // },

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

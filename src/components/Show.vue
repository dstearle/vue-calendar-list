<template>

    <div class="show grid grid-rows-2 gap-3 pb-6">

        <div class="grid grid-cols-12 space-x-2">
            
            <div class="col-span-4 grid grid-rows-3 gap-0 p-auto flex justify-center items-center text-center show-date">

                <div>{{ show.dayOfWeek.toUpperCase() }}</div>

                <div class="font-extrabold">{{ dayDate }}</div>

                <div>{{ monthDate }}</div>

            </div>

            <div class="col-span-8 p-auto flex justify-center items-center show-type text-2xl">{{ show.type }}</div>

        </div>

        <div>

            <!-- Title -->
            <p class="text-2xl pb-2">{{ show.name }}</p>

            <hr style="border-color: #6a6a6a;">

            <p class="pt-2">

                <!-- Remove Button -->
                <i class="far fa-clock"></i>

                {{ show.time }}

            </p>

        </div>

    </div>

</template>

<script>

    export default {

        name: 'Show',

        props: {

            show: Object,

        },

        data() {

            return {

                // Current index for the shows list
                dayDate: '',
                // The limit of viewable shows
                monthDate: '',

            }

        },

        mounted() {

            this.getDay();
            this.getAbbrevMonth();

        },

        methods: {

            // Gets the day from the date
            getDay() {

                // Explodes the date into an array
                const dateArray = this.show.date.split('-');

                // Determines the abbreviated month
                return this.dayDate = dateArray[1];

            },

            // Gets the abbreviated month from the date
            getAbbrevMonth() {

                // Explodes the date into an array
                const dateArray = this.show.date.split('-');

                // Determines the abbreviated month
                if(dateArray[0] === '1') { return this.monthDate = 'JAN' }
                if(dateArray[0] === '2') { return this.monthDate = 'FEB' }
                if(dateArray[0] === '3') { return this.monthDate = 'MAR' }
                if(dateArray[0] === '4') { return this.monthDate = 'APR' }
                if(dateArray[0] === '5') { return this.monthDate = 'MAY' }
                if(dateArray[0] === '6') { return this.monthDate = 'JUN' }
                if(dateArray[0] === '7') { return this.monthDate = 'JUL' }
                if(dateArray[0] === '8') { return this.monthDate = 'AUG' }
                if(dateArray[0] === '9') { return this.monthDate = 'SEP' }
                if(dateArray[0] === '10') { return this.monthDate = 'OCT' }
                if(dateArray[0] === '11') { return this.monthDate = 'NOV' }
                if(dateArray[0] === '12') { return this.monthDate = 'DEC' }

            },

        },

    }

</script>

<style scope>

    .show {
        color: #fff;
        background: #212121;
        margin: 5px;
        padding: 10px 20px;
    }

    .show-date {
        color: #212121;
        background-color: #ffa63a;
    }

    .show-type {
        border: 3px solid #6a6a6a;
    }

    .task h3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

</style>
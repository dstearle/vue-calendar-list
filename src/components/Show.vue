<template>

    <div class="show grid grid-rows-2 gap-3 pb-6">

        <div class="grid grid-cols-12 space-x-2">
            
            <div class="col-span-4 grid grid-rows-3 gap-0 p-auto flex justify-center items-center text-center show-date">

                <div>{{ show.dayOfWeek.toUpperCase() }}</div>

                <div class="font-extrabold">{{ show.day }}</div>

                <div>{{ show.month }}</div>

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
<template>

    <div>

        <h3>
            
            <!-- Title -->
            {{ show.name }}

        </h3>

        <p>{{ show.day }}</p>

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

    .task {
        background: #f4f4f4;
        margin: 5px;
        padding: 10px 20px;
        cursor: pointer;
    }

    .task h3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

</style>
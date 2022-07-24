<template>
    <div>
        <center>
            <h1>404 not found</h1>
            <h2>it seems you're in the wrong page</h2>
        </center>
    </div>
</template>

<script>
export default {

    created: function () {
        // Redirect outside the app using plain old javascript
        window.location.href = "/";
    }

}
</script>

<style>
</style>
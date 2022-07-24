<template>
    <v-app id="inspire">

        <v-main class="grey lighten-2">

            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="indigo">
                                <v-toolbar-title>Register form

                                </v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field prepend-icon="mdi-account" name="name" label="Name" type="text">
                                    </v-text-field>
                                    <v-text-field prepend-icon="mdi-email" name="email" label="Email" type="email">
                                    </v-text-field>
                                    <v-text-field id="password" append-icon="mdi-eye-off" prepend-icon="mdi-lock"
                                        name="password" label="Password" type="password"></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="error" to="/">Batal</v-btn>
                                <v-spacer></v-spacer>

                                <v-btn color="success" to="/">Daftar</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-footer color=" lighten-1" padless>
                <v-row justify="center" no-gutters>

                    <v-col class=" lighten-2 py-4 text-center dark--text" cols="12">
                        {{ new Date().getFullYear() }} — <strong>Roby</strong>
                    </v-col>
                </v-row>
            </v-footer>
        </v-main>

    </v-app>
</template>

<script>
export default {
    name: 'RegisterView',
    props: {
        source: String,
    },
};
</script>

<style>
</style>

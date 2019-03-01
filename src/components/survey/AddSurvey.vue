<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent max-width="290">
            <v-btn color="primary" dark slot="activator">Open Dialog</v-btn>
            <v-card>
                <v-card-title class="headline">headline</v-card-title>
                <v-card-text>text</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" flat @click.native="dialog = false">Disagree</v-btn>
                    <v-btn color="primary" flat @click.native="dialog = false">Agree</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
export default {

}
</script>

<style>

</style>
 
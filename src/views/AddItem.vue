<template>
    <div class="main">
        <v-col cols="6" class="pa-0" offset="1">
            <AddItemForm></AddItemForm>
        </v-col>s
    </div>
</template>

<script>

import AddItemForm from "@/components/AddItemForm.vue"


export default {
    components: {
        AddItemForm,
        
    }
}
</script>

<style lang="scss" scoped>
    .main{
        display: flex;
    }
</style>
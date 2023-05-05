<template>
    <div class="mt-5">
        <div class="card">
            <div class="card-header">
                <h5 class="card-title">Datos de usuario</h5>
            </div>
            <div class="card-body">
                <form>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input v-model="formGetCurp.name" type="text" class="form-control" @keyup="handleOnKeyUp">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="fatherLastName">Father last name:</label>
                                <input v-model="formGetCurp.fatherLastName" type="text" class="form-control" 
                                @keyup="handleOnKeyUp">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="motherLastName">Mother last name:</label>
                                <input v-model="formGetCurp.motherLastName" type="text" class="form-control" @keyup="handleOnKeyUp">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="day">Day:</label>
                                <input v-model="formGetCurp.day" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="month">Month:</label>
                                <input v-model="formGetCurp.month" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="year">Year:</label>
                                <input v-model="formGetCurp.year" type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="genre">Genre:</label>
                                <select v-model="formGetCurp.genre" name="genre" id="genre" class="form-control">
                                    <option value="0" selected disabled>Selecciona un genero</option>
                                    <option value="H">Hombre</option>
                                    <option value="M">Mujer</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="state">State:</label>
                                <select v-model="formGetCurp.state" name="state" id="state" class="form-control">
                                    <option value="0" selected disabled>Selecciona un estado</option>
                                    <option v-for="[stateName, stateShort] of states" :key="stateName" :value="stateShort" v-text="stateName"></option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12">
                            <button type="button" class="btn btn-primary w-100" @click="handleOnClick">
                                Calcular
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { validCurp } from '../services/curp.services';

import { getCurp, getStates } from '../utils/curp.util';

export default {
    data() {
        return {
            formGetCurp: {
                name: '',
                fatherLastName: '',
                motherLastName: '',
                day: '',
                month: '',
                year: '',
                state: ''
            }
        }
    },
    computed: {
        states: () => getStates(),
    },
    methods: {
        handleOnKeyUp(e) {
            e.target.value = e.target.value.toUpperCase();
        },
        async handleOnClick() {
            const curp = getCurp({
                ...this.formGetCurp
            });
            console.log('curp', curp);
            // try {
            //     const curp = "VAOH970514HASLRC08";
            //     const response = await getCurp(curp);

            //     console.log('response', JSON.parse(response.data.response));
            // } catch (e) {
            //     console.log('e', e)
            // }
        }
    },
    
}
</script>
<style scoped>

</style>
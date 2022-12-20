<template>
    <div class="m-4 w-75 mx-auto">
        <section id="nawBlock">
            <div class="mb-3 row">
                <label for="name" class="form-label col-4 fw-bold">Naam: </label>
                <div class="col">
                    <input type="text" class="form-control" name="name" id="name" aria-describedby="name"
                        v-model="sendData.naam" @blur="v$.sendData.naam.$touch">
                    <small v-if="v$.sendData.naam.$error" class="text-danger">Dit is een verplicht veld.</small>

                </div>
            </div>
            <div class="mb-3 row">
                <label for="email" class="form-label col-4 fw-bold ">E-mailadres:</label>
                <div class="col">
                    <input type="email" class="form-control " name="email" id="email" aria-describedby="email"
                        v-model="sendData.email" @blur="v$.sendData.email.$touch">
                    <small v-if="v$.sendData.email.$error" class="text-danger">Dit is een verplicht veld.</small>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="telefoon" class="form-label col-4 fw-bold">Telefoonnummer: </label>
                <div class="col">
                    <input type="number" class="form-control" name="telefoon" id="telefoon" aria-describedby="number"
                        v-model="sendData.telefoon" @blur="v$.sendData.telefoon.$touch">
                    <small v-if="v$.sendData.telefoon.$error" class="text-danger">Dit is een verplicht veld.</small>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="woonplaats" class="form-label col-4 fw-bold">Woonplaats: </label>
                <div class="col">
                    <input type="text" class="form-control" name="woonplaats" id="woonplaats" aria-describedby="name"
                        v-model="sendData.woonplaats" @blur="v$.sendData.woonplaats.$touch">
                    <small v-if="v$.sendData.woonplaats.$error" class="text-danger">Dit is een verplicht veld.</small>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="sport" class="form-label col-4 fw-bold">Welke sport: </label>
                <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="radio-sb-hb" value="honkbal"
                            id="radioHonkbal" checked v-model="sendData.sport">
                        <label class="form-check-label" for="radioHonkbal">Honkbal</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="radio-sb-hb" value="softbal"
                            id="radioSoftbal" v-model="sendData.sport">
                        <label class="form-check-label mb-2" for="radioSoftbal">Softbal</label>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="radio-rechter" class="form-label col-4 fw-bold">Ik ben een: </label>
                <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="radio-rechter" value="Clubscheidsrechter"
                            id="radioClub" v-model="sendData.typeUmpire" checked>
                        <label class="form-check-label" for="radioClub">Clubscheidsrechter</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="radio-rechter" value="Bondsscheidsrechter"
                            id="radioBond" v-model="sendData.typeUmpire">
                        <label class="form-check-label " for="radioBond"> Bondsscheidsrechter</label>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="diploma" class="form-label col-4 fw-bold">Behaalde diploma's:</label>
                <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="diplomaU1" id="U1" value="U1"
                            v-model="sendData.diploma.U1"
                            @click="sendData.diploma.checkValidation = false, sendData.diploma.showValidation = false"
                            true-value="U1" false-value="">
                        <label class="form-check-label" for="U1"> U1</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="diplomaU2" id="U2" value="U2"
                            true-value="U2" false-value="" v-model="sendData.diploma.U2"
                            @click="sendData.diploma.checkValidation = false, sendData.diploma.showValidation = false">
                        <label class="form-check-label" for="U2"> U2</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="diplomaU3" id="U3" value="U3"
                            v-model="sendData.diploma.U3" true-value="U3" false-value=""
                            @click="sendData.diploma.checkValidation = false, sendData.diploma.showValidation = false">
                        <label class="form-check-label" for="U3"> U3</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="diplomaOverige" id="overige"
                            value="overige" v-model="sendData.diploma.overigeCB"
                            @change="sendData.diploma.checkValidation = false">
                        <label class="form-check-label" for="overige">Andere
                            diploma's</label>
                    </div>
                    <textarea v-if="sendData.diploma.overigeCB" class="form-control" id="overigediploma" rows="5"
                        name="overigediploma" v-model="sendData.diploma.overige"></textarea>
                </div>
                <small v-if="sendData.diploma.showValidation" class="text-danger">Dit is een verplicht veld.</small>

            </div>

            <div class="mb-3 row">
                <label for="ervaringjaren" class="form-label col-4 fw-bold">Aantal jaren ervaring: </label>
                <div class="col">
                    <input type="number" class="form-control" id="ervaring" aria-describedby="number"
                        name="ervaringjaren" v-model="sendData.ervaring" @blur="v$.sendData.ervaring.$touch">
                    <small v-if="v$.sendData.ervaring.$error" class="text-danger">Dit is een verplicht veld.</small>
                </div>
            </div>
            <div class="mb-3 row">

                <label for="beschikbaarheid" class="form-label col-4 fw-bold">Beschikbaarheid:</label>
                <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" name="zaterdag" type="checkbox" id="zaterdag" value="zaterdag"
                            true-value="zaterdag" false-value="" v-model="sendData.beschikbaarheid.zaterdag"
                            @click="sendData.beschikbaarheid.checkValidation = false, sendData.beschikbaarheid.showValidation = false">
                        <label class="form-check-label" for="zaterdag">za 27 mei 2023</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" name="zondag" type="checkbox" id="zondag" value="zondag"
                            true-value="Zaterdag" false-value="" v-model="sendData.beschikbaarheid.zondag"
                            @click="sendData.beschikbaarheid.checkValidation = false, sendData.beschikbaarheid.showValidation = false">
                        <label class="form-check-label" for="zondag">zo 28 mei 2023</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" name="maandag" type="checkbox" id="maandag" value="maandag"
                            true-value="maandag" false-value="" v-model="sendData.beschikbaarheid.maandag"
                            @click="sendData.beschikbaarheid.checkValidation = false, sendData.beschikbaarheid.showValidation = false">
                        <label class="form-check-label mb-lg-5" for="maandag">ma 29 mei 2023</label>
                    </div>
                </div>
                <small v-if="sendData.beschikbaarheid.showValidation" class="text-danger">Dit is een verplicht
                    veld.</small>

            </div>
            <div class="mb-3 row">
                <label for="opmerking" class="form-label col-4 fw-bold">Opmerkingen:</label>
                <div class="col">
                    <textarea class="form-control" name="opmerking" id="opmerking" rows="5"
                        v-model="sendData.opmerking"></textarea>
                </div>
            </div>
        </section>
        <section id="avgBlock" class="row">
            <h4> Hierbij geef ik toestemming dat:</h4>
            <div>
                <ul>
                    <li>de door mij ingevulde gegevens gebruikt kunnen worden ten behoeve van communicatiedoeleinden
                        voor deelname aan het NK Little League programma.</li>
                    <li>foto en filmmateriaal die gemaakt worden, tijdens gerelateerde NK Little League
                        evenementen gebruikt kunnen worden voor communicatie doeleinden ten behoeve van het NK Little
                        League
                        programma.</li>
                </ul>
            </div>
        </section>

        <section id="buttonBlock" class="d-flex flex-column text-center">
            <button class="btn btn-lg btn-primary w-100" @mouseup="submitData()">Ja, ik geef toestemming en meld me aan
                als umpire voor
                het NK Little League 2023 &gt;&gt;</button>
        </section>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, numeric } from '@vuelidate/validators'

export default {
    data() {
        return {
            sendData: {
                date: '',
                naam: '',
                email: '',
                telefoon: '',
                woonplaats: '',
                sport: 'Honkbal',
                typeUmpire: 'Clubscheidsrechter',
                diploma: {
                    U1: '',
                    U2: '',
                    U3: '',
                    overige: '',
                    overigeCB: false,
                    checkValidation: true,
                    showValidation: false,
                },
                ervaring: '',
                beschikbaarheid: {
                    zaterdag: '',
                    zondag: '',
                    maandag: '',
                    checkValidation: true,
                    showValidation: false,
                },
                opmerking: ''
            },
            v$: useVuelidate(),
        }
    },
    validations() {
        return {
            sendData: {
                naam: { required },
                email: { required, email },
                telefoon: { required, numeric },
                woonplaats: { required },
                ervaring: { required },
                beschikbaarheid: { required },
            }
        }
    },
    methods: {

        async submitData() {

            this.v$.$validate()
            if (this.v$.$error || this.sendData.diploma.checkValidation || this.sendData.beschikbaarheid.checkValidation) {
                if (this.sendData.diploma.checkValidation) {
                    console.log('diploma checkValidation is true');
                    this.sendData.diploma.showValidation = true;
                }
                if (this.sendData.beschikbaarheid.checkValidation) {
                    console.log('diploma checkValidation is true');
                    this.sendData.beschikbaarheid.showValidation = true;
                }
                return
            }

            // this.$router.push('/Outro');
            // this.sendData.date = `${this.$yfa.script.date(3).full}@${this.$yfa.script.time().full}`;
            // alert(JSON.stringify(this.sendData));

            this.sendData.date = `${this.$yfa.script.date(3).full}@${this.$yfa.script.time().full}`;
            //  first send general data);
            const responseMain = await this.$yfa.script.zap(JSON.stringify(this.sendData));



            if (responseMain.status === 'success') {
                this.$router.push('/Outro');
            } else {
                console.log('error');
            }
        }
    }
}
</script>


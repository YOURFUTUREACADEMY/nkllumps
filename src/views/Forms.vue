<template>
    <div class="m-4 w-75 mx-auto">
        <section id="nawBlock">
            <div class="mb-3 row">
                <label for="name" class="form-label col-4 fw-bold">Naam: </label>
                <div class="col">
                    <input type="text" class="form-control" name="name" id="name" aria-describedby="name"
                        v-model="sendData.naam">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="email" class="form-label col-4 fw-bold ">E-mailadres:</label>
                <div class="col">
                    <input type="email" class="form-control " name="email" id="email" aria-describedby="email"
                        v-model="sendData.email">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="telefoon" class="form-label col-4 fw-bold">Telefoonnummer: </label>
                <div class="col">
                    <input type="number" class="form-control" name="telefoon" id="telefoon" aria-describedby="number"
                        v-model="sendData.telefoon">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="woonplaats" class="form-label col-4 fw-bold">Woonplaats: </label>
                <div class="col">
                    <input type="text" class="form-control" name="woonplaats" id="woonplaats" aria-describedby="name"
                        v-model="sendData.woonplaats">
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
                        <label class="form-check-label mb-3 row" for="radioBond">Bondsscheidsrechter</label>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="diploma" class="form-label col-4 fw-bold">Behaalde diploma's:</label>
                <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="diplomaU1" id="U1" value="U1"
                            v-model="sendData.diploma.U1"> <label class="form-check-label" for="U1"> U1</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="diplomaU2" id="U2" value="U2"
                            v-model="sendData.diploma.U2"> <label class="form-check-label" for="U2"> U2</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="diplomaU3" id="U3" value="U3"
                            v-model="sendData.diploma.U3"> <label class="form-check-label" for="U3"> U3</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="diplomaOverige" id="overige"
                            value="overige" v-model="sendData.diploma.overigeCB"> <label class="form-check-label"
                            for="overige">Andere
                            diploma's</label>
                    </div>
                    <textarea v-if="sendData.diploma.overigeCB" class="form-control" id="overigediploma" rows="5"
                        name="overigediploma" v-model="sendData.diploma.overige"></textarea>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="ervaringjaren" class="form-label col-4 fw-bold">Aantal jaren ervaring: </label>
                <div class="col">
                    <input type="number" class="form-control" id="ervaring" aria-describedby="number"
                        name="ervaringjaren" v-model="sendData.ervaring">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="beschikbaarheid" class="form-label col-4 fw-bold">Beschikbaarheid:</label>

                <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" name="zaterdag" type="checkbox" id="zaterdag" value="zaterdag"
                            v-model="sendData.beschikbaarheid.zaterdag">
                        <label class="form-check-label" for="zaterdag">za 27 mei 2023</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" name="zondag" type="checkbox" id="zondag" value="zondag"
                            v-model="sendData.beschikbaarheid.zondag">
                        <label class="form-check-label" for="zondag">zo 28 mei 2023</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" name="maandag" type="checkbox" id="maandag" value="maandag"
                            v-model="sendData.beschikbaarheid.maandag">
                        <label class="form-check-label mb-lg-5" for="maandag">ma 29 mei 2023</label>
                    </div>
                </div>
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
                    U1: false,
                    U2: false,
                    U3: false,
                    overige: '',
                    overigeCB: false
                },
                ervaring: '',
                beschikbaarheid: {
                    zaterdag: false,
                    zondag: false,
                    maandag: false
                },
                opmerking: ''
            }
        }
    },
    methods: {

        async submitData() {
            // this.$router.push('/Outro');
            this.sendData.date = `${this.$yfa.script.date(3).full}@${this.$yfa.script.time().full}`;
            console.log(JSON.stringify(this.sendData));
            //     this.sendData.date = `${this.$yfa.script.date(3).full}@${this.$yfa.script.time().full}`;
            //     //  first send general data);
            //     const responseMain = await this.$yfa.script.zap(JSON.stringify(this.sendData));



            //     if (rresponseMain.status === 'success') {
            //         this.$router.push('/Outro');
            //     } else {
            //         console.log('error');
            //     }
        }
    }
}
</script>


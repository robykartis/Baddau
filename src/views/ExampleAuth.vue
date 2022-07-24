<template>
    <v-app>
        <v-responsive :aspect-ratio="16 / 9">
            <v-main>
                <v-container>
                    <v-row align="center" justify="center">
                        <v-col cols="12" sm="10">
                            <v-card class="elevation-6 mt-10">
                                <v-window v-model="step">
                                    <v-window-item :value="1">
                                        <v-row>
                                            <v-col cols="12" md="6">
                                                <v-card-text class="mt-12">
                                                    <h4 class="text-center">Login in to Your Account</h4>
                                                    <h6 class="text-center  grey--text ">Log in to your account so you
                                                        can
                                                        continue
                                                        builiding <br>and editing your onboarding flows</h6>
                                                    <v-row align="center" justify="center">
                                                        <v-col cols="12" sm="8">
                                                            <v-form ref="form" v-model="valid"
                                                                @submit.prevent="handleSubmitLogin" lazy-validation>
                                                                <v-text-field label="Email" v-model="email"
                                                                    :rules="emailRules" outlined dense color="blue"
                                                                    autocomplete="false" class="mt-16" required />
                                                                <v-text-field label="Password" outlined dense
                                                                    color="blue" append-icon="mdi-eye-off"
                                                                    v-model="password" :rules="passRules"
                                                                    :type="showPassword ? 'text' : 'password'"
                                                                    @click:append="handleClick" required
                                                                    autocomplete="false" />
                                                                <v-row>
                                                                    <v-col cols="12" sm="7">
                                                                        <v-checkbox label="Remember Me" class="mt-n1"
                                                                            color="blue" v-model="checkbox"
                                                                            :rules="[v => !!v || 'You must agree to continue!']"
                                                                            required>
                                                                        </v-checkbox>
                                                                    </v-col>
                                                                    <v-col cols="12" sm="5">
                                                                        <span class="caption blue--text">Forgot
                                                                            password</span>
                                                                    </v-col>
                                                                </v-row>
                                                                <v-btn :disabled="!valid" color="blue" @click="validate"
                                                                    dark block tile>Log in
                                                                </v-btn>

                                                                <h5 class="text-center  grey--text mt-4 mb-3">Or Log in
                                                                    using
                                                                </h5>
                                                            </v-form>
                                                        </v-col>
                                                    </v-row>
                                                </v-card-text>
                                            </v-col>
                                            <v-col cols="12" md="6" class="blue rounded-bl-xl">
                                                <div style="  text-align: center; padding: 180px 0;">
                                                    <v-card-text class="white--text">
                                                        <h3 class="text-center ">Don't Have an Account Yet?</h3>
                                                        <h6 class="text-center">Let's get you all set up so you can
                                                            start
                                                            creating
                                                            your your first<br> onboarding experience</h6>
                                                    </v-card-text>
                                                    <div class="text-center">
                                                        <v-btn tile outlined dark @click="step++">SIGN UP</v-btn>
                                                    </div>
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-window-item>
                                    <v-window-item :value="2">
                                        <v-row>
                                            <v-col cols="12" md="6" class="blue rounded-br-xl">
                                                <div style="  text-align: center; padding: 180px 0;">
                                                    <v-card-text class="white--text">
                                                        <h3 class="text-center ">Alredy Signed up?</h3>
                                                        <h6 class="text-center">Log in to your account so you can
                                                            continue
                                                            building
                                                            and<br> editing your onboarding flows</h6>
                                                    </v-card-text>
                                                    <div class="text-center">
                                                        <v-btn tile outlined dark @click="step--">Log in</v-btn>
                                                    </div>
                                                </div>
                                            </v-col>

                                            <v-col cols="12" md="6">
                                                <v-card-text class="mt-12">
                                                    <h4 class="text-center">Sign Up for an Account</h4>
                                                    <h6 class="text-center  grey--text ">Let's get you all set up so you
                                                        can
                                                        start
                                                        creatin your <br>
                                                        first onboarding experiance</h6>
                                                    <v-row align="center" justify="center">
                                                        <v-col cols="12" sm="8">
                                                            <v-form ref="form" v-model="valid"
                                                                @submit.prevent="handleSubmitRegister" lazy-validation>

                                                                <v-text-field label="Name" :counter="50" v-model="name"
                                                                    :rules="nameRules" outlined dense color="blue"
                                                                    autocomplete="false" required />
                                                                <v-text-field label="Email" v-model="email"
                                                                    :rules="emailRules" outlined dense color="blue"
                                                                    autocomplete="false" required />
                                                                <v-text-field label="Password" outlined dense
                                                                    color="blue" append-icon="mdi-eye-off"
                                                                    v-model="password" :rules="passRules"
                                                                    :type="showPassword ? 'text' : 'password'"
                                                                    @click:append="handleClick" required
                                                                    autocomplete="false" />
                                                                <v-row>
                                                                    <v-col cols="12" sm="7">
                                                                        <v-checkbox label="I Accept AAE" class="mt-n1"
                                                                            color="blue">
                                                                        </v-checkbox>
                                                                    </v-col>
                                                                    <v-col cols="12" sm="5">
                                                                        <span class="caption blue--text ml-n4">Terms
                                                                            &Conditions</span>
                                                                    </v-col>
                                                                </v-row>
                                                                <v-btn color="blue" dark block tile>Sign up</v-btn>

                                                                <h5 class="text-center  grey--text mt-4 mb-3">Or Sign up
                                                                    using
                                                                </h5>
                                                            </v-form>
                                                        </v-col>
                                                    </v-row>
                                                </v-card-text>
                                            </v-col>
                                        </v-row>
                                    </v-window-item>
                                </v-window>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-main>
        </v-responsive>
    </v-app>
</template>

<script>


export default {
    data: () => ({
        step: 1,
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        password: '',
        passRules: [
            v => !!v || 'Password is required',
            v => v.length >= 8 || 'Min 8 characters'
        ],


        checkbox: false,
        showPassword: false,
    }),
    props: {
        source: String
    },
    methods: {
        handleSubmitLogin() {
            console.log(this.user)

        },
        handleSubmitRegister() {
            console.log(this.user)


        },
        validate() {
            this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
        handleClick() {
            this.showPassword = !this.showPassword
        },
    },


}
</script>
<style scoped>
.v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
}

.v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}
</style>

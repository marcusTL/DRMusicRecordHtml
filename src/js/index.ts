import axios,{
    AxiosResponse, 
    AxiosError
} from "../../node_modules/axios/index"

new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        name: "",
        greeting: "",
        MusicRecord: {artist:"", DurationInSec: , }
    },
    methods: {
        GetAll(){
            axios.get<>

        },
        sayHello() {
            console.log("Say Hello " + this.name)
            if (this.name == "") {
                this.greeting = "Hello NoName"
            }
            else {
                this.greeting = "Hello " + this.name
            }
        }
    }
})
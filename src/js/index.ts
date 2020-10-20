import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"

interface IMusicRecord{
    Title: string
    Artist: string
    DurationInSec: number
    YearOfPublication: number
    IsCertifiedPlatinum: boolean
}

let baseURL = "http://noitrest.azurewebsites.net/MusicRecord/";

new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        fileName: "",
        musicRecords: [],
        addMusicRecord: {
            Title: "", Artist: "", DurationInSec: 0,
            YearOfPublication: 0, IsCertifiedPlatinum: false
        }
    },
    methods: {
        GetAll(fileName:string) : void{
            axios.get<IMusicRecord[]>(baseURL + fileName)
                .then((response: AxiosResponse<IMusicRecord[]>) => {
                    this.musicRecords = response.data;
                })
                .catch((error: AxiosError) => {
                    console.log(error.message);
                })

        }
    }
})
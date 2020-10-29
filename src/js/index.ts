import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"

interface IMusicRecord {
    Title: string
    Artist: string
    DurationInSec: number
    YearOfPublication: number
    IsCertifiedPlatinum: boolean
}

let baseURL = "https://drmusicrest.azurewebsites.net/MusicRecord";

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
        },
        searchInput: "",
        searchOption: ""
    },
    methods: {
        GetAll(): void {
            axios.get<IMusicRecord[]>(baseURL)
                .then((response: AxiosResponse<IMusicRecord[]>) => {
                    this.musicRecords = response.data;
                    console.log(response.data)
                })
                .catch((error: AxiosError) => {
                    console.log(error.message);
                });

        },
        SearchRecords(): void {
            let searchQuery = "search?" + this.searchOption + "=" + this.searchInput;
            axios.get<IMusicRecord[]>(baseURL + searchQuery)
                .then((response: AxiosResponse<IMusicRecord[]>) => {
                    this.musicRecords = response.data;
                    console.log(response.data);
                })
                .catch((error: AxiosError) => {

                    console.log(error.message);
                });
        }
    }
})
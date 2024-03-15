const app = Vue.createApp({
    data() {
        return {
            firstName: "Jennie",
            lastName: "Nichols",
            email: "jennie.nichols@example.com",
            mobile: "(272) 790-0888",
            age: 12,
            gender: "female",
            streetNo: 8929,
            streetName: "Valwood Pkwy",
            city: "Billings",
            state: "Michigan",
            country: "United States",
            userImg: "https://randomuser.me/api/portraits/women/73.jpg",
        }
    },
    methods: {
        async getRandomUser() {
            const res = await fetch("https://randomuser.me/api")
            const { results } = await res.json()
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.mobile = results[0].phone
            this.age = results[0].dob.age
            this.gender = results[0].gender
            this.streetNo = results[0].location.street.number
            this.streetName = results[0].location.street.name
            this.city = results[0].location.city
            this.state = results[0].location.state
            this.country = results[0].location.country
            this.userImg = results[0].picture.large
        }
    }
})

app.mount('#app')
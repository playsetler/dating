const state = {
    user: {
        init: false,
        id: null,
        target: "",
        sex: "",
        name: "",
        dateOfBirth: new Date(),
        email: "",
        password: "",
        photos: []
    }
}

const actions = {
    registration({state}) {
        return axios.get('/sanctum/csrf-cookie').then(() => {
            return axios.post('/register', {
                target: state.user.target,
                sex: state.user.sex,
                name: state.user.name,
                date_of_birth: state.user.dateOfBirth,
                email: state.user.email,
                password: state.user.password,
                password_confirmation: state.user.password,
                photos: state.user.photos
            }).then((response) => {
                return response;
            });
        });
    },

    login({}, payload) {
        return axios.get('/sanctum/csrf-cookie').then(() => {
            return axios.post('/login', {
                email: payload.email,
                password: payload.password
            }).then((response) => {
                localStorage.setItem('token', response.config.headers['X-XSRF-TOKEN']);
                return response;
            });
        });
    },

    logout() {
        return axios.post('/logout')
            .then((response) => {
                localStorage.removeItem('token');
                return response;
            });
    },

    getUser({commit}) {
        return axios
            .get('/api/user')
            .then(response => {console.log(response.data.data.profile.date_of_birth);
                commit('setUser', {
                    init: true,
                    id: response.data.data.user.id,
                    name: response.data.data.user.name,
                    email: response.data.data.user.email,
                    target: response.data.data.profile.target,
                    sex: response.data.data.profile.sex,
                    dateOfBirth: new Date(response.data.data.profile.date_of_birth),
                    photos: response.data.data.profile.photos
                });
            })
            .catch(error => {
                console.log(error.response)
            });
    },

    postUser({state}) {
        return axios
            .post('/api/profile/update/', {
                first_name: state.user.firstName,
                last_name: state.user.lastName,
                middle_name: state.user.middleName,
                username: state.user.username,
                sex: state.user.sex,
                email: state.user.email,
                phone: state.user.phone,
                phone2: state.user.phone2,
                snils: parseInt(state.user.snils),
                inn: parseInt(state.user.inn),
                date_of_birth: `${String('0' + state.user.dateOfBirth.getDate()).slice(-2)}.${String('0' + state.user.dateOfBirth.getMonth() + 1).slice(-2)}.${state.user.dateOfBirth.getFullYear()}`,
                address_of_residence: state.user.addressOfResidence,
                address_of_registration: state.user.addressOfRegistration,
                place_of_birth: state.user.placeOfBirth,
                nationality: state.user.nationality,
                citizenship: state.user.citizenship,
                russian_language_proficiency: state.user.russianLanguageProficiency,
                place_of_work: state.user.placeOfWork,
                company_address: state.user.сompanyAddress,
                job_title: state.user.jobTitle,
                work_phone: state.user.workPhone,
                work_email: state.user.workEmail,
                work_email2: state.user.workEmail2
            });
    }
}

const mutations = {
    setUser(state, payload) {
        state.user = payload;
    },
    setTarget(state, payload) {
        state.user.target = payload.target;
    },
    setName(state, payload) {
        state.user.name = payload.name;
    },
    setUsername(state, payload) {
        state.user.username = payload.username;
    },
    setEmail(state, payload) {
        state.user.email = payload.email;
    },
    setPassword(state, payload) {
        state.user.password = payload.password;
    },
    setPhotos(state, payload) {
        state.user.photos = payload.photos;
    },
    setAvatar(state, payload) {
        state.user.avatar = payload.avatar;
    },
    setSex(state, payload) {
        state.user.sex = payload.sex;
    },
    setDateOfBirth(state, payload) {
        // этот метод будет дорабатываться
        //`${String('0' + dateOfBirth.day).slice(-2)}.${String('0' + dateOfBirth.month).slice(-2)}.${dateOfBirth.year}`;
        state.user.dateOfBirth = payload.dateOfBirth;
    },
    setPhone(state, payload) {
        state.user.phone = payload.phone;
    }
}

const getters = {
    user: state => {
        return state.user;
    }
}

export default {
    state, actions, mutations, getters
}
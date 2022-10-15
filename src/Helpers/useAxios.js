import axios from "axios";

const userAxios = (url, setter) => {
    axios.get(url)
        .then(res => setter(res.data))
        .catch(err => console.log(err));
}

export default userAxios;
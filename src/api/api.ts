import axios from "axios"

export const BASE_URL = 'https://dpg.gg/test/calendar.json'

export const getContributions = async () => {
    const data = await axios.get(BASE_URL)
    return data
}

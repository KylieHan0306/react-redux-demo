import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const channelStore = createSlice({
    name: 'channels',
    initialState: {
        channels: []
    },
    reducers: {
        setChannels (state, action) {
            state.channels = action.payload
        }
    }
})

const { setChannels } = channelStore.actions 
const fetchChannels = () => {
    return async (dispatch) => {
        const res = await axios.get('https://geek.itheima.net/v1_0/channels')
        dispatch(setChannels(res.data.data.channels))
    }
}

export {fetchChannels}

export default channelStore.reducer;

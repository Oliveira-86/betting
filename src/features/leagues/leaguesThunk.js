import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api/index';

export const getLeagues = createAsyncThunk('leagues/leaguesFetch', async () => {
    try {
        const { data } = await api.fetchLeagues();
        return data;
    } catch (error) {
        console.log(error);
          
    }
});
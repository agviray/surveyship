import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

// - Takes received token from Stripe (token received from Stripe upon successful payment
// submission by user via Stripe Checkout component), and sends it off for backend use.
export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

// - Submit survey to be sent out to recipients.
export const submitSurvey = (values, navigate) => async (dispatch) => {
  const res = await axios.post('/api/surveys', values);
  navigate('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

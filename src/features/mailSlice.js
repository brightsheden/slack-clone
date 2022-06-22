import { createSlice } from '@reduxjs/toolkit';



export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    selectedMail: false,
    sendMessageIsOpen: false,
  },
  
  
  reducers: {
    selectMail: (state, action)=>{
        state.selectedMail = action.payload;
    },
    openSendMessage : (state)=>{
      state.sendMessageIsOpen = true
    },

    closeSendMessage : (state)=>{
      state.sendMessageIsOpen = false
    }
  },
 
 
  
});

export const {selectMail, openSendMessage, closeSendMessage  } = mailSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen
export const selectOpenMail = (state) => state.mail.selectMail

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.


export default mailSlice.reducer;
 
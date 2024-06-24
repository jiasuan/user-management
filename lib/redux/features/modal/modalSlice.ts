import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MODAL_STATUS } from '@/lib/constants'

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
        status: MODAL_STATUS.INIT,
        value: "",

    },
    reducers: {
      openModal: (state, action: PayloadAction<string>) => {
        state.isOpen = true;
        state.value = action.payload
        console.log("openModal")
        console.log(action)

      },
      closeModal: (state) => {
        state.isOpen = false
        state.status = MODAL_STATUS.INIT // revert back to init status when close modal
      },
      changeModalStatus: (state, action: PayloadAction<string>) => {
        console.log(action.payload)
        state.status = action.payload
      }
    },
  })
  
export const { openModal, closeModal, changeModalStatus } = modalSlice.actions
  
export default modalSlice.reducer
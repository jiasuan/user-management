import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FORM_STATUS, MODAL_STATUS } from '@/lib/constants'
import { FormData } from '@/interfaces'

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        formData: {},
        status: FORM_STATUS.INIT,
    },
    reducers: {
      updateFormData: (state, action: PayloadAction<FormData>) => {
        state.formData = action.payload
        console.log("updateFormData")
        console.log(action.payload)
      },
      resetFormData: (state) => {
        state.formData = {}
      }
    },
  })
  
export const { updateFormData, resetFormData } = formSlice.actions
  
export default formSlice.reducer
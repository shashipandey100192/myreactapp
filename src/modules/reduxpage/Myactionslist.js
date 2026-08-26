import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username:"kumar",
  userage:50,
  userworking:true
}

export const myslicer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.userage += 1
    },
    cname: (state) => {
      state.username="mohan singh"
    }
    
  },
})


export const { increment, cname } = myslicer.actions

export default myslicer.reducer
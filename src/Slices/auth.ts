import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface State {
  openSideBar: boolean;
  openSideMobile: boolean;
  darkMode: boolean;
  user: any;
}

const initialState: State = {
  // user: {
  //   taiKhoan: "dannguyen",
  //   email: "dan@gmail.com",
  //   accessToken: "abc123",
  // },
  openSideBar: true,
  openSideMobile: false,
  darkMode: false,
  user: JSON.parse(localStorage.getItem("user") as string) || null,
};

// Viết actions login và register
export const login = createAsyncThunk("auth/login", async (values) => {
  try {
    // const data = await authAPI.login(values)
    const data = { name: "aaa" };
    // Lưu thông tin user xuống localStorage
    localStorage.setItem("user", JSON.stringify(data));
    return data;
  } catch (error) {
    throw error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSideBar: (state, actions) => {
      state.openSideBar = actions.payload;
    },
    setSideBarMobile: (state,actions) => {
      state.openSideMobile = actions.payload;
    },
    setDarkModes: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      // state.user = payload
    });
  },
});
export const { setSideBar, setSideBarMobile, setDarkModes } = authSlice.actions;
export default authSlice.reducer;

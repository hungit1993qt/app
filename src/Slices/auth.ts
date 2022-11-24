import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface State {
  openSideBar: boolean;
  hiddenSideBar: boolean;
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
  darkMode: false,
  hiddenSideBar: false,
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
    setSideBar: (state) => {
      state.openSideBar = !state.openSideBar;
    },
    setSideBarMobile: (state, actions) => {
      state.hiddenSideBar = actions.payload;
    },
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      // state.user = payload
    });
  },
});
export const { setSideBar, setSideBarMobile, setDarkMode } = authSlice.actions;
export default authSlice.reducer;

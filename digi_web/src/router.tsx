import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./router.css";
import { Login } from "./components/login/Login";
import { Dashboard } from "./components/dashboard/Dashboard";

export const Router: React.FC = () => {
  return (
    <div className="text">
      <BrowserRouter>
        {/* <TokenValidator />
      {isLoading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      {getUserProfile?.status === userStatus.verified ||
      getClientProfile?.status === userStatus.verified ? (
        <Grid item xs={0} md={4} xl={3}>
          <HeaderBody />
        </Grid>
      ) : (
        <div style={{ marginBottom: "5%" }}></div>
      )}
      <Grid container columns={24}>
        {getUserProfile?.status === userStatus.verified ? (
          <Grid
            item
            xs={0}
            md={4}
            xl={3}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <SideBar />
          </Grid>
        ) : (
          <Grid
            item
            xs={0}
            md={2}
            xl={1}
            sx={{ display: { xs: "none", md: "block" } }}
          ></Grid>
        )}
        {getUserProfile?.status === userStatus.verified ? (
          <Grid item xs={24} md={20} xl={21}>
            <div className="paddingTop20">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/eventDashboard" element={<EventDashboard />} />
                <Route path="/client" element={<ClientDashboard />} />
                <Route path="*" element={<Navigate to="/dashboard" />} />
              </Routes>
            </div>
          </Grid>
        ) : (
          <Grid item xs={24}>
            <div style={{ marginTop: -5 }}>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/client" element={<ClientDashboard />} />
                <Route path="/instaSelect" element={<InstaSelect />} />
                <Route path="/liked" element={<Liked />} />
                <Route path="*" element={<Navigate to="/client" />} />
              </Routes>
            </div>
          </Grid>
        )}
      </Grid> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

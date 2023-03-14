import React, { useState } from "react";
import { Card, Container, Button, Grid } from "@mui/material";

import Profissional from "./Pages/Page1/Profissional";
import SobreAtendimento from "./Pages/Page2/SobreAtendimento";

import "./index.css";

function App() {
  const [page, setPage] = useState(0);
  const PageDisplay = () => {
    if (page === 0) {
      return <Profissional />;
    } else if (page === 1) {
      return <SobreAtendimento />;
    }
  };

  return (
    <div>
      <Container maxWidth="md">
        <div className="nextButton">
          <Button>
            <i className="fa-solid fa-chevron-left"></i>
          </Button>
        </div>
        <Card className="Consulta">
          <div>{PageDisplay()}</div>
          <Grid container>
            <Grid item xs={6}>
              <div className="progressbar mb-5">
                <div
                  style={{
                    width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%",
                  }}
                ></div>
              </div>
              <Button
                disabled={page === FormData.length - 1}
                onClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
                className="Consulta-btn"
                size="medium"
              >
                Proximo
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </div>
  );
}

export default App;

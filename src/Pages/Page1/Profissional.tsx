import { Grid } from "@mui/material";
import FormularioDados from "../../components/FormularioDados";

import desktopagina from "../../assets/imagens/desktopagina.png";

function Profissional() {
  return (
    <>
      <Grid>
        <Grid item sm={12} md={12} lg={12} xs={12}>
          <h1>Sobre o profissional</h1>
          <h4>Dados do profissional</h4>
          <Grid container>
            <Grid item sm={5}>
              <div className="Consulta-form">
                <FormularioDados />
              </div>
            </Grid>
            <Grid item sm={7}>
              <div className="Consulta-img">
                <img src={desktopagina} width={400} />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Profissional;

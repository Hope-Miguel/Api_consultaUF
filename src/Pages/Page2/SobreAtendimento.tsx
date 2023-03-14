import Grid from "@mui/material/Grid";

import desktopagina2 from "../../assets/imagens/desktopagina2.png";
import "../Page2/StyleAtendimento.css";

import FormularioSobre from "../../components/FormularioSobre";

function SobreAtendimento() {
  return (
    <div>
      <Grid>
        <Grid sm={12} md={12} lg={12} xs={12}>
          <h1>Sobre o atendimento</h1>
          <h4>Detalhes do atendimento</h4>
          <Grid container>
            <Grid sm={5}>
              <div className="Consulta-form">
                <FormularioSobre />
              </div>
            </Grid>
            <Grid sm={7}>
              <div className="Consulta-img">
                <img src={desktopagina2} width={400} />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default SobreAtendimento;

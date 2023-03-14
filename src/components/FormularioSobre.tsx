import { Grid, FormControlLabel, Checkbox } from "@mui/material";

import '../Pages/Page2/StyleAtendimento.css'
export default function FormularioSobre() {
  return (
    <div>
      <div className="Consulta-form">
        <form>
          <div className="mb-1">
            <Grid container>
              <Grid className="mb-5" item xs={12}>
                <span className="Consulta-label">Especialidade Principal</span>{" "}
                <span className="Consulta-span">*</span>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <select className="Consulta-select">
                  <option value="female">seleccione a especialidade</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select>
              </Grid>
            </Grid>
          </div>

          <div className="mb-1 inputPreco">
            <Grid container>
              <Grid className="mb-5" xs={12}>
                <span className="Consulta-label">
                  Informe o preço da consulta
                </span>{" "}
                <span className="Consulta-span">*</span>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <i className="fa-solid fa-hand-holding-dollar"></i>
                <input type="number" placeholder="valor" />
              </Grid>
            </Grid>
          </div>
          <div className="">
            <span>Formas de pagamento da consulta</span>
            <span className="Consulta-span">*</span>

            <div className="mt-1 Consulta-ControlLabel">
              <Grid container>
                <Grid item md={12}>
                  <FormControlLabel
                    className="Consulta-Valor"
                    control={<Checkbox size="small" />}
                    label="Em dinheiro"
                  />
                </Grid>
              </Grid>
            </div>

            <div className="">
              <Grid container>
                <Grid item md={12}>
                  <FormControlLabel
                    className="Consulta-Valor"
                    control={<Checkbox size="small" />}
                    label="Pix"
                  />
                </Grid>
              </Grid>
            </div>

            <div className="">
              <Grid container>
                <Grid item md={12}>
                  <FormControlLabel
                    className="Consulta-Valor"
                    control={<Checkbox size="small" />}
                    label="Cartão de credito"
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

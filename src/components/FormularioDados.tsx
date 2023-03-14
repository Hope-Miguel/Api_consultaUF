import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { Grid } from "@mui/material";

type IBGEUFResponse = {
  id: number;
  sigla: string;
  nome: string;
};
type IBGECITYResponse = {
  id: number;
  nome: string;
};

function FormularioDados() {
  const [ufs, setUfs] = useState<IBGEUFResponse[]>([]);
  const [cities, setCities] = useState<IBGECITYResponse[]>([]);
  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");
  useEffect(() => {
    if (selectedUf === "0") {
      return;
    }
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        setCities(response.data);
      });
  });

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
      .then((response) => {
        setUfs(response.data);
      });
  }, [selectedUf]);

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;
    setSelectedUf(uf);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;
    setSelectedCity(city);
  }

  return (
    <div className="Consulta-form">
      <form>
        <div className="mb-1">
          <Grid container>
            <Grid className="mb-5" item xs={12}>
              <span className="Consulta-label">Name completo</span>{" "}
              <span className="Consulta-span">*</span>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <input className="inputName" type="name" />
            </Grid>
          </Grid>
        </div>

        <div className="mb-1">
          <Grid container>
            <Grid className="mb-5" item xs={12}>
              <span className="Consulta-label">CPF</span>{" "}
              <span className="Consulta-span">*</span>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <input type="phone" placeholder="Digite um CPF" />
            </Grid>
          </Grid>
        </div>

        <div className="mb-1">
          <Grid container>
            <Grid className="mb-5" item xs={12}>
              <span className="Consulta-label">Telefone</span>{" "}
              <span className="Consulta-span">*</span>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={12}>
              <input type="phone" placeholder="(00) 0 0000-0000" />
            </Grid>
          </Grid>
        </div>

        <div className="mb-1">
          <Grid container>
            <Grid item xs={6}>
              <Grid>
                <Grid className="mb-5" item xs={12}>
                  <span className="Consulta-label">Estado</span>{" "}
                  <span className="Consulta-span">*</span>
                </Grid>
              </Grid>
              <Grid>
                <Grid item xs={12}>
                  <select
                    className="Consulta-select"
                    name="uf"
                    id="uf"
                    onChange={handleSelectUf}
                  >
                    <option value="0">Selecione uma UF</option>
                    {ufs.map((uf) => (
                      <option value={uf.sigla}>{uf.nome}</option>
                    ))}
                  </select>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid>
                <Grid className="mb-5" item xs={12}>
                  <span className="Consulta-label">Cidade</span>{" "}
                  <span className="Consulta-span">*</span>
                </Grid>
              </Grid>
              <Grid>
                <Grid item xs={12}>
                  <select
                    name="City"
                    id="City"
                    value={selectedCity}
                    onChange={handleSelectCity}
                    className="Consulta-select"
                  >
                    <option value="0">Selecione uma cidade</option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.nome}>
                        {city.nome}
                      </option>
                    ))}
                  </select>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </form>
    </div>
  );
}

export default FormularioDados;

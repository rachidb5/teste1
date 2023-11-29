import React, { useState } from "react";
import { Col, Row, Card } from "react-bootstrap";
import {
  localidades,
  caracteristicasDaEstrutura,
  localizacaoRelativa,
  ligacaoEquipotencial,
  blindagemExterna
} from "../../../api/Api";


export default function GlobaisEAmbientais() {
  const pi = 3.1415
  const [localidade, setLocalidade] = useState(0)
  const [dimensoes, setDimensoes] = useState({
    altura: 0,
    largura: 0,
    comprimento: 0,
    alturaP: 0
  })
  const [localizacaoRelativaI, setLocalizacaoRelativaI] = useState(0)
  const [caracteristicasDaEstruturaI, setCaracteristicasDaEstruturaI] = useState(0)
  const [blindagemExternaI, setBlindagemExternaI] = useState(0)
  const [ligacaoEquipotencialI, setligacaoEquipotencialI] = useState(0)
  const [dataShow, setDataShow] = useState(false)
  const [totalData, setTotalData] = useState<any>({})

  function showData() {
    setTotalData({
      ...dimensoes,localizacaoRelativaI, blindagemExternaI,caracteristicasDaEstruturaI,ligacaoEquipotencialI, localidade
    })
    setDataShow(true)
  }
  return (
    <Card className=" overflow-hidden">
      <Card.Body className="card-body">
        <div className="row p-4">
          <div className="col-3">
            <label className="block mb-2 text-sm font-medium text-dark">
              Localidade
              <select
                style={{ width: "100%" }}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setLocalidade(parseInt(e.target.value))}
              >
                {localidades.map((l, i) => (<option value={i} key={i}>{l.Localidade}</option>))}
              </select>
            </label>
          </div>
          <div className="col-3">
            <label className="block mb-2 text-sm font-medium text-dark">
              Localização relativa da estrutura
              <select
                style={{ width: "100%" }}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setLocalizacaoRelativaI(parseInt(e.target.value))}
              >
                {localizacaoRelativa.map((l, i) => (<option value={i} key={i}>{l.Localizacao_relativa}</option>))}
              </select>
            </label>
          </div>
          <div className="col-3">
            <label className="block mb-2 text-sm font-medium text-dark">
              Altura
              <input
                style={{ width: "100%" }}
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e => setDimensoes({ ...dimensoes, altura: parseInt(e.target.value) }))}
              />
            </label>
          </div>
          <div className="col-3">
            <label className="block mb-2 text-sm font-medium text-dark">
              Largura
              <input
                style={{ width: "100%" }}
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e => setDimensoes({ ...dimensoes, largura: parseInt(e.target.value) }))}
              />
            </label>
          </div>
        </div>
        <div className="row p-4">
          <div className="col-3">
            <label className="block mb-2 text-sm font-medium text-dark">
              SPDA existente na estrutura
              <select
                style={{ width: "100%" }}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e => setCaracteristicasDaEstruturaI(parseInt(e.target.value)))}
              >
                {caracteristicasDaEstrutura.map((l, i) => (<option value={i} key={i}>{l.Caracteristica_da_estrutura}</option>))}
              </select>
            </label>
          </div>
          <div className="col-3">
            <label className="block mb-2 text-sm font-medium text-dark">
              Liguação equipotencial para descargas atmosfericas
              <select
                style={{ width: "100%" }}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setligacaoEquipotencialI(parseInt(e.target.value))}
              >
                {ligacaoEquipotencial.map((l,i) => (<option value={i} key={i}>{l.NP}</option>))}
              </select>
            </label>
          </div>
          <div className="col-3">
            <label className="block mb-2 text-sm font-medium text-dark">
              Coêficiente de altura
              <input
                style={{ width: "100%" }}
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e => setDimensoes({ ...dimensoes, alturaP: parseInt(e.target.value) }))}
              />
            </label>
          </div>
          <div className="col-3">
            <label className="block mb-2 text-sm font-medium text-dark">
              Comprimento
              <input
                style={{ width: "100%" }}
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e => setDimensoes({ ...dimensoes, comprimento: parseInt(e.target.value) }))}
              />
            </label>
          </div>
          <div className="row p-4">
            <div className="col-3">
              <label className="block mb-2 text-sm font-medium text-dark">
                Blindagem Externa
                <select
                onChange={((e) => setBlindagemExternaI(parseInt(e.target.value)))} 
                style={{ width: "100%" }} 
                id="countries" 
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500">
                  {blindagemExterna.map((l, i) => (<option value={i} key={i}>{l.BlindagemExterna}</option>))}
                </select>
              </label>
            </div>
          </div>
          <div className="row p-4">
            <div className="col-3">
              <button onClick={() => showData()} className="btn btn-primary btn-icon text-white me-3">
                <span>
                  <i className="fe fe-plus"></i>&nbsp;
                </span>
                Gerar dados
              </button>
            </div>
          </div>

          {dataShow ?
            <div className="row p-4">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Parâmetros de entrada</th>
                    <th>Comentario</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Unidade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Densidade de descargas atmosféricas</th>
                    <td>{localidades[totalData.localidade].Localidade}</td>
                    <td>{localidades[totalData.localidade].NG}</td>
                    <td>descargas/ km²/ano</td>
                  </tr>
                  <tr>
                    <th scope="row">Dimensões da estrutura</th>
                    <td>
                      <tbody>

                        <tr>Altura</tr>
                        <tr>Largura</tr>
                        <tr>Comprimento</tr>
                      </tbody>
                    </td>
                    <td>
                      <tbody>

                        <tr>
                          {totalData.altura}
                        </tr>
                        <tr>
                          {totalData.largura}
                        </tr>
                        <tr>
                          {totalData.comprimento}
                        </tr>
                      </tbody>
                    </td>
                    <tbody>
                      <tr>
                        m
                      </tr>
                      <tr>
                        m
                      </tr>
                      <tr>
                        m
                      </tr>
                    </tbody>
                  </tr>
                  <tr>
                    <th scope="row">Fator localização da estrutura</th>
                    <td>{localizacaoRelativa[totalData.localizacaoRelativaI].Localizacao_relativa}</td>
                    <td>{localizacaoRelativa[totalData.localizacaoRelativaI].CD}</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <th scope="row">SPDA existente na estrutura</th>
                    <td>{caracteristicasDaEstrutura[totalData.caracteristicasDaEstruturaI].Caracteristica_da_estrutura}</td>
                    <td>{caracteristicasDaEstrutura[totalData.caracteristicasDaEstruturaI].PB}</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <th scope="row">Ligação equipotencial para descargas atmosféricas</th>
                    <td>{ligacaoEquipotencial[totalData.ligacaoEquipotencialI].NP}</td>
                    <td>{ligacaoEquipotencial[totalData.ligacaoEquipotencialI].PEB}</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <th scope="row">Ligação equipotencial para descargas atmosféricas</th>
                    <td>{blindagemExterna[totalData.blindagemExternaI].BlindagemExterna}</td>
                    <td>{blindagemExterna[totalData.blindagemExternaI].KS1}</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
              <div className="row">
                <h4 className="mb-4 mt-4">Área de exposição equivalente da estrutura</h4>
              <table className="table table-striped">
               
                <tbody>
                  <tr>
                    <th scope="row">Ad(1)</th>
                    <td>{(totalData.largura*totalData.comprimento)+(2*(3*totalData.altura)*(totalData.largura*totalData.comprimento))+pi*((3*totalData.altura)^2)}</td>
                  </tr>
                  <tr>
                    <th scope="row">Fator localização da estrutura</th>
                    <td>{localizacaoRelativa[totalData.localizacaoRelativaI].Localizacao_relativa}</td>
                    <td>{localizacaoRelativa[totalData.localizacaoRelativaI].CD}</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <th scope="row">SPDA existente na estrutura</th>
                    <td>{caracteristicasDaEstrutura[totalData.caracteristicasDaEstruturaI].Caracteristica_da_estrutura}</td>
                    <td>{caracteristicasDaEstrutura[totalData.caracteristicasDaEstruturaI].PB}</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <th scope="row">Ligação equipotencial para descargas atmosféricas</th>
                    <td>{ligacaoEquipotencial[totalData.ligacaoEquipotencialI].NP}</td>
                    <td>{ligacaoEquipotencial[totalData.ligacaoEquipotencialI].PEB}</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <th scope="row">Ligação equipotencial para descargas atmosféricas</th>
                    <td>{blindagemExterna[totalData.blindagemExternaI].BlindagemExterna}</td>
                    <td>{blindagemExterna[totalData.blindagemExternaI].KS1}</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div> : null}
        </div>
      </Card.Body>
    </Card>
  )

}
import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#F7F5FC',
    paddingHorizontal: 20
  },
  teclado: {
    flex: 1
  },
  contenidoLista: {
    paddingTop: 16,
    paddingBottom: 32
  },
  centro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#F7F5FC'
  },
  textoCarga: {
    color: '#756D85',
    fontSize: 14
  },
  encabezado: {
    backgroundColor: '#6746B8',
    borderRadius: 24,
    padding: 21,
    marginBottom: 22,
    shadowColor: '#4C3586',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 5
  },
  marca: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },
  iconoMarca: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#8065C7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  letraMarca: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '800'
  },
  titulo: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '800',
    letterSpacing: 0.2
  },
  subtitulo: {
    color: '#E8DFFD',
    fontSize: 13,
    marginTop: 2
  },
  descripcionEncabezado: {
    color: '#F0EBFA',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 17
  },
  seccionEstadisticas: {
    marginBottom: 22
  },
  tituloSeccion: {
    color: '#382A54',
    fontSize: 19,
    fontWeight: '700'
  },
  rejillaEstadisticas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 10,
    marginTop: 12
  },
  tarjetaEstadistica: {
    width: '48%',
    minHeight: 112,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: '#EEEAF5',
    shadowColor: '#43345F',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 7,
    elevation: 2
  },
  iconoEstadistica: {
    width: 30,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoIconoEstadistica: {
    fontSize: 17,
    fontWeight: '700'
  },
  numeroEstadistica: {
    color: '#382A54',
    fontSize: 23,
    fontWeight: '800',
    marginTop: 7
  },
  etiquetaEstadistica: {
    color: '#766E84',
    fontSize: 12,
    marginTop: 1
  },
  formulario: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 18,
    marginBottom: 23,
    borderWidth: 1,
    borderColor: '#EEEAF5',
    shadowColor: '#43345F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 9,
    elevation: 2
  },
  encabezadoFormulario: {
    marginBottom: 17
  },
  tituloFormulario: {
    color: '#382A54',
    fontSize: 18,
    fontWeight: '700'
  },
  ayudaFormulario: {
    color: '#827A91',
    fontSize: 13,
    marginTop: 4
  },
  etiqueta: {
    color: '#514565',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 7
  },
  campo: {
    minHeight: 48,
    backgroundColor: '#FAF9FD',
    borderWidth: 1,
    borderColor: '#E5DFEF',
    borderRadius: 13,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: '#382A54',
    fontSize: 14,
    marginBottom: 15
  },
  descripcion: {
    minHeight: 88,
    textAlignVertical: 'top'
  },
  botonPrincipal: {
    minHeight: 51,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#6746B8',
    borderRadius: 15,
    paddingHorizontal: 16
  },
  iconoBotonPrincipal: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700'
  },
  textoBotonPrincipal: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15
  },
  botonCancelar: {
    alignItems: 'center',
    paddingTop: 14
  },
  cancelar: {
    color: '#6746B8',
    fontSize: 14,
    fontWeight: '600'
  },
  encabezadoTareas: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    marginBottom: 13
  },
  contadorTareas: {
    minWidth: 27,
    height: 27,
    borderRadius: 14,
    paddingHorizontal: 7,
    backgroundColor: '#EAE3F8',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textoContador: {
    color: '#6746B8',
    fontSize: 13,
    fontWeight: '700'
  },
  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#EEEAF5',
    shadowColor: '#43345F',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 7,
    elevation: 2
  },
  encabezadoTarjeta: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 10
  },
  tituloTarea: {
    flex: 1,
    color: '#382A54',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700'
  },
  etiquetaEstado: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  estadoPendiente: {
    backgroundColor: '#FFF3D9'
  },
  estadoEnProgreso: {
    backgroundColor: '#E9EDFF'
  },
  estadoCompletada: {
    backgroundColor: '#E2F4EC'
  },
  textoEstado: {
    fontSize: 11,
    fontWeight: '700'
  },
  textoEstadoPendiente: {
    color: '#93610F'
  },
  textoEstadoEnProgreso: {
    color: '#4658B0'
  },
  textoEstadoCompletada: {
    color: '#287255'
  },
  textoDescripcion: {
    color: '#766E84',
    fontSize: 13,
    lineHeight: 19,
    marginTop: 8
  },
  acciones: {
    flexDirection: 'row',
    gap: 7,
    marginTop: 16
  },
  botonAccion: {
    flex: 1,
    minHeight: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11,
    paddingHorizontal: 4
  },
  botonEditar: {
    backgroundColor: '#F0ECF9'
  },
  botonEstado: {
    backgroundColor: '#EEF0FC'
  },
  botonEliminar: {
    backgroundColor: '#FCEDEF'
  },
  textoAccion: {
    fontSize: 11,
    fontWeight: '700'
  },
  textoEditar: {
    color: '#6746B8'
  },
  textoEstadoAccion: {
    color: '#5366C5'
  },
  textoEliminar: {
    color: '#C34C60'
  },
  vacio: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#EEEAF5',
    paddingHorizontal: 22,
    paddingVertical: 25,
    marginBottom: 14
  },
  iconoVacio: {
    color: '#8E75C8',
    fontSize: 24
  },
  tituloVacio: {
    color: '#514565',
    fontSize: 15,
    fontWeight: '700',
    marginTop: 7
  },
  textoVacio: {
    color: '#827A91',
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
    marginTop: 5
  }
});

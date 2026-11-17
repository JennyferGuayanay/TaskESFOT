
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { estilos } from '../estilos/estilos';

interface Propiedades {
  titulo: string;
  descripcion: string;
  editando: boolean;
  cambiarTitulo: (valor: string) => void;
  cambiarDescripcion: (valor: string) => void;
  guardar: () => void;
  cancelar: () => void;
}

export default function FormularioTarea({
  titulo, descripcion, editando, cambiarTitulo,
  cambiarDescripcion, guardar, cancelar
}: Propiedades) {
  return (
    <View style={estilos.formulario}>
      <View style={estilos.encabezadoFormulario}>
        <Text style={estilos.tituloFormulario}>
          {editando ? 'Editar tarea' : 'Nueva tarea'}
        </Text>
        <Text style={estilos.ayudaFormulario}>
          {editando ? 'Actualiza los detalles de tu actividad.' : 'Anota lo que necesitas hacer.'}
        </Text>
      </View>

      <Text style={estilos.etiqueta}>Título</Text>
      <TextInput
        style={estilos.campo}
        placeholder="Ej. Estudiar aplicaciones móviles"
        placeholderTextColor="#A09AAF"
        value={titulo}
        onChangeText={cambiarTitulo}
        returnKeyType="next"
        accessibilityLabel="Título de la tarea"
      />

      <Text style={estilos.etiqueta}>Descripción</Text>
      <TextInput
        style={[estilos.campo, estilos.descripcion]}
        placeholder="Agrega algunos detalles (opcional)"
        placeholderTextColor="#A09AAF"
        multiline
        value={descripcion}
        onChangeText={cambiarDescripcion}
        accessibilityLabel="Descripción de la tarea"
      />

      <TouchableOpacity style={estilos.botonPrincipal} onPress={guardar}>
        <Text style={estilos.iconoBotonPrincipal}>{editando ? '✓' : '+'}</Text>
        <Text style={estilos.textoBotonPrincipal}>
          {editando ? 'Guardar cambios' : 'Agregar tarea'}
        </Text>
      </TouchableOpacity>

      {editando && (
        <TouchableOpacity style={estilos.botonCancelar} onPress={cancelar}>
          <Text style={estilos.cancelar}>Cancelar edición</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

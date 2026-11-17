
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { EstadoTarea, Tarea } from '../tipos/tarea';
import { estilos } from '../estilos/estilos';

interface Propiedades {
  tarea: Tarea;
  editar: (tarea: Tarea) => void;
  cambiarEstado: (tarea: Tarea) => void;
  eliminar: (id: string) => void;
}

export default function TarjetaTarea({
  tarea, editar, cambiarEstado, eliminar
}: Propiedades) {
  const nombresEstado: Record<EstadoTarea, string> = {
    pendiente: 'Pendiente',
    en_progreso: 'En progreso',
    completada: 'Completada'
  };
  const estilosEstado = {
    pendiente: estilos.estadoPendiente,
    en_progreso: estilos.estadoEnProgreso,
    completada: estilos.estadoCompletada
  }[tarea.estado];
  const estilosTextoEstado = {
    pendiente: estilos.textoEstadoPendiente,
    en_progreso: estilos.textoEstadoEnProgreso,
    completada: estilos.textoEstadoCompletada
  }[tarea.estado];

  return (
    <View style={estilos.tarjeta}>
      <View style={estilos.encabezadoTarjeta}>
        <Text style={estilos.tituloTarea}>{tarea.titulo}</Text>
        <View style={[estilos.etiquetaEstado, estilosEstado]}>
          <Text style={[estilos.textoEstado, estilosTextoEstado]}>
            {nombresEstado[tarea.estado]}
          </Text>
        </View>
      </View>
      <Text style={estilos.textoDescripcion}>
        {tarea.descripcion?.trim() || 'Sin descripción'}
      </Text>

      <View style={estilos.acciones}>
        <TouchableOpacity
          style={[estilos.botonAccion, estilos.botonEditar]}
          onPress={() => editar(tarea)}
          accessibilityRole="button"
          accessibilityLabel={`Editar ${tarea.titulo}`}
        >
          <Text style={[estilos.textoAccion, estilos.textoEditar]}>✎ Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[estilos.botonAccion, estilos.botonEstado]}
          onPress={() => cambiarEstado(tarea)}
          accessibilityRole="button"
          accessibilityLabel={`Cambiar estado de ${tarea.titulo}`}
        >
          <Text style={[estilos.textoAccion, estilos.textoEstadoAccion]}>↻ Estado</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[estilos.botonAccion, estilos.botonEliminar]}
          onPress={() => eliminar(tarea.id)}
          accessibilityRole="button"
          accessibilityLabel={`Eliminar ${tarea.titulo}`}
        >
          <Text style={[estilos.textoAccion, estilos.textoEliminar]}>× Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

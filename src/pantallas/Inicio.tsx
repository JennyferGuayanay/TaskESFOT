
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  View
} from 'react-native';
import FormularioTarea from '../componentes/FormularioTarea';
import TarjetaTarea from '../componentes/TarjetaTarea';
import { supabase } from '../servicios/supabase';
import { crearTarea, obtenerTareas, actualizarTarea, eliminarTarea } from '../servicios/tareas';
import { EstadoTarea, Tarea } from '../tipos/tarea';
import { estilos } from '../estilos/estilos';

export default function Inicio() {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [editando, setEditando] = useState<string | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    iniciar();
  }, []);

  async function iniciar() {
    setCargando(true);

    try {
      const { data: sesion } = await supabase.auth.getSession();

      if (!sesion.session) {
        const { data, error } = await supabase.auth.signInAnonymously();

        if (error) throw error;
        if (!data.session) throw new Error('No se pudo crear la sesión');

        console.log('Sesión anónima creada correctamente');
      } else {
        console.log('Sesión existente recuperada');
      }

      await cargarTareas();
    } catch (error) {
      mostrarError(error);
    } finally {
      setCargando(false);
    }
  }

  async function cargarTareas() {
    const datos = await obtenerTareas();
    setTareas(datos);
  }

  function mostrarError(error: unknown) {
    const mensaje = error instanceof Error ? error.message : 'Error desconocido';
    Alert.alert('Error', mensaje);
  }

  function limpiarFormulario() {
    setTitulo('');
    setDescripcion('');
    setEditando(null);
  }

  async function guardarTarea() {
    if (!titulo.trim()) {
      Alert.alert('Aviso', 'Ingresa el título de la tarea');
      return;
    }

    try {
      setCargando(true);

      if (editando) {
        await actualizarTarea(editando, {
          titulo: titulo.trim(),
          descripcion: descripcion.trim()
        });
      } else {
        await crearTarea(titulo.trim(), descripcion.trim());
      }

      limpiarFormulario();
      await cargarTareas();
      Alert.alert('Éxito', 'Tarea guardada correctamente');
    } catch (error) {
      mostrarError(error);
    } finally {
      setCargando(false);
    }
  }

  function editarTarea(tarea: Tarea) {
    setTitulo(tarea.titulo);
    setDescripcion(tarea.descripcion || '');
    setEditando(tarea.id);
  }

  async function cambiarEstado(tarea: Tarea) {
    const estados: EstadoTarea[] = ['pendiente', 'en_progreso', 'completada'];
    const siguiente = estados[(estados.indexOf(tarea.estado) + 1) % estados.length];

    try {
      await actualizarTarea(tarea.id, { estado: siguiente });
      await cargarTareas();
    } catch (error) {
      mostrarError(error);
    }
  }

  function confirmarEliminar(id: string) {
    Alert.alert('Eliminar tarea', '¿Deseas eliminar esta tarea?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Eliminar',
        style: 'destructive',
        onPress: async () => {
          try {
            await eliminarTarea(id);
            await cargarTareas();
          } catch (error) {
            mostrarError(error);
          }
        }
      }
    ]);
  }

  const estadisticas = [
    { etiqueta: 'Total de tareas', cantidad: tareas.length, icono: '▤', color: '#6746B8' },
    {
      etiqueta: 'Pendientes',
      cantidad: tareas.filter((tarea) => tarea.estado === 'pendiente').length,
      icono: '◷',
      color: '#B7791F'
    },
    {
      etiqueta: 'En progreso',
      cantidad: tareas.filter((tarea) => tarea.estado === 'en_progreso').length,
      icono: '↗',
      color: '#5366C5'
    },
    {
      etiqueta: 'Completadas',
      cantidad: tareas.filter((tarea) => tarea.estado === 'completada').length,
      icono: '✓',
      color: '#32856A'
    }
  ];

  if (cargando) {
    return (
      <View style={estilos.centro}>
        <ActivityIndicator size="large" color="#7454C4" />
        <Text style={estilos.textoCarga}>Preparando tus tareas...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={estilos.contenedor}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7F5FC" />
      <KeyboardAvoidingView
        style={estilos.teclado}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <FlatList
          data={tareas}
          keyExtractor={(item) => item.id}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode={Platform.OS === 'ios' ? 'interactive' : 'on-drag'}
          contentContainerStyle={estilos.contenidoLista}
          ListHeaderComponent={
            <View>
              <View style={estilos.encabezado}>
                <View style={estilos.marca}>
                  <View style={estilos.iconoMarca}>
                    <Text style={estilos.letraMarca}>T</Text>
                  </View>
                  <View>
                    <Text style={estilos.titulo}>TaskESFOT</Text>
                    <Text style={estilos.subtitulo}>Tu espacio para organizarte</Text>
                  </View>
                </View>
                <Text style={estilos.descripcionEncabezado}>
                  Planifica tus actividades académicas, un paso a la vez.
                </Text>
              </View>

              <View style={estilos.seccionEstadisticas}>
                <Text style={estilos.tituloSeccion}>Tu resumen</Text>
                <View style={estilos.rejillaEstadisticas}>
                  {estadisticas.map((estadistica) => (
                    <View key={estadistica.etiqueta} style={estilos.tarjetaEstadistica}>
                      <View style={[estilos.iconoEstadistica, { backgroundColor: `${estadistica.color}18` }]}>
                        <Text style={[estilos.textoIconoEstadistica, { color: estadistica.color }]}>
                          {estadistica.icono}
                        </Text>
                      </View>
                      <Text style={estilos.numeroEstadistica}>{estadistica.cantidad}</Text>
                      <Text style={estilos.etiquetaEstadistica}>{estadistica.etiqueta}</Text>
                    </View>
                  ))}
                </View>
              </View>

              <FormularioTarea
                titulo={titulo}
                descripcion={descripcion}
                editando={editando !== null}
                cambiarTitulo={setTitulo}
                cambiarDescripcion={setDescripcion}
                guardar={guardarTarea}
                cancelar={limpiarFormulario}
              />

              <View style={estilos.encabezadoTareas}>
                <Text style={estilos.tituloSeccion}>Mis tareas</Text>
                <View style={estilos.contadorTareas}>
                  <Text style={estilos.textoContador}>{tareas.length}</Text>
                </View>
              </View>
            </View>
          }
          ListEmptyComponent={
            <View style={estilos.vacio}>
              <Text style={estilos.iconoVacio}>✦</Text>
              <Text style={estilos.tituloVacio}>Aún no hay tareas</Text>
              <Text style={estilos.textoVacio}>Agrega una arriba y empieza a organizar tu día.</Text>
            </View>
          }
          renderItem={({ item }) => (
            <TarjetaTarea
              tarea={item}
              editar={editarTarea}
              cambiarEstado={cambiarEstado}
              eliminar={confirmarEliminar}
            />
          )}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

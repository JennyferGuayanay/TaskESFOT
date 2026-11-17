
import { supabase } from './supabase';
import { EstadoTarea, Tarea } from '../tipos/tarea';

// Consultar tareas
export async function obtenerTareas(): Promise<Tarea[]> {
  const { data, error } = await supabase
    .from('tareas')
    .select('*')
    .order('fecha_creacion', { ascending: false });

  if (error) throw error;
  return (data || []) as Tarea[];
}

// Crear una tarea

export async function crearTarea(titulo: string, descripcion: string) {
  const { data, error: errorSesion } = await supabase.auth.getSession();

  if (errorSesion) throw errorSesion;

  if (!data.session) {
    throw new Error('No existe una sesión activa para guardar la tarea');
  }

  const { error } = await supabase.from('tareas').insert({
    titulo,
    descripcion,
    estado: 'pendiente',
    usuario_id: data.session.user.id
  });

  if (error) throw error;
}


// Actualizar una tarea
export async function actualizarTarea(
  id: string,
  cambios: Partial<Pick<Tarea, 'titulo' | 'descripcion' | 'estado'>>
) {
  const { error } = await supabase
    .from('tareas')
    .update(cambios)
    .eq('id', id);

  if (error) throw error;
}

// Eliminar una tarea
export async function eliminarTarea(id: string) {
  const { error } = await supabase
    .from('tareas')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

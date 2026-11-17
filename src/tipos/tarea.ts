
export type EstadoTarea = 'pendiente' | 'en_progreso' | 'completada';

export interface Tarea {
  id: string;
  titulo: string;
  descripcion: string | null;
  estado: EstadoTarea;
  fecha_creacion: string;
  usuario_id: string;
}

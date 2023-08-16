<template>
  <div>
    <h1>Registro de Notas de Alumnos</h1>
    <div>
      <label for="nombre">Nombre del Alumno: </label>
      <input id="nombre" v-model="nuevoAlumno.nombre" />
    </div>
    <div>
      <label for="materia">Materia: </label>
      <input id="materia" v-model="nuevoAlumno.materia" />
    </div>
    <div>
      <label for="nota">Nota: </label>
      <input
        id="nota"
        v-model.number="nuevoAlumno.nota"
        type="number"
        min="0"
        max="10"
      />
    </div>
    <button @click="agregarAlumno">Agregar Alumno</button>
    <table>
      <thead>
        <tr>
          <th>Nombre del Alumno</th>
          <th>Materia</th>
          <th>Clasificación</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(alumno, index) in alumnos" :key="index">
          <td>{{ alumno.nombre }}</td>
          <td>{{ alumno.materia }}</td>
          <td>{{ clasificacion(alumno.nota) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alumnos: [],
      nuevoAlumno: {
        nombre: '',
        materia: '',
        nota: 0,
      },
    };
  },
  methods: {
    agregarAlumno() {
      if (
        this.nuevoAlumno.nombre.trim() !== '' &&
        this.nuevoAlumno.materia.trim() !== '' &&
        this.nuevoAlumno.nota >= 0 &&
        this.nuevoAlumno.nota <= 10
      ) {
        this.alumnos.push({ ...this.nuevoAlumno });
        this.nuevoAlumno = {
          nombre: '',
          materia: '',
          nota: 0,
        };
      }
    },
    clasificacion(nota) {
      if (nota >= 0 && nota <= 3) return 'Muy deficiente';
      if (nota <= 5) return 'Insuficiente';
      if (nota <= 6) return 'Suficiente';
      if (nota <= 7) return 'Bien';
      if (nota <= 9) return 'Notable';
      return 'Sobresaliente';
    },
  },
};
</script>


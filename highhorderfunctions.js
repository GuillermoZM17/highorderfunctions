const empleados = [
  { id: 1, nombre: "Ana",     edad: 28, departamento: "IT",       salario: 48000, activo: true  },
  { id: 2, nombre: "Carlos",  edad: 34, departamento: "Ventas",   salario: 42000, activo: false },
  { id: 3, nombre: "Sofía",   edad: 25, departamento: "IT",       salario: 52000, activo: true  },
  { id: 4, nombre: "Miguel",  edad: 41, departamento: "Finanzas", salario: 65000, activo: true  },
  { id: 5, nombre: "Laura",   edad: 30, departamento: "IT",       salario: 51000, activo: true  },
  { id: 6, nombre: "Diego",   edad: 29, departamento: "Ventas",   salario: 45000, activo: false }
];

console.log("arreglo de empleados");
console.table(empleados);

// forEach
console.log("forEach: Lista de empleados y sus departamentos");
empleados.forEach(empleado => {
  console.log(empleado.nombre + " trabaja en " + empleado.departamento);
});

// map
console.log("map: crear nuevo arreglo con salario y bono del 10% si esta en IT");
const empleadosConBono = empleados.map(empleado => {
  const bono = empleado.departamento === "IT" ? empleado.salario * 0.10 : 0;
  return {
    ...empleado,
    salarioConBono: empleado.salario + bono,
    tieneBono: bono > 0
  };
});
console.table(empleadosConBono);

// filter
console.log("filter: Solo empleados de IT que ganan mas de 50,000 y estan activos");
const itBienPagados = empleados.filter(emp => 
  emp.departamento === "IT" && 
  emp.salario > 50000 && 
  emp.activo
);
console.table(itBienPagados);

// some
console.log("some: ¿Existe un empleado en Finanzas? ");
const hayFinanzas = empleados.some(emp => emp.departamento === "Finanzas");
console.log("¿Hay empleados en Finanzas?", hayFinanzas ? "SÍ" : "NO");

console.log("some: ¿Hay algun empleado inactivo?");
const hayInactivos = empleados.some(emp => !emp.activo);
console.log("¿Hay empleados inactivos?", hayInactivos ? "SÍ" : "NO");

// sort
console.log("sort: orden por edad ascendente ===");
const ordenadosPorEdad = [...empleados].sort((a, b) => a.edad - b.edad);
console.table(ordenadosPorEdad);

console.log("sort: orden por salario descendente");
const ordenadosPorSalarioDesc = [...empleados].sort((a, b) => b.salario - a.salario);
console.table(ordenadosPorSalarioDesc);

console.log("sort: orden alfabetico por nombre");
const ordenadosPorNombre = [...empleados].sort((a, b) => a.nombre.localeCompare(b.nombre));
console.table(ordenadosPorNombre);
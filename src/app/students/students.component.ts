import { Component } from '@angular/core';
import { List } from './interfaces/List';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  public lists: List[] = [
    {
      id: 1,
      fullName: "Juan Carlos",
      lastName: "Pérez",
      level: "Secundaria",
      grade: 10,
      approved: true
    },
    {
      id: 2,
      fullName: "Ana María",
      lastName: "López",
      level: "Primaria",
      grade: 5,
      approved: false
    },
    {
      id: 3,
      fullName: "Pedro",
      lastName: "Gómez",
      level: "Secundaria",
      grade: 8,
      approved: true
    },
    {
      id: 4,
      fullName: "Marta",
      lastName: "Rodríguez",
      level: "Bachillerato",
      grade: 12,
      approved: true
    },
    {
      id: 5,
      fullName: "Luis Miguel",
      lastName: "Martínez",
      level: "Primaria",
      grade: 3,
      approved: false
    },
    {
      id: 6,
      fullName: "Carla",
      lastName: "Sánchez",
      level: "Secundaria",
      grade: 7,
      approved: true
    },
    {
      id: 7,
      fullName: "Jorge",
      lastName: "Díaz",
      level: "Bachillerato",
      grade: 11,
      approved: true
    },
    {
      id: 8,
      fullName: "Lucía",
      lastName: "Fernández",
      level: "Primaria",
      grade: 4,
      approved: true
    },
    {
      id: 9,
      fullName: "Sofía",
      lastName: "Martínez",
      level: "Secundaria",
      grade: 9,
      approved: false
    },
    {
      id: 10,
      fullName: "Raúl",
      lastName: "González",
      level: "Bachillerato",
      grade: 10,
      approved: true
    },
    {
      id: 11,
      fullName: "Laura",
      lastName: "Torres",
      level: "Primaria",
      grade: 2,
      approved: false
    },
    {
      id: 12,
      fullName: "Samuel",
      lastName: "Ramírez",
      level: "Secundaria",
      grade: 6,
      approved: true
    },
    {
      id: 13,
      fullName: "Gabriela",
      lastName: "Jiménez",
      level: "Bachillerato",
      grade: 12,
      approved: false
    },
    {
      id: 14,
      fullName: "Vicente",
      lastName: "Herrera",
      level: "Secundaria",
      grade: 8,
      approved: true
    },
    {
      id: 15,
      fullName: "Alba",
      lastName: "Díaz",
      level: "Primaria",
      grade: 1,
      approved: true
    },
    {
      id: 16,
      fullName: "Felipe",
      lastName: "González",
      level: "Secundaria",
      grade: 7,
      approved: false
    },
    {
      id: 17,
      fullName: "María",
      lastName: "Álvarez",
      level: "Bachillerato",
      grade: 10,
      approved: true
    },
    {
      id: 18,
      fullName: "Javier",
      lastName: "Cruz",
      level: "Primaria",
      grade: 6,
      approved: true
    },
    {
      id: 19,
      fullName: "Carmen",
      lastName: "Morales",
      level: "Secundaria",
      grade: 9,
      approved: false
    },
    {
      id: 20,
      fullName: "Raquel",
      lastName: "Pérez",
      level: "Bachillerato",
      grade: 12,
      approved: true
    }
  ];


  styles = {
    backgroundColor: 'green',
    backgroundColorna: 'red',
    padding: '20px',
    color: 'white'
  };

}

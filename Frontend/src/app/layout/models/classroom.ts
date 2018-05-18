export class Classroom {
  id: string;
  type_classroom_id: string;
  building_id: string;
  department_id: string;
  capacity: string;
  type_classroom: {
    id: string,
    name: string,
  };
  building: {
    id: string,
    name: string,
    head_building_id: string,
    faculty_id: string,
  };
  department: {
    id: string,
    faculty_id: string,
    name: string,
  };
}
